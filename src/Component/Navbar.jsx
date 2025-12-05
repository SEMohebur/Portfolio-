import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur z-50 p-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Mohibur Rahman
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/projects" className="hover:text-blue-600">
            Projects
          </Link>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl focus:outline-none"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md p-5 space-y-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/projects"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-600"
          >
            Projects
          </Link>

          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-600"
          >
            Contact
          </a>

          <a
            href="https://drive.google.com/file/d/1bMoD93FKyNarmNcBfC91FYUNElK6RKBb/preview"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 bg-blue-600 text-white rounded-md text-center"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
