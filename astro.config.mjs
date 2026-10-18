import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // TODO: set the real domain once it's decided, e.g. 'https://adaptive.example'
  site: 'https://adaptive.example',
  output: 'server',
  adapter: cloudflare(),
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
