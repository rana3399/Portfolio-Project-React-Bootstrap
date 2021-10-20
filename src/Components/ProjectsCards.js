import React from 'react'

const ProjectsCards=({projectsData})=> {

    // const allProjects = ProjectsMenu;
    console.log(projectsData);


    return (
        <div className="card-main-container">
            <span>My Projects</span>
            {projectsData.map((project) =>{
                return(
            <div className="card-child-container">

                <div className="card" >
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"> {project.name} </h5>
                        <p className="card-text"> {project.description} </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
                )
              
            
              

            })}
        </div>
    )
}

export default ProjectsCards;