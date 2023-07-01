import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from "@astrojs/netlify/functions";
// import netlify from '@astrojs/netlify/edge-functions'; no compat with builders below
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://magicpuddle.netlify.app',
  integrations: [mdx(), sitemap(), react()],
  output: "server",
  adapter: netlify({
    builders: true
  })
});