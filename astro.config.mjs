import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from "astro-robots-txt";
import netlify from "@astrojs/netlify/functions";
// import netlify from '@astrojs/netlify/edge-functions'; no compat with builders below
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://magicpuddle.netlify.app',
  integrations: [mdx(), sitemap(), robotsTxt(), svelte()],
  output: 'server',
  publish: 'dist',
  adapter: netlify({
    builders: true
  })
});