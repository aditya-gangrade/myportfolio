import React from "react";
import MyProfile from "../assets/My_profile-PhotoRoom.png-PhotoRoom.png"; // Note: I changed the variable name to follow camelCase convention
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex text-white flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full items-center md:items-start">
          <h2 className="text-4xl font-bold sm:text-7xl">
            Hi, I am Aditya a Front-End Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Final year Btech.Computer Science Student Studying in
            Medicaps University, Indore and I am looking for a Job role as a 
            Frontend Developer, Graphic Designer or UI/UX Designer
          </p>
          
          {/* Center the Portfolio button on mobile */}
          <div className="flex justify-center md:justify-start w-full">
            <Link
              to="/"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        
        <div>
          <img
            src={MyProfile}
            height={548}
            width={434}
            alt="My Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
