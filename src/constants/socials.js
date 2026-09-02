import { FaGithub, FaLinkedin } from "react-icons/fa";

// Shared by the navbar and the footer so both stay in sync. Every entry needs
// a label: these render as icon-only links, and the label is the only
// accessible name a screen reader has to work with.
export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justin-fair-503b56b4",
    Icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/fairju953",
    Icon: FaGithub,
  },
];
