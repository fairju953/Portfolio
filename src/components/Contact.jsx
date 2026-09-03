import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { fromLeft, sectionTitle } from "../motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="border-b border-stone-200/80 pb-20 text-slate-900"
    >
      <motion.h2 {...sectionTitle} className="my-10 text-center text-4xl">
        Get in Touch
      </motion.h2>
      <address className="text-center tracking-tighter not-italic text-slate-700">
        <motion.p {...fromLeft} className="my-4">
          {CONTACT.address}
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b border-slate-400 transition hover:text-teal-800"
        >
          {CONTACT.email}
        </a>
        <p className="mt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-slate-400 transition hover:text-teal-800"
          >
            View résumé (PDF)
          </a>
        </p>
        <p className="mt-4">
          <a
            href={`https://${CONTACT.Linkedin.replace(/^https?:\/\//, "")}`}
            target="_blank"
            rel="noreferrer"
            className="border-b border-slate-400 transition hover:text-teal-800"
          >
            {CONTACT.Linkedin}
          </a>
        </p>
      </address>
    </div>
  );
};

export default Contact;
