"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"" | "success" | "error">("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple front-end fallback demonstration
    if (formData.name && formData.email && formData.message) {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 4000);
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-20 w-full overflow-hidden"
    >
      {/* Background watermark text */}
      <span
        aria-hidden
        className="absolute text-[clamp(60px,12vw,130px)] font-black text-white/[0.03] select-none tracking-widest pointer-events-none top-10"
      >
        CONTACT
      </span>

      {/* Main Section Heading */}
      <div className="flex flex-col items-center mb-16 z-10">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          CONTACT ME
        </h2>
        <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2" />
      </div>

      <div className="w-full max-w-6xl px-6 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Let&apos;s Build Something Together
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Feel free to reach out if you have a project in mind, need technical advice, or simply want to connect. I&apos;m always open to discussing new opportunities and creative ideas.
          </p>

          <div className="flex flex-col gap-4">
            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-purple-500/20 bg-[#0a0118]/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Email</p>
                <a
                  href="mailto:an3698329@gmail.com"
                  className="text-white hover:text-cyan-400 font-medium transition-colors"
                >
                  an3698329@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-purple-500/20 bg-[#0a0118]/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                <FaPhoneAlt className="text-white text-lg" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Phone</p>
                <a
                  href="tel:03222289855"
                  className="text-white hover:text-cyan-400 font-medium transition-colors"
                >
                  03222289855
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-purple-500/20 bg-[#0a0118]/60 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Location</p>
                <p className="text-white font-medium">North Nazimabad, Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl border border-purple-500/20 bg-[#0a0118]/80 backdrop-blur-md shadow-xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-white text-sm font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ahmed Raza"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#030014] border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-white text-sm font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-[#030014] border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="text-white text-sm font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 rounded-xl bg-[#030014] border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-white text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Ahmed, I have a project..."
                required
                className="w-full px-4 py-3 rounded-xl bg-[#030014] border border-purple-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:opacity-90 hover:scale-[1.02] transition-all shadow-lg shadow-purple-500/30"
            >
              <FaPaperPlane className="text-sm" />
              Send Message
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm text-center mt-2">
                Thank you! Your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center mt-2">
                Please fill in all required fields.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};
