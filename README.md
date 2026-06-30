# Octave On

Marketing & invitation site for **Octave On** — an invite-only, immersive night
experience: music, art and presence, from sunset to dawn, on the Mediterranean.
Pilot event: one night, **02.10.26**, Altea (Costa Blanca).

## Stack

- **[Astro](https://astro.build)** — static output, bilingual (IT default, EN at `/en/`)
- **Cloudflare Pages** — hosting
- **Cloudflare Pages Functions** (`/functions`) — the invite API
- **Resend** — confirmation & invite emails
- **Cloudflare D1** — waitlist storage
- **Cloudflare Turnstile** — anti-spam on the form
- Fonts: Cormorant Garamond (display) + Manrope (body)

## Develop

```bash
npm install
npm run dev          # http://localhost:4321  (static site + UI)
```

To run the invite **Function** locally, build and serve with Wrangler:

```bash
cp .env.example .dev.vars   # fill in your keys
npm run build
npx wrangler pages dev dist --d1 DB=octaveon-waitlist
```

## Deploy (Cloudflare Pages)

1. Push to GitHub: `https://github.com/octaveon185-ai/octaveon`
2. Cloudflare dashboard → **Pages** → connect the repo
   - Build command: `npm run build`
   - Output directory: `dist`
3. Create the D1 database and apply the schema:
   ```bash
   wrangler d1 create octaveon-waitlist     # paste id into wrangler.toml
   wrangler d1 execute octaveon-waitlist --file=./schema.sql --remote
   ```
4. Bind **DB** (D1) to the Pages project, and set secrets:
   `RESEND_API_KEY`, `RESEND_FROM`, `NOTIFY_TO`, `TURNSTILE_SECRET`,
   `PUBLIC_TURNSTILE_SITEKEY`.

## Structure

```
src/
  i18n/content.ts      bilingual copy (single source of truth)
  layouts/Base.astro   <head>, SEO, OG, fonts, hreflang
  components/          Nav, Hero, Footer, Home, … (sections)
  styles/              tokens.css (palette/type) + global.css (motion)
  pages/index.astro    IT home  ·  pages/en/index.astro  EN home
functions/api/invite.ts  POST endpoint: Turnstile → D1 → Resend
public/brand/         logo
reference/            original design draft (not deployed)
```

## Design language

The signature is a **golden-hour journey in colour** down the page:
Mediterranean night → cream dawn-light → amber dusk → night. Tokens live in
`src/styles/tokens.css`.
