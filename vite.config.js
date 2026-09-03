import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { parseFrontmatter, slugFromPath } from "./src/blog/frontmatter.js";
import { toExcerpt } from "./src/seo/excerpt.js";

const SITE_URL = "https://www.jbtechbyte.com";
const SITE_TITLE = "Justin Fair";
const FEED_DESCRIPTION =
  "Write-ups from my home lab (Active Directory, Wazuh, osTicket) plus Attack Analyst and ASL Learn.";

function escapeXml(value) {
  return value.replace(
    /[<>&'"]/g,
    (c) =>
      `&${{ "<": "lt", ">": "gt", "&": "amp", "'": "apos", '"': "quot" }[c]};`
  );
}

// Read straight off disk rather than through the app's module graph: these run
// at build time, where import.meta.glob is not available.
function readPosts() {
  const postsDir = fileURLToPath(new URL("./src/blog/posts", import.meta.url));

  return readdirSync(postsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const { metadata, body } = parseFrontmatter(
        readFileSync(join(postsDir, file), "utf8")
      );
      return {
        slug: slugFromPath(file),
        title: metadata.title,
        date: metadata.date,
        body,
      };
    })
    .filter((post) => post.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Emits sitemap.xml at build time so new posts are listed automatically
// instead of relying on someone remembering to edit a static file.
function sitemap() {
  return {
    name: "generate-sitemap",
    apply: "build",
    generateBundle() {
      const posts = readPosts();

      const newest = posts[0]?.date;
      const entries = [
        { loc: "/", lastmod: newest, priority: "1.0" },
        { loc: "/blog", lastmod: newest, priority: "0.8" },
        ...posts.map((post) => ({
          loc: `/blog/${post.slug}`,
          lastmod: post.date,
          priority: "0.7",
        })),
      ];

      const body = entries
        .map(({ loc, lastmod, priority }) =>
          [
            "  <url>",
            `    <loc>${escapeXml(SITE_URL + loc)}</loc>`,
            lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
            `    <priority>${priority}</priority>`,
            "  </url>",
          ]
            .filter(Boolean)
            .join("\n")
        )
        .join("\n");

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
      });
    },
  };
}

// Emits rss.xml from the same posts, so readers can follow the lab journal
// without depending on a social feed surfacing it.
function rss() {
  return {
    name: "generate-rss",
    apply: "build",
    generateBundle() {
      const posts = readPosts();

      // RFC 822 is what RSS requires; the frontmatter dates are bare calendar
      // days, so they are pinned to UTC midnight before formatting.
      const toRfc822 = (date) => new Date(`${date}T00:00:00Z`).toUTCString();

      const items = posts
        .map((post) => {
          const url = `${SITE_URL}/blog/${post.slug}`;
          return [
            "    <item>",
            `      <title>${escapeXml(post.title ?? post.slug)}</title>`,
            `      <link>${escapeXml(url)}</link>`,
            `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
            `      <pubDate>${toRfc822(post.date)}</pubDate>`,
            `      <description>${escapeXml(toExcerpt(post.body, 300))}</description>`,
            "    </item>",
          ].join("\n");
        })
        .join("\n");

      const lastBuildDate = posts[0]
        ? toRfc822(posts[0].date)
        : new Date().toUTCString();

      this.emitFile({
        type: "asset",
        fileName: "rss.xml",
        source: [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
          "  <channel>",
          `    <title>${escapeXml(`${SITE_TITLE} - Blog`)}</title>`,
          `    <link>${escapeXml(`${SITE_URL}/blog`)}</link>`,
          `    <description>${escapeXml(FEED_DESCRIPTION)}</description>`,
          "    <language>en-us</language>",
          `    <lastBuildDate>${lastBuildDate}</lastBuildDate>`,
          `    <atom:link href="${escapeXml(`${SITE_URL}/rss.xml`)}" rel="self" type="application/rss+xml" />`,
          items,
          "  </channel>",
          "</rss>",
          "",
        ].join("\n"),
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sitemap(), rss()],
});
