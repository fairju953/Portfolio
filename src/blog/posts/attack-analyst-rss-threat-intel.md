---
title: "Attack Analyst: turning security RSS into study notes"
date: "2026-09-03"
tags: ["SOC", "Threat intelligence", "Python", "MITRE ATT&CK"]
---

I built **Attack Analyst** because I was reading cybersecurity news and not keeping any of it. I wanted the same habit I use on a ticket: pull the story, write down what actually happened, then say how you'd defend and what you'd look for in a SIEM.

It's a personal study library. It is not a product that runs malware. Headlines come from RSS. Each story gets saved as markdown I can search later.

## What it does

Python scripts grab a short window of security feeds, rank the recent stories, and write a daily digest. For each item I try to fill in the same sections:

- **What happened** — what's in the reporting, not just the headline
- **How the attack worked** — the method, in plain language. ATT&CK IDs only when a source actually supports them
- **Defense** — patch, or something you can do if you can't patch yet
- **Detection** — what I'd hunt in the lab SIEM (Wazuh, Sysmon) or on the network (Pi-hole), and only when that mapping is honest

Stories that need more than a digest get a full writeup in the same folder. If a story gets a follow-up, I update that file instead of leaving old copies around.

## Why it sits next to the homelab

In the lab the loop is alert → ticket → hunt → verdict. Attack Analyst is the same thing on public reporting: don't trust the scary title, check the source, write a conclusion. If a technique in a story matches something I already log (PowerShell, file drops, failed logons, scheduled tasks), I say so. If it doesn't, I say that too.

I don't download lure sites or samples for this. A vendor advisory is enough for the note.

## Stack

Python for fetch, ranking, digest generation, and optional email of the markdown report. Feed lists live in config, not in the scripts. SMTP credentials stay in a local env file that isn't committed.
