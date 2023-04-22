import React from "react";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BsPersonCircle, BsFillTerminalFill } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { FiMessageCircle } from "react-icons/fi";

function Navbar() {
  return (
    <div className="navabar">
      <a href="#Home">
        <div className="nav">
          <div className="nav-icon">
            <AiFillHome />
          </div>
          <div className="nav-text">Home</div>
        </div>
      </a>

      <a href="#About">
        <div className="nav">
          <div className="nav-icon">
            <BsPersonCircle />
          </div>
          <div className="nav-text">About Me</div>
        </div>
      </a>

      <a href="#Skills">
        <div className="nav">
          <div className="nav-icon">
            <GiAchievement />
          </div>
          <div className="nav-text">Skills</div>
        </div>
      </a>

      <a href="#Projects">
        <div className="nav">
          <div className="nav-icon">
            <BsFillTerminalFill />
          </div>
          <div className="nav-text">Projects</div>
        </div>
      </a>

      <a href="#Contact">
        <div className="nav">
          <div className="nav-icon">
            <FiMessageCircle />
          </div>
          <div className="nav-text">Contact</div>
        </div>
      </a>
    </div>
  );
}

export default Navbar;
