import {CONTACT} from "../constants"
import {motion} from "framer-motion"

const Contact = () => {
  return ( <div className=" text-white border-b border-neutral-900 pb-20"> 
  <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:0.5}}
      viewport={{ once: true }}
  className="my-10 text-center text-4xl">Get in Touch</motion.h2>
  <address className="text-center tracking-tighter not-italic">
    <motion.p 
     whileInView={{opacity:1, x:0}}
     initial={{opacity:0, x: -100}}
     transition={{duration:1}}
     viewport={{ once: true }}
    className="my-4">{CONTACT.address}</motion.p>
    <motion.p 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x: 100}}
    transition={{duration:1}}
    viewport={{ once: true }}
    className="my-4">
      <a href={`tel:${CONTACT.phoneNo.replace(/[^\d+]/g, "")}`} className="border-b hover:text-cyan-400 transition">{CONTACT.phoneNo.trim()}</a>
    </motion.p>
    <a href={`mailto:${CONTACT.email}`} className="border-b hover:text-cyan-400 transition">{CONTACT.email}</a>
   <p className="mt-4">
     <a
       href={`https://${CONTACT.Linkedin.replace(/^https?:\/\//, "")}`}
       target="_blank"
       rel="noreferrer"
       className="border-b hover:text-cyan-400 transition"
     >
       {CONTACT.Linkedin}
     </a>
   </p> 
    </address> 
  </div>
  )
}

export default Contact
