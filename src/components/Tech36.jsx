import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Tech36 = ({ setEvent }) => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-10-25T00:00:00"); // Set the event start date
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleScrollToRegister = (name) => {
    const registerSection = document.getElementById(name);
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsDropdownOpen(false); // Close the dropdown after scrolling
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
      gsap.to(dropdownRef.current, {
        duration: 0.5,
        x: 0,
        opacity: 1,
        ease: "power2.out",
      });
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
      gsap.to(dropdownRef.current, {
        duration: 0.5,
        x: "-100%",
        opacity: 0,
        ease: "power2.in",
      });
    }
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const containerRef = useRef();
  const dropdownRef = useRef();

  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from(["#college-name", "#presents"], {
      opacity: 0,
      duration: 1,
      y: "+=30",
      stagger: 0.5,
    })
      .from("#tech-title", {
        opacity: 0,
        duration: 1,
        scale: 0.5,
        ease: "bounce.out",
        y: "+=50",
      })
      .from(["#tech-desc", ".countdown-timer"], {
        opacity: 0,
        duration: 1,
        y: "+=30",
        stagger: 0.5,
      }).from(["#coming"],{
        opacity: 0,
        duration: 1,
        y: "+=30",
        stagger: 0.5,
      });
  }, [containerRef]);

  return (
    <div
      className="min-h-screen w-screen bg-[#1e1e1e] text-white font-sans snap-start"
      ref={containerRef}>
      {/* Top Navbar */}
      <div className="flex items-center justify-between p-4">
        <div className="">
          <div
            className="text-2xl font-bold mr-4 cursor-pointer"
            onClick={toggleDropdown}>
            ☰
          </div>
          <div
            ref={dropdownRef}
            className={`absolute top-0 left-0 bg-[#1e1e1e] text-white rounded-md shadow-lg transition-transform transform ${
              isDropdownOpen ? "translate-x-0" : "-translate-x-full"
            } h-screen w-1/2 z-50`} // Ensure it's on top of other elements
          >
            {/* Close Button */}
            <div
              className="absolute top-4 sm:top-2 md:top-10  right-6 md:right-12 text-3xl lg:text-8xl sm:text-5xl md:text-7xl cursor-pointer"
              onClick={toggleDropdown}>
              &times;
            </div>
            <ul className="flex flex-col p-8 h-full">
              <li
                className="p-6 text-3xl font-bold hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  toggleDropdown();
                  setEvent(null);
                }}>
                Home
              </li>
              <li className="p-6 text-3xl font-bold hover:bg-gray-700 cursor-pointer">
                About
              </li>
              <li
                className="p-6 text-3xl font-bold hover:bg-gray-700 cursor-pointer"
                onClick={() => handleScrollToRegister("events")}>
                Events
              </li>
              <li
                className="p-6 text-3xl font-bold hover:bg-gray-700 cursor-pointer"
                onClick={() => handleScrollToRegister("register")}>
                Register
              </li>
              <li
                className="p-6 text-3xl font-bold hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  handleScrollToRegister("contact");
                }}>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* College Name & Presents */}
      <div className="flex justify-center flex-col place-items-center py-4 mt-10">
        <h1
          className="text-base font-semibold text-center sm:text-lg md:text-xl lg:text-2xl "
          id="college-name">
          Directorate of Technical Education
        </h1>
        <p
          className="text-base italic text-center sm:text-lg md:text-xl lg:text-2xl"
          id="presents">
          presents
        </p>
      </div>

      {/* Main Event Title */}
      <div className="flex flex-col items-center justify-center text-center p-8 bg-[#161616] pb-20">
        <h1
          className="text-6xl font-bold text-red-600 tracking-wider sm:text-7xl md:text-8xl lg:text-[10vw]"
          id="tech-title">
          TECH 36
        </h1>
        <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10"
          id="tech-desc">
          Technical festival of Technical Education Chhattisgarh
        </p>
      </div>

      {/* Countdown Timer */}
      <div className="flex items-center justify-center text-center p-8 countdown-timer mt-10">
        <div className="flex justify-between items-center space-x-4 text-3xl sm:text-4xl md:text-5xl font-mono rounded-lg w-full max-w-xl border-white border-2 border-solid bg-black p-4">
          <div className="flex flex-col items-center">
            <p>{timeLeft.days || "00"}</p>
            <p className="text-xs sm:text-sm md:text-base mt-2">DAYS</p>
          </div>
          <div className="flex flex-col items-center">
            <p>{timeLeft.hours || "00"}</p>
            <p className="text-xs sm:text-sm md:text-base mt-2">HOURS</p>
          </div>
          <div className="flex flex-col items-center">
            <p>{timeLeft.minutes || "00"}</p>
            <p className="text-xs sm:text-sm md:text-base mt-2">MINUTES</p>
          </div>
          <div className="flex flex-col items-center">
            <p>{timeLeft.seconds || "00"}</p>
            <p className="text-xs sm:text-sm md:text-base mt-2">SECONDS</p>
          </div>
          <div className="text-xs sm:text-sm md:text-base font-light flex flex-col justify-center items-center pl-4">
            <span>2024 October</span>
            <span>25th - 26th</span>
          </div>
        </div>
      </div>
      {/* <div>
        <h3 id="coming"className="flex justify-center items-center text-4xl mt-10">
          Coming Soon
        </h3>
      </div> */}
    </div>
  );
};

export default Tech36;
