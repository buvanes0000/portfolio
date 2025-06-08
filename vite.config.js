import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Make sure this is the correct plugin you're using
import createSitemap from "vite-plugin-pages-sitemap";

export default defineConfig({
  plugins: [
    react(),
    createSitemap({
      hostname: "https://www.buvanes.com",
      routes: [
        { path: "/", changefreq: "weekly", priority: 1.0 },
        { path: "/about", changefreq: "weekly", priority: 0.7 },
        { path: "/projects", changefreq: "weekly", priority: 0.5 },
        { path: "/contact", changefreq: "monthly", priority: 0.3 },
      ],
      defaults: {
        lastmodrealtime: true,
      },
    }),
  ],
  base: "/",
});
