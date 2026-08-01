import { defineConfig } from 'astro/config';

// Static output deployed through a Cloudflare Worker with Static Assets.
export default defineConfig({
  site: 'https://octaveon.octaveon185.workers.dev',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'es'],
    routing: {
      prefixDefaultLocale: false, // en → "/", it → "/it/", es → "/es/"
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
