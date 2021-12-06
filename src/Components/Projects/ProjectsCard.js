import React from "react";

const Projects = ({ project }) => {
  return (
    <div className="card my-card m-2 col-10 col-md-3 col-lg-3" key={project.id}>
      <img
        className="img-fluid rounded card-img-top card-img-bottom"
        src={project.image}
        alt="Card-cap"
      />

      <div className="card-body d-flex flex-column justify-content-center ">
        <h4 className="card-title"> {project.name} </h4>
        <p className="card-text"> {project.description} </p>
        <h5>React, Bootstrap, CSS </h5>

        <div className="btn-group d-flex justify-content-center m-2">
          <a href={project.live} target="_blank" rel="noreferrer">
            <button className="btn-block my-card-btn m-2">Live website</button>
          </a>
          <a href={project.gitlink} target="_blank" rel="noreferrer">
            <button
              href={project.link}
              target="_blank"
              className="my-card-btn m-2"
            >
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
