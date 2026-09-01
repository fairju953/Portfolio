---
title: "Hunting in Wazuh: my first SOC investigations"
date: "2026-09-01"
tags: ["Homelab", "Wazuh", "SOC", "Sysmon", "osTicket", "Cybersecurity"]
---

In June I wrote about getting Wazuh and Sysmon standing. This past stretch of lab time was different: I stopped adding tools and started working like an analyst.

The loop I am practicing is simple. A high-severity alert opens a ticket. I hunt in the **Wazuh Dashboard**, not by grepping logs on the server. I write a short case file with a verdict. Then I close the ticket.

## Detection that matches the test

My first investigation was an authorized PowerShell test: `-ExecutionPolicy Bypass` and `Get-Process` on the Windows 11 workstation, run as Administrator.

Stock Wazuh fired on **nested PowerShell** (one `powershell.exe` starting another). That was useful, but it was not the behavior I cared about. Bypass can happen even when the parent is `cmd.exe`.

I added two custom rules:

* **100110** — PowerShell with Bypass or an encoded command (medium)
* **100111** — the same, at High or System integrity (high)

The second one fired on the lab command at level 12. That is a **benign true positive**: the detection is right, and I did it on purpose. Harmless `Get-Process` does not make it a false positive.

## Tickets for the serious alerts

osTicket on the Raspberry Pi is the queue, not the SIEM. I wired Wazuh so **level 12 and above** can open a ticket automatically.

That path took some help-desk style troubleshooting (API client fields, then a Windows copy that left the wrong line endings on the integrator script). Once it worked, the Bypass alert became a ticket I could work like a queue item: hunt in the Dashboard, then close with a verdict.

A second ticket came from rule **92213** — “executable dropped in a folder commonly used by malware.” The rule title sounds like command-and-control. The file was `__PSScriptPolicyTest_….ps1` in Temp. Windows PowerShell writes that file to check execution policy. Same second as the Bypass test. **False positive.**

The lesson I keep repeating: read the **field**, not the scary description. For file-create alerts that field is `targetFilename`. For process alerts it is `commandLine`.

## Failed logons are not all brute force

Investigation #2 was Windows Event **4625**. Four events on the domain controller were not one attack.

Three had status `0xC0000133` — clocks too far apart (VirtualBox VMs pause and drift). One had `0xC000006D` / `0xC000006A` — the user exists, the password is wrong, from localhost, on a known lab account. One mistype is not a spray.

Wazuh’s generic “unknown user or bad password” rule buckets many 4625s together. The Windows **status** code is what you look up.

## Account create and persistence

I created a clearly named lab user on the DC (**4720**). The new account is a normal Domain User. An administrator **creating** a user is not the same as the new user **being** an admin.

For scheduled tasks (**4698**), nothing showed until I turned on **Other Object Access Events** audit on the workstation. After that I had several events: the lab task I created, and a Windows 11 **SoftLanding** task for a domain user. Unfamiliar names get researched before I call them malware.

## What I am practicing

| Label | Meaning |
|---|---|
| True positive | Detection is right, and it is hostile (or would be outside the lab) |
| False positive | Detection fired, but the pattern is not what the rule is for |
| Benign true positive | Detection is right; I (or Windows) did it for a legitimate reason |

I am not adding Kali or a vulnerable VM yet. Next I am checking whether Wazuh actually **tags** these cases with MITRE ATT&CK in the Dashboard.

The homelab is no longer “what else can I install.” It is “can I investigate this the way a SOC would.”
