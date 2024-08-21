import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/aditya-gangrade-689177220",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/aditya-gangrade",
    },
    {
      id: 3,
      child: (
        <>
          Youtube <FaYoutube size={30} />
        </>
      ),
      href: "https://www.youtube.com/channel/UCO9CmPCDStLrjMh1ih-66SA",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/_a.d.i.t.y.a_g/",
    },
    {
      id: 5,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:adityagangrade007@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Aditya_Gangrade_Resume-compressed.pdf",
      download: true,
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="relative">
      {/* Toggle Button for Small Screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-4 left-4 z-50 p-2 bg-gray-700 rounded-full text-white shadow-md"
      >
        {isOpen ? "Close" : "Open"}
      </button>

      {/* Slide-In Panel for Small Screens */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        } lg:hidden`}
      >
        <ul>
          {links.map(({ id, child, href, download, style }) => (
            <li
              key={id}
              className={`flex justify-between items-center h-14 px-4 mb-4 bg-gray-600 rounded-md ${style}`}
            >
              <a href={href} target="_blank" download={download} className="flex justify-between items-center w-full text-white">
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, download, style }) => (
            <li
              key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
            >
              <a href={href} target="_blank" download={download} className="flex justify-between items-center w-full text-white">
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
