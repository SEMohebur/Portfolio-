import React from "react";

const About = () => {
  return (
    <section id="about" className="py-6 bg-gray-50">
      <div className="container mx-auto max-w-4xl px-6 flex flex-col gap-6">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
          About Me
        </h2>
        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <p>
            I began my programming journey with{" "}
            <span className="font-semibold">HTML & CSS</span>, then progressed
            to <span className="font-semibold">JavaScript</span> and{" "}
            <span className="font-semibold">React</span>. Over time, I expanded
            my skills to the backend with{" "}
            <span className="font-semibold">Node.js</span> and
            <span className="font-semibold"> MongoDB</span>, enabling me to
            build full-stack MERN applications.
          </p>
          <p>
            I enjoy crafting interfaces that are{" "}
            <span className="italic">fast</span> and
            <span className="italic"> accessible</span>. My passion lies in
            creating user-centric features and solving UX challenges with clean,
            efficient code. Outside programming, I love
            <span className="font-medium"> football, sketching,</span> and
            exploring the latest tech blogs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
