// generate-sitemap.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const urls = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  { url: "/projects", changefreq: "monthly", priority: 0.4 }
];

const sitemap = new SitemapStream({
  hostname: "https://www.buvanes.com",
});

const writeStream = createWriteStream(
  path.resolve(__dirname, "dist", "sitemap.xml")
);

async function generateSitemap() {
  try {
    sitemap.pipe(writeStream);
    urls.forEach((url) => sitemap.write(url));
    sitemap.end();
    await streamToPromise(sitemap);
    console.log("✅ Sitemap created successfully!");
  } catch (error) {
    console.log("❌ Error creating sitemap:", error);
  }
}

generateSitemap();
