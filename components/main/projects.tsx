"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaLaptopCode, FaUserEdit, FaGlobe, FaServer } from "react-icons/fa";

type CategoryType = "All" | "CRM & Web Apps" | "Brand Websites" | "Author Websites";

interface Project {
  title: string;
  category: CategoryType;
  description: string;
  link: string;
  tags: string[];
  gradient: string;
}

const SHOWCASE_PROJECTS: Project[] = [
  // CRM & Web Apps
  {
    title: "Blink Studios CRM",
    category: "CRM & Web Apps",
    description: "Enterprise full-stack Client Relationship Management system built to streamline lead tracking, project management, dynamic reporting, and user data workflows.",
    link: "https://blink-studios-production-crm-fronte.vercel.app/",
    tags: ["React", "Next.js", "API Integration", "Tailwind CSS"],
    gradient: "from-purple-600 to-cyan-500",
  },
  // Brand Websites
  {
    title: "Delores Cents",
    category: "Brand Websites",
    description: "Modern e-commerce & brand platform engineered with responsive layouts, high-performance UI components, and optimized shopping experiences.",
    link: "https://delorescents.pk/",
    tags: ["E-Commerce", "Web Development", "UI/UX"],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Keystone Digital Media",
    category: "Brand Websites",
    description: "Digital agency web platform built for high speed, sleek branding, lead capture, and responsive media showcases.",
    link: "https://keystonedigital.media",
    tags: ["Digital Media", "Web Architecture", "SEO"],
    gradient: "from-blue-600 to-cyan-400",
  },
  {
    title: "Blink Studios Org",
    category: "Brand Websites",
    description: "Official agency web portal featuring dynamic brand portfolios, service presentations, and responsive design execution.",
    link: "https://blinkstudios.org",
    tags: ["Full Stack", "Brand Identity", "Animation"],
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Amazone Publishing",
    category: "Brand Websites",
    description: "Full-scale publishing agency platform offering author onboarding, book release showcases, and marketing services.",
    link: "https://amazonepublishing.com/",
    tags: ["Publishing Platform", "React", "SEO"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "The Amazon Kindle Publisher",
    category: "Brand Websites",
    description: "Digital publication portal optimized for Kindle book conversions, author marketing, and lead acquisition.",
    link: "https://theamazonkindlepublisher.com/",
    tags: ["Web Publishing", "Custom Architecture"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Self Publishing LLC",
    category: "Brand Websites",
    description: "Professional author publishing house website built with customized layouts, service funnels, and fast server response times.",
    link: "https://selfpublishingllc.com",
    tags: ["WordPress / PHP", "Custom Design", "SEO"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "KD Publishing Hub",
    category: "Brand Websites",
    description: "Author platform and book distribution hub designed for online visibility, client management, and dynamic book showcases.",
    link: "https://kdpublishinghub.com",
    tags: ["Web Development", "Content Strategy"],
    gradient: "from-indigo-500 to-purple-600",
  },
  // Author Websites
  {
    title: "Jonelle McCaffrey - Author Site",
    category: "Author Websites",
    description: "Personal author portfolio highlighting published book releases, media kits, press mentions, and direct reader contact channels.",
    link: "https://jonellemccaffrey.com/",
    tags: ["Author Portfolio", "Web Design", "Responsive"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Alexander L. Walden",
    category: "Author Websites",
    description: "Custom web platform built for author Alexander L. Walden featuring interactive book listings and reader engagement sections.",
    link: "https://alexanderlwalden.webtestingdemo.com",
    tags: ["Custom Theme", "JavaScript", "HTML/CSS"],
    gradient: "from-violet-600 to-purple-400",
  },
  {
    title: "Shirley J. Williams",
    category: "Author Websites",
    description: "Sleek author brand website highlighting literary publications, bio, news announcements, and contact funnels.",
    link: "https://shirleyjwilliams.com/",
    tags: ["Web Design", "UI/UX", "Author Hub"],
    gradient: "from-cyan-500 to-emerald-500",
  },
  {
    title: "Sam Pullman",
    category: "Author Websites",
    description: "Clean, responsive author showcase highlighting novels, reader subscriptions, and literary event updates.",
    link: "https://www.sam-pullman.com/",
    tags: ["Author Site", "Responsive UI"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Judy Berk - Author Website",
    category: "Author Websites",
    description: "Elegant author portfolio showcasing published works, reviews, author background, and reader connection portals.",
    link: "https://judyberk.com/",
    tags: ["Publishing Hub", "Custom Design"],
    gradient: "from-rose-500 to-amber-500",
  },
  {
    title: "Zelda Hills",
    category: "Author Websites",
    description: "Interactive author platform showcasing book series, character guides, and custom book order links.",
    link: "https://zelda-hills.webtestingdemo.com/",
    tags: ["Web Testing Demo", "Front-End"],
    gradient: "from-purple-600 to-blue-500",
  },
  {
    title: "Sari Skinnider",
    category: "Author Websites",
    description: "Tailored author showcase platform highlighting biographical works, reader engagement, and digital book ordering.",
    link: "https://sari-skinnider.webtestingdemo.com",
    tags: ["Author Showcase", "Web Architecture"],
    gradient: "from-teal-500 to-cyan-600",
  },
];

const CATEGORIES: { label: CategoryType; icon: React.ComponentType<{ className?: string }> }[] = [
  { label: "All", icon: FaGlobe },
  { label: "CRM & Web Apps", icon: FaServer },
  { label: "Brand Websites", icon: FaLaptopCode },
  { label: "Author Websites", icon: FaUserEdit },
];

export const ProjectsShowcase = () => {
  const [activeTab, setActiveTab] = useState<CategoryType>("All");

  const filteredProjects =
    activeTab === "All"
      ? SHOWCASE_PROJECTS
      : SHOWCASE_PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 w-full overflow-hidden"
    >
      {/* Background watermark */}
      <span
        aria-hidden
        className="absolute text-[clamp(60px,12vw,130px)] font-black text-white/[0.03] select-none tracking-widest pointer-events-none top-10"
      >
        PORTFOLIO
      </span>

      {/* Heading */}
      <div className="flex flex-col items-center mb-12 z-10">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          FEATURED PROJECTS
        </h2>
        <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2" />
        <p className="text-gray-400 text-sm md:text-base mt-4 text-center max-w-2xl px-4">
          A selection of live enterprise CRMs, brand platforms, and author websites built and engineered by me.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 z-10 px-4">
        {CATEGORIES.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
              activeTab === label
                ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/30 scale-105"
                : "bg-[#0a0118]/80 text-gray-300 border border-purple-500/20 hover:border-purple-500/60 hover:text-white"
            }`}
          >
            <Icon className="text-sm" />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl px-6 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col justify-between p-6 rounded-2xl border border-purple-500/20 bg-[#0a0118]/70 backdrop-blur-md hover:border-purple-500/60 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              {/* Subtle Gradient Glow */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
              />

              <div>
                {/* Category Badge & Live Link */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-9 h-9 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition-all"
                    title="Visit Live Site"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Footer: Tags & Button */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-gray-400 bg-purple-950/30 border border-purple-500/15 px-2.5 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-purple-500/40 bg-purple-950/20 text-white font-medium text-sm hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 hover:border-transparent transition-all duration-300"
                >
                  <span>Visit Website</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
