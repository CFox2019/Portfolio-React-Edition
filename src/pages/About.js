import React from 'react';
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import AboutMe from "../components/AboutMe";
import Links from "../components/Links";

function About() {
  return (
    <Col>
      <Row>
        <Title />
      </Row>
      <Row>
        <AboutMe />
      </Row>
      <Row>
        <Links />
      </Row>
    </Col>
  )
}

export default About;