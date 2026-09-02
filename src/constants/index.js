export const HERO_CONTENT = `I am an IT professional focused on technical support and security operations. I hold a B.S. in Information Technology and a CompTIA Security+ certification, and I run a home lab where I operate an Active Directory domain, a Wazuh SIEM collecting Sysmon telemetry from Windows endpoints, and an osTicket help desk that the SIEM files tickets into automatically.

My background is in workers' compensation claims investigation, which is closer to security analysis than it sounds: gather the evidence, read it carefully, and write a verdict you can defend. I also work with React, Node.js, MySQL, Java, and PHP, which helps me diagnose application problems and communicate clearly with development teams.`;

export const ABOUT_TEXT = `I am moving from insurance claims into IT support and security operations, and I am doing it in the open: everything I build, break, and fix in my home lab gets written up on this site. That lab currently runs a Windows Server 2022 domain controller with Group Policy, a Wazuh SIEM collecting Sysmon telemetry from Windows endpoints, detection rules I wrote myself for PowerShell execution-policy bypasses, an osTicket queue on a Raspberry Pi that the SIEM files tickets into, and a self-hosted Nextcloud stack on Docker Compose with automated, verified backups. Six years of investigating workers' compensation claims taught me the habit that matters most in a SOC: follow the evidence to a conclusion you can defend in writing, and stay honest about the difference between something hostile and something you simply have not explained yet. I hold a B.S. in Information Technology from Kean University and a CompTIA Security+ certification, and I also work with React, Node.js, MySQL, Java, and PHP, which helps me diagnose application issues and speak the same language as development teams.`;

export const EDUCATION = [
  {
    credential: "B.S. Information Technology",
    institution: "Kean University",
    detail: "Union, NJ · Graduated 2025",
  },
];

export const CERTIFICATIONS = [
  {
    credential: "CompTIA Security+",
    institution: "CompTIA",
    detail: "Earned April 2026",
  },
];

export const EXPERIENCES = [
  {
    year: "2026 - present",
    role: "Workers' Compensation Adjuster",
    company: "Gallagher Bassett",
    description: `Conduct detailed investigations and analyze documentation to evaluate Workers Compensation claims across New Jersey and Pennsylvania jurisdictions.
Review medical records, evidence, and regulatory requirements to assess claim validity, determine benefits eligibility, and ensure compliance with state laws and internal procedures.
Manage complex claim workflows by coordinating with multiple stakeholders, negotiating resolutions, and maintaining accurate documentation and reporting.`,
    technologies: [
      "Microsoft Office Suite",
      "Claims Processing Software",
      "DMS",
    ],
  },
  {
    year: "2020 - 2026",
    role: "Workers' Compensation Adjuster",
    company: "NJPLIGA",
    description: `Evaluate and process WC claims, with investigation, evidence gathering and review of medical records to determine claim validity.
	Calculate and determine appropriate benefits based on injury severity, medical evidence, and NJ WC State Laws.
	Negotiate fair settlement of claims, considering medical treatments, disability ratings, rehabilitation, and compensation.`,
    technologies: ["Word", "Excel", "Claim Center", "DMS"],
  },
  {
    year: "2016 - 2019",
    role: "Claims Service Representative",
    company: "NJPLIGA",
    description: `Provided support services including bulk letters, data entry, and initial claims processing.
	Spearheaded a project to create the value and belief statement of the operations department.
	Assisted in the development of a new filing system and integration to a paperless system for W-9s.
Provided excellent customer service over the phone to claimants and medical providers.`,
    technologies: ["Word", "Excel", "PowerPoint"],
  },
  {
    year: "2015 - 2016",
    role: "Administrative Clerk",
    company: "Kelly Services",
    description: `Demonstrated ability to support ICM Document Solutions project with Honeywell.
Scanned and processed Honeywell's confidential documents into electronic format.
Carried out all assigned administrative duties that aligned to the production schedule.`,
    technologies: [],
  },
];

// Each project links to the post where the work was actually documented, so a
// reader can verify the claim rather than take it on trust.
export const PROJECTS = [
  {
    title: "SOC Monitoring and Detection Engineering with Wazuh",
    description:
      "Built a working detection and investigation loop on top of a Wazuh SIEM, with agents and Sysmon reporting from a Windows Server 2022 domain controller and a Windows 11 workstation. Wrote custom rules 100110 and 100111 to catch PowerShell executed with an execution-policy bypass or an encoded command, escalating when it runs at High or System integrity, because the stock rule only fired on nested PowerShell. Investigated the resulting alerts as case files, triaging Event IDs 4625, 4720 and 4698 and separating true positives from false positives and benign true positives by reading the underlying fields rather than the rule description.",
    technologies: [
      "Wazuh",
      "Sysmon",
      "Windows Event Logs",
      "Custom detection rules",
      "Ubuntu Server",
    ],
    href: "/blog/hunting-in-wazuh-first-investigations",
    linkLabel: "Read the investigation writeup",
  },
  {
    title: "Help Desk Ticketing with Alert-to-Ticket Automation",
    description:
      "Deployed osTicket on a Raspberry Pi over Apache, PHP and MariaDB to act as the queue for the lab. The install appeared broken until methodical troubleshooting traced it to a port conflict: Pi-hole already held port 80, so Apache had been pushed to 8080 and every request was reaching the wrong service. Later connected Wazuh to osTicket so that any alert at level 12 or above opens a ticket automatically, giving each serious detection a tracked path from alarm to written verdict.",
    technologies: [
      "osTicket",
      "Raspberry Pi",
      "Apache",
      "PHP",
      "MariaDB",
      "Pi-hole",
      "Linux networking",
    ],
    href: "/blog/Troubleshooting_osTicket",
    linkLabel: "Read the troubleshooting writeup",
  },
  {
    title: "Active Directory Domain Lab",
    description:
      "Built and maintain a Windows Server 2022 domain controller with a Windows 11 client in VirtualBox, used for user and system administration practice. Diagnosed a rejected password by tracing it through Group Policy Management to a 14-character minimum in the Default Domain Policy, then chose to meet the policy rather than weaken it so the lab keeps a realistic security baseline.",
    technologies: [
      "Windows Server 2022",
      "Active Directory",
      "Group Policy",
      "Windows 11",
      "VirtualBox",
    ],
    href: "/blog/why-i-document-my-it-learning",
    linkLabel: "Read the Group Policy writeup",
  },
  {
    title: "Self-Hosted Nextcloud with Automated Backups",
    description:
      "Runs Nextcloud with MariaDB and Redis under Docker Compose, with database credentials moved out of the compose file into environment configuration, health checks on MariaDB, and explicit container dependency ordering so services start in the right sequence. Backups are automated on cron with error handling and verification, kept as separate database, file and configuration sets rather than one opaque archive.",
    technologies: [
      "Docker Compose",
      "Nextcloud",
      "MariaDB",
      "Redis",
      "Bash",
      "cron",
    ],
    href: "/blog/Nextcloud_update_8-11-26",
    linkLabel: "Read the Nextcloud writeup",
  },
];

export const CONTACT = {
  address: "Manchester Township, NJ",
  email: "jufair1537@gmail.com",
  Linkedin: "www.linkedin.com/in/justin-fair-503b56b4",
};
