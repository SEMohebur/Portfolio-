import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  // আপনার রেজুমে এবং রিয়েল ডেটা অনুযায়ী ১০০% ফিক্সড লিস্ট
  const educationList = [
    {
      degree: "Bachelor of Arts (B.A.)",
      institution: "Salimuddin Chowdhury University College",
      duration: "2021 – 2025",
      details:
        "Graduated with a focus on humanities and academic core curriculum.",
      icon: <FaGraduationCap size={22} className="text-blue-400" />,
    },
    {
      degree: "Complete Web Development Course",
      institution: "Programming Hero",
      duration: "Issued Dec 2025",
      details:
        "Intensive training on MERN Stack (MongoDB, Express.js, React, Node.js), JavaScript (ES6+), and modern frontend workflows.",
      icon: <FaCertificate size={20} className="text-cyan-400" />,
    },
  ];

  // স্ক্রোল অ্যানিমেশনের জন্য ভ্যারিয়েন্ট
  const cardVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  });

  return (
    <section
      id="education"
      className="py-24 bg-neutral-950 text-white relative overflow-hidden border-b border-white/5"
    >
      {/* ব্যাকগ্রাউন্ড গ্লাস গ্লো */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold tracking-tight">
            Education &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Timeline.
            </span>
          </h2>
          <p className="text-neutral-500 mt-2 text-md">
            My academic background and professional certifications
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line with Glass Glow */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent"></div>

          <div className="space-y-12">
            {educationList.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between relative pl-10 md:pl-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Center Node (গ্লোয়িং ডট) */}
                  <div className="absolute left-3.5 md:left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] z-20"></div>

                  {/* Glassmorphic Data Card */}
                  <motion.div
                    variants={cardVariants(index)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{
                      y: -4,
                      backgroundColor: "rgba(255, 255, 255, 0.03)",
                    }}
                    className="bg-white/[0.01] backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] w-full md:w-[45%] relative z-10 group transition-all duration-300"
                  >
                    {/* Header with Icon */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-inner group-hover:border-blue-500/30 transition-colors">
                        {edu.icon}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase block mb-1">
                          {edu.duration}
                        </span>
                        <h3 className="text-xl font-bold text-neutral-100 leading-snug">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>

                    <p className="text-neutral-300 font-medium text-[15px]">
                      {edu.institution}
                    </p>
                    <p className="text-neutral-500 mt-3 text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  </motion.div>

                  {/* Empty Spacer to maintain balance in Desktop Grid */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
