import React from "react";
import './css/AboutMe.css';
import Image from "../components/Image";
import Col from "../components/Col";

function AboutMe() {
  return (
      <>
        <Col size="md-3" className="about-me-img-col">
          <Image />
        </Col>
        <Col size="md-9" className="about-me-p">
          I’m an experienced leader turned software developer returning
          to the workforce after pausing my career to stay at home with
          my family. I’ve spent the last few years volunteering at my
          children’s school as a room-parent and working with the PTA.
          I’m excited to re-enter the workforce and utilize my organizational,
          collaboration, and new found software development skills to help
          deliver products/features that drive business and consumer value.
          I’d love to chat about any opportunities you may have.
        </Col>
      </>
  )
}

export default AboutMe;