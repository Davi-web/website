import React, { useCallback } from "react";
import { Link } from "react-scroll";
import selfie from "../pictures/selfie.jpg";
import { useLottie } from "lottie-react";
import WelcomeBot from "../pictures/WelcomeBot.json";
import background from "../pictures/background.jpeg";
import { useNavigate } from "react-router-dom";
export default function HomePage({ title, subtitle, dark, id }) {
  let options = {
    animationData: WelcomeBot,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <div
      className={(dark ? " section-dark" : "section") + "background"}
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="section-whole">
        <div
          className="section-picture"
          style={{ marginLeft: 100, paddingRight: 100 }}
        >
          {View}
        </div>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
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
                    cursor: "pointer",
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
