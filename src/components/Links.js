import React from "react";
import "../components/css/AboutMe.css";
import resume from "../assets/courtney-resume-updated.pdf";

function Links() {
  return(
    <div className="about-me-a">
      <p>LinkedIn: <a className="about-links" href="https://www.linkedin.com/in/cdfox/">cdfox</a></p>
      <p>GitHub: <a className="about-links" href="https://github.com/CFox2019">CFox2019</a></p>
      <p><a className="about-links" href={resume}>Resume</a></p>
    </div>
  )
}

export default Links;