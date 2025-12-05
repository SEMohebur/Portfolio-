import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              <img
                src={p.image}
                alt={p.title}
                className="rounded-md mb-4 object-cover h-40 w-full"
              />
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2 flex-1">
                {p.description.slice(0, 100)}...
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  to={`/project/${p.id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  View Details
                </Link>
                <a
                  href={p.clientRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border rounded-md"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
