import React from "react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className="min-h-screen text-white ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-5xl text-blue-200  md:text-6xl lg:text-7xl xl:text-8xl text-center font-bold p-6 md:p-20 ">
          Events
        </h1>
        <ul className="w-full max-w-3xl">
          <li>
            <Link to={"/hackathon"}>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-6 md:m-8 font-semibold">
                Hackathon
              </h2>
            </Link>
          </li>
          <li>
            <Link to={"/research"}>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-6 md:m-8 font-semibold">
                Student research papers
              </h2>
            </Link>
          </li>
          <li>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-6 md:m-8 font-semibold">
              Working model demonstration by companies
            </h2>
          </li>
          <li>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-6 md:m-8 font-semibold">
              Technical quiz
            </h2>
          </li>
          <li>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-6 md:m-8 font-semibold">
              Idea pitching
            </h2>
          </li>
          <li>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-6 md:m-8 font-semibold">
              Robo competition
            </h2>
          </li>
          <li>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-6 md:m-8 font-semibold">
              Coding contest
            </h2>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Events;
