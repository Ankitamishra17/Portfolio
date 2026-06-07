import React, { useState } from "react";
import { ports } from "../constants/portfolio";
import { motion } from "framer-motion";

const categories = ["all", "frontend", "fullstack", "ml"];

const Portfolio = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? ports : ports.filter((p) => p.category === active);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div
      name="projects"
      className=" w-full py-20 md:py-32 bg-white text-black"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 inline border-b-4 border-gray-400">
            Projects
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            Explore my latest work and creative projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 capitalize font-medium text-sm rounded-full transition-all duration-300 border-2 ${
                active === cat
                  ? "bg-gray-800 text-white border-gray-800"
                  : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              variants={itemVariants}
              className="group relative w-full h-full rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container - FULL HEIGHT */}
              <div className="relative overflow-hidden bg-gray-200 w-full h-75">
                <motion.img
                  src={p.src}
                  alt={p.title || "Project"}
                  className="w-full h-full "
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/85 flex flex-col justify-center items-center p-6"
                >
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white text-center mb-4">
                    {p.title || "Project"}
                  </h3>

                  {/* Tech Tags */}
                  {p.tech && (
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-700 text-gray-200 px-3 py-1 rounded font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-3">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2 bg-white text-black rounded-md font-medium text-sm hover:bg-gray-100 transition-colors"
                        >
                          View Live
                        </motion.button>
                      </a>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noreferrer">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2 border-2 border-white text-white rounded-md font-medium text-sm hover:bg-white/10 transition-colors"
                        >
                          Code
                        </motion.button>
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {p.title || "Project"}
                </h3>
                {p.category && (
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                    {p.category}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://github.com/Ankitamishra17"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-300 shadow-lg"
            >
              View More on GitHub →
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;