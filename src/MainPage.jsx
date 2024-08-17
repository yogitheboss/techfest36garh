import React from "react";
import IntroAnimation from "./components/IntroAnimation";
import Events from "./components/Events";
import Tech36 from "./components/Tech36";
const Main = () => {
  return (
    <div className="bg-[#0E1111]">
      <Tech36/> 
      <IntroAnimation />
      <Events />
     
    </div>
  );
};

export default Main;
