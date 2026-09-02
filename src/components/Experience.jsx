import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { fromLeft, fromRight, sectionTitle } from "../motion";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        {...sectionTitle}
        className="my-20 text-center text-4xl text-white"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience) => (
          <div
            key={`${experience.company}-${experience.year}`}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div {...fromLeft} className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-200">{experience.year}</p>
            </motion.div>
            <motion.div {...fromRight} className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-sm text-blue-400">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
