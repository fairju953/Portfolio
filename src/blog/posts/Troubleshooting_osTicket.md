---
title: "Troubleshooting osTicket on my Raspberry Pi Homelab"
date: "2026-05-12"
tags: ["Linux", "Apache", "Networking", "Homelab", "osTicket"]
---

I was putting osTicket on my Raspberry Pi for the help desk / SOC side of the lab. I figured it would be a straightforward install. It was not. I ended up in Apache, Linux networking, and a port conflict.

## What I saw

After installing osTicket, Apache, PHP, and MariaDB, I expected the setup page. I kept getting:

- 404 errors
- Access denied
- The default Apache page

I assumed it was one of:

- file permissions
- Apache virtual hosts
- missing osTicket files
- a bad DocumentRoot

The files were sitting in `/var/www/html/osticket` the whole time. The site still wouldn't load.

## What actually fixed it

I checked Apache configs, virtual hosts, permissions, logs, and the osTicket folder. `sudo apache2ctl -S` helped. The thing that broke it open was this:

```bash
sudo ss -tulpn | grep :80
```

Pi-hole was already on port 80. Apache was listening on 8080.

So `http://RASPBERRY_PI_IP/` was Pi-hole, not Apache. The URL I needed was:

```text
http://RASPBERRY_PI_IP:8080/osticket
```

Once I used the right port, osTicket loaded.

I spent longer on this than I wanted, but I learned more from chasing it than I would have from a clean install. Next time I'm going to check what's bound to the port before I rebuild the whole config.
