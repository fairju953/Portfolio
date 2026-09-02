import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { fromLeft, sectionTitle } from "../motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 text-white">
      <motion.h2 {...sectionTitle} className="my-10 text-center text-4xl">
        Get in Touch
      </motion.h2>
      <address className="text-center tracking-tighter not-italic">
        <motion.p {...fromLeft} className="my-4">
          {CONTACT.address}
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b transition hover:text-cyan-400"
        >
          {CONTACT.email}
        </a>
        <p className="mt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b transition hover:text-cyan-400"
          >
            View résumé (PDF)
          </a>
        </p>
        <p className="mt-4">
          <a
            href={`https://${CONTACT.Linkedin.replace(/^https?:\/\//, "")}`}
            target="_blank"
            rel="noreferrer"
            className="border-b transition hover:text-cyan-400"
          >
            {CONTACT.Linkedin}
          </a>
        </p>
      </address>
    </div>
  );
};

export default Contact;
