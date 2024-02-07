import React from "react";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import next from "../assets/nextjs.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import css from "../assets/css.png";

const Experience = () => {
  const tech = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT-JS",
      style: "shadow-cyan-600",
    },
    {
      id: 5,
      src: next,
      title: "NEXT-JS",
      style: "shadow-white",
    },
    {
        id: 6,
        src: tailwind,
        title: "Tailwind-CSS",
        style: "shadow-cyan-400",
      },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-50"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex  flex-col justify-center text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience{" "}
          </p>
          <p className="py-6 text-2xl ">These are the Technologies I have Worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          
            {tech.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className= "w-20 mx-auto " />
                <p className="pt-4">{title} </p>
              </div>
            ))}
        
        </div>
      </div>
    </div>
  );
};

export default Experience;
