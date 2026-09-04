# Justin Fair — Portfolio

Personal site for [Justin Fair](https://www.jbtechbyte.com). Insurance claims professional moving into IT support, then cybersecurity. Blog of homelab write-ups (Active Directory, Wazuh, osTicket, Nextcloud) plus Attack Analyst and ASL Learn.

## Stack

React 18, Vite, Tailwind CSS, `react-router-dom`, `framer-motion`. Hosted on Vercel. Deep links work because [vercel.json](vercel.json) rewrites unknown paths to `index.html`.

## Setup

Node version is pinned in [`.nvmrc`](.nvmrc). With nvm:

```bash
nvm use
npm ci
npm run dev
```

| Script                 | What it does                                            |
| ---------------------- | ------------------------------------------------------- |
| `npm run dev`          | Vite dev server                                         |
| `npm run build`        | Production build, including `sitemap.xml` and `rss.xml` |
| `npm run preview`      | Serve the last build locally                            |
| `npm run lint`         | ESLint                                                  |
| `npm run format`       | Prettier write                                          |
| `npm run format:check` | Prettier check (used in CI)                             |

## Content

Home-page copy lives in [`src/constants/index.js`](src/constants/index.js). Social links live in [`src/constants/socials.js`](src/constants/socials.js).

**Blog posts** are markdown files in [`src/blog/posts/`](src/blog/posts/). Add a file with YAML frontmatter:

```md
---
title: "Post title"
date: "2026-09-02"
tags: ["Homelab", "Wazuh"]
---

Body in markdown.
```

The slug is the filename without `.md`. The sitemap and RSS feed pick up new posts on the next build.

**Résumé:** replace [`public/resume.pdf`](public/resume.pdf). Hero and Contact already link to `/resume.pdf`.

**Images:** sources stay in `src/assets`. Optimized WebP files are what the app imports. Regenerate with [`scripts/optimize-images.mjs`](scripts/optimize-images.mjs) (needs a one-off `sharp` install; it is not a project dependency).
