import {
  FaDocker,
  FaEye,
  FaLinux,
  FaShieldAlt,
  FaWindows,
} from "react-icons/fa";
import {
  SiApache,
  SiMariadb,
  SiNextcloud,
  SiPowershell,
  SiRaspberrypi,
} from "react-icons/si";
import { motion } from "framer-motion";
import { bob, fadeUp, fromLeft, sectionTitle } from "../motion";

// The stack actually built and documented (home lab plus independent apps).
// The visible label is the accessible name, so the icons themselves are hidden
// from screen readers.
const TECHNOLOGIES = [
  {
    label: "Active Directory",
    Icon: FaWindows,
    color: "text-sky-700",
    duration: 2.5,
  },
  { label: "Wazuh", Icon: FaShieldAlt, color: "text-teal-700", duration: 3 },
  { label: "Sysmon", Icon: FaEye, color: "text-purple-700", duration: 5 },
  { label: "Linux", Icon: FaLinux, color: "text-amber-700", duration: 2 },
  { label: "Docker", Icon: FaDocker, color: "text-blue-700", duration: 7 },
  {
    label: "Raspberry Pi",
    Icon: SiRaspberrypi,
    color: "text-rose-700",
    duration: 5.5,
  },
  {
    label: "PowerShell",
    Icon: SiPowershell,
    color: "text-sky-700",
    duration: 4,
  },
  { label: "MariaDB", Icon: SiMariadb, color: "text-orange-700", duration: 6 },
  { label: "Apache", Icon: SiApache, color: "text-red-700", duration: 3.5 },
  {
    label: "Nextcloud",
    Icon: SiNextcloud,
    color: "text-sky-700",
    duration: 4.5,
  },
];

// Real parts of the lab that have no recognisable icon of their own.
const ALSO_USING = [
  "Windows Server 2022",
  "Windows 11",
  "Group Policy",
  "Custom SIEM detection rules",
  "Windows Event Log analysis",
  "osTicket",
  "Docker Compose",
  "Pi-hole",
  "VirtualBox",
  "Bash",
  "Redis",
  "cron",
  "Python",
  "RSS",
  "Next.js",
  "React",
  "Prisma",
];

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-stone-200/80 pb-24">
      <motion.h2
        {...sectionTitle}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl text-slate-900"
      >
        Technologies
      </motion.h2>
      <motion.ul
        {...fromLeft}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-start justify-center gap-4"
      >
        {TECHNOLOGIES.map(({ label, Icon, color, duration }) => (
          <motion.li
            key={label}
            variants={bob(duration)}
            initial="initial"
            animate="animate"
            className="flex w-28 flex-col items-center gap-2"
          >
            <span className="surface p-4">
              <Icon className={`text-6xl ${color}`} aria-hidden="true" />
            </span>
            <span className="text-center text-sm text-slate-600">{label}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div {...fadeUp} className="mx-auto mt-12 max-w-3xl px-4">
        <h3 className="mb-4 text-center text-sm uppercase tracking-widest text-slate-500">
          Also working with
        </h3>
        <ul className="flex flex-wrap justify-center gap-2">
          {ALSO_USING.map((item) => (
            <li
              key={item}
              className="rounded bg-slate-100 px-3 py-1 text-sm text-slate-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Technologies;
