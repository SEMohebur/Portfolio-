import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaUserCheck, FaGamepad } from "react-icons/fa";

const About = () => {
  // স্ক্রোল অ্যানিমেশনের জন্য ভ্যারিয়েন্ট (ইউজার স্ক্রোল করে নিচে নামলে এটি চমৎকারভাবে ভেসে উঠবে)
  const fadeInTarget = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // DRY প্রিন্সিপাল অনুযায়ী স্কিল ও ইন্টারেস্টের ডেটা অ্যারে
  const coreSkills = [
    {
      name: "Frontend (React, Next.js)",
      icon: <FaCode className="text-blue-400" />,
    },
    {
      name: "Backend (Node.js, Express)",
      icon: <FaServer className="text-purple-400" />,
    },
    {
      name: "Database (MongoDB)",
      icon: <FaServer className="text-green-400" />,
    },
    {
      name: "UX & Accessibility",
      icon: <FaUserCheck className="text-indigo-400" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-neutral-950 text-white relative overflow-hidden border-b border-white/5"
    >
      {/* গ্লাস মরফিজম ব্যাকগ্রাউন্ড লাইট ইফেক্ট */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading (Sticky on large screens for a senior tech layout) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInTarget}
            className="md:col-span-4 md:sticky md:top-28"
          >
            <h2 className="text-4xl font-extrabold tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Me.
              </span>
            </h2>
            <div className="h-1 w-12 bg-blue-500 rounded-full mt-4 hidden md:block" />
          </motion.div>

          {/* Right Column: Detailed Story & Interactive Glass Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInTarget}
            className="md:col-span-8 space-y-8"
          >
            {/* Story Paragraphs */}
            <div className="space-y-5 text-neutral-400 text-lg leading-relaxed font-normal">
              <p>
                I began my programming journey with{" "}
                <span className="text-white font-medium">HTML & CSS</span>, then
                quickly fell in love with the dynamic world of{" "}
                <span className="text-blue-400 font-medium">JavaScript</span>{" "}
                and <span className="text-blue-400 font-medium">React</span>.
                Over the years, I've scaled my architecture to the backend with{" "}
                <span className="text-purple-400 font-medium">Node.js</span> and{" "}
                <span className="text-green-400 font-medium">MongoDB</span>,
                allowing me to build complete, highly secure MERN applications.
              </p>
              <p>
                As a developer with a product mindset, I enjoy crafting
                interfaces that are
                <span className="text-white italic">
                  {" "}
                  blazing fast
                </span> and{" "}
                <span className="text-white italic">
                  universally accessible
                </span>
                . My focus is always on solving real UX challenges with clean,
                modular, and maintainable code.
              </p>
            </div>

            {/* Core Expertise Section with Glassmorphism Cards */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-4">
                Core Focus & Stack
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {coreSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(255, 255, 255, 0.06)",
                      borderColor: "rgba(255, 255, 255, 0.15)",
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/5 transition-colors duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
                  >
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                      {skill.icon}
                    </div>
                    <span className="text-neutral-200 font-medium text-md">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Micro Hobbies Footer */}
            <div className="pt-4 flex items-center gap-3 text-neutral-500 text-sm border-t border-neutral-900">
              <FaGamepad size={16} className="text-neutral-600" />
              <span>
                Beyond the IDE, you'll find me analyzing football tactics,
                sketching, or deep-diving into tech architecture blogs.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
