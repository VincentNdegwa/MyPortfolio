import React from "react";
import "./AboutMe.css";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function AboutMe() {
  return (
    <div className="AboutMe" id="About">
      <header>
        <h2>About Me</h2>
      </header>
      <div className="AboutMe-description">
        <p>
          My name is Vincent Ndegwa, and I'm a software engineering student at
          Kirinyaga University. I have a passion for front-end web development
          and UI/UX design, and I'm always striving to learn more about these
          fields. I have experience working with a range of technologies and
          tools, including HTML, CSS, JavaScript, and Figma. I am also
          proficient in responsive design, web accessibility, and cross-browser
          compatibility. In addition to my technical skills, I am a creative
          problem solver with excellent communication and teamwork abilities. I
          enjoy working collaboratively with clients and colleagues to deliver
          projects that meet their goals and exceed their expectations.
        </p>
        <div className="download-cv">
          <a href="#cv">Download CV</a>
        </div>
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
          <a href="http://">
            <FaGithub />
          </a>
        </div>
        <div className="AboutMe-icon">
          <a href="mailto:ndegwavincent7@gmail.com">
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
