// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap(), alpinejs()]
});