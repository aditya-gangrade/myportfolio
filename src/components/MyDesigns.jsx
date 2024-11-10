import React from "react";
import linkedin from "../assets/My Linkdin banner.png";
import grandmachal from "../assets/grand machal.png";
import lenskart from "../assets/www.lenskart.com.png";
import hyundai from "../assets/hyndai.png";
import hyundai1 from "../assets/hyndai (1).png";
import one from "../assets/1.png";
import music from "../assets/Music Travelling Mini vlog.png";
import { useState } from "react";

const MyDesigns = () => {
  return (
    <div
      name="mydesigns"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-50"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-2xl ">
            These are the Technologies I have Worked with
          </p>
        </div>

        {/* Updated Grid System */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {/* Image 1 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-cyan-500">
            <img src={grandmachal} height={645} width={480} alt="Grand Machal" />
          </div>

          {/* Image 2 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
            <img src={music} height={645} width={480} alt="Music Vlog" />
          </div>

          {/* Image 3 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-cyan-500">
            <img src={lenskart} height={645} width={480} alt="Lenskart" />
          </div>

          {/* Image 4 - Mobile specific image */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
            <img src={hyundai} height={645} width={480} alt="Hyundai" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDesigns;
