"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

const INFO_ITEMS = [
  { label: "Name", value: "Ahmed Raza" },
  { label: "Birthday", value: "1 December 1999" },
  { label: "Degree", value: "Bachelor's in IT" },
  { label: "Experience", value: "2 Years" },
  { label: "Phone", value: "03222289855" },
  { label: "Email", value: "ahmed.raazza22@gmail.com" },
  { label: "Address", value: "North Nazimabad, Karachi, Pakistan" },
  { label: "Freelance", value: "Available" },
];

export const AboutContent = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 md:px-16 lg:px-24 w-full"
    >
      {/* Photo */}
      <motion.div
        variants={slideInFromLeft(0.3)}
        className="relative flex-shrink-0 w-[280px] h-[360px] md:w-[320px] md:h-[400px]"
      >
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 via-cyan-500 to-purple-800 opacity-40 blur-2xl scale-110 -z-10" />

        {/* Border gradient frame */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 p-[2px]">
          <div className="w-full h-full rounded-2xl overflow-hidden bg-[#030014]">
            <Image
              src="/81850130.jpg"
              alt="Ahmed Raza - UI/UX Designer & Web Developer"
              fill
              className="object-cover object-top rounded-2xl"
              draggable={false}
            />
          </div>
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-purple-500/40">
          2 Yrs Experience
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={slideInFromRight(0.3)}
        className="flex flex-col gap-6 max-w-[620px] w-full"
      >
        {/* Title */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            UI/UX Designer &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Web Developer
            </span>
          </h2>
        </div>

        {/* Bio */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Hi, I&apos;m a passionate web developer with years of experience under
          my belt. I&apos;m dedicated to creating functional, user-friendly, and
          visually appealing websites that meet my clients&apos; needs. I
          specialize in front-end development using modern technologies like
          HTML5, CSS3, and JavaScript. I also have expertise in various back-end
          technologies, including PHP and MySQL. My skills include website
          optimization, debugging, and problem-solving. My passion for coding
          extends beyond work as I&apos;m constantly learning and tinkering with
          new technologies. In my free time, you can find me exploring new
          coding languages and experimenting with open-source projects. I thrive
          in team environments, where I can share my knowledge and collaborate
          on innovative projects. I believe that effective communication,
          organization, and attention to detail are essential for any
          project&apos;s success.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {INFO_ITEMS.map((item) => (
            <div key={item.label} className="flex items-start gap-2 text-sm">
              <span className="text-white font-semibold min-w-fit">
                {item.label}:
              </span>
              <span
                className={`text-gray-300 ${
                  item.label === "Freelance"
                    ? "text-green-400 font-semibold"
                    : item.label === "Email"
                      ? "text-cyan-400"
                      : ""
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-2">
          <Link
            href="mailto:ahmed.raazza22@gmail.com"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/30"
          >
            Hire Me
          </Link>
          <a
            href="/New Resume.pdf"
            download="Ahmed_Raza_Resume.pdf"
            className="px-8 py-3 rounded-full border border-purple-500 text-white font-semibold text-sm hover:bg-purple-500/20 hover:scale-105 transition-all duration-300 text-center"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
