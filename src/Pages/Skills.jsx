import React from "react";

const Skills = () => {
  const skillGroups = {
    Frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "NextJs", level: 75 },
      { name: "Redux", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap 5", level: 80 },
    ],
    Backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
    Tools: [
      { name: "Git", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 80 },
      { name: "Postman", level: 85 },
    ],
  };

  return (
    <section id="skills" className="py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
          My Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillGroups).map(([group, items]) => (
            <div
              key={group}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                {group}
              </h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-800">
                        {item.name}
                      </span>
                      <span className="text-gray-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all duration-1000"
                        style={{
                          width: `${item.level}%`,
                          background:
                            "linear-gradient(90deg, #3b82f6, #06b6d4)",
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
