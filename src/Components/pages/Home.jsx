import React, { useState, useEffect } from 'react';
import heroImage from '../../assets/heroImage.jpeg';
import { MdArrowRightAlt } from "react-icons/md";


export const Home = () => {
  const roles = ["Frontend Developer", "UI Designer", "Web Creator"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      name="home"
      className="bg-gradient-to-b from-blue-900 via-black to-black text-white h-screen w-full relative overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-400 rounded-full opacity-20 animate-float z-0"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-600 rounded-full opacity-30 animate-float z-0"></div>

      {/* 3D Rotating Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 z-0 animate-rotate3d"></div>

      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center h-full justify-center px-4 relative z-10">
        
        {/* Left Section */}
        <div className='flex flex-col justify-center h-full w-full mt-8 md:mt-0 animate-fadeInUp'>
          <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white">
            I'm Ankita Mishra
          </h2>
          
          {/* Rotating Role Text */}
          <p className="text-cyan-300 py-4 max-w-md text-2xl md:text-3xl lg:text-4xl font-light transition-opacity duration-700">
            {roles[index]}
          </p>

          <div>
            <a href='#Contact'>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg shadow-cyan-500/50">
                Hire me
                <span className="group-hover:rotate-90 duration-300">
                  <MdArrowRightAlt size={25} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Right Section - Floating Image */}
        <div className="mt-8 md:mt-0 animate-float">
          <img 
            src={heroImage} 
            alt="my profile" 
            className="rounded-full mx-auto w-40 h-40 md:w-60 md:h-60 object-cover shadow-lg shadow-blue-500/30"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
