import React, { useState } from "react";

function Registration() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isTeamEvent, setIsTeamEvent] = useState("");

  const handleEventSelection = (event) => {
    const value = event.target.value;
    setSelectedEvents((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });

    // Check if any selected event is a team event
    if (
      value === "Hackathon" ||
      value === "Other Team Event" ||
      value === "Coding Competition"
    ) {
      setIsTeamEvent(!selectedEvents.includes(value));
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center p-12 bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="mx-auto w-full max-w-[550px] bg-slate-200 p-10  rounded">
        <form>
          <div className="mb-5">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
          <label className="mb-3 block text-2xl font-medium text-[#07074D] leading-loose">
  Events you want to participate in
</label>

            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="hack"
                  onChange={handleEventSelection}
                  className="mr-2"
                />
                Hackathon
              </label>
              {selectedEvents.includes("hack") && (
                <div className="mb-5 ml-0 space-y-4">
                  <label className="mb-3 text-center block text-xl font-medium text-[#07074D]">
                    Team Details
                  </label>
                  <div className="mb-5">
                    <label
                      htmlFor="team-name"
                      className="mb-3  block text-base font-medium text-[#07074D] text-left"
                    >
                      Team Name
                    </label>
                    <input
                      type="text"
                      name="team-name"
                      id="team-name"
                      placeholder="Enter Team Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="team-members"
                      className="mb-3 block text-base font-medium text-[#07074D] text-left "
                    >
                      Team Members (Name, Phone, Email)
                    </label>
                    <textarea
                      name="team-members"
                      id="team-members"
                      placeholder="Enter team member details"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              )}
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Coding"
                  onChange={handleEventSelection}
                  className="mr-2 "
                />
                Coding Competition
              </label>
              {selectedEvents.includes("Coding") && (
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Team Details
                  </label>
                  <div className="mb-5">
                    <label
                      htmlFor="team-name"
                      className="mb-3 block text-base font-medium text-[#07074D] text-left"
                    >
                      Team Name
                    </label>
                    <input
                      type="text"
                      name="team-name"
                      id="team-name"
                      placeholder="Enter Team Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="team-members"
                      className="mb-3 block text-base font-medium text-[#07074D] text-left"
                    >
                      Team Members (Name, Phone, Email)
                    </label>
                    <textarea
                      name="team-members"
                      id="team-members"
                      placeholder="Enter team member details"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              )}
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="OtherTeam"
                  onChange={handleEventSelection}
                  className="mr-2"
                />
                Other Team Event
              </label>
              {selectedEvents.includes("OtherTeam") && (
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D] ">
                    Team Details
                  </label>
                  <div className="mb-5">
                    <label
                      htmlFor="team-name"
                      className="mb-3 block text-base font-medium text-[#07074D] text-left"
                    >
                      Team Name
                    </label>
                    <input
                      type="text"
                      name="team-name"
                      id="team-name"
                      placeholder="Enter Team Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="team-members"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Team Members (Name, Phone, Email)
                    </label>
                    <textarea
                      name="team-members"
                      id="team-members"
                      placeholder="Enter team member details"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
