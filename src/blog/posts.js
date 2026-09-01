// Auto-import all markdown posts
const postFiles = import.meta.glob("./posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Frontmatter must open on the very first line so that a `---` inside a post
// body can never be mistaken for a delimiter. The closing delimiter allows
// three or more dashes because some posts pad it out to underline the title.
const FRONTMATTER = /^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n-{3,}[ \t]*(?:\r?\n|$)/;

function stripQuotes(value) {
  return value.replace(/^["']|["']$/g, "");
}

function parseFrontmatter(raw) {
  const match = raw.match(FRONTMATTER);

  if (!match) {
    return { metadata: {}, body: raw.trim() };
  }

  const metadata = {};

  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim();
    if (!key) continue;

    const value = line.slice(separator + 1).trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      metadata[key] = value
        .slice(1, -1)
        .split(",")
        .map((entry) => stripQuotes(entry.trim()))
        .filter(Boolean);
    } else {
      metadata[key] = stripQuotes(value);
    }
  }

  return { metadata, body: raw.slice(match[0].length).trim() };
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
