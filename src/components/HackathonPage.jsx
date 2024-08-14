import React from "react";
import hackathonImage from "../assets/2151487268.jpg";
const HackathonPage = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${hackathonImage})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-between text-white">
      <h1 className="flex font-bold text-7xl p-4 justify-center">
        Hackathon
      </h1>
      <div className="flex justify-center mb-5">
        <button className="text-lg bg-green-500 font-semibold text-white py-4 px-6 rounded-3xl">
          Know more..
        </button>
      </div>
    </div>
  </div>
  );
};

export default HackathonPage;
