import React from 'react';
import { Link } from 'react-router-dom';
import volunteerImage from '../../src/assets/volunteer.png';
import participant from '../../src/assets/participant_register.png';
import eventsData from '../assets/events.json';

const Events = () => {
  return (
    <section className="min-h-screen snap-start text-white flex flex-col items-center mt-20" id="events">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold p-6 md:p-20">
          Events
        </h1>
      </div>

      <div className="w-full max-w-3xl px-4">
        <ul className="space-y-6 md:space-y-8 list-none">
          {eventsData.map((ev, i) => (
            <li key={i}>
              <Link to={`/${ev.slug}`}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-gray-200">
                  {ev.name}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Register as Volunteer Card */}
      <div className="flex justify-center w-full max-w-3xl px-4 py-10 mt-10" id="register">
        <div
          className="relative w-full max-w-lg bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${volunteerImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center flex flex-col justify-between h-full p-6">
            <h1 className="text-3xl font-bold text-white z-10">Register as Volunteer</h1>
            <Link to="https://forms.gle/HA446fA64Xf3Haxc8" target="_blank" rel="noopener noreferrer">
              <button className="mt-5 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded text-lg sm:text-xl md:text-2xl z-10">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Register as Participant Card */}
      <div className="flex justify-center w-full max-w-3xl px-4 py-10">
        <div
          className="relative w-full max-w-lg bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundImage: `url(${participant})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center flex flex-col justify-between h-full p-6">
            <h1 className="text-3xl font-bold text-white z-10">Register as Participant</h1>
            <Link to="/registration">
              <button className="mt-5 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded text-lg sm:text-xl md:text-2xl z-10">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
