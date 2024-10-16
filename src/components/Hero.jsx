import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pic.jpg";
import {motion} from "framer-motion";

const container = (delay) => (
  { hidden: {x: -100, opacity:0 },
  visible: { x:0 , opacity:1 ,
  transition: {duration: 0.5, delay: delay}, },
}
)

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mg-35">
      <div className="flex flex-wrap items-center">
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start lg:pr-8">
          <motion.h1 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-white pb-5 text-6xl font-thin tracking-tight lg:mt-15 lg:text-8xl px-7">
            Justin Fair
          </motion.h1>
          <motion.span 
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl tracking-tight px-10">
            Full Stack Developer
          </motion.span>
          <motion.p 
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="text-white my-2 max-w-xl py-6 font-light px-10">
            {HERO_CONTENT}
          </motion.p>
        </div>

    
        <div className="w-full lg:w-1/2 flex justify-start">  
  <motion.img 
    initial={{x: 100, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{duration: 1, delay: 1.2}}
    className="rounded-full max-w-xs lg:max-w-md px-3 lg:ml-20"
    src={profilePic}
    alt="Justin Fair"
  />
</div>

      </div>
    </div>
  );
};

export default Hero;
