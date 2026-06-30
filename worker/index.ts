/**
 * Octave On — Cloudflare Worker (with Static Assets)
 *
 * Routing:
 *   POST /api/invite  → invite handler (Turnstile → D1 → Resend)
 *   everything else   → served from ./dist via the ASSETS binding
 *
 * Every external dependency degrades gracefully: if a binding/secret is
 * missing the request still succeeds, so the form never 500s on a
 * half-configured environment.
 */

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> };
  DB?: {
    prepare: (q: string) => {
      bind: (...args: unknown[]) => { run: () => Promise<unknown> };
    };
  };
  RESEND_API_KEY?: string;
  RESEND_FROM?: string;
  NOTIFY_TO?: string;
  TURNSTILE_SECRET?: string;
}

interface Ctx {
  waitUntil: (p: Promise<unknown>) => void;
}

interface InvitePayload {
  name?: string;
  email?: string;
  whatsapp?: string;
  lang?: 'it' | 'en';
  turnstileToken?: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: Ctx): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/invite') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
      }
      return handleInvite(request, env, ctx);
    }

    // Static site (dist/) — handled by the assets binding.
    return env.ASSETS.fetch(request);
  },
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s: string) =>
  s.replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[c]!);

async function handleInvite(request: Request, env: Env, ctx: Ctx): Promise<Response> {
  let body: InvitePayload;
  try {
    body = (await request.json()) as InvitePayload;
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  const name = (body.name ?? '').trim().slice(0, 120);
  const email = (body.email ?? '').trim().slice(0, 200);
  const whatsapp = (body.whatsapp ?? '').trim().slice(0, 40);
  const lang = body.lang === 'en' ? 'en' : 'it';

  if (!EMAIL_RE.test(email)) return json({ ok: false, error: 'invalid_email' }, 400);

  // 1) Anti-spam (skipped if Turnstile not configured)
  if (env.TURNSTILE_SECRET) {
    const ok = await verifyTurnstile(env.TURNSTILE_SECRET, body.turnstileToken, request);
    if (!ok) return json({ ok: false, error: 'turnstile_failed' }, 403);
  }

  // 2) Persist the lead (best-effort)
  if (env.DB) {
    try {
      await env.DB.prepare(
        `INSERT INTO waitlist (name, email, whatsapp, lang, created_at)
         VALUES (?1, ?2, ?3, ?4, ?5)`,
      )
        .bind(name, email, whatsapp, lang, new Date().toISOString())
        .run();
    } catch (err) {
      console.error('D1 insert failed', err);
    }
  }

  // 3) Emails via Resend (best-effort, non-blocking)
  if (env.RESEND_API_KEY && env.RESEND_FROM) {
    ctx.waitUntil(
      Promise.allSettled([
        sendConfirmation(env, { name, email, lang }),
        env.NOTIFY_TO ? sendNotification(env, { name, email, whatsapp, lang }) : Promise.resolve(),
      ]).then((rs) =>
        rs.forEach((r) => r.status === 'rejected' && console.error('email error', r.reason)),
      ),
    );
  }

  return json({ ok: true });
}

async function verifyTurnstile(secret: string, token: string | undefined, request: Request) {
  if (!token) return false;
  const ip = request.headers.get('CF-Connecting-IP') ?? '';
  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: form,
    });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

async function resendSend(env: Env, payload: Record<string, unknown>) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

function sendConfirmation(
  env: Env,
  { name, email, lang }: { name: string; email: string; lang: 'it' | 'en' },
) {
  const first = esc(name.split(' ')[0] || (lang === 'it' ? 'ospite' : 'guest'));
  const copy =
    lang === 'it'
      ? {
          subject: 'La tua richiesta è arrivata · Octave On',
          h: `Grazie, ${first}.`,
          p: 'La tua richiesta è arrivata. Quando la notte sarà vicina, ti scriveremo con la tua soglia d’accesso.',
          sign: 'Octave On · una notte rara sul Mediterraneo',
        }
      : {
          subject: 'We received your request · Octave On',
          h: `Thank you, ${first}.`,
          p: 'Your request has reached us. When the night draws near, we’ll write to you with your threshold of access.',
          sign: 'Octave On · a rare night on the Mediterranean',
        };
  return resendSend(env, {
    from: env.RESEND_FROM,
    to: email,
    subject: copy.subject,
    html: emailShell(copy.h, copy.p, copy.sign),
  });
}

function sendNotification(
  env: Env,
  { name, email, whatsapp, lang }: { name: string; email: string; whatsapp: string; lang: string },
) {
  return resendSend(env, {
    from: env.RESEND_FROM,
    to: env.NOTIFY_TO,
    reply_to: email,
    subject: `Nuova richiesta invito — ${name || email}`,
    html: `<h2>Nuova richiesta invito</h2>
      <p><strong>Nome:</strong> ${esc(name) || '—'}<br>
      <strong>Email:</strong> ${esc(email)}<br>
      <strong>WhatsApp:</strong> ${esc(whatsapp) || '—'}<br>
      <strong>Lingua:</strong> ${esc(lang)}</p>`,
  });
}

function emailShell(heading: string, paragraph: string, sign: string) {
  return `<!doctype html><html><body style="margin:0;background:#082A3A;font-family:Georgia,serif">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#082A3A">
      <tr><td align="center" style="padding:48px 24px">
        <table width="100%" style="max-width:480px">
          <tr><td align="center" style="padding-bottom:24px">
            <div style="display:inline-block;width:26px;height:26px;border:1.5px solid #E0AE63;border-radius:50%"></div>
            <div style="display:inline-block;width:26px;height:26px;border:1.5px solid #C78A3A;border-radius:50%;margin-left:-9px"></div>
          </td></tr>
          <tr><td style="color:#F2E9DA;font-size:30px;line-height:1.15;text-align:center;padding-bottom:16px">${heading}</td></tr>
          <tr><td style="color:#8FA8B3;font-size:16px;line-height:1.6;text-align:center;font-family:Helvetica,Arial,sans-serif">${paragraph}</td></tr>
          <tr><td style="padding-top:36px;text-align:center;color:#C78A3A;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-family:Helvetica,Arial,sans-serif">${sign}</td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`;
}
