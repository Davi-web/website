import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useLottie } from "lottie-react";
import background from "../pictures/background.jpeg";
export default function HomePage({ title, dark, id }) {
  const [welcomeBot, setWelcomeBot] = useState();

  useEffect(() => {
    import("../pictures/WelcomeBot.json").then(setWelcomeBot);
  }, []);
  let options = {
    animationData: welcomeBot,
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
