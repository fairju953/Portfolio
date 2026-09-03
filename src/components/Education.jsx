import { CERTIFICATIONS, EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { fadeUp, sectionTitle } from "../motion";

const credentialCard = ({ credential, institution, detail }) => (
  <li key={credential} className="surface p-6">
    <h4 className="mb-1 font-semibold text-slate-900">{credential}</h4>
    <p className="text-sm text-teal-800">{institution}</p>
    <p className="mt-2 text-sm text-slate-600">{detail}</p>
  </li>
);

const Education = () => {
  return (
    <div id="education" className="border-b border-stone-200/80 pb-4">
      <motion.h2
        {...sectionTitle}
        className="my-20 text-center text-4xl text-slate-900"
      >
        Education &amp; Certifications
      </motion.h2>

      <motion.div
        {...fadeUp}
        className="mx-auto grid max-w-4xl gap-8 px-4 md:grid-cols-2"
      >
        <section>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-slate-500">
            Education
          </h3>
          <ul className="flex flex-col gap-4">
            {EDUCATION.map(credentialCard)}
          </ul>
        </section>

        <section>
          <h3 className="mb-4 text-sm uppercase tracking-widest text-slate-500">
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
