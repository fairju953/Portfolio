import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { parseFrontmatter, slugFromPath } from './src/blog/frontmatter.js'

const SITE_URL = 'https://www.jbtechbyte.com'

function escapeXml(value) {
  return value.replace(/[<>&'"]/g, (c) => `&${{ '<': 'lt', '>': 'gt', '&': 'amp', "'": 'apos', '"': 'quot' }[c]};`)
}

// Emits sitemap.xml at build time so new posts are listed automatically
// instead of relying on someone remembering to edit a static file.
function sitemap() {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    generateBundle() {
      const postsDir = fileURLToPath(new URL('./src/blog/posts', import.meta.url))

      const posts = readdirSync(postsDir)
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
          const { metadata } = parseFrontmatter(readFileSync(join(postsDir, file), 'utf8'))
          return { slug: slugFromPath(file), date: metadata.date }
        })
        .filter((post) => post.date)
        .sort((a, b) => new Date(b.date) - new Date(a.date))

      const newest = posts[0]?.date
      const entries = [
        { loc: '/', lastmod: newest, priority: '1.0' },
        { loc: '/blog', lastmod: newest, priority: '0.8' },
        ...posts.map((post) => ({
          loc: `/blog/${post.slug}`,
          lastmod: post.date,
          priority: '0.7',
        })),
      ]

      const body = entries
        .map(({ loc, lastmod, priority }) =>
          [
            '  <url>',
            `    <loc>${escapeXml(SITE_URL + loc)}</loc>`,
            lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
            `    <priority>${priority}</priority>`,
            '  </url>',
          ]
            .filter(Boolean)
            .join('\n')
        )
        .join('\n')

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sitemap()],
})
