import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
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

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project not found
      </div>
    );

  return (
    <main className="max-w-6xl mx-auto py-20 ">
      {/* Hero Section */}
      <div className="w-full h-80 md:h-[420px] overflow-hidden rounded-2xl shadow-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-all duration-700"
        />
      </div>

      {/* Content Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-16 relative z-10">
        {/* Title + Description */}
        <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
        <p className="mt-4 text-gray-700 leading-relaxed text-lg">
          {project.description}
        </p>

        {/* Stack Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">
            Main Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {project.stack.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-gray-100 border rounded-full text-sm font-medium tracking-wide"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Two Columns Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Challenges</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">
              Improvements & Future Plans
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {project.improvements}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex gap-4 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Live Demo
          </a>

          <a
            href={project.clientRepo}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border rounded-xl shadow-sm hover:bg-gray-100 transition"
          >
            GitHub (Client)
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
