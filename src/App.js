import React from "react";
import Navbar from "./componets/Navbar/Navbar";
import AboutMe from "./componets/AboutMe/AboutMe";
import Skills from "./componets/Skills/Skills.jsx";
import Projects from "./componets/Projects/Projects";
import Contacts from "./componets/Contacts/Contacts";

import Main from "./Main";
function App() {
  return (
    <div className="Page">
      <div className="page1">
        <Main />
      </div>

      <div className="page2">
        <Navbar />

        <div>
          <AboutMe />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
