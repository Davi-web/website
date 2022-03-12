import React from "react";
import selfie from "../pictures/selfie.jpg";
import { useLottie } from "lottie-react";
import ContactUsAnimation from "../pictures/ContactUs.json";
import groovyWalkAnimation from "../pictures/groovyWalk.json";
import WelcomeBot from "../pictures/WelcomeBot.json";
import { BsLinkedin, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";
import { VscFilePdf } from "react-icons/vsc";
import Pdf from "../pictures/resume.pdf";

export default function ContactMe({ title, subtitle, dark, id }) {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);
  return (
    <div className={dark ? " section-end-color" : "section"}>
      <div className="section-whole">
        <div className="section-picture">{View}</div>
        <div className="section-content" id={id}>
          <h1>{title}</h1>
          <p>{subtitle[0]}</p>
          <div className="section-content-contact">
            <p className="contact">
              Phone Number: <a href={`tel:+1${subtitle[1]}`}>{subtitle[1]}</a>
            </p>
            <p className="contact">
              School Email: <a href={`mailto:${subtitle[2]}`}>{subtitle[2]}</a>
            </p>
            <p className="contact">
              Personal Email:{" "}
              <a href={`mailto:${subtitle[3]}`}>{subtitle[3]} </a>
            </p>
            <p className="contact" style={{ marginTop: 5 }}>
              LinkedIn:{" "}
              <a href={subtitle[4]}>
                <BsLinkedin
                  size={25}
                  color="#0e76a8"
                  style={{
                    marginLeft: 10,
                    background: "#ffffff",
                    marginTop: 10,
                  }}
                />{" "}
              </a>
            </p>
            <p className="contact">
              Download Resume:
              <a href={Pdf} download>
                <VscFilePdf
                  size={30}
                  color="red"
                  enableBackground={true}
                  style={{
                    marginLeft: 10,
                    marginTop: -500,
                  }}
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
