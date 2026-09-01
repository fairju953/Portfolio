import { parseFrontmatter, slugFromPath } from "./frontmatter";

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
  };
});
