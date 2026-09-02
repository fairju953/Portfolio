# Portfolio Website - Review and Improvement Plan

Review date: 2026-09-01
Repository: https://github.com/fairju953/Portfolio (branch `main`)
Reviewed commit: `1773608` - "Add new blog post Nextcloud and jbtechbyte.com update_02"

This document is a read-only assessment. No application code, configuration, or content was modified while producing it.

---

## 1. What This Website Is

A single-page React application that serves as the personal portfolio and technical blog for **Justin Fair**, an insurance claims professional transitioning into IT support and cybersecurity (SOC analyst track). The blog posts document a self-built home lab (Active Directory, Wazuh, osTicket, Nextcloud) and reference the live domain [jbtechbyte.com](https://jbtechbyte.com).

### 1.1 Technology Stack

- Build tool: Vite 7.3.2 with `@vitejs/plugin-react`
- Framework: React 18.3.1 (`StrictMode`, client-side rendering only)
- Routing: `react-router-dom` 7.18.3 (`BrowserRouter`)
- Styling: Tailwind CSS 3.4.11 + PostCSS + Autoprefixer, Inter font via Google Fonts `@import`
- Animation: `framer-motion` 12.0.0-alpha.0
- Icons: `react-icons` 5.3.0
- Blog rendering: `react-markdown` 10.1.0, with markdown files loaded at build time via `import.meta.glob`
- Linting: ESLint 9 flat config with React, React Hooks, React Refresh plugins
- Installed but unused: `gray-matter` 4.0.3, `axios` 0.32.0, `remark-gfm` 4.0.1 (installed, never wired into the renderer)

### 1.2 Structure

```mermaid
flowchart TD
    main[main.jsx] --> App[App.jsx BrowserRouter]
    App --> Navbar
    App --> Router{Routes}
    Router -->|"/"| HomeInline[Inline Home composition]
    Router -->|"/blog"| Blog[blog/Blog.jsx]
    Router -->|"/blog/:slug"| BlogPost[blog/BlogPost.jsx]
    HomeInline --> Hero
    HomeInline --> About
    HomeInline --> Technologies
    HomeInline --> Experience
    HomeInline --> Projects
    HomeInline --> Contact
    Hero --> Constants[constants/index.js]
    About --> Constants
    Experience --> Constants
    Projects --> Constants
    Contact --> Constants
    Blog --> Posts[blog/posts.js glob loader]
    BlogPost --> Posts
    Posts --> MD[blog/posts/*.md]
```

Three routes exist: `/`, `/blog`, `/blog/:slug`. There is no catch-all route.

All text content for the home page lives in a single file, `src/constants/index.js`, which exports `HERO_CONTENT`, `ABOUT_TEXT`, `EXPERIENCES`, `PROJECTS`, and `CONTACT`.

---

## 2. Content Inventory

### 2.1 Navbar (`src/components/Navbar.jsx`)

- Wordmark: the text "JF"
- Links: Home, Blog
- Social icons: LinkedIn (`linkedin.com/in/justin-fair-503b56b4`), GitHub (`github.com/fairju953`), Instagram (points to `https://instagram.com`, not a profile), Twitter/X (points to `https://twitter.com`, not a profile)

### 2.2 Hero (`src/components/Hero.jsx`)

- Name: "Justin Fair"
- Gradient tagline: "IT Support & Systems Professional | Technical Troubleshooting | Cybersecurity Fundamentals"
- Two-paragraph intro (`HERO_CONTENT`) describing technical support, systems troubleshooting, and experience with React, Node.js, MySQL, Java, PHP
- Circular profile photo (`src/assets/pic.jpg`, 78 KB)
- Slide-in animations staggered at 0s, 0.5s, 1s, and 1.2s

### 2.3 About Me (`src/components/About.jsx`)

- Heading "About Me"
- Image `src/assets/pic2.png` (473 KB)
- One long paragraph (`ABOUT_TEXT`) covering motivation, React/Tailwind/Node/MySQL/Java/PHP experience, and interest in continuous learning

### 2.4 Technologies (`src/components/Technologies.jsx`)

Six floating icons, hardcoded in the component rather than driven by constants: React, Next.js, MongoDB, Redis, Node.js, PostgreSQL.

### 2.5 Experience (`src/components/Experience.jsx` + constants)

Four roles, newest first:

- 2026 - present, Worker's Compensation Adjuster, Gallagher Basset - NJ/PA claim investigation, medical record review, benefits eligibility, stakeholder coordination. Tags: "Miscrosoft Office suite", Claims Processing Software, DMS
- 2020 - 2026, Worker's Compensation Adjuster, NJPLIGA - claim evaluation, benefit calculation, settlement negotiation. Tags: Word, Excel, Claim Center, DMS
- 2016 - 2019, Claims Service Representative, NJPLIGA - bulk letters, data entry, initial claims processing, paperless filing system project. Tags: Word, Excel, PowerPoint
- 2015 - 2016, Administrative Clerk, Kelly Services - Honeywell document scanning and processing. No tags

A commented-out fifth entry (a fictitious "Software Engineer at Paypal" role) remains in `src/constants/index.js` lines 52-58.

### 2.6 Projects (`src/components/Projects.jsx` + constants)

Four entries, each with a stock thumbnail and no link:

- Project Management - team-built coffee shop company project. Tags: SageKick, Excel, HTML, CSS
- Developing Java Application - object-oriented Java work. Tags: Java, Eclipse
- Portfolio Website - this site. Tags: HTML, CSS, React, Bootstrap
- Blogging Webpage - WordPress blog platform. Tags: HTML, CSS, WordPress

### 2.7 Get in Touch (`src/components/Contact.jsx` + constants)

- Address: 1000 Morris Ave, Union, NJ 07083 (Kean University's campus address)
- Phone: 908-555-7777 (a reserved "555" placeholder number)
- Email: fairju@kean.edu (university address)
- LinkedIn: www.linkedin.com/in/justin-fair-503b56b4

Both the email and LinkedIn entries are rendered as `<a href="#">`, so neither is actually clickable.

### 2.8 Blog (`src/blog/`)

The blog list sorts posts by date descending and shows title plus date. Individual posts render title, date, tag chips, a divider, and markdown body. Six posts exist:

- 2026-09-01 - "Hunting in Wazuh: my first SOC investigations" - the strongest post on the site. Practicing an analyst workflow instead of installing tools: custom Wazuh rules 100110 and 100111 for PowerShell `-ExecutionPolicy Bypass` and encoded commands, wiring level-12-and-above alerts to auto-open osTicket tickets, triaging rule 92213 as a false positive by reading `targetFilename` rather than the rule description, distinguishing four Windows 4625 failed logons by status code (`0xC0000133` clock skew vs. `0xC000006D` bad password), enabling Other Object Access Events auditing to surface 4698 scheduled tasks, and a true positive / false positive / benign true positive triage framework. Published 2026-09-01
- 2026-08-11 - "Nextcloud and jbtechbyte.com" - Nextcloud with MariaDB and Redis, `.env` credentials, Docker Compose organization, health checks, external storage, automated cron backups, and the purchase of the jbtechbyte.com domain
- 2026-06-08 - "Adding Wazuh and strengthening osTicket" - Wazuh on Ubuntu Server moved to dedicated hardware, agents on Windows Server 2022 DC and Windows 11 client, Sysmon integration, osTicket on Raspberry Pi, plans for detection rules and a Kali VM
- 2026-05-12 - "Troubleshooting osTicket on my Raspberry Pi Homelab" - Apache/PHP/MariaDB install, 404 and access-denied errors traced to a Pi-hole port 80 conflict with Apache on 8080, resolved via `apache2ctl -S` and `ss -tulpn`
- 2026-05-06 - "Getting back into my homelab after a break" - returning to an Active Directory lab in VirtualBox, hitting a password policy error, inspecting Default Domain Policy in Group Policy Management, and choosing to keep the 14-character minimum
- 2026-05-05 - "My Journey to becoming a SOC analyst" - Kean University BS in Information Technology, CompTIA Security+ earned in April, lack of responses from help desk applications, and the decision to build an AD home lab and document it

### 2.9 Dead Code - RESOLVED 2026-09-01

Two files were never imported anywhere and have since been deleted:

- `src/components/Home.jsx` - an alternate home page composition (included `ChatGPTComponent`). `App.jsx` defines its own inline `Home` instead.
- `src/components/ChatGPTComponent.jsx` - a Hugging Face GPT-2 chat box.

The `axios` dependency they relied on has been removed from `package.json` as well.

---

## 3. Findings

### 3.1 Critical - Leaked API Credential - RESOLVED 2026-09-01

**Status: closed.** The token has been revoked by the account owner and is no longer valid. Both offending files are deleted, `axios` is removed, and `.gitignore` now covers `.env` files. The dead token string still exists in git history, which is harmless now that it is revoked. The original finding is preserved below for the record.

`src/components/ChatGPTComponent.jsx` line 14 contained a hardcoded Hugging Face access token:

```js
const apiKey = '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'; // Hugging Face API key
```

This is not a hypothetical exposure. The token is committed to the public GitHub repository and appears in at least two commits in history (`4bcbe6a`, `fccb353`), so it is retrievable even if the line is deleted today. Additionally, because the value is inlined in front-end source, any production build would have shipped it to every visitor's browser.

Secondary issue: `.gitignore` does not list `.env` or `.env.local`, so there is no guard against committing secrets in the future - which matters now that the Nextcloud work has the author actively using `.env` files.

Required actions, in order:

1. Revoke the token in the Hugging Face account settings immediately. This is the only step that actually closes the exposure.
2. Delete `src/components/ChatGPTComponent.jsx` and `src/components/Home.jsx` (both unused), and drop the now-orphaned `axios` dependency.
3. Add `.env`, `.env.local`, and `.env.*.local` to `.gitignore`.
4. Optionally scrub history with `git filter-repo` or BFG, but treat this as cleanup only - the token must be considered compromised regardless.

### 3.2 Functional Bugs - RESOLVED 2026-09-01

**Status: all fixed and pushed.** `npm run lint` now exits 0 and the production build succeeds with no deprecation warnings. One deviation from the original recommendation: `gray-matter` was not adopted, because it calls `Buffer.from()` unconditionally (`gray-matter/lib/utils.js:36`) and would throw `Buffer is not defined` in a browser bundle without a polyfill. The hand-rolled parser was hardened and anchored instead, and `gray-matter` was removed as an unused dependency. The findings below are preserved for the record.

- **Blog typography is silently inert.** `src/blog/BlogPost.jsx` line 15 applies `prose prose-invert`, but `@tailwindcss/typography` is not installed and `tailwind.config.js` has `plugins: []`. Those class names compile to nothing, which is why `src/index.css` carries hand-written `.prose h2` and `.prose p` rules as a partial substitute. Installing the plugin would restore proper heading scale, list styling, code block formatting, table styling, and link styling across all six posts.
- **Invalid Tailwind class names** that produce no CSS: `bgn-neutral-900` in `src/components/Experience.jsx` line 34 (intended `bg-neutral-900`, so experience tech tags render without their pill background while the equivalent tags in Projects do), `pb=20` in `src/components/Contact.jsx` line 5, `lg:mg-35` in `src/components/Hero.jsx` line 13, and `lg:mt-15` in `src/components/Hero.jsx` line 21 (15 is not in Tailwind v3's default spacing scale).
- **Contact links are not links.** `src/components/Contact.jsx` lines 23-24 use `href="#"` instead of `mailto:` and the LinkedIn URL. The phone number is not a `tel:` link either.
- **No 404 route.** `src/App.jsx` registers only three paths, so any unknown URL renders the navbar over an empty page. A `<Route path="*">` catch-all is needed.
- **GFM markdown is not enabled, and this already breaks a post.** `remark-gfm` is a dependency, but `ReactMarkdown` in `src/blog/BlogPost.jsx` line 44 is called without `remarkPlugins={[remarkGfm]}`. Tables, task lists, strikethrough, and bare-URL autolinking therefore do not render. The newest post, `hunting-in-wazuh-first-investigations.md`, uses a GFM table at lines 50-54 for its true positive / false positive / benign true positive definitions, so that table currently displays to visitors as raw pipe-delimited text. This is a one-line fix.
- **Fragile frontmatter parsing.** `src/blog/posts.js` uses a hand-rolled regex (`/---([\s\S]*?)---/`) rather than the installed `gray-matter`. It breaks on any `---` sequence in a post body. This already causes visible artifacts: `src/blog/posts/HomeLab_update.md` closes its frontmatter with an 87-character dash run, leaving stray dashes in the rendered body, and `src/blog/posts/Troubleshooting_osTicket.md` has a four-backtick fence typo at line 45 and two orphaned code fences at lines 92-93.
- **No back navigation from a post.** `BlogPost.jsx` has no "Back to Blog" link; readers must use the browser back button or the navbar.
- **ESLint fails.** `npm run lint` exits 1 with two errors: `no-useless-escape` at `src/blog/posts.js` line 23, and an unused `React` import at `src/components/ChatGPTComponent.jsx` line 3.
- **Deprecated Vite API.** `src/blog/posts.js` line 3 uses `{ as: "raw" }`, deprecated since Vite 5.1. It still works in Vite 7 but logs a warning on every build. The modern form is `{ query: "?raw", import: "default", eager: true }`.

### 3.3 Deployment and Hosting - RESOLVED 2026-09-01

**Status: closed and verified live.** [vercel.json](vercel.json) supplies the SPA rewrite, and [.github/workflows/ci.yml](.github/workflows/ci.yml) now runs `npm ci`, `npm run lint`, and `npm run build` on every push and pull request against `main`.

Verified against production after deploy: `jbtechbyte.com` issues a 308 to the `www` host, and `www.jbtechbyte.com/blog/hunting-in-wazuh-first-investigations` returns HTTP 200 serving the app shell rather than a 404. The stylesheet hash served in production matches the local build, confirming the deploy includes the section 3.2 fixes.

Two follow-ups this surfaced:

- **Unknown URLs now return HTTP 200, not 404.** This is inherent to a catch-all SPA rewrite: the server hands back `index.html` and React renders the 404 view client-side. Search engines classify that as a soft 404. Prerendering or a hosting-level status override would be needed to return a true 404 status, which ties into the section 3.4 rendering work.
- **CI overlaps Vercel only partially.** Vercel already builds on push, so the unique value here is the lint step and having a required check on pull requests. Note the workflow pins Node 24 to match the local toolchain, while Vercel picks its own version; adding an `engines.node` field to `package.json` would make both read from one source, but that would change the production build's Node version and was left alone deliberately.

The original finding follows.

There is no deployment configuration anywhere in the repository - no `vercel.json`, `netlify.toml`, `public/_redirects`, `Dockerfile`, nginx config, `CNAME`, or `.github/workflows`.

This matters specifically because the app uses `BrowserRouter`. On any static host without an SPA rewrite rule, a visitor who opens or refreshes `https://jbtechbyte.com/blog/HomeLab_update` gets a hard 404 from the server, because no such file exists on disk. Only navigation from within the app works. Every blog link shared on LinkedIn would be broken. The fix is one rewrite rule (`/* -> /index.html`) in the host's config, or `HashRouter` as a cruder fallback.

There is also no CI: no automated lint or build check on push, so the two existing lint errors went unnoticed.

### 3.4 SEO and Metadata - RESOLVED 2026-09-01 (static scope)

**Status: static and client-side work complete; prerendering deliberately deferred.**

What is in place:

- [index.html](index.html) now carries a descriptive title, meta description, canonical URL, author, theme colour, full Open Graph and Twitter Card tags, font preconnects, and `Person` JSON-LD.
- A generated social card at `public/og-card.png` (1536x1024), and an `JF` monogram favicon at `public/favicon.svg` replacing the Vite default, which has been deleted.
- `public/robots.txt` pointing at the sitemap.
- `sitemap.xml` is generated at build time by a plugin in [vite.config.js](vite.config.js), so new posts are listed automatically rather than depending on someone editing a static file. It currently emits eight URLs with per-post `lastmod` dates.
- Per-route titles, descriptions, canonicals, and JSON-LD via [src/seo/useSeo.js](src/seo/useSeo.js), applied to the home, blog, post, and 404 routes. Post descriptions are generated from the body text by [src/seo/excerpt.js](src/seo/excerpt.js) rather than repeating the site description; output was checked against all six posts for length and markdown leakage.
- The 404 route sets `noindex`, which is the only available defence against the soft-404 problem described in section 3.3.

Two limitations to be aware of:

- **Per-post link previews still show the site-level card.** LinkedIn, X, and Facebook do not execute JavaScript, so they only ever read the static tags in `index.html`. Sharing an individual post shows the generic preview, not the post's own title. Fixing this properly requires prerendering, which was scoped out.
- **The page still serves an empty `<div id="root">`.** Google executes JavaScript and will index the content, but other crawlers and AI scrapers may not.

The frontmatter parser was extracted to [src/blog/frontmatter.js](src/blog/frontmatter.js) so the client loader and the build-time sitemap generator share one implementation. The original finding follows.

`index.html` is essentially untouched from the Vite template:

- Title is "Justin's Portfolio" - no name-plus-role phrasing that would match recruiter searches
- Favicon is still `/vite.svg` (the only file in `public/`)
- No `<meta name="description">`, no canonical URL
- No Open Graph or Twitter Card tags, so links shared on LinkedIn render as a bare URL with no title, description, or image
- No per-route titles: the blog list and every individual post all report the same document title
- No `robots.txt`, no `sitemap.xml`, no JSON-LD structured data (`Person` for the home page, `BlogPosting` for posts)

Compounding this, the site is client-rendered with no prerendering or SSG, so the initial HTML payload contains no content at all. For a portfolio whose entire purpose is discoverability by recruiters, this is one of the highest-leverage areas to fix - and the cheapest, since a prerender plugin or per-route `<title>` updates require no architectural change.

### 3.5 Accessibility - RESOLVED 2026-09-01

**Status: fixed.** Changes made:

- **Accessible names on icon links.** The four social links are now labelled (for example "LinkedIn (opens in a new tab)"), with the icons marked `aria-hidden` and `focusable="false"`. They are also grouped in a list. Links are defined once in [src/constants/socials.js](src/constants/socials.js) and shared by the navbar and the new footer.
- **Landmarks.** The navbar is wrapped in `<header>` with `<nav aria-label="Primary">`, routes render inside `<main id="main">`, and a `<footer>` was added with a copyright line and the social links. The contact block uses `<address>`.
- **Skip link.** A visually hidden "Skip to main content" link appears on focus as the first tabbable element.
- **`aria-current`.** The navbar uses `NavLink`, which applies `aria-current="page"` to the active link automatically.
- **Alt text.** The About portrait had `alt=""`. It is a photo of Justin working at a laptop at his home desk with two external monitors, and now says so.
- **Technologies section is no longer silent.** The six icons were decorative markup with no text; the list is now data-driven and each icon carries a `title` and `role="img"`, which react-icons renders as an SVG `<title>` element.
- **Reduced motion.** The app is wrapped in `<MotionConfig reducedMotion="user">`, so framer-motion respects the OS setting, with a CSS `prefers-reduced-motion` block in [src/index.css](src/index.css) as a backstop. Every `whileInView` animation gained `viewport={{ once: true }}` so sections no longer re-animate on each scroll past.
- **Focus visibility.** An explicit cyan `:focus-visible` outline replaces the browser default, which was nearly invisible against the dark background.

**On contrast, the original finding was partly wrong and worth correcting.** Measured properly, the blurred fuchsia wash lightens the page background to `#412b44` rather than leaving it at `#171717`, which *helps* text contrast. Measured ratios: `text-neutral-400` body copy 5.03:1 (passes), `text-neutral-300` 8.57:1, `text-blue-400` company names 4.99:1, headings 12.70:1.

The one genuine failure was the Projects tech tags: `text-blue-800` on an opaque `bg-neutral-900` pill measured **2.06:1** against a 4.5:1 requirement. Both the Projects and Experience tags are now `text-blue-400`, which measures 7.05:1. A `border-neutral-600` divider on the 404 and post pages measured 1.63:1 against the 3:1 requirement for non-text UI and moved to `neutral-400`.

Not verified: no browser-based audit (axe, Lighthouse) or manual keyboard pass was run, so this covers the defects identified by inspection rather than a full conformance check. The original finding follows.

- **Icon-only links have no accessible name.** All four social links in `src/components/Navbar.jsx` wrap only an SVG icon, so a screen reader announces "link" with no destination. Each needs an `aria-label` or visually hidden text.
- **No landmarks.** No `<main>`, `<header>`, `<footer>`, or `<nav aria-label>` structure; the entire app sits in generic `<div>` elements.
- **Decorative vs. meaningful images.** `src/components/About.jsx` line 19 passes `alt=""` on what appears to be a meaningful portrait.
- **No skip-to-content link**, and no `aria-current="page"` on the active nav link.
- **Motion is not reduced-motion aware.** Every section uses `whileInView` animations with no `prefers-reduced-motion` check, and because there is no `viewport={{ once: true }}`, animations replay on every scroll past a section.
- **Contrast risks** on dark backgrounds: `text-neutral-400` body copy in Experience and Projects descriptions, and especially `text-blue-800` project tags on `bg-neutral-900`, are likely below the WCAG AA 4.5:1 threshold.
- **Focus visibility** is left to browser defaults against a dark theme with a fuchsia blur backdrop.

### 3.6 Performance - RESOLVED 2026-09-01

**Status: fixed.** Measured before and after, from the build output:

- **Images: 857 KB to 115 KB, an 87 percent reduction.** The diagnosis in the original finding was slightly off. `pic2.png` was not oversized in dimensions at all, it is only 500x491; it was a photograph saved as PNG, which is why it weighed 473 KB. As WebP it is 34 KB, a 93 percent drop on that one file. The project thumbnails were 500x500 sources rendered at 150x150, so they were resampled to 300x300 for high-density screens and now total 38 KB instead of 285 KB. Originals are kept in `src/assets` as sources; only the `.webp` files are imported and shipped. Regenerate with [scripts/optimize-images.mjs](scripts/optimize-images.mjs), which documents the one-line `sharp` install it needs. `sharp` is deliberately not a project dependency, so CI installs stay fast.
- **Initial JavaScript: 500 KB to 340 KB (163 KB to 114 KB gzipped).** `Blog` and `BlogPost` are now `React.lazy` routes behind a `Suspense` boundary, so the 159 KB markdown renderer and the post bodies only load when someone opens the blog. This also cleared Vite's oversized-chunk warning.
- **Fonts no longer block behind the stylesheet.** The Google Fonts `@import` at the top of `src/index.css` was serialising the font request behind the CSS download; it is now a `<link>` in `index.html` after the existing preconnects.
- **Layout shift.** Every image now carries explicit `width` and `height`. The hero portrait is `fetchPriority="high"`; the About photo and project thumbnails are `loading="lazy"` with `decoding="async"`.
- **framer-motion is off the prerelease**, moving from `12.0.0-alpha.0` to `12.43.0`. This stays inside major 12 deliberately: 13.1.1 is available, but a major bump to an animation library could not be visually verified here. The upgrade costs about 5 KB gzipped.

Net effect on a first visit to the home page: roughly 1,025 KB of JavaScript and images before, roughly 160 KB now, with the rest deferred until scroll.

Not verified: no Lighthouse run or real-device timing, and the animations were not visually checked after the framer-motion upgrade. The original finding follows.

- `src/assets/pic2.png` is a 473 KB PNG used as a photographic image. Converting to WebP or AVIF at an appropriate display size would plausibly cut it by 90 percent.
- No image has `width`/`height` attributes or `loading="lazy"`, so layout shifts during load and all six images (837 KB total) are fetched eagerly.
- The Inter font is pulled in with a CSS `@import` at the top of `src/index.css`, which is the slowest option - it serializes the font request behind the stylesheet. A `<link rel="preconnect">` plus `<link rel="stylesheet">` in `index.html`, or self-hosting the subset actually used, is measurably faster.
- No route-level code splitting. `framer-motion`, `react-markdown`, and all five blog post bodies ship in the initial bundle even for a visitor who only reads the home page. `React.lazy` on the `/blog` routes would help.
- `framer-motion` is pinned to `^12.0.0-alpha.0`, a prerelease. The caret range on an alpha means npm can pull in other prereleases, and there is no guarantee of stability or fixes.
- `axios` is declared as `"^0.x.x"` - an unusual, effectively unbounded range within 0.x - for a component that is never rendered. It resolves to 0.32.0 today.

### 3.7 Content and Positioning - RESOLVED 2026-09-01

**Status: fixed.**

Everything written into the site was sourced from the blog posts themselves rather than invented, so each claim on the front page can be traced to a post that documents it.

- **Technologies now matches the blog.** Ten labelled icons for Active Directory, Wazuh, Sysmon, Linux, Docker, Raspberry Pi, PowerShell, MariaDB, Apache and Nextcloud, plus a secondary row of twelve items that have no recognisable logo, including Group Policy, custom SIEM detection rules and Windows Event Log analysis. Visible text labels were added deliberately: a shield icon standing for "Wazuh" is not guessable, and the label doubles as the accessible name, which is better than the tooltip it replaced.
- **Projects is now the four home lab builds**, each written as problem, approach and outcome, each linking to the post that documents it. Specifics come from the posts: rules 100110 and 100111, the Pi-hole collision on port 80, the 14-character password policy that was met rather than lowered, and the level 12 alert-to-ticket threshold. The four generic coursework thumbnails were dropped rather than replaced, which also removed 38 KB of images from the bundle. Projects was moved above Experience so the technical evidence lands before the claims history.
- **Education and Certifications is a real section** carrying the Kean BS in IT (2025) and Security+ (April 2026), and both are now also expressed as `alumniOf` and `hasCredential` in the `Person` JSON-LD. That schema was being duplicated in an unused `PERSON_JSON_LD` export in `src/seo/siteMeta.js`; the export was deleted so `index.html` is the single source.
- **Hero and About were realigned** to lead with IT support and security operations. The claims-investigation background is now framed as the transferable skill it actually is - gather evidence, read it carefully, write a defensible verdict - rather than being left as an unexplained career detour. The dev stack survives as a supporting point about working with engineering teams.
- **A résumé button** sits in the hero and a matching link sits in Contact, both pointing at `/resume.pdf`. The file is in `public/` (a real PDF, about 197 KB). Vercel serves files from `public/` before the SPA rewrite, so the link will not fall through to the 404 page.
- **Instagram and X are gone.** Both pointed at bare `instagram.com` and `twitter.com` homepages, so they were placeholders rather than profiles. LinkedIn and GitHub remain.
- **Typos fixed**, plus a class of problem the original review missed: two posts had list items written without a space after the dash, so they were silently rendering as run-on paragraphs rather than lists. A heading in the same post was also plain text. Those are fixed.
- **Blog features shipped.** The list page now shows an excerpt and a reading time per post; tags are clickable and filter the list through a `?tag=` URL parameter, so a filtered view can be shared, and the canonical stays on `/blog` so filtered views are not indexed as duplicates. An `rss.xml` feed is generated at build time by the same plugin pattern as the sitemap and is linked from the footer and `index.html`. Building the filter exposed that the tags themselves were inconsistent - the Nextcloud post carried "IT Support, Help Desk, Troubleshooting" copied from an earlier post, and "IT Help Desk" and "Help Desk" existed as separate tags - so the tags were normalised across all six posts into a coherent cloud.

- **Contact is no longer a placeholder.** Phone is omitted. Location is Manchester Township, NJ. Email is a personal Gmail rather than the Kean `.edu` account. Previous/next post navigation and publishing cadence are untouched.

Not verified: no browser-based visual check was run on any of this, so layout and animation behaviour after the Technologies and Projects rewrites are unconfirmed. The original finding follows.

- **The Technologies section contradicts the stated goal.** It advertises React, Next.js, MongoDB, Redis, Node.js, and PostgreSQL - a MERN/web-developer skill set. The tagline, the About text, and all six blog posts point at IT support and SOC analysis. A visitor scanning the page gets a mixed signal about which job is being applied for. The genuinely demonstrated technologies, all evidenced in the blog, are absent: Active Directory, Windows Server 2022, Group Policy, Windows 11, Wazuh, Sysmon, custom SIEM detection rules, Windows Event Log analysis, osTicket, Docker and Docker Compose, Nextcloud, MariaDB, Pi-hole, Apache, Linux/Ubuntu, Raspberry Pi, VirtualBox, PowerShell, and Bash scripting.
- **The Projects section omits the strongest evidence.** The four listed projects are coursework-flavored (a coffee shop simulation, a generic Java application, a WordPress blog) and none has a repository or demo link. Meanwhile the home lab - a domain controller, a SIEM with endpoint agents, a working ticketing system, a self-hosted cloud with automated backups - is the actual proof of capability and appears only in prose. Promoting three or four home lab projects into this section, each with a problem/approach/outcome summary and a link to the corresponding blog post, would be the single highest-impact content change on the site.
- **Education and certifications are missing entirely.** The BS in Information Technology from Kean University and the CompTIA Security+ certification are mentioned only in the body of one blog post from May. Neither appears in any dedicated section, so a recruiter skimming the page will not see them. Security+ in particular is a common hard filter for SOC roles.
- **Contact details read as placeholders.** A 555 phone number is a well-known fictional prefix, the address is the university campus rather than a city/state locality, and the email is a student `.edu` account. Any one of these signals an unfinished page; together they undermine the credibility of everything above them. A professional email on the newly purchased jbtechbyte.com domain, a "Union, NJ" locality, and a real or omitted phone number would fix it.
- **No resume download.** There is no PDF link anywhere, which is the first thing many recruiters look for.
- **No footer.** No copyright line, no secondary navigation, no "last updated" signal.
- **Typos in visible content:** "Miscrosoft Office suite" and "Gallagher Basset" (the company is Gallagher Bassett) in `src/constants/index.js`, "everaging" in the Java project description, and in the blog posts "acheivements", "conecepts", "looiing", "goasl", "Specialst", "sever" (for "serve"), and "advantures". For someone whose target roles emphasize documentation quality, these are worth a pass.
- **Blog features that the data already supports but the UI does not use:** tags are parsed and displayed on posts but are not filterable or linked; there are no post excerpts on the list page, no reading time, no post images, no RSS feed, and no pagination (not yet needed at five posts, but the list will get unwieldy).
- **Publishing cadence is uneven.** Posts cluster in May, then gap to June, August, and September. Cadence matters more than volume for a learning journal, and the gaps are the main thing a reader tracking your progress would notice.

### 3.8 Code Quality and Maintainability

- **Two competing home page definitions.** `App.jsx` lines 18-26 define an inline `Home`, while `src/components/Home.jsx` defines a different one. The file-based version is dead but is the one that still references the leaked credential.
- **Leftover scaffolding.** `App.jsx` lines 32-33 contain a `SAFETY FALLBACK (INLINE STYLE - MUST SHOW)` comment above an empty block, plus stray blank lines.
- **Inconsistent formatting.** Indentation, JSX attribute placement, and closing-tag style vary widely between components (compare `Hero.jsx` to `Contact.jsx`). `Technologies.jsx` ends with about ten blank lines. There is no Prettier config or format script.
- **Repetition.** The `whileInView` / `initial` / `transition` animation triple is copy-pasted more than a dozen times; the six technology icons repeat the same eight-line block. Both would collapse into a shared variant object and a data-driven map.
- **Array-index keys** in Experience, Projects, and their nested tag maps, with the inner `index` shadowing the outer one in `Experience.jsx` line 34.
- **No tests and no error boundary.** A single throw in a section blanks the whole page.
- **README is the unmodified Vite template**, with a corrupted UTF-16 tail that renders as `#   P o r t f o l i o` twice. It documents nothing about this project.
- **No `.nvmrc` or `engines` field**, so Node version drift between machines is unguarded.

---

## 4. Prioritized Improvement Plan

### Priority 0 - Do today

1. DONE - Revoke the exposed Hugging Face token.
2. DONE - Delete `src/components/ChatGPTComponent.jsx` and `src/components/Home.jsx`; remove `axios` from `package.json`.
3. DONE - Add `.env*` entries to `.gitignore`.
4. DONE - Add an SPA rewrite rule at the host so `/blog/:slug` deep links resolve. Handled by [vercel.json](vercel.json); Vercel applies rewrites after the filesystem check, so real assets still serve normally.

### Priority 1 - Correctness and credibility (a few hours)

5. DONE - Install `@tailwindcss/typography` and register it in `tailwind.config.js` so the blog's `prose` classes take effect; then remove the manual `.prose` overrides from `src/index.css`.
6. DONE - Fix the invalid class names: `bgn-neutral-900`, `pb=20`, `lg:mg-35`, `lg:mt-15`.
7. DONE - Contact shows Manchester Township, NJ and a personal Gmail via `mailto:`. LinkedIn is a real `https://` link. The 555 number is gone.
8. DONE - Instagram and X were removed. Both pointed at bare site homepages rather than profiles, so there was nothing to preserve. LinkedIn and GitHub remain in the navbar and footer.
9. DONE - Add a `<Route path="*">` catch-all 404, and a "Back to Blog" link on post pages.
10. DONE - Fix the two ESLint errors and get `npm run lint` to exit 0.
11. DONE - Harden the frontmatter parser in `src/blog/posts.js`, pass `remarkPlugins={[remarkGfm]}` to `ReactMarkdown`, and migrate `{ as: "raw" }` to `{ query: "?raw", import: "default" }`. See the note in section 3.2 on why `gray-matter` was dropped rather than adopted.
12. DONE - The malformed delimiters in `HomeLab_update.md` and the stray fences in `Troubleshooting_osTicket.md` were fixed earlier; the spelling errors in the posts and the constants file are now fixed too. Proofreading also turned up two lists written without a space after the dash, which had been rendering as run-on paragraphs.
13. DONE - Commit and deploy `hunting-in-wazuh-first-investigations.md`. It is the most compelling content on the site.

### Priority 2 - Discoverability and impact (one day)

14. DONE - Rewrite `index.html`: descriptive title, meta description, real favicon, Open Graph and Twitter Card tags with a preview image, canonical URL. Add `robots.txt`, and generate `sitemap.xml` at build time.
15. DONE - Add per-route document titles and meta descriptions (implemented as a small `useSeo` hook rather than `react-helmet-async`), plus `BlogPosting` and `Person` JSON-LD.
16. DONE - Technologies now carries the real stack as ten labelled icons plus a secondary row for the items with no logo. The data lives in `Technologies.jsx` rather than `constants/index.js`, because it is icon-component references rather than plain content and does not belong in a file the other sections read for copy.
17. DONE - Projects is rebuilt around the four home lab builds with problem/approach/outcome copy and a link to each matching post. Screenshots and an architecture diagram were not used: the generic thumbnails were removed instead, since a real screenshot would have to come from the lab itself.
18. DONE - Education and Certifications is in place. The résumé lives at `public/resume.pdf` and is linked from both the hero and Contact.
19. PARTIAL - A footer with copyright and social links now exists. A last-updated date was not added.
20. DONE - Add accessible names to all icon links, wrap page content in `<main>`, add a skip link and `aria-current` on nav, and give the About portrait a real `alt`.

### Priority 3 - Polish and infrastructure

21. DONE - Compress and convert images to WebP, add explicit dimensions and `loading="lazy"`. Responsive `srcset` was not added; at these display sizes a single well-sized WebP is enough.
22. DONE - Move the font from CSS `@import` to a preconnected `<link>`.
23. DONE - Pin `framer-motion` to a stable release, add `viewport={{ once: true }}` to scroll animations, and respect `prefers-reduced-motion`.
24. PARTIAL - The blog routes are code-split with `React.lazy`. An error boundary was not added, so a throw in any section still blanks the page.
25. Extract shared animation variants, make Technologies data-driven, add Prettier plus a `format` script, and rewrite the README to describe this project (with `.nvmrc` or an `engines` field).
26. DONE - Add a GitHub Actions workflow running `npm ci`, `npm run lint`, and `npm run build` on every push, wired to automatic deploys.
27. PARTIAL - List excerpts, reading time, URL-driven tag filtering, and a build-time `rss.xml` are all shipped. Previous/next post navigation was not added.
28. Consider audit-driven verification: Lighthouse for performance and SEO, axe DevTools for accessibility, and a manual keyboard-only pass.
29. DONE - Security: `react-router-dom` moved from 7.14.2 to 7.18.3, clearing two high-severity advisories whose affected range ended at 7.18.1. The bump stays inside major 7, so no API surface changed. A follow-up non-breaking `npm audit fix` took Vite to 7.3.6 and cleared the nine remaining advisories, all of which were build tooling that never reaches a visitor. `npm audit` now reports zero vulnerabilities.

---

## 5. Summary

The site is a working, cleanly animated React portfolio with a functional file-based blog, and the blog content itself - methodical, honest troubleshooting and investigation write-ups, culminating in a genuine SOC triage workflow with custom Wazuh rules and alert-to-ticket automation - is its strongest asset by a wide margin.

The gap was that the front page did not reflect what the blog proves. It advertised a web-developer stack the author is not targeting, listed coursework projects instead of the home lab, hid the degree and Security+ certification inside a post from May, and closed with placeholder contact details.

Four things mattered most: revoke the leaked Hugging Face token, add the SPA rewrite rule so shared blog links actually open, publish the September Wazuh investigation post, and realign the Technologies, Projects, and Education sections with the SOC analyst goal. All four are now done.

What is left is genuinely smaller than what has been fixed, and splits into two kinds of work. **Unverified rather than unfinished:** a Lighthouse run, an axe pass, and a keyboard-only walkthrough are still owed. **Genuine remaining engineering:** an error boundary so one throw cannot blank the page, Prettier and a README that describes this project rather than the Vite template, shared animation variants, and previous/next post navigation. The one thing no amount of engineering can supply is publishing cadence, which for a learning journal is what a returning reader actually notices.
