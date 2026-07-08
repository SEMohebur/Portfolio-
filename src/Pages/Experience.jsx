import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";

const Experience = () => {
  // আপনার রেজুমের রিয়েল প্রজেক্ট ফিচারগুলোকে এক্সপেরিয়েন্সে কনভার্ট করা হয়েছে
  const experiences = [
    {
      role: "Full-Stack MERN Developer",
      company: "Independent / Production Projects",
      duration: "2025 - Present",
      icon: <FaBriefcase size={20} className="text-blue-400" />,
      description: [
        "Developed full-featured MERN applications, including an Online Book Shop featuring secure role-based authentication and a dynamic cart system.",
        "Engineered an automated reading-day tracking and notification system that alerts users prior to access expiration (3, 2, 1 days).",
        "Built utility bill management backends utilizing Node.js, Express.js, and MongoDB, secured with JWT and advanced route middlewares.",
      ],
    },
    {
      role: "Frontend & Next.js Developer",
      company: "Open Source & Client Prototypes",
      duration: "2025",
      icon: <FaCode size={20} className="text-cyan-400" />,
      description: [
        "Architected a scalable Multi-Vendor E-commerce application using Next.js, implementing complete CRUD operations for dynamic vendor dashboards.",
        "Integrated reliable Firebase Authentication for access control and optimized category-based dynamic routing for products (mobiles, cars, electronics).",
        "Focused heavily on building pixel-perfect, fully responsive user interfaces with Tailwind CSS and smooth micro-interactions via Framer Motion.",
      ],
    },
  ];

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
      id="experience"
      className="py-24 bg-neutral-950 text-white relative overflow-hidden border-b border-white/5"
    >
      {/* গ্লাস থিম ফুটিয়ে তোলার ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/[0.02] rounded-full blur-[120px] pointer-events-none" />

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
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experience.
            </span>
          </h2>
          <p className="text-neutral-500 mt-2 text-md">
            My journey in building high-performance web solutions
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center justify-between relative pl-10 md:pl-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Center Node (গ্লোয়িং ডট) */}
                  <div className="absolute left-3.5 md:left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-neutral-950 border-2 border-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-20"></div>

                  {/* Glassmorphic Experience Card */}
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
                    {/* Card Header with Icon */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 shadow-inner group-hover:border-cyan-500/30 transition-colors">
                        {exp.icon}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase block mb-1">
                          {exp.duration}
                        </span>
                        <h3 className="text-xl font-bold text-neutral-100 leading-snug">
                          {exp.role}
                        </h3>
                      </div>
                    </div>

                    <p className="text-neutral-400 font-medium text-[15px] mb-4">
                      {exp.company}
                    </p>

                    {/* Description Bullets */}
                    <ul className="space-y-2.5 text-neutral-400 text-[14px] leading-relaxed list-none pl-0">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1.5 block min-w-[5px] h-[5px] rounded-full bg-blue-500"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
