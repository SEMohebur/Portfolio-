import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  // ১০০% ফিক্সড এবং রেজুমে সিনক্রোনাইজড স্কিল ডেটা অবজেক্ট
  const skillGroups = {
    Frontend: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux & Context API", level: 82 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Bootstrap 5", level: 80 },
    ],
    "Backend & DB": [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "REST API & Middleware", level: 85 },
      { name: "JWT & Role-Based Auth", level: 85 },
    ],
    "Cloud & Tools": [
      { name: "Firebase Auth", level: 85 },
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 85 },
      { name: "Vercel & Netlify", level: 85 },
      { name: "VS Code & Figma", level: 90 },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-neutral-950 text-white relative overflow-hidden border-b border-white/5"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills.
            </span>
          </h2>
          <p className="text-neutral-500 mt-2 text-md">
            My technical toolbox, backed by production-ready projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillGroups).map(([group, items], groupIndex) => (
            <motion.div
              key={group}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: groupIndex * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-350 group"
            >
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                {group}
              </h3>

              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.name} className="block">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-neutral-300 text-sm tracking-wide">
                        {item.name}
                      </span>
                      <span className="text-xs font-semibold text-neutral-500 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
                        {item.level}%
                      </span>
                    </div>

                    <div className="w-full bg-neutral-900 rounded-full h-2 overflow-hidden border border-white/[0.02]">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.1,
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
