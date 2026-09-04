---
title: "Adding Wazuh and strengthening osTicket"
date: "2026-06-08"
tags: ["Homelab", "Wazuh", "Sysmon", "Active Directory", "osTicket"]
---

It's been a little while since the last post. I've been making some bigger changes to the homelab.

I moved past basic setup and started building a small SOC-style environment: monitoring, a place for incidents to land, and more Windows and Linux admin in a lab I control.

## Wazuh

Biggest piece was getting Wazuh onto an Ubuntu server. The install had some bumps: services that wouldn't start, and the VM running out of resources.

After enough trial and error I moved Wazuh onto dedicated hardware instead of a VM. It runs better there and I have more room to add to it.

## Watching the Windows boxes

With Wazuh up I started putting agents on the lab machines. So far:

- Windows Server 2022 domain controller
- Windows 11 client

Both are reporting into the Wazuh dashboard.

## Sysmon

Next I deployed Sysmon so I could see more of what Windows is doing.

Once it was talking to Wazuh I could look at process creation and other endpoint activity from the dashboard. I'm still learning how to read it, but that's the point of the lab.

## osTicket

I also kept going on osTicket on the Raspberry Pi.

That started with install problems: config files and missing PHP extensions. After those were fixed I finished the install and started thinking about how tickets fit with Wazuh, not just as a help desk app sitting by itself.

Next I want email notifications, and then alerts that create tickets so I can follow something from detection through to a written answer.

## What's next

Over the next few weeks I want to:

- Put Wazuh agents on more systems
- Monitor the Raspberry Pi and my laptop
- Set up email in osTicket
- Write detection rules and alerting
- Add a Kali VM so I can generate test events without guessing

More as I get there.
