import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import {DiRedis} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {BiLogoPostgresql} from "react-icons/bi";
import{motion} from "framer-motion";

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

// Each icon carries a label so the section is not silent to a screen reader.
const TECHNOLOGIES = [
  { label: "React", Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
  { label: "Next.js", Icon: TbBrandNextjs, color: "text-white", duration: 3 },
  { label: "MongoDB", Icon: SiMongodb, color: "text-green-500", duration: 5 },
  { label: "Redis", Icon: DiRedis, color: "text-red-700", duration: 2 },
  { label: "Node.js", Icon: FaNodeJs, color: "text-green-500", duration: 7 },
  { label: "PostgreSQL", Icon: BiLogoPostgresql, color: "text-sky-700", duration: 5.5 },
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
  className="flex flex-wrap items-center justify-center gap-4">
    {TECHNOLOGIES.map(({ label, Icon, color, duration }) => (
      <motion.li
        key={label}
        variants={iconVariants(duration)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"
      >
        <Icon className={`text-7xl ${color}`} title={label} role="img" />
      </motion.li>
    ))}
  </motion.ul>
  </div>
  )
}

export default Technologies
