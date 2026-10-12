// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Адрес сайта: подставляется при выкладке (PUBLIC_SITE_URL), нужен для sitemap и canonical.
const site = process.env.PUBLIC_SITE_URL || 'https://example.ru';
// Подпапка сайта: на GitHub Pages — /bigbi (задаётся в workflow), локально — корень.
const base = process.env.PUBLIC_BASE || '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
  image: { responsiveStyles: true },
});
