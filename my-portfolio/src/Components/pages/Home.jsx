import React from 'react';
import heroImage from '../../assets/heroImage.jpeg';
import { MdArrowRightAlt } from "react-icons/md";

export const Home = () => {
  return (
    <div name="home" className=" bg-white text-black dark:bg-black dark:text-white h-screen w-full bg-gradient-to-b -relative overflow-hidden">
      {/* 3D background */}
      
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-30 z-0 animate-rotate3d"></div>

      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center h-full justify-center px-4 relative z-10">
        
        {/* Left Section */}
        <div className='flex flex-col justify-center h-full  w-full mt-8 md:mt-0'>
          <p></p>
          <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-white">I'm a Ankita Mishra</h2>
          <p className="text-gray-500 py-4 max-w-md text-sm md:text-base lg:text-3xl">
           Frontend Developer
          </p>
          <div>
          <a href='#Contact'>
              <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform duration-300">
              Hire me
                <span className="group-hover:rotate-90 duration-300">
                  <MdArrowRightAlt size={25} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
         
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0">
          <img 
            src={heroImage} 
            alt="my profile" 
            className="rounded-2xl mx-auto w-3/4 h-auto md:w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
