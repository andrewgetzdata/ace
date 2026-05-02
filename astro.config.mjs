// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://andrewgetzdata.github.io',
  base: '/ace-website',
  integrations: [sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
