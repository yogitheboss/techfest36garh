import React, { useState } from "react";
import { Link } from "react-router-dom";
import volunteerImage from "../../src/assets/volunteer.png";
import participant from "../../src/assets/participant_register.png";
import eventsData from "../assets/events.json";
import EventData from "./EventData";

const Events = () => {
  const [event, setEvent] = useState(null);
  return (
    <div
      className="h-full snap-start text-white flex flex-col items-center "
      id="events"
    >
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold p-6 md:p-20">
          Technical Events
        </h1>
      </div>

      <div className="w-full max-w-3xl px-4 sm:min-w-[500px] md:min-w-[800px]">
        <ul className="space-y-6 md:space-y-8 list-none">
          {eventsData.map((ev, i) => (
            <li
              key={i}
              className="cursor-pointer w-full"
              onClick={() => {
                setEvent(event === ev.slug ? null : ev.slug);
              }}
            >
              <h2 className="text-xl sm:text-xl md:text-xl font-semibold text-white hover:text-gray-200">
                {ev.name}
              </h2>
              {event === ev.slug && (
                <div className="mt-4">
                  <EventData event={ev} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold p-6 md:p-20">
          Cultural Events
        </h1>
      </div>
      <div className="w-full max-w-3xl px-4 sm:min-w-[500px] md:min-w-[800px]">
        <ul className="space-y-6 md:space-y-8 list-none">
          <li
            className="cursor-pointer"
            onClick={() => {
              setEvent(event === "gd" ? null : "gd");
            }}
          >
            <h2 className="text-xl sm:text-xl md:text-xl font-semibold text-white hover:text-gray-200">
              Group Dance
            </h2>

            {event === "gd" && (
              <div className="mt-4">
                <div
                  className="bg-gray-800 p-4 rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    Group Dance Competition - Tech36
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Prepare to be mesmerized as the rhythm takes over at the
                    Tech36 Group Dance Competition! Students from GEC Raipur,
                    GEC Bilaspur, and GEC Jagdalpur will showcase their talent
                    and passion for dance in an electrifying battle of moves and
                    grooves. This competition promises an unforgettable display
                    of creativity, coordination, and cultural fusion. Whether
                    you're a fan of classical styles or modern beats, this event
                    will have something for everyone. Don't miss the chance to
                    witness the best dance crews from these prestigious
                    institutions as they compete for the title of Tech36 Dance
                    Champions!
                  </p>
                  <p className="text-gray-400 mb-2">
                    <span className="font-semibold text-gray-300">Date:</span>{" "}
                    25th october
                  </p>
                  <p className="text-gray-400 mb-2">
                    <span className="font-semibold text-gray-300">
                      Location:
                    </span>{" "}
                    Block C, GEC Raipur
                  </p>
                  <a
                    href={"/cultural_rules.docx"}
                    className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Download rules and regulations
                  </a>
                </div>
              </div>
            )}
          </li>

          <li
            className="cursor-pointer"
            onClick={() => {
              setEvent(event === "gs" ? null : "gs");
            }}
          >
            <h2 className="text-xl sm:text-xl md:text-xl font-semibold text-white hover:text-gray-200">
              Group Song
            </h2>
            {event === "gs" && (
              <div className="mt-4">
                <div
                  className="bg-gray-800 p-4 rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    Group Song Competition - Tech36
                  </h3>
                  <p className="text-gray-400 mb-2">
                    Get ready to be enchanted by the harmonious voices of
                    students from GEC Raipur, GEC Bilaspur, and GEC Jagdalpur in
                    the Tech36 Group Song Competition! This event will bring
                    together the best vocal talents from these institutions as
                    they perform in perfect harmony, blending melodies and
                    rhythms across various genres. From soulful renditions to
                    energetic anthems, each group will compete to captivate the
                    audience and judges with their musical prowess. Join us for
                    an unforgettable evening of music as these talented singers
                    aim to become the Tech36 Group Song Champions!
                  </p>
                  <p className="text-gray-400 mb-2">
                    <span className="font-semibold text-gray-300">Date:</span>{" "}
                    25th october
                  </p>
                  <p className="text-gray-400 mb-2">
                    <span className="font-semibold text-gray-300">
                      Location:
                    </span>{" "}
                    Block C, GEC Raipur
                  </p>
                  <a
                    href={"/cultural_rules.docx"}
                    className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Download rules and regulations
                  </a>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
      {/* Register as Volunteer Card */}
      <div className="min-w-full">
        <div
          className="flex justify-center  w-full max-w-3xl px-4 py-10 mt-10"
          id="register"
        >
          <div
            className="relative w-full max-w-lg bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${volunteerImage})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center flex flex-col justify-between h-full p-6">
              <h1 className="text-3xl font-bold text-white z-10">
                Register as Volunteer
              </h1>
              <Link
                to="https://forms.gle/HA446fA64Xf3Haxc8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-5 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded text-lg sm:text-xl md:text-2xl z-10">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center w-full max-w-3xl px-4 py-10 mt-10"
          id="register"
        >
          <div
            className="relative w-full max-w-lg bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
            style={{ backgroundImage: `url(${participant})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center flex flex-col justify-between h-full p-6">
              <h1 className="text-3xl font-bold text-white z-10">
                Register as Participant
              </h1>
              <Link
                to="https://forms.gle/1RqtamsvEbRuZeb39"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-5 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded text-lg sm:text-xl md:text-2xl z-10">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
