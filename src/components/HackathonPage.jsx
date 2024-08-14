import React from "react";
import hackathonImage from "../assets/2151487268.jpg";
const HackathonPage = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${hackathonImage})` }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur flex flex-col justify-between text-white">
      <h1 className="flex font-bold text-7xl p-4 justify-center">
        Hackathon
      </h1>
      <div id="card" className="flex rounded-md p-6 border-2  w-1/3 mx-auto backdrop-blur-md ">
     <p>Hackathon 2024: Innovate & Create
      <br />
Date: 
<br />
Time: 
<br />
Location: 
<br />
<br />


Overview:
<br />

Welcome to Hackathon 2024, a thrilling 48-hour event where creativity meets technology! Whether you’re a coding wizard, a design guru, or a problem-solving enthusiast, this is your chance to collaborate with like-minded innovators and turn your ideas into reality. Our hackathon is designed to challenge your skills, spark new ideas, and provide an opportunity to make a real impact.</p>
      </div>
      <div className="flex justify-center mb-5">
        <button className="text-lg bg-gradient-to-r from-slate-500 to-blue-950    font-semibold text-white py-4 px-6 rounded-3xl">
          Know more..
        </button>
      </div>
    </div>
  </div>
  );
};

export default HackathonPage;
