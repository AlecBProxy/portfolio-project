import React from "react";
import "../styles.css";
import monitor from "../assets/monitor.png";

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-text">
        <p>
          Hi, I'm Alec, and I'm a commerce grad, currently pivoting (and perhaps
          augmenting) my career path by learning Software Development
          technologies. My initial focus is on mastering web development
          languages like Python, JavaScript, HTML, and CSS. I love the process
          of creating a solution from scratch, and improving my skills with
          every project. Each step forward, and each failure is a new learning
          opportunity, and coding has become a great way for me to explore
          problem-solving in a creative way.
        </p>
        <p>
          While I enjoy front-end development, I'm also eager to broaden my
          horizons with cloud computing and networking technologies. I believe
          these fields are crucial for building scalable, efficient systems, and
          I'm excited to dive deeper into these areas. As I continue learning
          and developing my skills, I'm motivated by the endless possibilities
          that come with blending creative solutions with technical knowledge.
        </p>
      </div>

      <div className="monitor-container">
        <img src={monitor} alt="Monitor Frame" className="monitor-frame" />
        <div className="monitor-screen">
          {/* <div className="scrolling-text">
            <p>Design</p>
            <p>Writing</p>
            <p>Sports Analytics</p>
            <p>The Houston Rockets</p>
            <p>The Toronto Blue Jays</p>
            <p>Star Trek</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
