import React from "react";
import "../styles.css";
import portfolioNT from "../assets/portfolioNT.png";
import portfoliopizza from "../assets/portfoliopizza.png";
import portfoliobball from "../assets/portfoliobball.png";
import portfoliobaseball from "../assets/baseball.png";
import fantasy from "../assets/fantasy.png";
import python from "../assets/python.png";
import javascript from "../assets/js.png";
import html5 from "../assets/html5.png";
import cssicon from "../assets/css.png";
import reacticon from "../assets/react.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-page">
        <h1>My Projects</h1>

        {/* Web Design Projects */}
        <h2>Web Design Projects</h2>

        <div className="category">
          <div className="project">
            <h3>Tech Event-Hosting Website</h3>

            <img src={portfolioNT} alt="Tech event website" />
            <p>
              A website designed and created by my student team that functions
              as a tech event-registration and hosting website.
            </p>
            <div className="icon-group">
              <img className="icons" src={html5} alt="HTML Icon" />
              <img className="icons" src={cssicon} alt="CSS Icon" />
              <img className="icons" src={javascript} alt="JavaScript Icon" />
              <img className="icons" src={reacticon} alt="React Icon" />
            </div>
          </div>
          <div className="project">
            <h3>eCommerce React Web App</h3>
            <img src={portfoliopizza} alt="Pizza eCommerce web app" />
            <p>
              This project showcases my portfolio website design, highlighting
              my skills in web development and responsive design.
            </p>
            <div className="icon-group">
              <img className="icons" src={reacticon} alt="React Icon" />
              <img className="icons" src={html5} alt="HTML Icon" />
              <img className="icons" src={cssicon} alt="CSS Icon" />
              <img className="icons" src={javascript} alt="JavaScript Icon" />
            </div>
          </div>
          <div className="project">
            <h3>Basketball Blog</h3>

            <img src={portfoliobball} alt="Basketball Blog" />
            <p>
              This project showcases my portfolio website design, highlighting
              my skills in web development and responsive design.
            </p>
            <div className="icon-group">
              <img className="icons" src={html5} alt="HTML Icon" />
              <img className="icons" src={cssicon} alt="CSS Icon" />
              <img className="icons" src={javascript} alt="JavaScript Icon" />
            </div>
          </div>
        </div>

        {/* Logic Structure Projects */}
        <h2>Logic Structure Projects</h2>

        <div className="category">
          <div className="logic-project">
            <h3>Baseball Game-logging Program</h3>

            <img src={portfoliobaseball} alt="Baseball Game-logging Program" />
            <p>
              This project showcases my portfolio website design, highlighting
              my skills in web development and responsive design.
            </p>
            <div className="icon-group">
              <img className="icons" src={python} alt="Python Icon" />
            </div>
          </div>
          <div className="logic-project">
            <h3>Fantasy Text-based RPG</h3>
            <img src={fantasy} alt="Fantasy Text-based RPG" />
            <p>
              This project showcases my portfolio website design, highlighting
              my skills in web development and responsive design.
            </p>
            <div className="icon-group">
              <img className="icons" src={python} alt="Python Icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
