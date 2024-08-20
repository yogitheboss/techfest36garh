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
    }).from([".carousel"], {
      opacity: 0,
      duration: 1,
      y: "+=50",
      stagger: 0.5,
    }).from(["button"], {
      opacity: 0,
      duration: 1,
      y: "+=50",
      stagger: 0.5,
    }, "-=0.5");
  }, [container]);

  return (
    <div className="relative snap-start	h-fit w-screen" ref={container}>
      <div
        className=" flex flex-col place-items-center p-4 "
        id="welcome-container"
      >
        <h1
          className="text-white
        text-3xl md:text-5xl font-bold"
          id="welcome"
        >
          Snapshots of Tech 36
        </h1>
        
        <Carousel />

      </div>
    </div>
  );
}

export default IntroAnimation;
