import React from 'react';
import Row from "../components/Row";
import Col from "../components/Col";
import Title from '../components/Title';
import Project from '../components/Project';
import "../components/css/Project.css";
import fitConnect from "../assets/fit-connect-portfolio.png";
import shopYourPantry from "../assets/shop-your-pantry-portfolio.png";
import dragonflyHoroscopes from "../assets/dragonfly-horoscopes-portfolio.png";
import workDayScheduler from "../assets/work-day-scheduler-portfolio.png";
import weatherDashboard from "../assets/weather-dashboard-portfolio.png";
import theTechBlog from "../assets/the-tech-blog-portfolio.png";

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
            summary="FIT-CONNECT provides a better way for fitness enthusiasts to connect to each other."
            technologies="MERN stack | Bootstrap | Moment | Yup | Heroku | GitHub"
            img={fitConnect}
          />
        </Col>
        <Col size="md-6">
          <Project
            title="Dragonfly Horoscopes"
            deployedLink="https://dragonfly-horoscopes.herokuapp.com/"
            githubLink="https://github.com/CFox2019/Dragonfly-Horoscopes"
            summary="Dragonfly Horoscopes is an application that takes in your birthday and provides a daily horoscope"
            technologies="JavaScript | CSS | Handlebars | Express | MySql | Node | GitHub | Heroku"
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
            summary="Shop Your Pantry allows users to input a list of ingredients they already have
            in their panty and use those ingredients to generate a list of recipes that incorporate
            the ingredients. The user can then click on each recipe to find what ingredients they'll
            need to find and a companion YouTube video for the recipe."
            technologies="JavaScript | CSS | HTML | API | Bulma | GitHub | GitHub Pages"
            img={shopYourPantry}
          />
        </Col>
        <Col size="md-6">
          <Project
            title="Work Day Schedule"
            deployedLink="https://cfox2019.github.io/Work-Day-Scheduler/"
            githubLink="https://github.com/CFox2019/Work-Day-Scheduler"
            summary="With Work Day Schedule you can organize your day at the beginning of each work day.
            The current date is always posted on the page. The schedule is color coded to help keep your
            day running smoothly. Past hours are colored gray, current hour is in red, and future hours
            are in green. Don't forget to save your entries!"
            technologies="JavaScript | jQuery | CSS | HTML | Bootstrap | Luxon | GitHub | GitHub Pages"
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
            summary="Plan your day, using Weather Dashboard, by checking the current weather conditions
            and the 5 Day Forecast for the desired city."
            technologies="JavaScript | HTML | Bootstrap | Luxon | API | jQuery | GitHub | GitHub Pages"
            img={weatherDashboard}
          />
        </Col>
        <Col size="md-6">
          <Project
            title="Tech Blog"
            deployedLink="https://the-tech-blog.herokuapp.com/"
            githubLink="https://github.com/CFox2019/The-Tech-Blog"
            summary="Tech Blog is a technology based blogging website that allows users to securely create,
            update, and delete their own blogs, as well as comment on another user's blog."
            technologies="JavaScript | CSS | Handlebars | Node | Express | MySql | Postman | Heroku | GitHub"
            img={theTechBlog}
          />
        </Col>
      </Row>
    </>
  )
}

export default Portfolio;