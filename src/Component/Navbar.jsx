import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // অ্যাক্টিভ পেজ ট্র্যাক করার জন্য

  // স্ক্রোল ডিটেকশন (সিনিয়র লেভেল টাচ: স্ক্রোল করলে গ্লাস ইফেক্ট ডাইনামিক হবে)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  // DRY প্রিন্সিপাল: ডেটা অ্যারে অবজেক্টে নিয়ে আসা হয়েছে
  const navLinks = [
    { name: "Home", path: "/", isRoute: true },
    { name: "Projects", path: "/projects", isRoute: true },
    { name: "Contact", path: "/contact", isRoute: false }, // যদি কন্টাক্ট সেকশন একই পেজে অ্যানিমেট করে নিতে চান
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Custom ease-out cubic bezier
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-neutral-900/40 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo with sophisticated hover */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wider text-white group"
        >
          Mohibur
          <span className="inline-block text-blue-500 transition-transform duration-300 group-hover:scale-150">
            .
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-300">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return link.isRoute ? (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-2 transition-colors duration-300 ${
                  isActive ? "text-blue-400" : "hover:text-white"
                }`}
              >
                {link.name}
                {/* Active Line (সিনিয়র টাচ: গ্লাইডিং অ্যানিমেশন) */}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-indigo-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.path}
                className="hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            );
          })}

          {/* Premium Glassmorphic Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1sjKlmqnz9kseLa7K3bD2WoQ58V2qIeuJ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -2,
              scale: 1.02,
              boxShadow: "0px 20px 30px rgba(59, 130, 246, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-white font-semibold shadow-lg shadow-blue-900/20 border border-white/10"
          >
            Resume
            <HiOutlineDownload size={18} />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white focus:outline-none p-2 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
        >
          {open ? <IoClose /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu (Framer Motion দিয়ে তৈরি প্রিমিয়াম ড্রপডাউন) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-full overflow-hidden"
          >
            <div className="mx-4 mb-4 rounded-2xl bg-neutral-900/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
              <div className="flex flex-col gap-5 font-medium text-gray-300">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.isRoute ? link.path : "#"}
                    onClick={closeMenu}
                    className={`text-lg py-1 transition-colors ${
                      location.pathname === link.path
                        ? "text-blue-400 font-semibold"
                        : "hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <a
                  href="https://drive.google.com/file/d/1sjKlmqnz9kseLa7K3bD2WoQ58V2qIeuJ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white font-semibold shadow-lg"
                >
                  Resume
                  <HiOutlineDownload size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
