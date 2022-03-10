import React, { Component, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useLottie } from "lottie-react";
import logo from "../pictures/logo.json";

const Navbar = ({ dark }) => {
  const options = {
    animationData: logo,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className={dark ? "nav-dark" : "nav"} id="navbar">
      <div className="nav-content">
        <div className="lottie-navbar">{View}</div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="HomePage"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Homepage
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
