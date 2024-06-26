import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div className="custom-shape-divider-top-1662389431 -z-10 translate-x-24">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
