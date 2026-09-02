import { parseFrontmatter, slugFromPath } from "./frontmatter";
import { readingMinutes } from "./readingTime";
import { toExcerpt } from "../seo/excerpt";

// Auto-import all markdown posts
const postFiles = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const posts = Object.entries(postFiles).map(([path, content]) => {
  const { metadata, body } = parseFrontmatter(content);

  return {
    slug: slugFromPath(path),
    ...metadata,
    content: body,
    // Longer than the 155-character search-result excerpt: this one has a whole
    // card to live in rather than a results page.
    excerpt: toExcerpt(body, 180),
    readingMinutes: readingMinutes(body),
  };
});

// Every tag in use, most-used first, for the filter control on the blog index.
export const allTags = Object.entries(
  posts.reduce((counts, post) => {
    for (const tag of post.tags ?? []) {
      counts[tag] = (counts[tag] ?? 0) + 1;
    }
    return counts;
  }, {})
)
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .map(([tag, count]) => ({ tag, count }));
