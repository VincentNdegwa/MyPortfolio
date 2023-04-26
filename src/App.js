import React from "react";
import Navbar from "./componets/Navbar/Navbar";
import AboutMe from "./componets/AboutMe/AboutMe";
import Skills from "./componets/Skills/Skills.jsx";
import Projects from "./componets/Projects/Projects";

import Main from "./Main";
function App() {
  return (
    <div className="Page">
      <Main />
      <div className="page2">
        <Navbar />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
