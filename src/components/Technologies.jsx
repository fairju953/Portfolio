import { FaDocker, FaEye, FaLinux, FaShieldAlt, FaWindows } from "react-icons/fa";
import { SiApache, SiMariadb, SiNextcloud, SiPowershell, SiRaspberrypi } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }

})

// The stack actually built and documented in the home lab. The visible label is
// the accessible name, so the icons themselves are hidden from screen readers.
const TECHNOLOGIES = [
  { label: "Active Directory", Icon: FaWindows, color: "text-sky-400", duration: 2.5 },
  { label: "Wazuh", Icon: FaShieldAlt, color: "text-teal-400", duration: 3 },
  { label: "Sysmon", Icon: FaEye, color: "text-purple-400", duration: 5 },
  { label: "Linux", Icon: FaLinux, color: "text-amber-400", duration: 2 },
  { label: "Docker", Icon: FaDocker, color: "text-blue-400", duration: 7 },
  { label: "Raspberry Pi", Icon: SiRaspberrypi, color: "text-rose-400", duration: 5.5 },
  { label: "PowerShell", Icon: SiPowershell, color: "text-blue-300", duration: 4 },
  { label: "MariaDB", Icon: SiMariadb, color: "text-orange-300", duration: 6 },
  { label: "Apache", Icon: SiApache, color: "text-red-400", duration: 3.5 },
  { label: "Nextcloud", Icon: SiNextcloud, color: "text-sky-300", duration: 4.5 },
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
];

const Technologies = () => {
  return (  <div className="border-b border-neutral-800 pb-24"> 
  <motion.h2 
  whileInView={{opacity: 1, y: 0}}
  initial={{opacity: 0, y:-100}}
  transition={{duration:1.5}}
  viewport={{ once: true }}
  className="text-white my-20 text-center text-4xl">Technologies</motion.h2>
  <motion.ul
  whileInView={{opacity:1, x:0}}
  initial={{opacity: 0, x: -100}}
  transition={{duration: 1.5}}
  viewport={{ once: true }}
  className="flex flex-wrap items-start justify-center gap-4">
    {TECHNOLOGIES.map(({ label, Icon, color, duration }) => (
      <motion.li
        key={label}
        variants={iconVariants(duration)}
        initial="initial"
        animate="animate"
        className="flex w-28 flex-col items-center gap-2"
      >
        <span className="rounded-2xl border-4 border-neutral-800 p-4">
          <Icon className={`text-6xl ${color}`} aria-hidden="true" />
        </span>
        <span className="text-center text-sm text-neutral-400">{label}</span>
      </motion.li>
    ))}
  </motion.ul>

  <motion.div
  whileInView={{opacity:1, y:0}}
  initial={{opacity: 0, y: 40}}
  transition={{duration: 1}}
  viewport={{ once: true }}
  className="mx-auto mt-12 max-w-3xl px-4"
  >
    <h3 className="mb-4 text-center text-sm uppercase tracking-widest text-neutral-500">
      Also working with
    </h3>
    <ul className="flex flex-wrap justify-center gap-2">
      {ALSO_USING.map((item) => (
        <li key={item} className="rounded bg-neutral-900 px-3 py-1 text-sm text-neutral-300">
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
  </div>
  )
}

export default Technologies
