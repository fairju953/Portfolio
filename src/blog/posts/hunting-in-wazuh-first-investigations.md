---
title: "Hunting in Wazuh: my first SOC investigations"
date: "2026-09-01"
tags: ["Homelab", "Wazuh", "SOC", "Sysmon", "osTicket"]
---

In June I wrote about getting Wazuh and Sysmon standing. This stretch was different. I stopped adding tools and tried to work an alert the way I think a SOC would.

The process I'm using: a high-severity alert opens a ticket, I hunt in the **Wazuh Dashboard** (not by grepping the server), I write a short case file with a verdict, then I close the ticket.

## PowerShell bypass

First investigation was a test I ran on purpose: PowerShell with `-ExecutionPolicy Bypass` and `Get-Process` on the Windows 11 box, as Administrator.

Stock Wazuh fired on **nested PowerShell** (one `powershell.exe` starting another). That's useful, but it isn't what I cared about. Bypass can happen even when the parent is `cmd.exe`.

So I added two custom rules:

- **100110** — PowerShell with Bypass or an encoded command (medium)
- **100111** — the same thing at High or System integrity (high)

The second one fired on my lab command at level 12. The detection is right. I did it on purpose. Harmless `Get-Process` doesn't make it a false positive. That's a benign true positive.

## Tickets for the serious stuff

osTicket on the Pi is the queue, not the SIEM. I wired Wazuh so **level 12 and above** can open a ticket on their own.

That took some help-desk style digging (API client fields, then a Windows copy that left the wrong line endings on the integrator script). Once it worked, the Bypass alert became a ticket I could work: hunt in the Dashboard, close with a verdict.

A second ticket came from rule **92213**, "executable dropped in a folder commonly used by malware." The title sounds like command-and-control. The file was `__PSScriptPolicyTest_….ps1` in Temp. Windows PowerShell writes that file to check execution policy. Same second as the Bypass test. False positive.

Thing I keep catching myself on: read the **field**, not the scary description. For file-create alerts that's `targetFilename`. For process alerts it's `commandLine`.

## Failed logons are not all brute force

Investigation #2 was Windows Event **4625**. Four events on the domain controller were not one attack.

Three had status `0xC0000133`, clocks too far apart. VirtualBox VMs pause and the time drifts. One had `0xC000006D` / `0xC000006A`: the user exists, the password is wrong, from localhost, on a known lab account. One mistype is not a spray.

Wazuh's generic "unknown user or bad password" rule dumps a lot of 4625s in one bucket. The Windows **status** code is what you look up.

## New account and scheduled tasks

I created a clearly named lab user on the DC (**4720**). It's a normal Domain User. An admin **creating** a user is not the same as that new user **being** an admin.

For scheduled tasks (**4698**), nothing showed until I turned on **Other Object Access Events** audit on the workstation. After that I had a few events: the lab task I created, and a Windows 11 **SoftLanding** task for a domain user. Unfamiliar names get researched before I call them malware.

## Labels I'm using

- **True positive** — detection is right, and it would be hostile outside the lab
- **False positive** — it fired, but it isn't actually that pattern
- **Benign true positive** — detection is right; I (or Windows) did it for a real reason

I'm not adding Kali or a vulnerable VM yet. Next I want to see whether Wazuh actually tags these with MITRE ATT&CK in the Dashboard.
