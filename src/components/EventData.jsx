import React from "react";

const EventData = ({ event }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg" onClick={(e)=>{e.stopPropagation()}}>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
        {event.name}
      </h3>
      <p className="text-gray-400 mb-2">{event.description}</p>
      <p className="text-gray-400 mb-2">
        <span className="font-semibold text-gray-300">Event Date:</span> {event.date}
      </p>
      <p className="text-gray-400 mb-2">
        <span className="font-semibold text-gray-300">Registration Deadline:</span>{" "}
        {event.deadline}
      </p>
      <p className="text-gray-400 mb-2">
        <span className="font-semibold text-gray-300">Date of Acceptance:</span>{" "}
        {event.acceptance_date}
      </p>
      <p className="text-gray-400 mb-2">
        <span className="font-semibold text-gray-300">Location:</span>{" "}
        {event.location}
      </p>

      <a
        href={event.file}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download rules and regulations 
      </a>
    </div>
  );
};

export default EventData;
