import React from "react";
import ProjectCard from "./ProjectsCard";
import projectsData from "./ProjectsMenu";

import "./Cards.css";

const Projects = () => {
  return (
    <>
      <div className="cards-main-header">
        <h3> Some of my Projects </h3>
      </div>
      <div className="card-main-container row justify-content-center ">
        {projectsData.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
