import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import live_icon from "../../assets/live_icon2.png";
import github_icon from "../../assets/github_icon.svg";

const MyWork = () => {
  return (
    <section id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.map((work) => (
          <div key={work.w_no} className="mywork-card">
            <div className="mywork-img">
              <img src={work.w_img} alt={work.w_name} />
            </div>

            <div className="mywork-content">
              <h3 className="work-name">{work.w_name}</h3>

              {/* Tech stack */}
              {work.w_tech && (
                <div className="mywork-tech">
                  {work.w_tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="mywork-links">
                {work.live_link && (
                  <a
                    href={work.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={live_icon} alt="Live Project" /> Live
                  </a>
                )}
                {work.github_link && (
                  <a
                    href={work.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={github_icon} alt="GitHub" /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
