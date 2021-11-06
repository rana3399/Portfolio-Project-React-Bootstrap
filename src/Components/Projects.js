import React, { useState } from 'react'
import ProjectsMenu from '../ProjectsMenu'
import ProjectsCards from './ProjectsCards'

const Projects =() =>{

    const projectsData = ProjectsMenu
    console.log(projectsData);

    console.log("this a test from Pro.js");
    return (
        <div>
        
            <ProjectsCards projectsData={projectsData} />
        </div>
    )
}

export default Projects