import React from 'react';
import Row from "../components/Row";
import Container from "../components/Container";
import Title from "../components/Title";
import AboutMe from "../components/AboutMe";
import Links from "../components/Links";
import '../components/css/AboutMe.css';

function About() {
  return (
    <Container>
      <Row>
        <Title
          pageTitle="About Me"
        />
      </Row>
      <Row>
        <AboutMe />
      </Row>
      <Row>
        <Links />
      </Row>
    </Container>
  )
}

export default About;