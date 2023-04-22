import React from "react";
import MyParticles from "./componets/MyParticles";
import HeroPage from "./componets/HeroPage/HeroPage";

function Main() {
  return (
    <div className="Page-element" id="Home">
      <MyParticles />
      <HeroPage />
    </div>
  );
}

export default Main;
