import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProjectsList from "./Pages/ProjectsList";

import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import ProjectDetail from "./Pages/ProjectDetail";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home></Home>
              </div>
            }
          />

          <Route
            path="/contact"
            element={
              <div>
                <Contact></Contact>
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div>
                <ProjectsList />
              </div>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}
