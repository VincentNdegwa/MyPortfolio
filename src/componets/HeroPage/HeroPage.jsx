import React from "react";
import "./HeroPage.css";
import { motion } from "framer-motion";

function HeroPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="hero-page">
        <div className="hero-details">
          <div className="hero-item">
            <div className="hero-name">
              <span>Vin</span>cent Nde<span className="span-name2">gwa</span>
            </div>

            <div className="hero-skills">
              <div>Front-End Web Developer/UI-Designer</div>

              <p>
                Solving problems and simplifying the complex through elegant
                design and coding
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroPage;
