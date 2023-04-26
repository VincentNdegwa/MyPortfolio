import React from "react";
import "./Projects.css";
import { AiOutlineGithub } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";

export default function Projects() {
  return (
    <div className="Projects" id="Projects">
      <header>Projects</header>
      <div className="Projects-container">
        {/* ////// */}
        <div className="Projects-item-holder">
          <div className="Project-card">
            <div className="Project-image">
              <img src="../images/playtubeimg.png" alt="playtube" />
            </div>
            <div className="Project-name">
              <h2>PlayTube</h2>
            </div>
            <div className="Project-github-live">
              <div className="Project-github">
                <AiOutlineGithub />
              </div>

              <div className="Project-live">
                <CiStreamOn />
              </div>
            </div>
            <div className="Project-description">
              <p>
                This is my personal dummy text that i will use to replace the
                description of the project.
              </p>
            </div>
          </div>
        </div>
        {/* ///// */}

        {/* ////// */}
        <div className="Projects-item-holder">
          <div className="Project-card">
            <div className="Project-image">
              <img src="../images/playtubeimg.png" alt="playtube" />
            </div>
            <div className="Project-name">
              <h2>PlayTube</h2>
            </div>
            <div className="Project-github-live">
              <div className="Project-github">
                <AiOutlineGithub />
              </div>

              <div className="Project-live">
                <CiStreamOn />
              </div>
            </div>
            <div className="Project-description">
              <p>
                This is my personal dummy text that i will use to replace the
                description of the project.
              </p>
            </div>
          </div>
        </div>
        {/* ///// */}

        {/* ////// */}
        <div className="Projects-item-holder">
          <div className="Project-card">
            <div className="Project-image">
              <img src="../images/playtubeimg.png" alt="playtube" />
            </div>
            <div className="Project-name">
              <h2>PlayTube</h2>
            </div>
            <div className="Project-github-live">
              <div className="Project-github">
                <AiOutlineGithub />
              </div>

              <div className="Project-live">
                <CiStreamOn />
              </div>
            </div>
            <div className="Project-description">
              <p>
                This is my personal dummy text that i will use to replace the
                description of the project.
              </p>
            </div>
          </div>
        </div>
        {/* ///// */}

        {/* ////// */}
        <div className="Projects-item-holder">
          <div className="Project-card">
            <div className="Project-image">
              <img src="../images/playtubeimg.png" alt="playtube" />
            </div>
            <div className="Project-name">
              <h2>PlayTube</h2>
            </div>
            <div className="Project-github-live">
              <div className="Project-github">
                <AiOutlineGithub />
              </div>

              <div className="Project-live">
                <CiStreamOn />
              </div>
            </div>
            <div className="Project-description">
              <p>
                This is my personal dummy text that i will use to replace the
                description of the project.
              </p>
            </div>
          </div>
        </div>
        {/* ///// */}
      </div>
    </div>
  );
}
