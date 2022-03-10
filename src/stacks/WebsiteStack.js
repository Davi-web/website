import logo from "../logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import HomePage from "../components/HomePage";
import dummyText from "../text/DummyText";
import AboutMeText from "../text/AboutMeText";
import useWindowDimensions from "../components/WindowDimensions";
import Welcome from "../text/Welcome";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import ProjectText from "../text/ProjectsText";
import ContactMe from "../components/ContactMe";
import ContactMeText from "../text/ContactMeText";

const WebsiteStack = () => {
  const app = ["About"];
  const [colorChange, setColorchange] = useState(false);
  const { height, width } = useWindowDimensions();

  // const changeNavbarColor = () => {
  //   // if (scroll.animateTopScroll)
  //   let y = height;
  //   if (window.scrollY >= 825 && window.scrollY < 1650) {
  //     setColorchange(true);
  //   } else if (window.scrollY >= 2475 && window.scrollY < 3280) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };

  // window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className="App">
      <Navbar dark={colorChange} />
      <div>
        <HomePage
          title="Welcome to my website!"
          subtitle={Welcome}
          dark={true}
          id="HomePage"
        />
        <AboutMe
          title="About Me"
          subtitle={AboutMeText}
          dark={false}
          id="AboutMe"
        />
        <Projects
          title="Projects"
          subtitle={ProjectText}
          dark={true}
          id="Projects"
        />
        <ContactMe
          title="Contact Me"
          subtitle={ContactMeText}
          dark={false}
          id="ContactMe"
        />
      </div>
    </div>
  );
};

export default WebsiteStack;
