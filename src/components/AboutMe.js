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
        Hard-working, detail oriented and organized Front-End Developer
        with a passion to create and solve problems, whether independently
        or collaboratively. Successfully completed and earned a certificate
        in Full-Stack Web Development from Georgia Institute of Technology,
        as well as Front End Development and Intro to Programming from Udacity.
        Successfully collaborated with teams on each project throughout the
        bootcamp and delivered quality results. My knowledge lies in JavaScript,
        React, CSS, HTML, Node JS, Express, and Bootstrap. Previously worked as
        team leader at a major retailer, allowing collaboration with others and
        managing time/deadlines. Looking forward to a role to collaborate with
        others and contribute to, learn and be challenged, and continue to grow
        skills.
        </Col>
      </>
  )
}

export default AboutMe;