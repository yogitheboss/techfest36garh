import { Link } from "react-router-dom";

const Events = () => {
  return (
    <section className="min-h-screen text-white flex flex-col items-center">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold p-6 md:p-20 text-blue-200">
          Events
        </h1>
      </div>

      {/* Events List */}
      <div className="w-full max-w-3xl px-4">
        <ul className="space-y-6 md:space-y-8">
          <li>
            <Link to="/hackathon">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-gray-200">
                Hackathon
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/Research">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-gray-200">
                Student Research Papers
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/model">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-gray-200">
                Working Model Demonstration by Companies
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/Technicalquiz">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-gray-200">
                Technical Quiz
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/Ideapitching">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-gray-200">
                Idea Pitching
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/roboCompetetion">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-gray-200">
                Robo Competition
              </h2>
            </Link>
          </li>
          <li>
            <Link to="/CodingContest">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white hover:text-gray-200">
                Coding Contest
              </h2>
            </Link>
          </li>
        </ul>
      </div>

      {/* Register Now Button */}
      <div className="flex justify-center w-full max-w-3xl px-4 py-4">
        <Link to="/registration">
          <button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded text-lg sm:text-xl md:text-2xl">
            Register Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Events;
