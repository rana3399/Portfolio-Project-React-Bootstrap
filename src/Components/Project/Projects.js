import React, { useState } from 'react';
import ProjectsMenu from './ProjectsMenu';
import ProjectsCards from './ProjectsCards';

import './ProjectCards.css';

const Projects =() =>{

     const projectsData = ProjectsMenu;
     console.log(projectsData);

    // console.log("this a test from Pro.js");

    return(
        <>
            <div className="cards-main-header">
                <h3> Some of my Projects </h3>
            </div>
            
            <div className="card-main-container row justify-content-center ">
                {projectsData.map((project, id) => (
                    <ProjectsCards key={id} project={project} />
                ))}
            </div>
      </>
    )
}

export default Projects