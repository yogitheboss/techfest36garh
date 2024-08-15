import React, { useState } from "react";

function FacultyForm() {
  const [facultyMembers, setFacultyMembers] = useState([]);
  const [currentMember, setCurrentMember] = useState({ name: "", phone: "", email: "" });

  const handleMemberChange = (event) => {
    const { name, value } = event.target;
    setCurrentMember((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addFacultyMember = () => {
    if (currentMember.name && currentMember.phone && currentMember.email) {
      if (facultyMembers.length < 3) {
        setFacultyMembers([...facultyMembers, currentMember]);
        setCurrentMember({ name: "", phone: "", email: "" }); // Clear the fields after adding
      } else {
        alert("You can only add up to 3 faculty members.");
      }
    } else {
      alert("Please fill in all fields before adding a faculty member.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Faculty Members:", facultyMembers);
    alert("Registration submitted!");
  };

  return (
    <div className="mx-auto w-full max-w-[550px] bg-slate-200 p-6 pt-30 rounded-2xl">
      <h1 className="text-center mb-3 block text-3xl font-medium text-[#07074D] leading-relaxed">
        --For Teacher/Faculty Member--
      </h1>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Faculty Name"
            value={currentMember.name}
            onChange={handleMemberChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={currentMember.phone}
            onChange={handleMemberChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={currentMember.email}
            onChange={handleMemberChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="department"
            id="department"
            placeholder="Enter your department"
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <button
            type="button"
            onClick={addFacultyMember}
            className="w-full rounded-md bg-[#6A64F1] py-2 px-4 text-center text-base font-semibold text-white outline-none hover:shadow-md"
          >
            Add Faculty Member
          </button>
        </div>

        <div className="mb-5">
          <h3 className="mb-3 text-xl font-medium text-[#07074D]">Current Faculty Members:</h3>
          <ul>
            {facultyMembers.map((member, index) => (
              <li key={index} className="mb-2">
                {member.name} - {member.phone} - {member.email}
              </li>
            ))}
          </ul>
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

export default FacultyForm;