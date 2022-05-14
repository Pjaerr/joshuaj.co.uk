import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import wrapListItemChildren from "./custom-plugins/rehype/wrap-list-item-children.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), sitemap()],
  markdown: {
    remarkPlugins: ["remark-code-titles", "remark-prism"],
    rehypePlugins: [wrapListItemChildren],
    syntaxHighlight: "prism",
  },
  publicDir: "./public",
  base: "/",
  site: "https://joshuaj.co.uk",
  server: { port: 1234, host: false },
});
