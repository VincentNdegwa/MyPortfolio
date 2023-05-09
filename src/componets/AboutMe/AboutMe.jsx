import React from "react";
import "./AboutMe.css";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function AboutMe() {
  return (
    <div className="AboutMe" id="About">
      <header>About Me</header>
      <section className="About-container">
        <div className="AboutMe-description">
          <div className="about-me-main">
            {/* //// */}
            <div className="about-me-item item1">
              <div className="about-text">
                <p>
                  Hi there, my name is Vincent, and I'm currently a software
                  engineering student at Kirinyaga University. Technology has
                  always been a passion of mine, and I'm excited to be pursuing
                  a career in this field.
                </p>
              </div>
              <div className="about-image">
                <img src="./images/about1.png" alt="" />
              </div>
            </div>

            <div className="about-me-item item2 ">
              <div className="about-text">
                <p>
                  Through my studies, I have obtained skills in web development,
                  user-centered design, and various software engineering
                  concepts such as algorithms and data structures. As a creative
                  individual, I enjoy finding innovative solutions to problems
                  and challenges.
                </p>
              </div>
              <div className="about-image">
                <img src="./images/about3.webp" alt="" />
              </div>
            </div>

            <div className="about-me-item item1 ">
              <div className="about-text">
                <p>
                  I believe that creativity is an essential part of any
                  successful project, and I always strive to infuse my work with
                  a sense of originality and flair. Whether it's building a web
                  application or designing a user interface, I'm always eager to
                  explore new ideas and approaches
                </p>
              </div>
              <div className="about-image">
                <img src="./images/about2.jpeg" alt="" />
              </div>
            </div>
            <div className="about-me-item item2">
              <div className="about-text">
                <p>
                  I believe in the power of collaboration and enjoy working with
                  others to achieve common goals. With excellent communication
                  and teamwork abilities, I'm confident that I can contribute to
                  any project and help bring it to life.
                </p>
              </div>
              <div className="about-image">
                <img src="./images/image3.webp" alt="" />
              </div>
            </div>
            {/* //// */}
          </div>
          <div className="AboutMe-socials">
            <div className="AboutMe-icon">
              <a href="http://">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="AboutMe-icon">
              <a href="http://">
                <FaInstagram />
              </a>
            </div>
            <div className="AboutMe-icon">
              <a href="https://github.com/VincentNdegwa">
                <FaGithub />
              </a>
            </div>
            <div className="AboutMe-icon">
              <a href="mailto:ndegwavincent7@gmail.com">
                <AiOutlineMail />
              </a>
            </div>
            <div className="download-cv">
              <a href="#cv">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
