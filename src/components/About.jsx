import aboutImg from "../assets/pic2.webp";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { fromLeft, fromRight } from "../motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl text-white">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div {...fromLeft} className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutImg}
              alt="Justin Fair working at his home desk, typing on a laptop with code on screen alongside two external monitors."
              width={500}
              height={491}
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
        <motion.div {...fromRight} className="w-full lg:w-1/2">
          <div className="flex justify-center text-white lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
