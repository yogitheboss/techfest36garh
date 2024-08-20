import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import eventsData from "../assets/events.json";
import Loader from "./Loader";

// Import all images
import codingImage from "../assets/coding.jpeg";
import roboImage from "../assets/robo.jpeg";
import researchImage from "../assets/discussion.jpg";
import ideaImage from "../assets/idea.jpeg";
import modelImage from "../assets/working_model.png";
import hackathonImage from "../assets/hackathon.jpg";
import quizImage from "../assets/quiz.jpeg";

const HackathonPage = ({eventSelected,setEvent}) => {
  const [loading, setLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const event = eventsData.find((event) => event.slug === eventSelected);
  console.log(event);
  // Map event slugs to imported images
  const imageMap = {
    coding: codingImage,
    robo: roboImage,
    research: researchImage,
    idea: ideaImage,
    model: modelImage,
    hackathon: hackathonImage,
    techquiz: quizImage,
  };

  useEffect(() => {
    if (event?.slug) {
      const image = imageMap[event.slug];
      if (image) {
        setBackgroundImage(image);
        setLoading(false);
      }
    }
  }, [event, imageMap]);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Loader */}
      {loading && <Loader />}

      {/* Background Image */}
      <div
        className={`relative h-screen w-full bg-cover bg-center transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur flex flex-col justify-between text-white p-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {event.name}
          </h1>
          <div
            id="card"
            className="rounded-md p-6 border-2 border-white bg-black bg-opacity-60 backdrop-blur-md mx-auto max-w-lg text-center text-lg"
          >
            <p className="mb-2">mode : {event.location}</p>
            <p className="mb-2">Date: {event.date}</p>
            <p>{event.description}</p>
          </div>
          <div className="flex justify-center mb-5">
            <button className="text-lg  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500  font-semibold text-white py-4 px-6 rounded-3xl">
              <a href={event.file} download>
                Know more
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
