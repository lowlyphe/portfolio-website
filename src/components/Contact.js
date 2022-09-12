import React, { useState, useRef } from "react";
import axios from 'axios'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
    axios.post(`/api/contact`, {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value
    })

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
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          ref={nameRef}
          className="px-3 py-3 placeholder-purple text-gray-600 relative bg-white rounded text-sm border-0 w-1/2 shadow outline-none focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={emailRef}
          className="px-3 py-3 placeholder-purple text-gray-600 relative bg-white rounded text-sm border-0 w-1/2 shadow outline-none focus:outline-none focus:ring "
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          ref={messageRef}
          className="px-3 py-3 placeholder-purple text-gray-600 relative bg-white rounded text-sm border-0 w-1/2 shadow outline-none focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-purple text-white active:text-black active:bg-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};