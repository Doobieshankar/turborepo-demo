"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 max-w-xl mx-auto mb-10"
        >
          Have questions or inquiries about DroneX AI systems? Fill out the form
          below and we’ll get back to you.
        </motion.p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <form
          action="https://formsubmit.co/your-email@example.com" // Replace or handle via API
          method="POST"
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-md font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
