import React from 'react'

const ProjectsCards=({projectsData})=> {

    // const allProjects = ProjectsMenu;
    console.log(projectsData);

    return (
        <>
        <div className = 'cards-main-header'> 
            <h3> Some of my Projects </h3> 
        
        </div> 
            <div className="card-main-container row justify-content-center ">   
                {projectsData.map((project, id) =>{
                    return(

                        <div className="card my-card m-2 col-10 col-md-3 col-lg-3" key= {project.id}>
                            <img 
                            className="img-fluid rounded card-img-top card-img-bottom" 
                            src={ project.image} 
                            alt="Card-cap"/>

                            <div className="card-body d-flex flex-column justify-content-center ">
                                <h4 className="card-title"> {project.name} </h4>
                                <p className="card-text"> {project.description} </p>
                                <h5>React, Bootstrap, CSS </h5>
                                
                                <div className="btn-group d-flex justify-content-center m-2">
                                <button href={project.link} target="_blank" className="btn-block my-card-btn m-2">Read more...</button>
                                <button href={project.link} target="_blank" className="my-card-btn m-2">Github</button>
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