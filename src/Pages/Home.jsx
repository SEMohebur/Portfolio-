import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Experience></Experience>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
