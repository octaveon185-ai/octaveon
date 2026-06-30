# Octave On

Marketing & invitation site for **Octave On** — an invite-only, immersive night
experience: music, art and presence, from sunset to dawn, on the Mediterranean.
Pilot event: one night, **02.10.26**, Altea (Costa Blanca).

## Stack

- **[Astro](https://astro.build)** — static output, bilingual (IT default, EN at `/en/`)
- **Cloudflare Workers + Static Assets** — hosting (`dist/` served as assets)
- **Worker** (`worker/index.ts`) — handles `POST /api/invite`, falls back to assets
- **Resend** — confirmation & invite emails
- **Cloudflare D1** — waitlist storage
- **Cloudflare Turnstile** — anti-spam on the form
- Fonts: Cormorant Garamond (display) + Manrope (body)

## Develop

```bash
npm install
npm run dev          # http://localhost:4321  (static site + UI)
```

To run the Worker (with the `/api/invite` endpoint) locally:

```bash
cp .env.example .dev.vars   # fill in your keys
npm run cf:dev              # wrangler dev — builds + serves Worker + assets
```

## Deploy (Cloudflare Workers)

The Cloudflare project is connected to GitHub and deploys with `npx wrangler deploy`.
`wrangler.toml` does the rest: `[build]` runs `npm run build`, `[assets]` serves
`dist/`, and `worker/index.ts` handles the API. **A push to `main` triggers a deploy.**

To enable the waitlist storage + emails:

1. Create the D1 database and apply the schema:
   ```bash
   wrangler d1 create octaveon-waitlist     # paste id into wrangler.toml
   wrangler d1 execute octaveon-waitlist --file=./schema.sql --remote
   ```
   then uncomment the `[[d1_databases]]` block in `wrangler.toml` and redeploy.
2. Set secrets (Workers → Settings → Variables & Secrets):
   `RESEND_API_KEY`, `RESEND_FROM`, `NOTIFY_TO`, `TURNSTILE_SECRET`.
3. (Optional) set the **build variable** `PUBLIC_TURNSTILE_SITEKEY` so the form
   renders the Turnstile widget.

## Structure

```
src/
  i18n/content.ts      bilingual copy (single source of truth)
  layouts/Base.astro   <head>, SEO, OG, fonts, hreflang
  components/          Nav, Hero, Footer, Home, … (sections)
  styles/              tokens.css (palette/type) + global.css (motion)
  pages/index.astro    IT home  ·  pages/en/index.astro  EN home
worker/index.ts       Worker: POST /api/invite (Turnstile → D1 → Resend) + assets
public/brand/         logo
reference/            original design draft (not deployed)
```

## Design language

The signature is a **golden-hour journey in colour** down the page:
Mediterranean night → cream dawn-light → amber dusk → night. Tokens live in
`src/styles/tokens.css`.
