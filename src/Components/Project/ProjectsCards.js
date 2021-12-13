import React from 'react';

const ProjectsCards=({project})=> {
    return (
        <>
            <div className="card m-2 col-lg-3 col-md-4 col-sm-10 my-class " key= {project.id}>
            
                <img 
                className="img-fluid mt-2 rounded card-img-top card-img-bottom" 
                src= {project.image}
                alt="Card-cap"                               
                />

                <div className="card-body d-flex flex-column justify-content-center ">
                    <h4 className="card-title"> {project.name} </h4>
                    <p className="card-text"> {project.description} </p>
                    <h5>{project.language} </h5>
                    
                    <div className="btn-group d-flex justify-content-center m-2">
                        <a href={project.live} target="_blank">
                        <button className=" my-card-btn m-2">Live website</button>
                        </a>
                        <a href={project.gitlink} target="_blank">
                        <button href={project.link} target="_blank" className="my-card-btn m-2">Github</button>
                        </a>                               
                    </div>

                </div>
            </div>       
        </>
    )
}

export default ProjectsCards;