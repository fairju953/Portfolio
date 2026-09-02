import { Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return ( <div className="border-b border-neutral-900 pb-4">
    <motion.h2 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y: -100}}
    transition={{duration:0.5}}
    viewport={{ once: true }}
    className="text-white my-20 text-center text-4xl">Projects</motion.h2>

    <p className="mx-auto mb-12 max-w-3xl px-4 text-center text-neutral-400">
      Everything below runs in a home lab I build, break and document. Each project links to
      the post where the work was written up.
    </p>

    <div className="mx-auto max-w-4xl px-4">
        {PROJECTS.map((project) => (
        <motion.article
          key={project.title}
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0, y: 60}}
          transition={{duration:0.6}}
          viewport={{ once: true }}
          className="mb-8 rounded-lg border border-neutral-800 bg-neutral-900/40 p-6"
        >
          <h3 className="mb-3 text-xl font-semibold text-white">{project.title}</h3>
          <p className="mb-4 text-neutral-400">{project.description}</p>

          <ul className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-blue-400">
                {tech}
              </li>
            ))}
          </ul>

          <Link
            to={project.href}
            className="inline-flex items-center gap-1 text-sm font-medium text-purple-300 underline underline-offset-4 hover:text-purple-200"
          >
            {project.linkLabel}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.article>
        ))}
    </div>
     </div>
  );
};

export default Projects
