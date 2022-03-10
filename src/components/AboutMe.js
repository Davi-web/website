import React from "react";
import selfie from "../pictures/selfie.jpg";
import { Link } from "react-scroll";
export default function AboutMe({ title, subtitle, dark, id }) {
  return (
    <div className={dark ? " section-dark" : "section"}>
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
            <div className="AboutMeButton">Projects</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
