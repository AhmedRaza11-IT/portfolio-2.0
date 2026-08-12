"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030014]/90 text-gray-300 border-t border-[#7042f8]/30 backdrop-blur-md pt-12 pb-6 px-6 md:px-16 z-50 relative">
      <div className="max-w-6xl m-auto flex flex-col gap-10">
        {/* Top Row: Brand Info + Links + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                draggable={false}
              />
              <span className="font-bold text-xl text-white tracking-wider">
                Ahmed Raza
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              UI/UX Designer & Full-Stack Web Developer specializing in high-performance web applications, modern APIs, and clean digital experiences.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg text-white border-b border-purple-500/30 pb-2 w-fit">
              Navigation
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#about-me" className="hover:text-cyan-400 transition-colors w-fit">
                About Me
              </a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors w-fit">
                Skills & Technologies
              </a>
              <a href="#services" className="hover:text-cyan-400 transition-colors w-fit">
                Services
              </a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors w-fit">
                Contact Me
              </a>
            </div>
          </div>

          {/* Direct Contact Column */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg text-white border-b border-purple-500/30 pb-2 w-fit">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <a href="mailto:ahmed.raazza22@gmail.com" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <FaEnvelope className="text-purple-400" />
                <span>ahmed.raazza22@gmail.com</span>
              </a>
              <a href="tel:03222289855" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <FaPhoneAlt className="text-purple-400" />
                <span>03222289855</span>
              </a>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-400" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Divider & Social Media */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-purple-500/20 gap-4">
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/AhmedRaza11-IT"
              target="_blank"
              rel="noreferrer noopener"
              className="w-10 h-10 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition-all shadow-md"
              title="GitHub"
            >
              <RxGithubLogo className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ahmed-raza-38795b17b/"
              target="_blank"
              rel="noreferrer noopener"
              className="w-10 h-10 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition-all shadow-md"
              title="LinkedIn"
            >
              <RxLinkedinLogo className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/me__ahmed__raza?igsh=bG85c2U3bTZ5djdm"
              target="_blank"
              rel="noreferrer noopener"
              className="w-10 h-10 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition-all shadow-md"
              title="Instagram"
            >
              <RxInstagramLogo className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.facebook.com/share/1CRg8mC8Nm/"
              target="_blank"
              rel="noreferrer noopener"
              className="w-10 h-10 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition-all shadow-md"
              title="Facebook"
            >
              <FaFacebook className="w-4 h-4" />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-400 text-center sm:text-right">
            &copy; {new Date().getFullYear()} Ahmed Raza. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
