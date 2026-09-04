export const HERO_CONTENT = `I work in insurance claims and I'm moving into IT support, with cybersecurity as the longer goal. I have a B.S. in Information Technology and CompTIA Security+, and I write up the homelab I'm building toward those roles.`;

export const ABOUT_TEXT = `I'm a workers' compensation adjuster trying to get into IT support, and later into cybersecurity. I'm putting the work on this site so there's something real to point to besides a degree and a cert.

The homelab right now is a Windows Server 2022 domain controller with Group Policy, Wazuh pulling Sysmon off Windows endpoints, a couple of detection rules I wrote for PowerShell bypasses, osTicket on a Raspberry Pi that Wazuh can file tickets into, and Nextcloud on Docker with backups I actually check. I also built Attack Analyst to turn security news into study notes, and ASL Learn, a small web app for looking up ASL sign videos.

Claims work is a lot of reading a file and writing something you can stand behind, and saying so when you don't have the answer yet. That's the part I want to bring with me. I graduated from Kean with a B.S. in Information Technology and I passed Security+. I also use React, Node, MySQL, Java, and PHP enough to debug an app and not get lost talking to developers.`;

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
    description: `Investigate workers' compensation claims in New Jersey and Pennsylvania. Read medical records and other evidence, decide if the claim is valid and what benefits apply, and keep it in line with state law and company procedures. Coordinate with a lot of people on the file, negotiate resolutions, and keep the documentation straight.`,
    technologies: [
      "Microsoft Office Suite",
      "Claims Processing Software",
      "DMS",
    ],
  },
  {
    year: "2026",
    role: "Independent projects",
    company: "Personal",
    description: `Built Attack Analyst, a Python RSS pipeline that turns security headlines into notes I can search later: what happened, how the attack worked, how you'd defend, and what I'd look for in a SIEM. Built ASL Learn, a Next.js app for looking up ASL sign videos, saving study cards, and practicing. It's a study aid, not a replacement for Deaf teachers.`,
    technologies: [
      "Python",
      "RSS",
      "MITRE ATT&CK",
      "Next.js",
      "React",
      "Prisma",
    ],
  },
  {
    year: "2020 - 2026",
    role: "Workers' Compensation Adjuster",
    company: "NJPLIGA",
    description: `Evaluate and process workers' compensation claims: investigation, evidence, and medical records to figure out if the claim is valid.
Calculate benefits from injury severity, medical evidence, and New Jersey WC law.
Negotiate settlements covering treatment, disability ratings, rehab, and compensation.`,
    technologies: ["Word", "Excel", "Claim Center", "DMS"],
  },
  {
    year: "2016 - 2019",
    role: "Claims Service Representative",
    company: "NJPLIGA",
    description: `Support work: bulk letters, data entry, and first-pass claims processing.
Helped write the operations department value and belief statement.
Helped move W-9s onto a paperless filing system.
Took calls from claimants and medical providers.`,
    technologies: ["Word", "Excel", "PowerPoint"],
  },
  {
    year: "2015 - 2016",
    role: "Administrative Clerk",
    company: "Kelly Services",
    description: `Temp work on the ICM Document Solutions project with Honeywell.
Scanned and processed confidential Honeywell documents into electronic format.
Handled the admin work around the production schedule.`,
    technologies: [],
  },
];

// Each project links to the post where the work was actually documented, so a
// reader can verify the claim rather than take it on trust.
export const PROJECTS = [
  {
    title: "Attack Analyst — RSS threat-intel study notes",
    kind: "app",
    summary:
      "Python RSS pipeline that turns security headlines into notes I can search later: what happened, how it worked, how you'd defend, and what I'd hunt in a SIEM. Reading and writing only. No samples.",
    description:
      "A personal pipeline that pulls security RSS feeds, ranks the recent stories, and writes a digest plus longer markdown notes. Each writeup covers what happened, how the attack worked, defenses (patch vs something you can do if you can't patch yet), and what I'd look for in Wazuh or Sysmon when that mapping is honest. I don't download samples or lure sites for this.",
    technologies: [
      "Python",
      "RSS",
      "Markdown",
      "MITRE ATT&CK",
      "Threat intelligence",
    ],
    href: "/blog/attack-analyst-rss-threat-intel",
    linkLabel: "Read how Attack Analyst works",
  },
  {
    title: "ASL Web App — A tool for helping aspiring ASL learners",
    kind: "app",
    summary:
      "Next.js app so I can search ASL sign videos, save study cards, and practice. Guests can search. Accounts use a hashed password. Not a replacement for Deaf-led classes.",
    description:
      "Next.js app for looking up ASL sign videos from YouTube and Spread the Sign, watching them on the page, and saving study cards to an account. Search maps typos and short forms to a normal term. Guests can search and watch; study and practice need a sign-in. I built it as a study aid, not a replacement for Deaf teachers.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "SQLite / Turso",
      "Tailwind CSS",
    ],
    liveHref: "https://asl.jbtechbyte.com",
    liveLabel: "Open ASL Learn",
    href: "/blog/asl-learn-web-app",
    linkLabel: "Read about ASL Learn",
  },
  {
    title: "SOC Monitoring and Detection Engineering with Wazuh",
    kind: "soc",
    summary:
      "Wazuh SIEM with Sysmon on a domain controller and a Windows 11 client. Custom PowerShell-bypass rules, tickets for the serious alerts, and figuring out true vs false vs 'I did that on purpose'.",
    description:
      "Got a real detection loop running on Wazuh, with agents and Sysmon from a Windows Server 2022 domain controller and a Windows 11 workstation. Wrote custom rules 100110 and 100111 for PowerShell with an execution-policy bypass or an encoded command, and a higher-severity version when it runs at High or System, because the stock rule only fired on nested PowerShell. Worked the alerts as tickets: Event IDs 4625, 4720, and 4698, and I learned to read the actual fields instead of trusting the scary rule title.",
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
    kind: "soc",
    summary:
      "osTicket on a Raspberry Pi, then Wazuh alerts at level 12+ open tickets on their own. The install looked broken until I found Pi-hole sitting on port 80 and Apache on 8080.",
    description:
      "Put osTicket on a Raspberry Pi with Apache, PHP, and MariaDB so the lab would have a ticket queue. The setup page would not load. I went down permissions and virtual hosts before I checked listening ports: Pi-hole already had port 80, Apache had moved to 8080, and I was hitting the wrong service. Later I connected Wazuh so anything at level 12 or above opens a ticket, so a serious alert has a place to live besides the dashboard.",
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
    kind: "soc",
    summary:
      "Windows Server 2022 domain controller and Windows 11 client in VirtualBox. A rejected password turned out to be a 14-character Group Policy I decided to keep.",
    description:
      "Windows Server 2022 domain controller and a Windows 11 client in VirtualBox, for user and system admin practice. A new user password kept getting rejected. Group Policy Management showed a 14-character minimum in the Default Domain Policy. I kept the policy and used a password that met it instead of lowering the bar.",
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
    kind: "soc",
    summary:
      "Nextcloud on Docker Compose with MariaDB, Redis, health checks, and cron backups split into database, files, and config so I'm not stuck with one giant archive.",
    description:
      "Nextcloud with MariaDB and Redis under Docker Compose. Credentials live in env files, not in the compose file. MariaDB has a health check, and containers wait on each other so they start in the right order. Backups run on cron with some error handling, and I keep the database, files, and config as separate backups instead of one blob I can't restore from.",
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
