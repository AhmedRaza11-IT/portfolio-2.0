"use client";

import { motion } from "framer-motion";
import {
  FaServer,
  FaDatabase,
  FaCogs,
  FaClipboardList,
  FaUsersCog,
  FaWordpress,
  FaLaptopCode,
  FaEye,
  FaTachometerAlt,
  FaTools,
} from "react-icons/fa";

const SERVICE_CATEGORIES = [
  {
    categoryTitle: "Backend & Architecture Services",
    services: [
      {
        icon: FaServer,
        title: "Custom API Development & Integration",
        description:
          "Designing secure, scalable RESTful APIs in Python and C# to connect third-party platforms, streamline data flows, and power modern web applications.",
      },
      {
        icon: FaDatabase,
        title: "Database Design & Query Optimization",
        description:
          "Schema architecture, relational database management, and query tuning using PostgreSQL and MySQL for high-performance data processing.",
      },
      {
        icon: FaCogs,
        title: "Automated System Infrastructure",
        description:
          "Building reliable automated background utilities, including asynchronous email delivery pipelines, dynamic reporting modules, and real-time alert systems.",
      },
      {
        icon: FaClipboardList,
        title: "Logging Engine & Analytics Architecture",
        description:
          "Setting up robust server-side logging systems to monitor application health, track system usage, and simplify debugging workflows.",
      },
    ],
  },
  {
    categoryTitle: "Full-Stack & Web Engineering",
    services: [
      {
        icon: FaUsersCog,
        title: "Custom CRM Development",
        description:
          "Building tailored, full-stack Client Relationship Management portals to streamline data maintenance, track leads, and automate business processes.",
      },
      {
        icon: FaWordpress,
        title: "WordPress Architecture & Theme Customization",
        description:
          "Developing high-performance WordPress sites with custom PHP/HTML/CSS configurations, tailored layout rules, and dynamic builder integrations.",
      },
      {
        icon: FaLaptopCode,
        title: "Full-Stack Web Application Development",
        description:
          "Engineering scalable, end-to-end web applications combining robust backend API services with clean, responsive front-end user interfaces.",
      },
      {
        icon: FaEye,
        title: "Computer Vision & AI Integration",
        description:
          "Integrating custom deep learning and vision pipelines (such as real-time tracking or face detection algorithms) directly into modern backend systems.",
      },
      {
        icon: FaTachometerAlt,
        title: "Website Optimization & Migration",
        description:
          "Refactoring existing codebases, optimizing database queries, and managing structural URL migrations to enhance performance and SEO routing.",
      },
      {
        icon: FaTools,
        title: "System Maintenance & Technical Support",
        description:
          "Continuous server-side troubleshooting, layout debugging, API maintenance, and administrative system updates.",
      },
    ],
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center py-20 w-full overflow-hidden"
    >
      {/* Background watermark text */}
      <span
        aria-hidden
        className="absolute text-[clamp(60px,12vw,130px)] font-black text-white/[0.03] select-none tracking-widest pointer-events-none top-10"
      >
        SERVICES
      </span>

      {/* Main Section Heading */}
      <div className="flex flex-col items-center mb-16 z-10">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          MY SERVICES
        </h2>
        <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2" />
      </div>

      {/* Render Each Category */}
      <div className="w-full max-w-6xl px-6 md:px-16 lg:px-24 flex flex-col gap-16 z-10">
        {SERVICE_CATEGORIES.map((cat, catIdx) => (
          <div key={cat.categoryTitle} className="flex flex-col gap-8">
            {/* Category Title */}
            <div className="flex items-center gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                {cat.categoryTitle}
              </h3>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent" />
            </div>

            {/* Grid of Services for this category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
              {cat.services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-purple-500/20 bg-[#0a0118]/60 backdrop-blur-sm hover:border-purple-500/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Header: Icon + Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0">
                      <service.icon className="text-white text-xl" />
                    </div>
                    <h4 className="text-white font-bold text-lg leading-tight group-hover:text-cyan-300 transition-colors duration-200">
                      {service.title}
                    </h4>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-purple-500/20 to-transparent" />

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
