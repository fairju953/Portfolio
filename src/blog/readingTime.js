// 200 words per minute is the usual estimate for technical prose. Fenced code
// is dropped rather than counted: nobody reads a shell transcript word by word,
// and including it made short posts claim implausible reading times.
const WORDS_PER_MINUTE = 200;

export function readingMinutes(markdown) {
  const words = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
