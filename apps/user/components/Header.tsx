"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/60 border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold tracking-wide">
          DroneX<span className="text-blue-500">AI</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#features" className="hover:text-blue-400 transition">
            Features
          </a>
          <a href="#technology" className="hover:text-blue-400 transition">
            Technology
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-semibold transition">
          Launch Demo
        </button>

        {/* Mobile Menu Icon (optional) */}
        <div className="md:hidden">
          {/* Replace with a real mobile menu toggle if needed */}
          <button className="text-gray-300 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
