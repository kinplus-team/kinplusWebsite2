import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import fs from "fs";
import path from "path";

// Define your website's URL
const hostname = "https://www.kinplusgroup.com";

// Define your routes
const routes = [
  { url: "/", changefreq: "daily", priority: 1 },
  { url: "/about-us", changefreq: "weekly", priority: 0.8 },
  { url: "/our-services", changefreq: "weekly", priority: 0.8 },
  { url: "/blog", changefreq: "daily", priority: 0.9 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.7 },
  { url: "/trainings", changefreq: "weekly", priority: 0.8 },
  { url: "/trainings/siwes", changefreq: "monthly", priority: 0.6 },
  { url: "/trainings/workshop", changefreq: "weekly", priority: 0.7 },
  { url: "/careers", changefreq: "weekly", priority: 0.7 },
  { url: "/sponsor-or-partner-with-us", changefreq: "monthly", priority: 0.6 },
];

// Create a stream to write to
const stream = new SitemapStream({ hostname });

// Return a promise that resolves with your XML string
const sitemap = streamToPromise(Readable.from(routes).pipe(stream)).then(
  (data) => data.toString()
);

/**
 * Asynchronously generates a sitemap XML file.
 *
 * This function retrieves the sitemap data asynchronously and writes it to a specified file path.
 * The sitemap XML file is saved in the '../public' directory with the name 'sitemap.xml'.
 * Once the file is successfully written, a confirmation message is logged to the console.
 */
async function generateSitemap() {
  const xml = await sitemap;

  const filePath = path.resolve("public/sitemap.xml");
  fs.writeFileSync(filePath, xml);
  console.log("Sitemap generated successfully at:", filePath);
}

generateSitemap();
