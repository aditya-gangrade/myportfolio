import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4  border-gray-500 ">
            about
          </p>
          <p className="text-xl mt-10">
            I am a Final year Btech.Computer Science Student Studying in
            Medicaps University, Indore and I am looking for a Job role as a
            Frontend Developer, UI/UX Designer or FullStack Developer
          </p>
          <br />

          <div className="footer flex  justify-between ">
            <div>
              {" "}
              <p className="text-4xl  font-bold inline border-b-4  border-gray-500 ">
                Skills
              </p>
              <ul className="text-2xl  mt-10">
                <li>C++</li>
                <li>JAVA</li>
                <li>React-JS</li>
                <li>Next-JS</li>
                <li>Mongo DB</li>
                <li>Good Communication</li>
                <li>Team Management</li>
              </ul>
            </div>
            <div>
              {" "}
              <p className="text-4xl  font-bold inline border-b-4  border-gray-500 ">
                Area of Intrest
              </p>
              <ul className="text-2xl  mt-10">
                <li>Music Vocal</li>
                <li>VideoGraphy and Editing</li>
                <li>Travelling</li>
                <li>Swimming</li>
              </ul>
            </div>
          </div>
      
      
        </div>
      </div>
    </div>
  );
};

export default About;
