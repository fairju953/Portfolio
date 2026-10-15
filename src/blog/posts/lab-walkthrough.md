---
title: "I wrote the lab walkthrough"
date: "2026-10-15"
tags: ["Homelab", "Wazuh", "Sysmon", "Active Directory", "osTicket"]
---

I finally wrote down how to build my homelab from nothing. Not notes to myself this time, an actual walkthrough someone else could follow.

It's four virtual machines on one computer, all on a private virtual network that never touches the physical LAN:

- Ubuntu running the Wazuh manager, indexer, and dashboard
- Ubuntu running osTicket
- Windows Server as the domain controller for `lab.home`
- Windows 11, domain joined, as the client

Sysmon runs on both Windows machines and ships process events to Wazuh. The walkthrough goes step by step through the installs, pointing the agents at the manager, adding the Sysmon event channel to `ossec.conf` so Wazuh actually collects it, and standing up osTicket behind Apache.

Every section ends with a check. Not "it should work" but a command to run and the output to expect. `agent_control -l` showing both agents active. Event ID 1 in the Sysmon Operational log after launching Notepad. `Get-ADDomain` reporting `lab.home`. If the check fails you know which step to go back to.

The last step is the one I care about: sign in as a normal domain user, start Notepad, find that process event in Wazuh, then open a ticket by hand with the agent name, event time, and process name. Close it. That's the whole path, client to detection to written response, before any automation gets involved.

There's also a rebuild checklist at the end so I can verify the lab from scratch without rereading the whole thing.

I'm putting it on [my GitHub](https://github.com/fairju953) next, so the walkthrough and the config files live in one place instead of a document on my machine. I'll link it here once it's up.
