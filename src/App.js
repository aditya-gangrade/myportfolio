import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import MyDesigns from "./components/MyDesigns";
const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <MyDesigns/>
      <Experience />
      <About />
      <Contact/>
      <SocialLinks />
    </>
  );
};

export default App;
