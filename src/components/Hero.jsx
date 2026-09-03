import { Link } from "react-router-dom";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pic.webp";
import { motion } from "framer-motion";
import { heroEnter } from "../motion";

const Hero = () => {
  return (
    <div className="border-b border-stone-200/80 pb-16">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-start md:gap-8">
        <div className="flex flex-col items-start">
          <motion.h1
            variants={heroEnter(0)}
            initial="hidden"
            animate="visible"
            className="pb-5 text-5xl font-semibold tracking-tight text-slate-900 lg:mt-8 lg:text-7xl"
          >
            Justin Fair
          </motion.h1>
          <motion.p
            variants={heroEnter(0.5)}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-xl font-medium text-teal-800"
          >
            IT Support & Security Operations
          </motion.p>
          <motion.p
            variants={heroEnter(0.7)}
            initial="hidden"
            animate="visible"
            className="mt-2 text-base text-slate-600"
          >
            Active Directory · Wazuh SIEM · Help Desk · App projects
          </motion.p>
          <motion.p
            variants={heroEnter(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-5 leading-relaxed text-slate-700"
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.div
            variants={heroEnter(1.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-teal-800 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-teal-700"
            >
              View résumé (PDF)
            </a>
            <Link
              to="/blog"
              className="inline-block rounded-lg border border-slate-400 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white/80"
            >
              Read the blog
            </Link>
          </motion.div>
        </div>

        <div className="flex shrink-0 justify-center md:justify-start">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-80 w-56 overflow-hidden rounded-full shadow-xl ring-4 ring-white/80 sm:h-[26rem] sm:w-72"
          >
            <img
              className="h-full w-full object-cover object-top"
              src={profilePic}
              alt="Justin Fair"
              width={300}
              height={472}
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
