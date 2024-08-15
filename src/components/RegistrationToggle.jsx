import React, { useState } from "react";
import StudentForm from "./StudentForm";
import FacultyForm from "./FacultyForm";

function RegistrationToggle() {
  const [showStudentForm, setShowStudentForm] = useState(true);
  const [showModal, setShowModal] = useState(true);

  // Function to toggle the form and reset modal visibility
  const toggleForm = () => {
    setShowStudentForm((prev) => !prev);
    setShowModal(true); // Show modal every time form is toggled
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center min-h-screen justify-center p-12 bg-gradient-to-r from-slate-900 to-slate-700">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <p className="mb-6">
              {showStudentForm
                ? "You can choose only 4 students to be in a team. For a particular event, the Institute can send only two teams. A student can participate in any event."
                : "You can choose only 3 teachers to come along with the students and each teacher can become in charge and has to oversee one event in the Tech 36."}
            </p>
            <button
              onClick={closeModal}
              className="w-full rounded-md bg-[#6A64F1] py-2 px-4 text-center text-base font-semibold text-white outline-none hover:shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="w-full max-w-[550px] bg-slate-200 p-6 pt-30 rounded-2xl">
        <h1 className="text-center mb-3 block text-4xl font-medium text-[#07074D] leading-relaxed">
          Event Registration Form
        </h1>

        {/* Toggle Switch */}
        <div className="mb-6 flex justify-center">
          <button
            onClick={toggleForm}
            className="w-full rounded-md bg-[#6A64F1] py-2 px-4 text-center text-base font-semibold text-white outline-none hover:shadow-md"
          >
            {showStudentForm ? "Switch to Faculty Form" : "Switch to Student Form"}
          </button>
        </div>

        {/* Display the selected form */}
        {showStudentForm ? <StudentForm /> : <FacultyForm />}
      </div>
    </div>
  );
}

export default RegistrationToggle;