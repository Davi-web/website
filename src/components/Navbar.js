import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useLottie } from "lottie-react";

const Navbar = ({ dark }) => {
  const [logo, setLogo] = useState();

  useEffect(() => {
    import("../pictures/logo.json").then(setLogo);
  }, []);
  const options = {
    animationData: logo,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

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
