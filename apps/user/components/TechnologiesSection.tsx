"use client";

import { motion } from "framer-motion";
import { Cpu, Wifi, Bot, SatelliteDish } from "lucide-react";

const technologies = [
  {
    title: "AI Neural Core",
    icon: <Bot className="w-8 h-8 text-blue-500" />,
    description:
      "Real-time decision-making, obstacle avoidance, and adaptive targeting using onboard AI cores.",
  },
  {
    title: "Quantum Navigation",
    icon: <SatelliteDish className="w-8 h-8 text-blue-500" />,
    description:
      "Satellite-independent navigation using quantum gyroscopes and inertial measurement units.",
  },
  {
    title: "Stealth Architecture",
    icon: <Cpu className="w-8 h-8 text-blue-500" />,
    description:
      "Radar-absorbent composites and heat signature cloaking for undetected infiltration.",
  },
  {
    title: "Encrypted Command System",
    icon: <Wifi className="w-8 h-8 text-blue-500" />,
    description:
      "Military-grade AES-256 communication with adaptive frequency hopping and signal obfuscation.",
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="bg-gray-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Underlying Technology
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Built with aerospace-grade innovation, this drone integrates high-end
          computational and defense technologies to achieve mission superiority.
        </motion.p>

        {/* Technology Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-blue-800/20 transition"
            >
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-400 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
