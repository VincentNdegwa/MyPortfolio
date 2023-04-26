import React from "react";
import "./Skills.css";
import skillData from "../Data/SkillsData";

function Skills() {
  return (
    <div className="skills" id="Skills">
      <header className="skill-header"> Skills</header>
      <div className="skills-container">
        <div className="skills-holder">
          {skillData.map((item, index) => {
            return (
              <div className="skill-item" key={index}>
                <div className="skill-name">
                  <div className="skill-tittle">{item.skillName}</div>

                  <div className="skill-icon">{item.skillIcon}</div>
                </div>
                <div className="skill-table">
                  <div className="skill-full-range"></div>
                  <div
                    className="skill-range"
                    style={{ width: `${item.skillRange}%` }}
                  >
                    <h2>{item.skillRange}%</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
