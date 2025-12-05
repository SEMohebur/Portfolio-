import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/mohebur.jpg";

const Hero = () => {
  return (
    <header id="hero" className=" flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Hi, I’m <span className="text-blue-600">Mohibur Rahman</span>
          </motion.h1>
          <p className="mt-4 text-lg text-gray-700">
            Frontend Web Developer & MERN Stack Developer — I build accessible
            and performant web apps that people enjoy using.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="/resume.pdf"
              download="Mohibur-Rahman-Resume.pdf"
              className="px-5 py-3 bg-blue-600 text-white rounded-md"
            >
              Download Resume
            </a>
            <a href="/projects" className="px-5 py-3 border rounded-md">
              View Projects
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://github.com/SEMohebur"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mdmohebur11/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={profile}
            alt="Mohibur Rahman"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
