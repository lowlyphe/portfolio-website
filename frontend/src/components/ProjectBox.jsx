import React from "react";
import getProjects from "../data/projects";
import Project from "./Project";

const ProjectBox = () => {
  const projects = getProjects();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-purple mb-10">Featured Projects</h2>
      <div className="flex flex-col items-center md:grid grid-cols-3 min-w-1/3 w-2/3">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectBox;
