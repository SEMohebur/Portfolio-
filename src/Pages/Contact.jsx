import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // এখানে পরবর্তীতে EmailJS বা backend API ইন্টিগ্রেট করতে পারবেন
    alert(
      "🚀 Message Sent Successfully! Mohibur will get back to you shortly.",
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="contact"
      className="py-24 bg-neutral-950 text-white relative overflow-hidden border-b border-white/5"
    >
      {/* গ্লাস থিম ব্যাকগ্রাউন্ড গ্লো */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Touch.
            </span>
          </h2>
          <p className="text-neutral-500 mt-2 text-md max-w-md mx-auto">
            Have a project in mind, a job opportunity, or just want to say
            hello? Let's build something epic.
          </p>
        </motion.div>

        {/* Info & Form Container Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          {/* Left Column: Contact Cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between gap-6"
          >
            {/* Email Card */}
            <div className="bg-white/[0.01] backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] group hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-blue-400 group-hover:border-blue-400/30 group-hover:bg-blue-500/5 transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                    Email
                  </h3>
                  <a
                    href="mailto:mdmohebur11@gmail.com"
                    className="text-lg font-bold text-neutral-200 hover:text-blue-400 mt-1 transition-colors flex items-center gap-1 group/link"
                  >
                    mdmohebur11@gmail.com
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone/WhatsApp Card */}
            <div className="bg-white/[0.01] backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] group hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-emerald-400 group-hover:border-emerald-400/30 group-hover:bg-emerald-500/5 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                    Phone / WhatsApp
                  </h3>
                  <a
                    href="tel:+8801987573972"
                    className="text-lg font-bold text-neutral-200 hover:text-emerald-400 mt-1 transition-colors flex items-center gap-1 group/link"
                  >
                    +880 1987 573972
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover/link:text-emerald-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* Timing & SLA Note */}
            <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl flex-1 flex flex-col justify-center">
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                I typically respond within{" "}
                <strong className="text-blue-400 font-semibold">
                  1–3 hours
                </strong>{" "}
                on weekdays. For immediate consultations or urgent engineering
                requirements, feel free to call or drop a message directly via
                WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Premium Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleFormSubmit}
            className="bg-white/[0.01] backdrop-blur-md border border-white/5 p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between"
          >
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-neutral-200 mb-2">
                Send an Instant Message
              </h3>

              <div className="relative">
                <input
                  type="text"
                  required
                  className="w-full bg-neutral-900/50 border border-white/5 rounded-xl p-4 text-sm text-white placeholder-neutral-600 focus:border-blue-500/50 focus:bg-neutral-900 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full bg-neutral-900/50 border border-white/5 rounded-xl p-4 text-sm text-white placeholder-neutral-600 focus:border-blue-500/50 focus:bg-neutral-900 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>

              <div className="relative">
                <textarea
                  rows={5}
                  required
                  className="w-full bg-neutral-900/50 border border-white/5 rounded-xl p-4 text-sm text-white placeholder-neutral-600 focus:border-blue-500/50 focus:bg-neutral-900 focus:ring-1 focus:ring-blue-500/30 outline-none resize-none transition-all duration-300"
                  placeholder="Tell me about your project, target timeline, and budget estimation..."
                />
              </div>
            </div>

            <button className="w-full mt-6 px-6 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.2)] flex items-center justify-center gap-2 group">
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.form>
        </motion.div>

        {/* Footer Policy Text */}
        <p className="text-center text-xs text-neutral-600 mt-12 font-light">
          Your privacy is safe with me. All professional communications are
          strictly secured and private.
        </p>
      </div>
    </section>
  );
}
