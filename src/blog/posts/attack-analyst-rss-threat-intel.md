---
title: "Attack Analyst: turning security RSS into study notes"
date: "2026-09-03"
tags: ["SOC", "Threat intelligence", "Python", "MITRE ATT&CK"]
---

I built **Attack Analyst** so that reading cybersecurity news is the same habit as working a ticket: pull the story, write what actually happened, then say how you would defend and what you would look for in a SIEM.

It is a personal study library, not a product that runs malware. Headlines come from RSS. Each story is saved as markdown I can search later.

## What it does

Python scripts fetch a short window of security feeds, rank recent stories, and write a daily digest. For each item I want the same sections every time:

- **What happened** — facts from the reporting, not the headline
- **How the attack worked** — the method, in plain language, with ATT&CK IDs only when a source supports them
- **Defense** — patch versus a compensating control if you cannot patch yet
- **Detection angle** — what I would hunt in a lab SIEM (Wazuh, Sysmon) or on the network (Pi-hole), when that mapping is honest

Stories that deserve more than a digest become a full writeup in the same folder. Follow-ups update the file in place instead of leaving stale copies around.

## Why it sits next to the home lab

The SOC loop in my lab is alert → ticket → hunt → verdict. Attack Analyst is the same muscle on public reporting: do not trust the scary title, check the source, and write a conclusion you can defend. When a technique in a story matches something I already log (PowerShell, file drops, failed logons, scheduled tasks), I can say so. When it does not, I say that too.

I do not download lure sites or samples into this project. Reading a vendor advisory is enough for the note.

## Stack

Python for fetch, ranking, digest generation, and optional email of the markdown report. Feed lists live in config, not in the scripts. SMTP credentials stay in a local env file that is not committed.
