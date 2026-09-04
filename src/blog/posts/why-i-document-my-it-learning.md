---
title: "Getting back into my homelab after a break"
date: "2026-05-06"
tags: ["Homelab", "Active Directory", "Group Policy"]
---

I took some time away from the Active Directory homelab and had to get my bearings again.

The lab is a Windows Server domain controller and a Windows 11 client in VirtualBox. First day back I poked around and tried to create a new user, just to remember how the environment was set up.

## The issue

The password I entered would not go through.

I couldn't remember what password policy I had set on the domain, so I went looking.

## What I checked

I opened Group Policy Management and looked at the Default Domain Policy:

1. Group Policy Management Console
2. Forest → Domains → yourdomain.local → Default Domain Policy
3. Right-click Default Domain Policy → Edit
4. Computer Configuration → Policies → Windows Settings → Security Settings → Account Policies → Password Policy

Minimum password length was 14 characters. That was the whole problem.

I left the policy alone. I'd rather keep the lab closer to a real standard than make it easier on myself. I used a password that met the length and complexity rules, and the account created fine.

Simple issue, but it was a reminder that if I've been away from a system I should check what I actually configured before I assume it's broken.
