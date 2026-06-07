import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CalendarDays } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Debox Technology",
    duration: "April 2026 - Present",
    desc:"I'm currently working as a full-stack developer. My stack includes React.js, Next.js, Node.js, Redux TypeScript, Javascript Tailwind, SCSS, ORM, Postgres SQL and MongoDB. I'm open to new and exciting opportunities too."  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Filter Trade Technology",
    duration: "Oct 2025 - March 2026",
    desc: "Developed responsive and high-performance user interfaces using React.js, Tailwind CSS, and JavaScript. Integrated REST APIs with Axios, handled authentication flows, and collaborated with backend developers for scalable applications.",
  },
  {
    id: 3,
    role: "Frontend Intern",
    company: "SolstraInfo IT Solutions",
    duration: "Dec 2025 - Feb 2026",
    desc: "Built a production-ready company website using Next.js and Tailwind CSS. Integrated RESTful APIs, managed backend data with MongoDB, and implemented Cloudinary media uploads.",
  },

 
];

const Experience = () => {
  return (
    <section
      name="experience"
      className="w-full py-20 bg-gradient-to-b from-white via-cyan-50 to-white dark:from-black dark:via-gray-900 dark:to-black text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-500 font-semibold uppercase tracking-widest mb-2">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-4 border-cyan-500 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="mb-14 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[42px] top-5">
                <div className="w-6 h-6 rounded-full bg-cyan-500 border-4 border-white dark:border-black shadow-lg shadow-cyan-500/50"></div>
              </div>

              {/* Card */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/20 transition-all duration-300">
                {/* Role */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <Briefcase size={22} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>

                    <p className="text-cyan-500 font-medium">{exp.company}</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                  <CalendarDays size={18} />
                  <span>{exp.duration}</span>
                </div>

                {/* Description */}
                <p className="leading-7 text-gray-700 dark:text-gray-300">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
