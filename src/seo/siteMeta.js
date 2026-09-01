export const SITE_URL = "https://www.jbtechbyte.com";
export const SITE_NAME = "Justin Fair";
export const OG_IMAGE = `${SITE_URL}/og-card.png`;

export const DEFAULT_TITLE =
  "Justin Fair - IT Support & Cybersecurity";

export const DEFAULT_DESCRIPTION =
  "IT professional moving into cybersecurity and SOC analysis. Home lab work with Active Directory, Wazuh, Sysmon, and osTicket, documented end to end.";

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Justin Fair",
  url: SITE_URL,
  jobTitle: "IT Support & Systems Professional",
  description: DEFAULT_DESCRIPTION,
  sameAs: [
    "https://www.linkedin.com/in/justin-fair-503b56b4",
    "https://github.com/fairju953",
  ],
};
