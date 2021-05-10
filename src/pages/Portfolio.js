import React from 'react';
import Row from "../components/Row";
import Col from "../components/Col";
import Title from '../components/Title';
import Project from '../components/Project';
import "../components/css/Project.css";

function Portfolio() {
  return (
    <>
      <Row>
          <Title
            pageTitle="Portfolio"
          />
      </Row>
      <Row>
        <Col size="md-6">
          <Project
            title="Shop Your Pantry"
            deployedLink="https://caitie-gorham.github.io/shopYourPantry/"
            githubLink="https://github.com/CFox2019/shopYourPantry"
            imgName="shop-your-pantry"
          />
        </Col>
        <Col size="md-6">
          <Project
            title="Dragonfly Horoscopes"
            deployedLink="https://dragonfly-horoscopes.herokuapp.com/"
            githubLink="https://github.com/CFox2019/Dragonfly-Horoscopes"
            imgName="dragonfly-horoscopes"
          />
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <Project
              title="Work Day Schedule"
              deployedLink="https://cfox2019.github.io/Work-Day-Scheduler/"
              githubLink="https://github.com/CFox2019/Work-Day-Scheduler"
              imgName="work-day-scheduler"
          />
        </Col>
        <Col size="md-6">
          <Project
              title="Weather Dashboard"
              deployedLink="https://cfox2019.github.io/Weather-Dashboard/"
              githubLink="https://github.com/CFox2019/Weather-Dashboard"
              imgName="weather-dashboard"
          />
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <Project
              title="Tech Blog"
              deployedLink="https://the-tech-blog.herokuapp.com/"
              githubLink="https://github.com/CFox2019/The-Tech-Blog"
              imgName="the-tech-blog"
          />
        </Col>
        <Col size="md-6">
          <Project
              title="Fitness Tracker"
              deployedLink=" https://agile-journey-60871.herokuapp.com/"
              githubLink="https://github.com/CFox2019/Fitness-Tracker"
              imgName="fitness-tracker"
          />
        </Col>
      </Row>
    </>
  )
}

export default Portfolio;