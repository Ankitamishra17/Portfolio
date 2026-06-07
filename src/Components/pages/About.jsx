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
          Hi, I'm Ankita Mishra, a Full Stack Developer with a B.Tech degree in
          Information Technology and a passion for building modern, scalable,
          and user-centric web applications. <br /> I specialize in React.js,
          Next.js, Node.js, Express.js, MongoDB, MySQL, and JavaScript, with
          experience developing both frontend interfaces and backend systems. I
          enjoy transforming ideas into real-world digital products that deliver
          seamless user experiences and high performance. <br />
           In addition to
          web development, I have a strong interest in Machine Learning and
          AI-powered applications. I enjoy exploring intelligent technologies
          and integrating them into practical solutions that solve real-world
          problems.  <br /> I am a continuous learner who enjoys exploring new
          technologies, improving problem-solving skills, and staying up to date
          with industry trends. My goal is to build innovative, impactful, and
          scalable software solutions. <br /> I am currently seeking
          opportunities where I can contribute my technical expertise,
          collaborate with talented teams, and continue growing as a Software
          Engineer.
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
