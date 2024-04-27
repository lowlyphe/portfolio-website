import React from "react";
import Intro from "./Intro";
import Technologies from "./Technologies";
import ProjectBox from "./ProjectBox";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="w-full h-full p-16 ">
      <div className="flex flex-col">
        <Intro />
        <Technologies />
      </div>
      <div className="my-16 text-3xl">
        <ProjectBox />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
