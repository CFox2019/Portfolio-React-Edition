import React from 'react';
import Row from "../components/Row";
import Col from "../components/Col";
import Project from '../components/Project';

function Portfolio() {
  return (
    <>
      <Row>
        <Col>
          <h1>Portfolio</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <Project
            title="Shop Your Pantry"
            deployedLink="https://caitie-gorham.github.io/shopYourPantry/"
            githubLink="https://github.com/CFox2019/shopYourPantry"
            imgName="shop-your-pantry"
          />
        </Col>
        <Col>
          <Project
            title="Dragonfly Horoscopes"
            deployedLink="https://dragonfly-horoscopes.herokuapp.com/"
            githubLink="https://github.com/CFox2019/Dragonfly-Horoscopes"
            imgName="dragonfly-horoscopes"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Project
              title="Work Day Schedule"
              deployedLink="https://cfox2019.github.io/Work-Day-Scheduler/"
              githubLink="https://github.com/CFox2019/Work-Day-Scheduler"
              imgName="work-day-scheduler"
          />
        </Col>
        <Col>
          <Project
              title="Weather Dashboard"
              deployedLink="https://cfox2019.github.io/Weather-Dashboard/"
              githubLink="https://github.com/CFox2019/Weather-Dashboard"
              imgName="weather-dashboard"
          />
        </Col>
      </Row>
    </>
  )
}

export default Portfolio;