import React from "react";

import IntroAnimation from "./components/IntroAnimation";
import Events from "./components/Events";
import Tech36 from "./components/Tech36";
import Contact from "./components/Contact.jsx";

const Main = () => {
  return (
    <div className="containered bg-[#1e1e1e] scroll-smooth">
      <section className="section tech36 ">
        <Tech36 />
      </section>
      <section className="section events ">
        <Events />
      </section>
      <section className="section introAnimation  ">
        <IntroAnimation />
      </section>
      <section className="section contact text-black">
        <Contact />
      </section>
    </div>
  );
};

export default Main;
