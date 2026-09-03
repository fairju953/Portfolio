import { Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { fadeUp, sectionTitle } from "../motion";

const linkClass =
  "inline-flex items-center gap-1 text-sm font-medium text-teal-800 underline underline-offset-4 hover:text-teal-700";

const Projects = () => {
  return (
    <div className="border-b border-stone-200/80 pb-4">
      <motion.h2
        {...sectionTitle}
        className="my-20 text-center text-4xl text-slate-900"
      >
        Projects
      </motion.h2>

      <p className="mx-auto mb-12 max-w-3xl px-4 text-center text-slate-600">
        Everything below is work I built and documented. Home-lab SOC projects
        sit next to apps (threat-intel notes and ASL Learn). Each card links to
        the writeup; live apps also link out.
      </p>

      <div className="mx-auto max-w-4xl px-4">
        {PROJECTS.map((project) => (
          <motion.article
            key={project.title}
            {...fadeUp}
            className="surface mb-8 p-6"
          >
            <h3 className="mb-3 text-xl font-semibold text-slate-900">
              {project.title}
            </h3>
            <p className="mb-4 text-slate-600">{project.description}</p>

            <ul className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded bg-slate-100 px-2 py-1 text-sm font-medium text-teal-800"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {project.liveHref && (
                <a
                  href={project.liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  aria-label={`${project.liveLabel} (opens in a new tab)`}
                >
                  {project.liveLabel}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              )}
              <Link to={project.href} className={linkClass}>
                {project.linkLabel}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
