import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Carousel from "./Carousel";

function IntroAnimation() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();

  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from(["#welcome", "#intro"], {
      opacity: 0,
      duration: 1,
      y: "+=50",
      stagger: 0.5,
    }).from([".carousel"],{
      opacity: 0,
      duration: 1,
      y: "+=50",
      stagger: 0.5,
    }).from(["button"],{
      opacity: 0,
      duration: 1,
      y: "+=50",
      stagger: 0.5,
    },"-=0.5");
  }, [container]);

  return (
    <div className="relative" ref={container}>
      <div
        className="h-screen  flex flex-col place-items-center justify-center p-4"
        id="welcome-container"
      >
        <h1
          className="text-blue-200 
        text-5xl md:text-9xl font-bold"
          id="welcome"
        >
          Tech 36
        </h1>
        <p className="p-3 md:text-3xl md:text-2xl text-blue-300" id="intro">
          Technical festival of Technical Education Chhattisgarh
        </p>
        <Carousel />
        
      </div>
    </div>
  );
}

export default IntroAnimation;
