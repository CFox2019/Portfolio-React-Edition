import React from "react";
import "../components/css/Project.css";

function Project(props) {
  return (
    <div className="project-container">
      <h4>{props.title}</h4>
      <div className="links">
        <a className="project-link" href={props.deployedLink}>Deployed Link |</a>
        <a className="project-link" href={props.githubLink}> GitHub Repository</a>
      </div>
      <a href={props.deployedLink}>
        <img src={props.img} className="img-responsive image-thumbnail" alt="Portfolio Project" />
      </a>
    </div>
  )
}

export default Project;
