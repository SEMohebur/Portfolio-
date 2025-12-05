import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        © {new Date().getFullYear()} Mohibur Rahman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
