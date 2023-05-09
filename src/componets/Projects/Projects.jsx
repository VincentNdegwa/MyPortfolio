import React from "react";
import "./Projects.css";
import ProjecData from "../../Data/ProjectData";
import { AiOutlineGithub } from "react-icons/ai";
import { CiStreamOn } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  return (
    <AnimatePresence>
      <div className="Projects" id="Projects">
        <header>Projects</header>
        <div className="Projects-container">
          {ProjecData.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="Projects-item-holder" key={index}>
                  <div className="Project-card">
                    <div className="Project-image">
                      <img src={item.projectImg} alt="playtube" />
                    </div>
                    <div className="Project-name">{item.projectName}</div>
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatePresence>
  );
}
