---
title: "Getting back into my homelab after a break"
date: "2026-05-06"
tags: ["IT Help Desk", "Cybersecurity"]
---

After taking some time away from my Active Directory homelab, I decided to get back into it and re-familiarize myself with the environment.

My lab consists of a Windows Server (Domain Controller) and a Windows 11 client running in VirtualBox.

On my first day back, I spent time exploring the environment and creating a new user account to refresh my understanding.

## The Issue

While creating a new user, I ran into a password error. The system would not accept the password I entered.

At first, I wasn’t sure why this was happening. I realized I couldn’t remember the password policies I had previously configured in my domain.

## Troubleshooting

To investigate the issue, I checked the domain’s password policy using Group Policy Management.

## Steps:

Open Group Policy Management Console
Navigate to: Forest → Domains → yourdomain.local → Default Domain Policy
Right-click Default Domain Policy → Click Edit
Go to:
Computer Configuration → Policies → Windows Settings → Security Settings → Account Policies → Password Policy

Here, I was able to review the password requirements that were being enforced.

## Resolution

I discovered that the minimum password length was set higher than expected, which caused the error during user creation.

After identifying the issue, I adjusted my password to meet the requirements and successfully created the user account.

## What I Learned

This experience reinforced a few important concepts:

Group Policy controls critical security settings in Active Directory
Password policies can directly impact user management tasks
When returning to a system after a break, it’s important to re-check configurations
Final Thoughts

Getting back into my homelab helped me quickly rebuild context and confidence working with Active Directory.

This was a simple issue, but it reminded me how important it is to understand and verify system configurations when troubleshooting.

Moving forward, I plan to continue building on this lab and documenting everything I learn along the way.