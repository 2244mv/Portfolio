import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a Frontend Developer skilled in React, JavaScript, and modern
              CSS. I build responsive, user-friendly web applications and enjoy
              turning designs into clean, functional interfaces. Currently
              focused on improving my frontend skills and building real-world
              projects.
            </p>
          </div>

          <div className="about-skills">
            <p>• HTML & CSS – Responsive layouts</p>
            <p>• JavaScript – ES6+, DOM</p>
            <p>• React – Components & hooks</p>
            <p>• UI/UX – Accessibility & design</p>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h2>NCC Certificate</h2>
          <p>Discipline, leadership, and teamwork</p>
        </div>

        <div className="about-achievement">
          <h2>National Level Sports</h2>
          <p>Tchoukball – focus and competitive mindset</p>
        </div>
      </div>
    </section>
  );
};

export default About;
