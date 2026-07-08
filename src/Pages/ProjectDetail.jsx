import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowLeft,
  Code,
  Layers,
  AlertCircle,
  Rocket,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        const proj = data.find((p) => p.id === id);
        setProject(proj);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // 🌀 প্রিমিয়াম গ্লাস মরফিজম স্পিনার / লোডার
  if (loading)
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-2 border-white/5" />
          <div className="absolute inset-0 rounded-full border-2 border-t-blue-500 animate-spin" />
        </div>
      </div>
    );

  // ❌ প্রোজেক্ট না পাওয়া গেলে সুন্দর এরর মেসেজ
  if (!project)
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center gap-4">
        <AlertCircle className="w-12 h-12 text-red-400" />
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <Link
          to="/"
          className="text-sm text-blue-400 hover:underline flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );

  // stack অথবা tags দুইটার যেকোনো একটা থাকলেই হ্যান্ডেল করবে
  const techStack = project.stack || project.tags || [];

  return (
    <main className="min-h-screen bg-neutral-950 text-white py-20 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড নিওন গ্লো */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-80 md:h-[460px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl relative"
        >
          <img
            src={
              project.image ||
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
            }
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/[0.01] backdrop-blur-xl border border-white/5 rounded-2xl p-8 md:p-12 -mt-20 relative z-20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
        >
          {/* Badge & Title */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
              {project.title}
            </h1>
            {project.category && (
              <span className="bg-blue-500/10 border border-blue-500/30 text-blue-400 px-3 py-1 text-xs uppercase tracking-widest font-bold rounded-md">
                {project.category}
              </span>
            )}
          </div>

          <p className="text-neutral-400 leading-relaxed text-md font-light max-w-4xl">
            {project.description}
          </p>

          {/* Tech Stack Section */}
          {techStack.length > 0 && (
            <div className="mt-10 pt-8 border-t border-white/5">
              <h2 className="text-lg font-semibold text-neutral-200 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                Core Architecture & Technologies
              </h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 bg-white/5 border border-white/[0.05] rounded-lg text-xs font-medium text-neutral-300 tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features / Challenges / Improvements Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-10 pt-8 border-t border-white/5">
            {project.challenges && (
              <div className="bg-neutral-900/40 border border-white/5 p-6 rounded-xl">
                <h3 className="text-md font-semibold text-neutral-200 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  Technical Challenges
                </h3>
                <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            )}

            {project.improvements && (
              <div className="bg-neutral-900/40 border border-white/5 p-6 rounded-xl">
                <h3 className="text-md font-semibold text-neutral-200 flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-cyan-400" />
                  Future Scalability Plans
                </h3>
                <p className="mt-3 text-sm text-neutral-400 font-light leading-relaxed">
                  {project.improvements}
                </p>
              </div>
            )}
          </div>

          {/* Action Call-to-Buttons */}
          <div className="mt-12 flex items-center gap-4 flex-wrap pt-6 border-t border-white/5">
            {project.liveLink && project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.15)] flex items-center gap-2"
              >
                <span>Live Deploy</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {(project.githubLink || project.clientRepo) && (
              <a
                href={project.githubLink || project.clientRepo}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <span>Source Repository</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ProjectDetail;
