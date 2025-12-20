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
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate(-1)}
          >
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

          <div className="resume-contact">
            <a href="tel:9602938244">📞 9602938244</a>

            <a href="mailto:2244mv@gmail.com">📧 2244mv@gmail.com</a>

            <a
              href="https://portfolio-liart-eta-r63rhydkhy.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>

            <a
              href="https://www.linkedin.com/in/manish-verma-5b98ba382/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/2244mv"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://leetcode.com/manishverma244/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
          </div>

          <p>
            Frontend Developer specializing in React.js and JavaScript (ES6+)
            with experience building scalable, responsive web applications.
            Proficient in component-based architecture, REST API integration, UI
            performance optimization, and modern frontend tools, delivering
            high-quality user experiences in Agile environments.
          </p>
        </header>

        {/* TECHNICAL SKILLS */}
        <section>
          <h3>Technical Skills</h3>

          <article className="resume-card">
            <h4>Languages</h4>
            <p>JavaScript (ES6+)</p>
          </article>

          <article className="resume-card">
            <h4>Frontend</h4>
            <p>
              React.js, HTML5, CSS3, Redux, React Hooks, Context API,
              Material-UI, Shadcn-UI, TanStack, Zustand
            </p>
          </article>

          <article className="resume-card">
            <h4>Tools</h4>
            <p>Git, GitHub, AWS (Basic), Cloudinary</p>
          </article>
        </section>

        {/* PROJECTS */}
        <section>
          <h3>Projects</h3>

          <article className="resume-card">
            <h4>Gemini – AI Chatbot Application</h4>
            <a
              href="https://gemini-cyan-xi.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://gemini-cyan-xi.vercel.app/
            </a>

            <ul>
              <li>
                Developed a fully functional clone of Google Gemini AI chatbot
                using React.js and Vite with a modern conversational UI.
              </li>
              <li>
                Integrated Google Generative AI API (Gemini-Pro model) for
                prompt-based text generation with async request handling.
              </li>
              <li>
                Implemented state management using React Context API for chat
                history, prompts, and loading states.
              </li>
              <li>
                Built advanced UI/UX features including sidebar history, typing
                animations, loaders, fade effects, and dark/light themes.
              </li>
              <li>
                Deployed on Vercel, demonstrating end-to-end development and
                deployment skills.
              </li>
            </ul>
          </article>

          <article className="resume-card">
            <h4>Shopsy – E-Commerce Web Application</h4>
            <a
              href="https://shopsy-nine-snowy.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://shopsy-nine-snowy.vercel.app/
            </a>

            <ul>
              <li>
                Developed a React-based e-commerce application improving UI
                responsiveness by 30% through optimized rendering.
              </li>
              <li>
                Implemented product listing and cart functionality using React
                Hooks and state management.
              </li>
              <li>
                Designed mobile-first responsive layouts using Tailwind CSS,
                Flexbox, and Grid.
              </li>
              <li>
                Followed clean code principles to improve performance and
                maintainability.
              </li>
            </ul>
          </article>

          <article className="resume-card">
            <h4>MovieFlix – Movie Browsing Application</h4>
            <a
              href="https://movie-flix-movie-app.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              https://movie-flix-movie-app.vercel.app/
            </a>

            <ul>
              <li>
                Built a dynamic movie browsing app using React functional
                components.
              </li>
              <li>
                Implemented search functionality and dynamic rendering using
                React Hooks.
              </li>
              <li>
                Managed application state and props for consistent UI behavior.
              </li>
              <li>
                Created a responsive interface using modern CSS techniques.
              </li>
            </ul>
          </article>
        </section>

        {/* EDUCATION */}
        <section>
          <h3>Education</h3>

          <article className="resume-card">
            <h4>M.Sc – Mathematics</h4>
            <p>Maharaja Ganga Singh University</p>
            <span>2023 – Present</span>
          </article>

          <article className="resume-card">
            <h4>B.Sc – Computer Applications</h4>
            <p>Maharaja Ganga Singh University</p>
            <span>2019 – 2023</span>
          </article>
        </section>

        {/* CERTIFICATIONS */}
        <section>
          <h3>Certifications & Achievements</h3>
          <ul className="skills">
            <li>NCC Certificate – National Cadet Corps</li>
            <li>National Level Player – Tchoukball</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Resume;
