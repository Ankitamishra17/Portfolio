import React from 'react';
// import heroImage from '../assets/heroImage.jpeg';
import heroImage from '../../assets/heroImage.jpeg';
import { MdArrowRightAlt } from "react-icons/md";

export const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center h-full justify-center px-4">
        
        {/* Left Section */}
        <div className='flex flex-col justify-center h-full mt-8 md:mt-0'>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-white">I'm a Frontend Developer</h2>
          <p className="text-gray-500 py-4 max-w-md text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer transition-transform duration-300">
              Portfolio 
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRightAlt size={25} className="ml-1" />
              </span>
            </button>
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
