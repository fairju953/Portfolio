import { CERTIFICATIONS, EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { fadeUp, sectionTitle } from "../motion";

const credentialCard = ({ credential, institution, detail }) => (
  <li
    key={credential}
    className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6"
  >
    <h4 className="mb-1 font-semibold text-white">{credential}</h4>
    <p className="text-sm text-blue-400">{institution}</p>
    <p className="mt-2 text-sm text-neutral-400">{detail}</p>
  </li>
);

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        {...sectionTitle}
        className="my-20 text-center text-4xl text-white"
      >
        Education &amp; Certifications
      </motion.h2>

      <motion.div
        {...fadeUp}
        className="mx-auto grid max-w-4xl gap-8 px-4 md:grid-cols-2"
      >
        <section>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-neutral-500">
            Education
          </h3>
          <ul className="flex flex-col gap-4">
            {EDUCATION.map(credentialCard)}
          </ul>
        </section>

        <section>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-neutral-500">
            Certifications
          </h3>
          <ul className="flex flex-col gap-4">
            {CERTIFICATIONS.map(credentialCard)}
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default Education;
