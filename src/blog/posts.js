// Auto-import all markdown posts
const postFiles = import.meta.glob("./posts/*.md", {
  as: "raw",
  eager: true,
});

function parseFrontmatter(content) {
  const match = content.match(/---([\s\S]*?)---/);
  const body = content.replace(/---[\s\S]*?---/, "").trim();

  const metadata = {};

  if (match) {
    match[1].split("\n").forEach((line) => {
      const [key, ...rest] = line.split(":");
      if (!key || rest.length === 0) return;

      let value = rest.join(":").trim();

      // Handle array values (tags)
      if (value.startsWith("[") && value.endsWith("]")) {
        metadata[key.trim()] = value
          .replace(/[\[\]]/g, "")
          .split(",")
          .map((v) => v.trim().replace(/"/g, ""));
      } else {
        metadata[key.trim()] = value.replace(/"/g, "");
      }
    });
  }

  return { metadata, body };
}

export const posts = Object.entries(postFiles).map(([path, content]) => {
  const slug = path.split("/").pop().replace(".md", "");
  const { metadata, body } = parseFrontmatter(content);

  return {
    slug,
    ...metadata,
    content: body,
  };
});