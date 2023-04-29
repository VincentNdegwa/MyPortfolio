import React from "react";
import "./Projects.css";
import ProjecData from "../../Data/ProjectData";
import { AiOutlineGithub } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";

export default function Projects() {
  return (
    <div className="Projects" id="Projects">
      <header>Projects</header>
      <div className="Projects-container">
        {ProjecData.map((item, index) => {
          return (
            <div className="Projects-item-holder" key={index}>
              <div className="Project-card">
                <div className="Project-image">
                  <img src={item.projectImg} alt="playtube" />
                </div>
                <div className="Project-name">
                  <h2>{item.projectName}</h2>
                </div>
                <div className="Project-github-live">
                  <div className="Project-github">
                    <a
                      href={item.projectGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiOutlineGithub />
                    </a>
                  </div>

                  <div className="Project-live">
                    <a
                      href={item.projecLive}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CiStreamOn />
                    </a>
                  </div>
                </div>
                <div className="Project-description">
                  <p>{item.projectDescription}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
