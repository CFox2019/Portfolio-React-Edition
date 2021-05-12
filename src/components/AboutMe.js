import React from "react";
import './css/AboutMe.css';
import Col from "../components/Col";
import me from "../assets/image.jpeg"

function AboutMe() {
  return (
      <>
        <Col size="md-3" className="about-me-img-col">
          <img src={me} alt="profile" className="img-thumbnail rounded about-me-img" />
        </Col>
        <Col size="md-9" className="about-me-p">
          I’m an experienced leader turned web developer returning
          to the workforce after pausing my career to stay at home with
          my family. I’ve spent the last few years volunteering at my
          children’s school as a room-parent and working with the PTA.
          I’m excited to re-enter the workforce and utilize my organizational,
          collaboration, and new found web development skills to help
          deliver products/features that drive business and consumer value.
          I’d love to chat about any opportunities you may have.
        </Col>
      </>
  )
}

export default AboutMe;