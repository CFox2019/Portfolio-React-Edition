import React from 'react';
import Row from "../components/Row";
import Col from "../components/Col";

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
          <h4>Shop Your Pantry</h4>
          <div className="links">
            <div className="links">
              <a href="https://caitie-gorham.github.io/shopYourPantry/">Deployed Link |</a>
              <a href="https://github.com/CFox2019/shopYourPantry">GitHub Repository</a>
            </div>
          </div>
          <a href="https://cfox2019.github.io/shopYourPantry/">
            <img src="./assets/shop-your-pantry.png" width="350" className="img-responsive image-thumbnail" id="shop-your-pantry-img" alt="Shop Your Pantry" />
          </a>
        </Col>
        <Col>
          <h4>Dragonfly Horoscopes</h4>
          <div className="links">
            <div className="links">
              <a href="https://dragonfly-horoscopes.herokuapp.com/">Heroku Link |</a>
              <a href="https://github.com/CFox2019/Dragonfly-Horoscopes">GitHub Repository</a>
            </div>
          </div>
          <a href="https://dragonfly-horoscopes.herokuapp.com/">
            <img src="./assets/dragonfly-horoscopes.png" width="350" class="img-responsive image-thumbnail" id="shop-your-pantry-img" alt="Shop Your Pantry" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Work Day Scheduler</h4>
          <div class="links">
            <a href="https://cfox2019.github.io/Work-Day-Scheduler/">Deployed Link |</a>
            <a href="https://github.com/CFox2019/Work-Day-Scheduler">GitHub Repository</a>
          </div>
          <a href="https://cfox2019.github.io/Work-Day-Scheduler/">
            <img src="./assets/work-day-scheduler.png" width="350" class="img-responsive image-thumbnail" id="work-day-scheduler-img" alt="Work Day Scheduler" />
          </a>
        </Col>
        <Col>
          <h4>Weather Dashboard</h4>
          <div className="links">
            <a href="https://cfox2019.github.io/Weather-Dashboard/">Deployed Link |</a>
            <a href="https://github.com/CFox2019/Weather-Dashboard">GitHub Repository</a>
          </div>
          <a href="https://cfox2019.github.io/Weather-Dashboard/">
            <img src="./assets/weather-dashboard.png" width="350" class="img-responsive image-thumbnail" id="weather-dashboard-img" alt="Weather Dashboard" />
          </a>
        </Col>
      </Row>
    </>
  )
}

export default Portfolio;