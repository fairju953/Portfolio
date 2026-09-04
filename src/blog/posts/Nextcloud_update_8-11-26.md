---
title: "Nextcloud and jbtechbyte.com"
date: "2026-08-11"
tags: ["Homelab", "Docker", "Nextcloud", "Backups"]
---

I haven't posted in a while but I have been working on the homelab.

Biggest new piece is Nextcloud, running with MariaDB and Redis. I also:

- Moved database credentials into a `.env` file
- Cleaned up the Docker Compose file
- Added a health check for MariaDB
- Set container dependencies so things start in order
- Set up external storage for Nextcloud
- Built an automated backup script with some error handling and a check that it actually ran
- Put those backups on cron
- Split backups into database, files, and config instead of one pile

I bought my own domain, [jbtechbyte.com](https://jbtechbyte.com), so the portfolio and blog are public.

I've also been reworking the portfolio so it actually shows the projects, the job history, and the homelab. I want that version to replace what's up now once it's ready.

Still a lot I want to add, mostly to make the lab feel more like a real SOC practice environment.

More updates to come.
