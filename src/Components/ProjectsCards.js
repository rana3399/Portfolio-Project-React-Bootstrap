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
                        

                            <div className="card my-card mx-1 " key= {project.id}>
                                <img 
                                className="img-fluid rounded card-img-top card-img-bottom" 
                                src={ project.image} 
                                alt="Card-cap"/>

                                <div className="card-body">
                                    <h5 className="card-title"> {project.name} </h5>
                                    <p className="card-text"> {project.description} </p>
                                    <button href={project.link} target="_blank" className="btn-block my-card-btn">Read more...</button>
                                </div>
                            </div>
                        
                    )

                })}
            </div>
        </>
    )
}

export default ProjectsCards;