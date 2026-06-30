import { defineConfig } from 'astro/config';

// Static output deployed to Cloudflare Pages.
// The invite API lives in /functions (native Cloudflare Pages Functions),
// so no SSR adapter is required here.
export default defineConfig({
  site: 'https://octaveon.pages.dev',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: false, // it → "/", en → "/en/"
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
