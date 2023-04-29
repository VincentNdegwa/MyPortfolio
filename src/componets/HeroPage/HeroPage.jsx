import React from "react";
import "./HeroPage.css";

function HeroPage() {
  return (
    <div className="hero-page">
      <div className="hero-details">
        <div className="hero-item">
          <div className="hero-name">
            <span>Vin</span>cent Nde<span className="span-name2">gwa</span>
          </div>

          <div className="hero-skills">
            <div>
              Skilled Software Engineer with a Passion for Front-End Web
              Development and User-Centered Design
            </div>

            <p>
              Solving problems and simplifying the complex through elegant
              design and coding
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
