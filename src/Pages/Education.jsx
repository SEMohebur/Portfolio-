import React from "react";

const Education = () => {
  const educationList = [
    {
      degree: "B.A. in Arts",
      college: "Salimuddin Chowdhury College",
      year: "2025",
      major: "Mohibur Rahman",
      icon: "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?q=80&w=687&auto=format&fit=crop",
    },
    {
      degree: "MERN Stack Course",
      college: "Programming Hero",
      year: "2025",
      major: "Full Stack Web Development",
      icon: "https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Fhome2%2Fbanner-thumbnail.jpg&w=3840&q=75",
    },
  ];

  return (
    <section id="education" className="py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-16 text-center">
          Education
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>

          <div className="space-y-12">
            {educationList.map((edu, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-5/12 hover:shadow-2xl transition-shadow duration-300 relative z-10">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 mt-2">{edu.college}</p>
                    <p className="text-gray-500 mt-1">{edu.major}</p>
                    <p className="text-gray-400 mt-2 text-sm">
                      Graduation Year: {edu.year}
                    </p>
                  </div>

                  <div className=" w-36 h-36 md:w-32 md:h-32 mt-6 md:mt-0 md:mx-8 ">
                    <img
                      src={edu.icon}
                      alt="Education Icon"
                      className="w-full h-full object-cover rounded-full shadow-md"
                    />
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

export default Education;
