import aboutImg from "../assets/pic2.webp";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { fromLeft, fromRight } from "../motion";

const About = () => {
  return (
    <div id="about" className="border-b border-stone-200/80 pb-4">
      <h2 className="my-20 text-center text-4xl text-slate-900">
        About <span className="text-slate-500">Me</span>
      </h2>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          {...fromLeft}
          className="flex justify-center text-slate-700 md:justify-start"
        >
          <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
        </motion.div>
        <motion.div
          {...fromRight}
          className="flex items-center justify-center md:justify-end"
        >
          <img
            className="rounded-2xl shadow-lg ring-4 ring-white/80"
            src={aboutImg}
            alt="Justin Fair working at his home desk, typing on a laptop with code on screen alongside two external monitors."
            width={500}
            height={491}
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
