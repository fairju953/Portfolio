/**
 * Regenerates the optimized .webp images that the app imports.
 *
 * The source files in src/assets are kept as the originals so this can be
 * re-run at higher quality later; only the generated .webp files are shipped.
 * sharp is not a project dependency, so install it just for the run:
 *
 *   npm install --no-save sharp && node scripts/optimize-images.mjs
 */
import { readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import sharp from "sharp";

const assets = fileURLToPath(new URL("../src/assets", import.meta.url));

// `width` is the largest size the layout ever renders the image at, doubled
// for high-density screens.
const TARGETS = [
  { file: "pic.jpg", out: "pic.webp", width: 600, quality: 82 },
  { file: "pic2.png", out: "pic2.webp", width: 1000, quality: 80 },
  {
    file: "projects/project-1.jpg",
    out: "projects/project-1.webp",
    width: 300,
    quality: 80,
  },
  {
    file: "projects/project-2.jpg",
    out: "projects/project-2.webp",
    width: 300,
    quality: 80,
  },
  {
    file: "projects/project-3.jpg",
    out: "projects/project-3.webp",
    width: 300,
    quality: 80,
  },
  {
    file: "projects/project-4.jpg",
    out: "projects/project-4.webp",
    width: 300,
    quality: 80,
  },
];

const kb = (bytes) => Math.round(bytes / 1024);

let before = 0;
let after = 0;

for (const target of TARGETS) {
  const source = join(assets, target.file);
  const destination = join(assets, target.out);

  const input = sharp(readFileSync(source));
  const { width: sourceWidth } = await input.metadata();

  // Never upscale: a 300px original stays 300px.
  const width = Math.min(target.width, sourceWidth);

  const info = await input
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: target.quality })
    .toFile(destination);

  const originalSize = statSync(source).size;
  before += originalSize;
  after += info.size;

  console.log(
    `${target.file.padEnd(26)} ${kb(originalSize).toString().padStart(4)} KB -> ` +
      `${kb(info.size).toString().padStart(4)} KB  (${info.width}x${info.height})`
  );
}

console.log(
  `\nTotal ${kb(before)} KB -> ${kb(after)} KB ` +
    `(${Math.round((1 - after / before) * 100)}% smaller)`
);
