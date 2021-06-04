import React from 'react';
import Row from "../components/Row";
import Col from "../components/Col";
import Title from '../components/Title';
import Project from '../components/Project';
import "../components/css/Project.css";
import fitConnect from "../assets/fit-connect.png";
import shopYourPantry from "../assets/shop-your-pantry.png";
import dragonflyHoroscopes from "../assets/dragonfly-horoscopes.png";
import workDayScheduler from "../assets/work-day-scheduler.png";
import weatherDashboard from "../assets/weather-dashboard.png";
import theTechBlog from "../assets/the-tech-blog.png";

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
            title="Fit-Connect"
            deployedLink="https://shrouded-shore-55489.herokuapp.com/"
            githubLink="https://github.com/ayejayhicks/fit-connect"
            img={fitConnect}
          />
        </Col>
        <Col size="md-6">
          <Project
            title="Dragonfly Horoscopes"
            deployedLink="https://dragonfly-horoscopes.herokuapp.com/"
            githubLink="https://github.com/CFox2019/Dragonfly-Horoscopes"
            img={dragonflyHoroscopes}
          />
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <Project
              title="Shop Your Pantry"
              deployedLink="https://caitie-gorham.github.io/shopYourPantry/"
              githubLink="https://github.com/CFox2019/shopYourPantry"
              img={shopYourPantry}
          />
        </Col>
        <Col size="md-6">
          <Project
              title="Work Day Schedule"
              deployedLink="https://cfox2019.github.io/Work-Day-Scheduler/"
              githubLink="https://github.com/CFox2019/Work-Day-Scheduler"
              img={workDayScheduler}
          />
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <Project
              title="Weather Dashboard"
              deployedLink="https://cfox2019.github.io/Weather-Dashboard/"
              githubLink="https://github.com/CFox2019/Weather-Dashboard"
              img={weatherDashboard}
          />
        </Col>
        <Col size="md-6">
          <Project
              title="Tech Blog"
              deployedLink="https://the-tech-blog.herokuapp.com/"
              githubLink="https://github.com/CFox2019/The-Tech-Blog"
              img={theTechBlog}
          />
        </Col>
      </Row>
    </>
  )
}

export default Portfolio;