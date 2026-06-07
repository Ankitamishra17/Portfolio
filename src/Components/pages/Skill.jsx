// import React from "react";
// import { techs } from "../constants/skill";

// const Skill = () => {
//   return (
//     <div
//       name="skills"
//       className="bg-gradient-to-b bg-white text-black dark:bg-black dark:text-white  w-full py-20 relative overflow-hidden"
//     >
//       {/* 3D background */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 z-0 animate-rotate3d"></div>
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black dark:text-white relative z-10">
//         <div>
//           <p className="text-4xl font-bold border-b-4 border-gray-500 pt-12 inline mt-8 ">
//             Skills
//           </p>
//           <p className="py-6">These are the technologies I've worked with</p>
//         </div>

//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
//             >
//               <img src={src} alt="" className="w-20 mx-auto" />
//               <p className="mt-4"> {title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skill;

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../constants/skill";

const Skill = () => {
  return (
    <div
      name="skills"
      className="w-full py-24  md:pl-24 bg-white text-black dark:bg-black dark:text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl bottom-10 right-10 animate-pulse"></div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </h2>
          <p className="mt-4 text-gray-500">
            A balanced skill set across frontend, backend, and tools
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 transition"
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                {category.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 rounded-full 
                    bg-gray-200 dark:bg-gray-800 
                    text-gray-700 dark:text-gray-300
                    hover:bg-cyan-500 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
