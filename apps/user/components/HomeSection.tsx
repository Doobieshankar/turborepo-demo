"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 py-20"
      id="home"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none z-0" />

      {/* Layout wrapper */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Autonomous Weapon Drone System
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Next-gen aerial surveillance and strike platform equipped with AI
            targeting and stealth technology.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition">
              Learn More
            </button>
            <button className="px-6 py-3 border border-gray-500 hover:border-white rounded-xl font-semibold transition">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full flex justify-center"
        >
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/drone.jpg"
              alt="Weapon Drone"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
