import { CERTIFICATIONS, EDUCATION } from "../constants";
import { motion } from "framer-motion";

// Deliberately not a component: as a plain render helper it stays out of the
// prop-types contract for two fields that never come from outside this file.
const credentialCard = ({ credential, institution, detail }) => (
  <li key={credential} className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6">
    <h4 className="mb-1 font-semibold text-white">{credential}</h4>
    <p className="text-sm text-blue-400">{institution}</p>
    <p className="mt-2 text-sm text-neutral-400">{detail}</p>
  </li>
);

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-white my-20 text-center text-4xl"
      >
        Education &amp; Certifications
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto grid max-w-4xl gap-8 px-4 md:grid-cols-2"
      >
        <section>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-neutral-500">Education</h3>
          <ul className="flex flex-col gap-4">{EDUCATION.map(credentialCard)}</ul>
        </section>

        <section>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-neutral-500">Certifications</h3>
          <ul className="flex flex-col gap-4">{CERTIFICATIONS.map(credentialCard)}</ul>
        </section>
      </motion.div>
    </div>
  );
};

export default Education;
