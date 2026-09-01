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
- Routing: `react-router-dom` 7.14.2 (`BrowserRouter`)
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

### 3.3 Deployment and Hosting

There is no deployment configuration anywhere in the repository - no `vercel.json`, `netlify.toml`, `public/_redirects`, `Dockerfile`, nginx config, `CNAME`, or `.github/workflows`.

This matters specifically because the app uses `BrowserRouter`. On any static host without an SPA rewrite rule, a visitor who opens or refreshes `https://jbtechbyte.com/blog/HomeLab_update` gets a hard 404 from the server, because no such file exists on disk. Only navigation from within the app works. Every blog link shared on LinkedIn would be broken. The fix is one rewrite rule (`/* -> /index.html`) in the host's config, or `HashRouter` as a cruder fallback.

There is also no CI: no automated lint or build check on push, so the two existing lint errors went unnoticed.

### 3.4 SEO and Metadata

`index.html` is essentially untouched from the Vite template:

- Title is "Justin's Portfolio" - no name-plus-role phrasing that would match recruiter searches
- Favicon is still `/vite.svg` (the only file in `public/`)
- No `<meta name="description">`, no canonical URL
- No Open Graph or Twitter Card tags, so links shared on LinkedIn render as a bare URL with no title, description, or image
- No per-route titles: the blog list and every individual post all report the same document title
- No `robots.txt`, no `sitemap.xml`, no JSON-LD structured data (`Person` for the home page, `BlogPosting` for posts)

Compounding this, the site is client-rendered with no prerendering or SSG, so the initial HTML payload contains no content at all. For a portfolio whose entire purpose is discoverability by recruiters, this is one of the highest-leverage areas to fix - and the cheapest, since a prerender plugin or per-route `<title>` updates require no architectural change.

### 3.5 Accessibility

- **Icon-only links have no accessible name.** All four social links in `src/components/Navbar.jsx` wrap only an SVG icon, so a screen reader announces "link" with no destination. Each needs an `aria-label` or visually hidden text.
- **No landmarks.** No `<main>`, `<header>`, `<footer>`, or `<nav aria-label>` structure; the entire app sits in generic `<div>` elements.
- **Decorative vs. meaningful images.** `src/components/About.jsx` line 19 passes `alt=""` on what appears to be a meaningful portrait.
- **No skip-to-content link**, and no `aria-current="page"` on the active nav link.
- **Motion is not reduced-motion aware.** Every section uses `whileInView` animations with no `prefers-reduced-motion` check, and because there is no `viewport={{ once: true }}`, animations replay on every scroll past a section.
- **Contrast risks** on dark backgrounds: `text-neutral-400` body copy in Experience and Projects descriptions, and especially `text-blue-800` project tags on `bg-neutral-900`, are likely below the WCAG AA 4.5:1 threshold.
- **Focus visibility** is left to browser defaults against a dark theme with a fuchsia blur backdrop.

### 3.6 Performance

- `src/assets/pic2.png` is a 473 KB PNG used as a photographic image. Converting to WebP or AVIF at an appropriate display size would plausibly cut it by 90 percent.
- No image has `width`/`height` attributes or `loading="lazy"`, so layout shifts during load and all six images (837 KB total) are fetched eagerly.
- The Inter font is pulled in with a CSS `@import` at the top of `src/index.css`, which is the slowest option - it serializes the font request behind the stylesheet. A `<link rel="preconnect">` plus `<link rel="stylesheet">` in `index.html`, or self-hosting the subset actually used, is measurably faster.
- No route-level code splitting. `framer-motion`, `react-markdown`, and all five blog post bodies ship in the initial bundle even for a visitor who only reads the home page. `React.lazy` on the `/blog` routes would help.
- `framer-motion` is pinned to `^12.0.0-alpha.0`, a prerelease. The caret range on an alpha means npm can pull in other prereleases, and there is no guarantee of stability or fixes.
- `axios` is declared as `"^0.x.x"` - an unusual, effectively unbounded range within 0.x - for a component that is never rendered. It resolves to 0.32.0 today.

### 3.7 Content and Positioning

