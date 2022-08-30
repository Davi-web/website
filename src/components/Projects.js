import React, { lazy } from "react";
import selfie from "../pictures/selfie.jpg";
import Lingle from "../pictures/Lingle.png";
import Billboard from "../pictures/Billboard.png";
import tradedImage1 from "../pictures/tradedImage1.png";
import tradedImage2 from "../pictures/tradedImage2.png";
import tradedImage3 from "../pictures/tradedImage3.png";
import tradedImage4 from "../pictures/tradedImage4.png";

import { BsGithub, BsSlack } from "react-icons/bs";
import ReactPlayer from "react-player/lazy";
import "../App.css";

export default function Projects({ title, subtitle, dark, id }) {
  return (
    <div className={dark ? " section-dark" : "section"}>
      <div className="project-whole">
        <div
          className="section-whole"
          style={{ borderBottomStyle: "solid", borderWidth: 1 }}
        >
          <div className="section-picture">
            <img
              src={Lingle}
              alt="Lingle"
              width="600"
              height="360"
              style={{ padding: 50 }}
              loading={lazy}
            ></img>
          </div>
          <div className="section-content" id={id}>
            <p style={{ margin: 0 }}>February 2022 (React)</p>
            <h1>Lingle: Word Game</h1>
            <p>
              The most recent project that I have completed is Lingle. Lingle is
              an adaptation to the popular New York Times game Wordle. My friend
              and I have made the game customizeable so that users can get
              unlimited tries and users can choose words of any length. Users
              can also play the game unlimited times and can choose between dark
              and light mode. I worked mostly on the frontend while my friend
              worked mostly on the backend of the application, and we were able
              to deploy the website using Github Pages. Some challenges we faced
              when starting the project was figuring out how to display the
              input boxes, the user's guesses, and the keyboard on the screen.
              Currently we are trying to add a high score functionality for
              users who frequent the website.
            </p>
            <div>
              <p>
                Click <a href="https://daymo-web.github.io/Lingle/">here</a> to
                check out the website!
              </p>
            </div>

            <div>
              <p>
                Click icon for github code{" "}
                <a href="https://github.com/Daymo-Web/Lingle">
                  <BsGithub size={30} className="GithubButton" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="section-whole"
          style={{ borderBottomStyle: "solid", borderWidth: 1 }}
        >
          <div className="section-picture">
            <img
              src={tradedImage1}
              alt="t1"
              width="300"
              height="500"
              style={{ padding: 15, borderRadius: 40 }}
              loading={lazy}
            ></img>
            <img
              src={tradedImage3}
              alt="t3"
              width="300"
              height="500"
              style={{ padding: 15, borderRadius: 40 }}
              loading={lazy}
            ></img>
          </div>
          <div className="section-picture">
            <img
              src={tradedImage2}
              alt="t2"
              width="300"
              height="500"
              style={{ padding: 15, borderRadius: 40 }}
              loading={lazy}
            ></img>
            <img
              src={tradedImage4}
              alt="t4"
              width="300"
              height="500"
              style={{ padding: 15, borderRadius: 40, marginBottom: 50 }}
              loading={lazy}
            ></img>
          </div>
          <div className="section-content" id={id}>
            <p style={{ margin: 0 }}>
              May 2021 - Current (React Native & Firebase)
            </p>
            <h1>Traded</h1>
            <p>
              I worked on a start up app last summer called Traded, which is an
              E-commerce app where college students can buy and sell items to
              other college students on campus. I was in charge of developing
              the screens and connecting the frontend to Google Firebase, which
              uses a noSQL database to store data as a backend as a
              service(BaaS). I was able to store data for each user and
              information about products being sold as documents of collections.
              The technology I used while working on the startup was React
              Native(Javascript) and Google Firebase. Currently, the team is
              working on connecting a third party payment API(such as Stripe or
              Square) to handle transaction within the app.
            </p>
            <p>
              Personally, I believe that my startup experience at Traded this
              summer was the hardest thing I worked on. It was hardest thing for
              me because I started the project with minimal experience with how
              a Stack application was supposed to run, and I had no experience
              in frameworks like React Native and Firebase. For the first month
              and a half, I spent most of my days teaching myself how to use
              React Native and Firebase by looking through the documentations
              and coding along Youtube tutorials I would find online. I didn't
              have anyone for guidance, so I had to keep myself accountable in
              learning new frameworks that were used in the application since I
              was the only developer at the time. However, I believe that this
              experience has improved my skills on reading through the
              documentations to solve my problems and solving problems
              independently.
            </p>
          </div>
        </div>
        <div
          className="section-whole"
          style={{ borderBottomStyle: "solid", borderWidth: 1 }}
        >
          <div className="section-picture">
            <img
              src={Billboard}
              alt="Billboard"
              width="600"
              height="360"
              style={{ padding: 50 }}
              loading={lazy}
            ></img>
          </div>
          <div className="section-content" id={id}>
            <p style={{ margin: 0 }}>September 2021 (React & Node)</p>
            <h1>Billboard Guessing Game</h1>
            <p>
              For this project, I webscraped the Billboard Top 100 songs from
              their website and made a game where users can guess the ordering
              of the songs. Users can drag the songs to reorder the orderings
              and submit their answers when they are done guessing. The score
              will be calculated after users have made 10 guesses. This was the
              first project I made where I made a distinctive backend and
              frontend to follow good code practices. After scraping the data, I
              made an API call from the client side to retrieve the data. I used
              Node for the backend and used React for the frontend.
            </p>
            <p>
              Click icon for github code{" "}
              <a href="https://github.com/Davi-web/Billboard-Guessing-Game">
                <BsGithub size={30} className="GithubButton" />
              </a>
            </p>
          </div>
        </div>
        <div
          className="section-whole"
          style={{ borderBottomStyle: "solid", borderWidth: 1 }}
        >
          <div className="section-picture">
            <ReactPlayer
              controls={true}
              url="https://youtu.be/oRZqxxQ2wsI"
              width="600px"
              style={{ padding: "50px" }}
              l
            />
          </div>
          <div className="section-content" id={id}>
            <div
              style={{
                textAlign: "right",
              }}
            >
              <p style={{ margin: 0 }}>February 2021 (Python)</p>
            </div>

            <h1>Automated Food Ordering System</h1>
            <p>
              Vanderbilt University uses the GET CBORD application to manage
              student's fund. Students can order food through the app using meal
              swipes or meal money. There were some inconveniences ordering food
              from the app, and I wanted a way to automate the process of
              ordering dining hall food with a click of a button. For this
              project, I used python selenium as a bot to log onto the GET CBORD
              website to order what I wanted, such as an omelet for the next
              morning.
            </p>
            <p>
              Click icon for github code{" "}
              <a href="https://github.com/Davi-web/GET-automated-ordering-system">
                <BsGithub size={30} className="GithubButton" />
              </a>
            </p>
          </div>
        </div>

        <div
          className="section-whole"
          style={{ borderBottomStyle: "solid", borderWidth: 1 }}
        >
          <div className="section-picture">
            <ReactPlayer
              controls={true}
              url="https://www.youtube.com/watch?v=-bD3yyQ0ORU"
              width="600px"
              style={{ padding: "50px" }}
            />
          </div>
          <div className="section-content" id={id}>
            <p style={{ margin: 0 }}>March 2021 (Django & Python)</p>
            <h1>CS50 Web Programming Project 1: Wiki</h1>
            <p>
              I implemented a wikipedia page where users can store information
              using MarkDown. Markdown is a markup language that helps you
              convert text to HTML easily. I had to allow the site to allow
              Markdown to HTML conversion and added functionalities like
              addind/editing a page, searching for a page, etc. Worked with
              Python and Django for this project. Check out the project
              description{" "}
              <a href="https://cs50.harvard.edu/web/2020/projects/1/wiki/">
                here.
              </a>
            </p>
          </div>
        </div>
        <div className="section-whole">
          <div className="section-picture">
            <ReactPlayer
              controls={true}
              url="https://www.youtube.com/watch?v=IOXuCgkAHWg"
              width="600px"
              style={{ padding: "50px" }}
            />
          </div>
          <div className="section-content" id={id}>
            <p style={{ margin: 0 }}>February 2021 (HTML & CSS)</p>
            <h1>CS50 Web Programming Project 0: Search</h1>
            <p>
              I implemented the frontend for Google Search, Google Image Search,
              and Google Advanced Search from scrach using HTML and CSS. I also
              had to make the sites responsive so that queries work the same as
              using the Google website. The hardest part of this project was
              making an "I'm Feeling Lucky" button that is consistent with
              Google's behavior. Check out the project description{" "}
              <a href="https://cs50.harvard.edu/web/2020/projects/0/search/">
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
