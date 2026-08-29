import { statSync, writeFileSync, readFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";
import { siteMetadata } from "../data/siteMetaData.mjs";

// Pull project slugs straight out of the data file (it can't be imported here
// because it references React component types).
function getProjectSlugs() {
  try {
    const source = readFileSync("src/data/projects.ts", "utf8");
    return [...source.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]);
  } catch {
    return [];
  }
}

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig(
    "../../prettier.config.js",
  );

  const pages = await globby([
    "src/pages/**/*.tsx",
    "!src/pages/_*.tsx",
    "!src/pages/api",
    "!src/pages/404.tsx",
  ]);

  const staticEntries = pages
    .map((page) => {
      const path = page
        .replace(".tsx", "")
        .replace("src/pages/", "/")
        .replace("/index", "");

      if (path.includes("[") || path.includes("]")) {
        return "";
      }

      const lastModified = statSync(page).mtime.toISOString();
      return `<url><loc>${siteMetadata.siteUrl}${path}</loc><lastmod>${lastModified}</lastmod></url>`;
    })
    .join("");

  const projectEntries = getProjectSlugs()
    .map(
      (slug) =>
        `<url><loc>${siteMetadata.siteUrl}/projects/${slug}</loc></url>`,
    )
    .join("");

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticEntries}
            ${projectEntries}
        </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  writeFileSync("public/sitemap.xml", formatted);
  writeFileSync("public/robots.txt", robotsTxt);

  console.log(
    "Successfully generated\n-> Sitemap at public/sitemap.xml\n-> Robots.txt at public/robots.txt",
  );
}

const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${siteMetadata.siteUrl}/sitemap.xml`;

generateSitemap();
