import React from "react";
import "../components/css/AboutMe.css";

function Links() {
  return(
    <div className="about-me-a">
      <p>LinkedIn: <a className="about-links" href="https://www.linkedin.com/in/cdfox/">cdfox</a></p>
      <p>GitHub: <a className="about-links" href="https://github.com/CFox2019">CFox2019</a></p>
      <p><a className="about-links" href="./assets/courtney-resume.pdf">Resume</a></p>
    </div>
  )
}

export default Links;