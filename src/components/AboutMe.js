import React from "react";
import profile from "../pictures/profile.png";
import { Link } from "react-scroll";
export default function AboutMe({ title, subtitle, dark, id }) {
  return (
    <div className={dark ? " section-dark" : "section"}>
      <div className="section-whole">
        <div className="section-picture">
          <img
            src={profile}
            alt="profile"
            style={{ borderRadius: "50%", margin: 80, position: "relative" }}
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
              cursor: "pointer",
            }}
          >
            <div className="AboutMeButton">Projects</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
