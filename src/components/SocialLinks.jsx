import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqazEtVUlIOUdjVV8xQlo2MExVczZsd05EXzBMQXxBQ3Jtc0tsU0MyeVlfbkFpTWxVZml2TmNQejFiTHc5WG1wWXVxRnd4NWZrUXVLOXA0eHFYOWRTRkdfNU0xS0tERlhPS0ZDaDRqb0pOQkI3OUluaWNxb0tGS3A3TnhuX0ZtX1lKWk0xbE9zQmc4UGloNzJabDV2SQ&q=www.linkedin.com%2Fin%2Faditya-gangrade-689177220",
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
      href: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqbE9zZTAyYnNObV9oTGlXalZsQjFCQkJvQlFMZ3xBQ3Jtc0tsM2NuLUp3MW9QczBXQXJMd3ZUM1N6dmszSWNFWUJGQW12UlJqSU9WS052V090NW1EcDVTejNZbUhwWUFoMlp1dTBQanA2eWhLM1ViQWVxMnlkUDFqNl9GMjNKbzhMRDA5dXFQNlNfNUdNLVN2anZuNA&q=https%3A%2F%2Fwww.instagram.com%2F_a.d.i.t.y.a_g%2F",
    },
    {
      id: 5,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />{" "}
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
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a href={href} target="_blank" download={download} className="flex justify-between items-center w-full text-white">
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
