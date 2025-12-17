import React from "react";
import "./Footer.css";
import linkedin_icon from "../../assets/linkedin_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import live_icon from "../../assets/live_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © Manish Verma. All rights reserved
        </p>

        <div className="footer-bottom-right">
          <p className="connect-text">Connect with me:</p>
          <a
            href="https://www.linkedin.com/in/manish-verma-5b98ba382/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin_icon}
              alt="LinkedIn"
              className="footer-social-icon"
            />
          </a>
          <a
            href="https://github.com/2244mv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github_icon}
              alt="GitHub"
              className="footer-social-icon"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src={live_icon}
              alt="Live Projects"
              className="footer-social-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
