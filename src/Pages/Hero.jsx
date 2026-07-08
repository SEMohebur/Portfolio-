import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import profile from "../assets/mohebur.jpg";

const Hero = () => {
  // Framer motion variants for Staggered animation (সিনিয়র ট্যাকটিক)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-12 bg-neutral-950 overflow-hidden text-white"
    >
      {/* Background Magic: Ambient Glassmorphic Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-blue-400 font-medium backdrop-blur-md w-fit mb-4"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Opportunities
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none"
          >
            Hi, I’m <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Mohibur Rahman
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base md:text-lg text-gray-400 max-w-lg leading-relaxed"
          >
            Frontend Web Developer & MERN Stack Developer. I engineer
            accessible, high-performance web applications that deliver
            exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <motion.a
              href="https://drive.google.com/file/d/1sjKlmqnz9kseLa7K3bD2WoQ58V2qIeuJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg shadow-blue-900/30 border border-white/10"
            >
              Resume <HiOutlineDownload size={18} />
            </motion.a>

            <motion.a
              href="/projects"
              whileHover={{
                y: -2,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3.5 border border-white/10 bg-white/5 rounded-full text-white font-semibold backdrop-blur-sm transition-colors"
            >
              View Projects <FiArrowUpRight size={18} />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-4"
          >
            <motion.a
              href="https://github.com/SEMohebur"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white backdrop-blur-sm transition-colors"
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mdmohebur11/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white backdrop-blur-sm transition-colors"
            >
              <FiLinkedin size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side: Glassmorphic Profile Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          {/* Decorative Ring */}
          <div className="absolute inset-0 max-w-[320px] max-h-[320px] md:max-w-[400px] md:max-h-[400px] mx-auto rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]" />

          {/* Glass Card for Image */}
          <div className="relative p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl max-w-[280px] md:max-w-[360px]">
            <img
              src={profile}
              alt="Mohibur Rahman"
              className="w-full h-auto aspect-square object-cover rounded-2xl shadow-inner filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
