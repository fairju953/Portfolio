---
title: "Troubleshooting osTicket on my Raspberry Pi Homelab"
date: "2026-05-12"
tags: ["Linux", "Apache", "Networking", "Homelab", "osTicket"]
---

## Why This Matters

While building my homelab, I’ve learned that troubleshooting is where the real learning happens. Recently, I worked on setting up osTicket on my Raspberry Pi as part of my Help Desk and SOC homelab environment.

What seemed like a simple installation turned into a troubleshooting exercise involving Apache, Linux networking, and port conflicts.

## The Problem

After installing osTicket, Apache, PHP, and MariaDB, I expected the setup page to load normally.

Instead, I kept receiving:

- 404 errors
- Access denied errors
- The default Apache page

I initially thought the issue was related to:

- file permissions
- Apache virtual hosts
- missing osTicket files
- incorrect DocumentRoot settings

Even though the osTicket files existed correctly in `/var/www/html/osticket`, the site still would not load.

## Troubleshooting

I began checking:

- Apache configurations
- virtual hosts
- file permissions
- Apache logs
- osTicket file structure

One of the most useful commands was:

```bash
sudo apache2ctl -S
```

The major breakthrough came when I checked which services were using port 80:

```bash
sudo ss -tulpn | grep :80
```

This revealed that:

- Pi-hole was already using port 80
- Apache was actually running on port 8080

Because of this, requests to:

```text
http://RASPBERRY_PI_IP/
```

were going to Pi-hole instead of Apache.

The correct URL was:

```text
http://RASPBERRY_PI_IP:8080/osticket
```

Once I used the correct port, osTicket loaded successfully.

## What I Learned

This troubleshooting process reinforced several important IT concepts:

- Port conflicts between services
- Apache troubleshooting
- Linux networking fundamentals
- Service binding and listening ports
- Reading logs and validating configurations

Most importantly, I learned how important it is to troubleshoot methodically instead of guessing.

## Final Thoughts

Although this issue took longer than expected to solve, I learned much more from troubleshooting the problem than I would have from a perfect installation on the first try.

I’m continuing to build out my homelab with Active Directory, Linux systems, osTicket, and future SOC monitoring tools while documenting everything I learn along the way.
