const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.5 },
  { url: "/services", changefreq: "weekly", priority: 0.7 },
  { url: "/all-cars", changefreq: "daily", priority: 0.9 },
];

const stream = new SitemapStream({ hostname: "https://drive-ora-main.vercel.app" });

streamToPromise(require("stream").Readable.from(links).pipe(stream)).then(
  (data) => {
    fs.writeFileSync("./public/sitemap.xml", data);
    console.log("✅ Sitemap generated successfully!");
  }
);
