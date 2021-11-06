import React from 'react'

const ProjectsCards=({projectsData})=> {

    // const allProjects = ProjectsMenu;
    console.log(projectsData);


    return (
        <>
        <h3 className= 'cards-main-header'> Some of my Projects</h3>

            <div className="card-main-container">
                
                {projectsData.map((project, id) =>{
                    return(
                        <div className="card-child-container" key= {project.id}>

                            <div className="card" >
                                <img 
                                className="my-card-img-top card-img-top card-img-bottom" 
                                src={ project.image} 
                                alt="Card image cap"/>

                                <div className="card-body">
                                    <h5 className="card-title"> {project.name} </h5>
                                    <p className="card-text"> {project.description} </p>
                                    <a href="https://rana3399.github.io/Visit-Barcelona-1/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>
        </>
    )
}

export default ProjectsCards;