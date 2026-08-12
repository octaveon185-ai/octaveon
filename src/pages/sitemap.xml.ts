import type { APIRoute } from 'astro';
import { journalArticlePaths } from '../i18n/journalArticle';
import { homeHref, locales } from '../i18n/content';

const site = 'https://octaveon.octaveon185.workers.dev';
const urls = [
  ...locales.map((locale) => homeHref(locale)),
  ...Object.values(journalArticlePaths),
];
const lastmod = '2026-08-12';

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((path) => `  <url><loc>${site}${path}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
