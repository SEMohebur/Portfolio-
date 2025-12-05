import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "MERN Stack Web Developer",
      company: "Programming Hero (Course Completion)",
      duration: "2025",
      description: [
        "Completed a full-stack web development course covering MongoDB, Express, React, and Node.js.",
        "Built multiple full-stack projects including CRUD applications and e-commerce prototypes.",
        "Gained hands-on experience with REST APIs, JWT Authentication, and responsive UI design.",
      ],
    },
    {
      role: "Frontend Web Developer",
      company: "Personal Projects",
      duration: "2025 - Present",
      description: [
        "Designed and developed responsive websites using React.js, Tailwind CSS, and Bootstrap.",
        "Implemented modern web features including dynamic routing, state management, and API integration.",
        "Focused on clean, scalable, and maintainable code for real-world web applications.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-16 text-center">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-5/12 hover:shadow-2xl transition-shadow duration-300 relative z-10">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600 mt-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm mt-1">{exp.duration}</p>
                    <ul className="mt-3 list-disc list-inside text-gray-600">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
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
