import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resume.css";

const Resume = () => {
  const navigate = useNavigate();

  return (
    <main className="resume" aria-label="Resume">
      <div className="resume-container">
        {/* ACTION BAR */}
        <div className="resume-top-actions">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <a
            href="/resume.pdf"
            download="Manish-Verma-Frontend-Developer-Resume.pdf"
            className="resume-download"
          >
            Download Resume (PDF)
          </a>
        </div>

        {/* HEADER */}
        <header className="resume-header">
          <h1>Manish Verma</h1>
          <h2>Frontend Developer</h2>
          <p>
            Frontend Developer with hands-on experience in React.js, JavaScript,
            HTML5, CSS3, and responsive UI development.
          </p>
        </header>

        {/* EXPERIENCE */}
        <section>
          <h3>Professional Experience</h3>
          <article className="resume-card">
            <h4>Frontend Developer</h4>
            <span>2024 – Present</span>
            <ul>
              <li>Built responsive web applications using React.js</li>
              <li>Developed reusable UI components and optimized performance</li>
              <li>Used Git & GitHub for version control and collaboration</li>
            </ul>
          </article>
        </section>

        {/* SKILLS */}
        <section>
          <h3>Technical Skills</h3>
          <ul className="skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Git & GitHub</li>
            <li>Responsive Web Design</li>
          </ul>
        </section>

        {/* EDUCATION */}
        <section>
          <h3>Education</h3>
          <article className="resume-card">
            <h4>Bachelor’s Degree – Computer Science</h4>
            <span>2021 – 2024</span>
          </article>
        </section>
      </div>
    </main>
  );
};

export default Resume;
