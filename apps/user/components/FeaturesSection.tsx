"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Radar, Crosshair } from "lucide-react";

const features = [
  {
    title: "AI Precision Targeting",
    icon: <Crosshair className="w-8 h-8 text-blue-500" />,
    description:
      "Utilizes neural networks for real-time target identification and autonomous precision strikes.",
  },
  {
    title: "Stealth Mode",
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    description:
      "Low radar cross-section and sound suppression for undetectable missions.",
  },
  {
    title: "360° Surveillance",
    icon: <Eye className="w-8 h-8 text-blue-500" />,
    description:
      "Omnidirectional HD video feed with infrared & night vision capabilities.",
  },
  {
    title: "Long-Range Operation",
    icon: <Radar className="w-8 h-8 text-blue-500" />,
    description:
      "20+ hour flight endurance with adaptive terrain tracking and autonomous return system.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Drone Capabilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Designed for defense, surveillance, and tactical superiority using
          cutting-edge AI and aerospace engineering.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-blue-800/20 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
