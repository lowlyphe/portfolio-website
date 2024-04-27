import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
    axios.post(`${API_URL}/api/contact`, {
      name: username,
      email,
      message,
    });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl text-white">Thank you!</div>
        <div className="text-md text-white">I'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="w-full md:w-1/2 lg:w-1/3 mx-auto"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-3 w-full placeholder-purple text-gray-600 relative bg-white rounded text-sm border-0  shadow outline-none focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-3 w-full placeholder-purple text-gray-600 relative bg-white rounded text-sm border-0  shadow outline-none focus:outline-none focus:ring "
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="px-3 py-3 w-full placeholder-purple text-gray-600 relative bg-white rounded text-sm border-0  shadow outline-none focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-3 pt-0 flex justify-end">
        <button className="bg-purple text-white active:text-black active:bg-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          Send a message
        </button>
      </div>
    </form>
  );
};

export default Contact;
