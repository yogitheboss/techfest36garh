import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import IntroAnimation from "./components/IntroAnimation";
import Events from "./components/Events";
import Tech36 from "./components/Tech36";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  useEffect(() => {
    // Set up ScrollTrigger for scroll snapping
    ScrollTrigger.create({
      trigger: ".containered",
      start: "top top",
      end: "bottom bottom",
      pin: true, // Optional: pins the container during scroll
      scrub: true,
      snap: {
        snapTo: "sections", // Snaps to the start of each section
        duration: { min: 0.1, max: 0.3 },
        delay: 0.1,
        ease: "power1.inOut"
      },
      // Optional: You might need to adjust end trigger or other parameters
    });
  }, []);

  return (
    <div className="containered bg-[#0E1111]">
      <section className="section tech36 ">
        <Tech36 />
      </section>
      <section className="section introAnimation ">
        <IntroAnimation />
      </section>
      <section className="section events ">
        <Events />
      </section>
    </div>
  );
};

export default Main;