This is where the site loses the most opportunity, and none of it requires new engineering.

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
7. PARTIAL - The email, phone, and LinkedIn entries are now real `mailto:`, `tel:`, and `https://` links. The underlying values are still placeholders: the 555 number, the campus address, and the `.edu` email need replacing with professional equivalents on jbtechbyte.com.
8. Point the Instagram and Twitter/X icons at real profiles, or remove them.
9. DONE - Add a `<Route path="*">` catch-all 404, and a "Back to Blog" link on post pages.
10. DONE - Fix the two ESLint errors and get `npm run lint` to exit 0.
11. DONE - Harden the frontmatter parser in `src/blog/posts.js`, pass `remarkPlugins={[remarkGfm]}` to `ReactMarkdown`, and migrate `{ as: "raw" }` to `{ query: "?raw", import: "default" }`. See the note in section 3.2 on why `gray-matter` was dropped rather than adopted.
12. PARTIAL - The malformed delimiters in `HomeLab_update.md` and the stray fences in `Troubleshooting_osTicket.md` are fixed. Proofreading the six posts and the constants file for the spelling errors listed in section 3.7 is still outstanding.
13. DONE - Commit and deploy `hunting-in-wazuh-first-investigations.md`. It is the most compelling content on the site.

### Priority 2 - Discoverability and impact (one day)

14. Rewrite `index.html`: descriptive title, meta description, real favicon, Open Graph and Twitter Card tags with a preview image, canonical URL. Add `robots.txt` and `sitemap.xml` in `public/`.
15. Add per-route document titles and meta descriptions (a small `useEffect` hook or `react-helmet-async`), plus `BlogPosting` and `Person` JSON-LD.
16. Replace the Technologies section content with the actual home lab stack (Active Directory, Windows Server, Wazuh, Sysmon, Docker, Linux, osTicket, Nextcloud, networking), ideally grouped by category and driven from `constants/index.js` rather than hardcoded JSX.
17. Rebuild the Projects section around the home lab: the AD domain lab, the Wazuh SIEM deployment with Sysmon telemetry and custom detection rules, the osTicket help desk on Raspberry Pi with automated alert-to-ticket integration, and the Nextcloud stack with automated backups - each with outcome-focused copy, real screenshots or an architecture diagram, and a link to the matching blog post.
18. Add an Education and Certifications section (Kean University BS in IT; CompTIA Security+, April 2026) and a resume PDF download in the Hero and Contact areas.
19. Add a footer with copyright, social links, and a last-updated date.
20. Add accessible names to all icon links, wrap page content in `<main>`, add a skip link and `aria-current` on nav, and give the About portrait a real `alt`.

### Priority 3 - Polish and infrastructure

21. Compress and convert images to WebP/AVIF, add explicit dimensions and `loading="lazy"`, and generate responsive `srcset`.
22. Move the font from CSS `@import` to a preconnected `<link>` or self-host the Inter subset.
23. Pin `framer-motion` to a stable release, add `viewport={{ once: true }}` to scroll animations, and respect `prefers-reduced-motion`.
24. Code-split the blog routes with `React.lazy` and add an error boundary.
25. Extract shared animation variants, make Technologies data-driven, add Prettier plus a `format` script, and rewrite the README to describe this project (with `.nvmrc` or an `engines` field).
26. Add a GitHub Actions workflow running `npm ci`, `npm run lint`, and `npm run build` on every push, wired to automatic deploys.
27. Blog enhancements: tag filter pages, list excerpts, reading time, an RSS feed, and previous/next post navigation.
28. Consider audit-driven verification: Lighthouse for performance and SEO, axe DevTools for accessibility, and a manual keyboard-only pass.

---

## 5. Summary

The site is a working, cleanly animated React portfolio with a functional file-based blog, and the blog content itself - methodical, honest troubleshooting and investigation write-ups, culminating in a genuine SOC triage workflow with custom Wazuh rules and alert-to-ticket automation - is its strongest asset by a wide margin.

The gap is that the front page does not reflect what the blog proves. It advertises a web-developer stack the author is not targeting, lists coursework projects instead of the home lab, hides the degree and Security+ certification inside a post from May, and closes with placeholder contact details.

Four things mattered most: revoke the leaked Hugging Face token, add the SPA rewrite rule so shared blog links actually open, publish the September Wazuh investigation post, and realign the Technologies, Projects, and Education sections with the SOC analyst goal. The first three are done. The fourth - making the front page reflect what the blog proves - is now the highest-value work remaining, and it is content, not engineering.
