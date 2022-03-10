import React from "react";
import selfie from "../pictures/selfie.jpg";
import { Link } from "react-scroll";
export default function AboutMe({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-whole">
        <div className="section-picture">
          <img
            src={selfie}
            alt="Selfie"
            width="200"
            height="280"
            style={{ padding: 50 }}
          ></img>
        </div>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="AboutMeButton">
            <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{
                justifyContent: "center",
              }}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
