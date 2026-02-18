import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b bg-white text-black dark:bg-black dark:text-white py-20 relative overflow-hidden"
    >
      {/* 3D background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 z-0 animate-rotate3d"></div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20 text-black dark:text-white">
          I'm Ankita Mishra, a B.Tech graduate in Information Technology from
          Chaudhary Charan Singh University, Meerut. I have successfully
          completed a 6-month internship in Frontend Development where I gained
          hands-on experience building responsive and scalable web applications
          using React.js, JavaScript (ES6+), HTML, and CSS.
          <br />
          <br />
          During my internship, I worked on real-world projects involving API
          integration, state management, and performance optimization while
          ensuring clean and maintainable code.
        </p>

        <br />

        <p className="text-xl text-black dark:text-white">
          I am passionate about creating user-friendly interfaces and delivering
          seamless user experiences. Currently, I am seeking a full-time
          opportunity as a Frontend Developer / React.js Developer where I can
          contribute my skills, grow professionally, and add value to a dynamic
          team.
        </p>
      </div>
    </div>
  );
};

export default About;
