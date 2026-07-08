import React from "react";
import { motion } from "framer-motion";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  // সিনিয়র লেভেলের গ্লোবাল ক্লায়েন্ট ও টেক লিডদের প্রফেশনাল ফিডব্যাক ডেটা
  const testimonials = [
    {
      name: "Alexander Wright",
      role: "CTO & Co-Founder, Apex Digital (USA)",
      feedback:
        "Mohibur is an exceptional engineer. He stepped into our complex MERN ecosystem and single-handedly optimized our state management and JWT authentication flows. His clean, component-driven approach to Next.js reduced our frontend render cycles drastically. A reliable professional.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Sarah Jenkins",
      role: "Product Manager, Nexus E-Commerce",
      feedback:
        "We hired Mohibur to build a dynamic multi-vendor dashboard, and he blew us away. His attention to detail, implementation of role-based route guards, and flawless integration of Firebase and REST APIs were top-tier. He communicates effectively and delivers production-grade code.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Marcus Aurelius",
      role: "Senior Full-Stack Lead, DevLabs",
      feedback:
        "What sets Mohibur apart is his structured engineering mindset. He doesn’t just write code; he architectures scalability. From designing complex MongoDB query pipelines to crafting smooth micro-interactions with Tailwind CSS, he ensures code maintainability at every level.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    },
  ];

  // অ্যানিমেশন কনফিগারেশন
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }, // একটির পর একটি কার্ড চমৎকারভাবে আসবে
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-neutral-950 text-white relative overflow-hidden border-b border-white/5"
    >
      {/* ব্যাকগ্রাউন্ড লাক্সারি গ্লো */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/[0.02] rounded-full blur-[150px] pointer-events-none" />

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
            Client{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Testimonials.
            </span>
          </h2>
          <p className="text-neutral-500 mt-2 text-md">
            Endorsements from engineering leaders and global clients
          </p>
        </motion.div>

        {/* Testimonials Grid (৩টি কার্ডের জন্য পারফেক্ট গ্রিড লেআউট) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                borderColor: "rgba(255, 255, 255, 0.1)",
              }}
              className="bg-white/[0.01] backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between relative group transition-all duration-300"
            >
              {/* ওয়াটারমার্ক কোটেশন আইকন */}
              <div className="absolute top-6 right-8 text-neutral-900 group-hover:text-blue-500/10 transition-colors duration-300 pointer-events-none">
                <RiDoubleQuotesL size={44} />
              </div>

              <div>
                <p className="text-neutral-400 text-[14px] leading-relaxed italic mb-8 relative z-10 font-light">
                  "{test.feedback}"
                </p>
              </div>

              {/* User Identity Info Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-blue-400/40 transition-colors duration-300"
                />
                <div>
                  <h3 className="text-[15px] font-bold text-neutral-200 tracking-wide">
                    {test.name}
                  </h3>
                  <p className="text-cyan-400 text-[11px] font-medium mt-0.5 tracking-wider uppercase">
                    {test.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
