import React, { useState } from "react";

function StudentForm() {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isTeamEvent, setIsTeamEvent] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentMember, setCurrentMember] = useState({ name: "", phone: "", email: "", photo: null });

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
    if (["Hackathon", "Other Team Event", "Coding Competition"].includes(value)) {
      setIsTeamEvent(!selectedEvents.includes(value));
    }
  };

  const handleTeamMemberChange = (event) => {
    const { name, value } = event.target;
    setCurrentMember((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (event) => {
    setCurrentMember((prev) => ({
      ...prev,
      photo: event.target.files[0],
    }));
  };

  const addTeamMember = () => {
    if (currentMember.name && currentMember.phone && currentMember.email && currentMember.photo) {
      if (teamMembers.length < 4) {
        setTeamMembers([...teamMembers, currentMember]);
        setCurrentMember({ name: "", phone: "", email: "", photo: null }); // Clear the fields after adding
      } else {
        alert("You can only add up to 4 team members.");
      }
    } else {
      alert("Please fill in all fields and upload a photo before adding a team member.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Team Members:", teamMembers);
    alert("Registration submitted!");
  };

  return (
    <div className="mx-auto w-full max-w-[550px] bg-transparent  p-6 pt-30 rounded-2xl">
      <h1 className="text-center mb-3 block text-3xl font-medium text-[#07074D] leading-relaxed">
        --For Participants/Students--
      </h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Team Leader Name"
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
          <input
            type="text"
            name="collegename"
            id="collegename"
            placeholder="Enter your college name"
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
                value="Hackathon"
                onChange={handleEventSelection}
                className="mr-2"
              />
              Hackathon
            </label>

            {/* Team Details section */}
            {isTeamEvent && (
              <div className="mb-5 mt-4">
                <label className="mb-3 block text-center text-xl font-medium text-[#07074D]">
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
                  <label className="mb-3 block text-base font-medium text-[#07074D] text-left">
                    Team Member {teamMembers.length + 1}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Member Name"
                    value={currentMember.name}
                    onChange={handleTeamMemberChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-2"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Member Phone"
                    value={currentMember.phone}
                    onChange={handleTeamMemberChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-2"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Member Email"
                    value={currentMember.email}
                    onChange={handleTeamMemberChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-2"
                  />
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-2"
                  />
                  <button
                    type="button"
                    onClick={addTeamMember}
                    className="w-full rounded-md bg-[#6A64F1] py-2 px-4 text-center text-base font-semibold text-white outline-none hover:shadow-md"
                  >
                    Add Member
                  </button>
                </div>

                <div className="mb-5">
                  <h3 className="mb-3 text-xl font-medium text-[#07074D]">Current Team Members:</h3>
                  <ul>
                    {teamMembers.map((member, index) => (
                      <li key={index} className="mb-2">
                        {member.name} - {member.phone} - {member.email} - <a href={URL.createObjectURL(member.photo)} target="_blank" rel="noopener noreferrer">Photo</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <label className="flex items-center">
              <input
                type="checkbox"
                value="Coding"
                onChange={handleEventSelection}
                className="mr-2"
              />
              Coding Competition
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                value="OtherTeam"
                onChange={handleEventSelection}
                className="mr-2"
              />
              Other Team Event
            </label>
          </div>
        </div>

        <div className="mb-5">
          <button
            type="submit"
            className="w-full rounded-md bg-[#6A64F1] py-3 px-6 text-center text-base font-semibold text-white outline-none hover:shadow-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;