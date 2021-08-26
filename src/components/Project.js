import React from "react";
import "../components/css/Project.css";

function Project(props) {
  return (
    <div className="card-container h-100">
      <div className="card h-100">
        <img src={props.img} className="card-img-top" alt={props.title}></img>
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <div className="links">
            <a className="project-link" href={props.deployedLink}>Deployed Link |</a>
            <a className="project-link" href={props.githubLink}> GitHub Repository</a>
          </div>
          <div className="summary">
            <p>{props.summary}</p>
          </div>
          <div className="technologies">
            <p>{props.technologies}</p>
          </div>
        </div>
      </div>
    </div>
      )
}

      export default Project;

