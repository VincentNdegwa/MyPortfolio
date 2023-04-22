import React from "react";
import "./Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact, DiBootstrap } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

function Skills() {
  return (
    <div className="skills" id="Skills">
      <header className="skill-header"> Skills</header>
      <div className="skills-container">
        <div className="skills-holder">
          <div className="skill-item">
            <div className="skill-name">
              <div className="skill-tittle">HTML5</div>

              <div className="skill-icon">
                <AiFillHtml5 />
              </div>
            </div>
            <div className="skill-table">
              <div className="skill-full-range"></div>
              <div className="skill-range">
                <h2>90%</h2>
              </div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-name">
              <div className="skill-tittle">CSS</div>

              <div className="skill-icon">
                <DiCss3 />
              </div>
            </div>
            <div className="skill-table">
              <div className="skill-full-range"></div>
              <div className="skill-range">
                <h2>90%</h2>
              </div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-name">
              <div className="skill-tittle">JavaScript</div>
              <div className="skill-icon">
                <DiJavascript1 />
              </div>
            </div>
            <div className="skill-table">
              <div className="skill-full-range"></div>
              <div className="skill-range">
                <h2>90%</h2>
              </div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-name">
              <div className="skill-tittle">ReactJs</div>
              <div className="skill-icon">
                <DiReact />
              </div>
            </div>
            <div className="skill-table">
              <div className="skill-full-range"></div>
              <div className="skill-range">
                <h2>90%</h2>
              </div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-name">
              <div className="skill-tittle">Figma Design</div>
              <div className="skill-icon">
                <FiFigma />
              </div>
            </div>
            <div className="skill-table">
              <div className="skill-full-range"></div>
              <div className="skill-range">
                <h2>90%</h2>
              </div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-name">
              <div className="skill-tittle">BootStrap</div>

              <div className="skill-icon">
                <DiBootstrap />
              </div>
            </div>
            <div className="skill-table">
              <div className="skill-full-range"></div>
              <div className="skill-range">
                <h2>90%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
