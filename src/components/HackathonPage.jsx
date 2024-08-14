import React from "react";
import hackathonImage from "../assets/2151487268.jpg";
import { useLocation } from "react-router-dom";
import eventsData from "../assets/events.json";
const HackathonPage = () => {
  const location = useLocation();
  const eventName = location.pathname.startsWith("/")
    ? location.pathname.substring(1)
    : location.pathname;

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${hackathonImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur flex flex-col justify-between text-white">
        <h1 className="flex font-bold text-7xl p-4 justify-center">
          {eventName}
        </h1>
        <div
          id="card"
          className="flex rounded-md p-6 border-2  w-1/3 mx-auto backdrop-blur-md "
        >
          {eventsData
        .filter((event) => event.name === eventName)
        .map((event) => (
          <div key={event.id}>
            <p className="flex justify-center text-xl font-semibold">{event.name}</p>
            <p>{event.location}</p>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
        </div>
        <div className="flex justify-center mb-5">
          {eventsData
        .filter((event) => event.name === eventName)
        .map((event) => (
          <div key={event.id}>
        
           
            <button className="text-lg bg-gradient-to-r from-slate-500 to-blue-950    font-semibold text-white py-4 px-6 rounded-3xl">
          <a href={event.file} download>
                <button>Know more</button>
            </a>
          </button>
          </div>
        ))}
         
          
           
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
