import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.blueriverhomecare.com",
  output: "static",
  integrations: [sitemap({ filter: (page) => !page.endsWith("/thank-you/") })],
  redirects: {
    "/book-a-consultation/": "/consultation/",
  },
});
