import React from "react";
import { Link } from "react-scroll";
import selfie from "../pictures/selfie.jpg";
import { useLottie } from "lottie-react";
import WelcomeBot from "../pictures/WelcomeBot.json";
export default function HomePage({ title, subtitle, dark, id }) {
  let options = {
    animationData: WelcomeBot,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-whole">
        <div className="section-picture">{View}</div>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div
            style={{
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <div className="AboutMeButton">
              <Link
                activeClass="active"
                to="AboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    borderRadius: 10,
                  }}
                >
                  About Me
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
