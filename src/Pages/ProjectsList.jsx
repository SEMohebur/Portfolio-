import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  // public/projects.json থেকে ডাইনামিকালি ডেটা ফেচ করা
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-neutral-950 text-white relative overflow-hidden border-b border-white/5"
    >
      {/* গ্লাস লাইٹنگ ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/[0.02] rounded-full blur-[150px] pointer-events-none" />

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
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects.
            </span>
          </h2>
          <p className="text-neutral-500 mt-2 text-md">
            Production-grade architectures and responsive full-stack products
          </p>
        </motion.div>

        {/* Dynamic Animated Grid (ফিল্টার ছাড়া সরাসরি সব প্রজেক্ট শো করবে) */}
        <motion.div layout className="grid md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {projects.map((p) => (
              <motion.div
                layout
                key={p.id || p.title}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex flex-col group hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative overflow-hidden h-48 w-full border-b border-white/5">
                  <img
                    src={
                      p.image ||
                      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
                    }
                    alt={p.title}
                    className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  {(p.category || p.type) && (
                    <div className="absolute top-3 right-3 bg-neutral-950/80 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[10px] uppercase font-bold tracking-widest text-cyan-400">
                      {p.category || p.type}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl text-neutral-100 group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>

                  {/* Description Handling safely */}
                  <p className="text-sm text-neutral-400 mt-3 leading-relaxed flex-1 font-light">
                    {p.description?.length > 110
                      ? `${p.description.slice(0, 110)}...`
                      : p.description || "No description provided."}
                  </p>

                  {/* Technologies tags / badges */}
                  {p.tags && Array.isArray(p.tags) && (
                    <div className="flex flex-wrap gap-1.5 mt-6 mb-6">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-0.5 bg-white/5 text-neutral-300 rounded-md border border-white/[0.02]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <Link
                      to={`/project/${p.id}`}
                      className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white group/btn transition-colors"
                    >
                      View Details
                      <ArrowRight
                        size={14}
                        className="transform group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>

                    <div className="flex gap-4 items-center">
                      {/* GitHub Link Mapping */}
                      {(p.githubLink || p.clientRepo) && (
                        <a
                          href={p.githubLink || p.clientRepo}
                          target="_blank"
                          rel="noreferrer"
                          title="GitHub Repository"
                          className="text-neutral-400 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}

                      {/* Live Link Mapping */}
                      {p.liveLink && p.liveLink !== "#" && (
                        <a
                          href={p.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          title="Live Preview"
                          className="text-neutral-400 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsList;
