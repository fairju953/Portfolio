---
title: "ASL Web App — A tool for helping aspiring ASL learners"
date: "2026-09-03"
tags: ["React", "Next.js", "Web", "ASL"]
---

**ASL Learn** is a web app I built so I (and other hearing learners) can look up American Sign Language videos without digging through a bunch of tabs. Search a word, watch a clip, save it to a study card, practice later.

It is a study aid. It is not a class, and it is not a substitute for Deaf teachers and community.

Live: [asl.jbtechbyte.com](https://asl.jbtechbyte.com)

## What you can do

- Search from the home page. Results come from YouTube and Spread the Sign, and you can watch them on the page.
- Open category hubs and an alphabet practice view.
- Create an account (email and password). Study cards and practice are per account. Guests can still search and watch.
- There's a short about page on ASL and Deaf culture, plus links to community resources.
- There's a contact form for feedback.

Search isn't a raw string match. Common typos and short forms (for example `hi` for hello) map to a normal term so it behaves more like a dictionary. When I have that data, trusted dictionary-style channels rank above random vlogs.

## How it's built

Frontend is **Next.js**, **React**, and **Tailwind**. Accounts use a hashed password and a session cookie, not a token sitting in the browser. Locally it uses SQLite through Prisma. Production can use Turso when those env vars are set, so signups survive a serverless filesystem.

API keys for video search stay on the host. They aren't in the repo.

## What I'm careful about

ASL is a full language. A short clip can't show every regional variation or how people actually talk. The about page says that on purpose. If you're learning, look for Deaf-led classes and practice with people who grew up with the language.
