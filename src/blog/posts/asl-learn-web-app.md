---
title: "ASL Web App — A tool for helping aspiring ASL learners"
date: "2026-09-03"
tags: ["React", "Next.js", "Web", "ASL"]
---

**ASL Learn** is a web app I built so hearing learners can look up American Sign Language videos quickly. Search a word, watch a clip, save it to a study card, and practice later. It is a **study aid**, not a class and not a substitute for Deaf teachers and community.

Live: [asl.jbtechbyte.com](https://asl.jbtechbyte.com)

## What you can do

- Search from the home page. Results come from YouTube and Spread the Sign, with inline playback.
- Open category hubs and an alphabet practice view.
- Create an account (email and password). Study cards and practice are stored per account. Guests can still search and watch.
- Read a short about page on ASL and Deaf culture, plus links to community resources.
- Send feedback through a contact form.

Search is not a raw string match. Common typos and short forms (for example `hi` for hello) map to a canonical term so the results look more like a dictionary than a keyword dump. Trusted dictionary-style channels are ranked above random vlogs when that data is available.

## How it is built

The frontend is **Next.js**, **React**, and **Tailwind**. Accounts use a hashed password and a session cookie, not a token sitting in the browser. Local development uses SQLite through Prisma. Production can use Turso when those environment variables are set, so signups survive a serverless filesystem.

API keys for video search stay in the host environment. They are not in the repo.

## What I am careful about

ASL is a full language. A short clip cannot show every regional variation or conversational use. The about page says that on purpose. If you are learning, look for Deaf-led classes and practice with people who grew up with the language.
