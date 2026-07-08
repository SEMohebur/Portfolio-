import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  // স্ক্রোল টু টপ ফাংশন (ইউজার এক্সপেরিয়েন্স বাড়ানোর জন্য)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-neutral-950 text-neutral-400 relative overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright with Brand glow */}
        <div className="text-sm font-light tracking-wide text-neutral-500 order-2 md:order-1">
          © {new Date().getFullYear()}{" "}
          <span className="text-neutral-300 font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mohibur Rahman
          </span>
          . All rights reserved.
        </div>

        {/* Right Side: Quick Social Links + Scroll to Top */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          {/* Social Icons Container */}
          <div className="flex items-center gap-4 border-r border-white/10 pr-6">
            <a
              href="https://github.com/SEMohebur"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors duration-300"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mdmohebur11/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Smooth Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-md group"
            title="Scroll to top"
          >
            <ArrowUp
              size={16}
              className="transform group-hover:-translate-y-0.5 transition-transform"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
