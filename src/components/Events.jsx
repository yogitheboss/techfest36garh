import React from "react";
import { Link } from "react-router-dom";
const Events = () => {
  return (
    <section className="h-screen *: text-white  ">
      <div className="flex-col justify-center ">
        <h1 className="text-8xl flex justify-center font-bold p-6  ">Events</h1>
        <ul>
          <li>
            <Link to={"/hackathon"}>
              <h2 className=" text-3xl   flex justify-center m-8  font-semibold">
                Hackathon
              </h2>
            </Link>
          </li>
          <li>
          <Link to={"/hackathon"}>
              <h2 className=" text-3xl   flex justify-center m-8  font-semibold">
                Student research papers
              </h2>
            </Link>
            
            
          </li>
          <li>
            <h2 className=" text-3xl  flex justify-center m-8  font-semibold">
            Working model demonstration by companies
            </h2>
          </li>
          <li>
            <h2 className=" text-3xl  flex justify-center m-8 font-semibold">
              Technical quiz
            </h2>
          </li>
          <li>
            <h2 className=" text-3xl  flex justify-center m-8  font-semibold">
              Idea pitching 
            </h2>
          </li>
          <li>
            <h2 className=" text-3xl  flex justify-center m-8  font-semibold">
              Robo competetion
            </h2>
          </li>
          <li>
            <h2 className=" text-3xl mb-8 flex justify-center m-8  font-semibold">
            Coding contest
            </h2>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Events;
