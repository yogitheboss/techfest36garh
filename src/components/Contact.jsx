import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Check localStorage for the last submission time
    const lastSubmitTime = localStorage.getItem("lastSubmitTime");

    if (lastSubmitTime) {
      const now = new Date().getTime();
      const timeElapsed = now - lastSubmitTime;

      // Disable the button if the last submission was less than 24 hours ago
      if (timeElapsed < 24 * 60 * 60 * 1000) {
        setIsDisabled(true);
      }
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9nz0l2w",
        "template_pffbnqn",
        form.current,
        "ZZbZ8Tn4kF82jNjXr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          // Store the current time in localStorage
          localStorage.setItem("lastSubmitTime", new Date().getTime());

          // Disable the button
          setIsDisabled(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="md:max-w-[50vw] w-full mx-auto p-4 py-10" id="contact">
      <h1 className="text-2xl font-bold text-center mb-6">
        Event Registration Assistance
      </h1>
      <p className="mb-4 text-center">
        If you are facing any issues with the registration process, please fill
        out the form below, and we will assist you as soon as possible.
      </p>
      <p className="text-sm text-gray-200 mt-2">
        Please note: You can only submit this form once per day. If you have
        already submitted your request today, the form will be disabled until
        tomorrow.
      </p>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <label for="sender_name" className="mt-4 text-lg">
          Name
        </label>
        <input
          id="sender_name"
          type="text"
          name="user_name"
          className="w-full text-slate-900 h-10 p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
        />
        <label className="mt-4 text-lg" for="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="user_email"
          className="w-full h-10 text-slate-900 p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
        />
        <label className="mt-4 text-lg" for="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full text-slate-900 h-24 p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
        />
        <input
          type="submit"
          value="Send"
          className={`mt-6 cursor-pointer bg-orange-500 py-2 px-4 rounded hover:bg-orange-600 ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isDisabled}
        />
      </form>
    </div>
  );
};

export default Contact;
