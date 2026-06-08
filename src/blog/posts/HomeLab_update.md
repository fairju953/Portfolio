---
title: "Adding Wazuh and strengthening osTicket"
date: "2026-06-08"
tags: ["Homelab", "Wazuh", "Sysmon", "Active Directory", "Cybersecurity", "IT Support"]
---------------------------------------------------------------------------------------

It's been a little while since my last post, but I've been busy making some major upgrades to my homelab.

Over the past week, I've shifted my focus from basic infrastructure and troubleshooting to building out a small Security Operations Center (SOC) environment. The goal is to gain more hands-on experience with security monitoring, incident response, and system administration in a controlled lab setting.

## Wazuh Deployment

One of the biggest projects was getting Wazuh installed and running on an Ubuntu Server. The installation process had a few bumps along the way, including troubleshooting service startup issues and resource limitations in a virtual machine.

After some trial and error, I decided to move toward running Wazuh on dedicated hardware instead of a VM. This provided better performance and a more stable environment for future expansion.

## Monitoring Windows Systems

With Wazuh operational, I began deploying agents throughout the lab.

So far, I have successfully connected:

* Windows Server 2022 Domain Controller
* Windows 11 Client

Once the agents were online, I verified that both systems were actively reporting to the Wazuh dashboard.

## Sysmon Integration

The next step was deploying Sysmon to improve visibility into Windows activity.

After configuring Sysmon and connecting it to Wazuh, I was able to start viewing process creation events and endpoint telemetry directly from the dashboard. Learning how to navigate and interpret the data has been a valuable experience and has helped me better understand how security analysts investigate activity on endpoints.

## osTicket Progress

I also continued working on my osTicket deployment running on a Raspberry Pi.

This project started with basic installation troubleshooting, including configuration file issues and missing PHP extensions. After resolving those problems, I completed the installation and began planning how osTicket can fit into the larger SOC workflow.

My next goal is to configure email notifications and eventually connect security alerts to ticket creation so incidents can be tracked from detection through resolution.

## What's Next?

Over the next few weeks, I plan to:

* Deploy Wazuh agents to additional systems
* Monitor my Raspberry Pi and personal laptop
* Configure email notifications in osTicket
* Build detection rules and alerting workflows
* Add a Kali Linux VM to safely generate test events and improve my detection capabilities

This project has already taught me a lot about Windows administration, Linux troubleshooting, security monitoring, and incident management. I'm looking forward to continuing to expand the lab and documenting what I learn along the way.
