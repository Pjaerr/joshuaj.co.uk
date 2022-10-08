import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import wrapListItemChildren from "./custom-plugins/rehype/wrap-list-item-children.mjs";
import remarkPrism from "remark-prism";
import remarkCodeTitles from "remark-code-titles";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte(), sitemap()],
  markdown: {
    remarkPlugins: [remarkCodeTitles, remarkPrism],
    rehypePlugins: [wrapListItemChildren],
    syntaxHighlight: "prism",
  },
  publicDir: "./public",
  base: "/",
  site: "https://joshuaj.co.uk",
  server: { port: 1234, host: false },
});
