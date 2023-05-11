import React from "react";
import "./HeroPage.css";
import { motion, useInView } from "framer-motion";

function HeroPage() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      style={{
        width: "100%",
        transform: inView ? "none" : "translateY(-200px)",
        opacity: inView ? 1 : 0,
        transition: "all ease 1s",
      }}
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
