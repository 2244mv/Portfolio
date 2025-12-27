import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Hero = () => {
  const textBeforeName = "I'm ";
  const name = "Manish Verma" + ",";
  const role = "Frontend Developer";

  const fullText = `${textBeforeName}${name} ${role}`;

  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (
    <section id="home" className="hero">
      <img
        src={profile_img}
        alt="Manish Verma"
        className="hero-img"
        loading="lazy"
      />

      <h1 className="hero-heading">
        {displayedText.startsWith(textBeforeName) ? (
          <>
            {textBeforeName}
            <span className="hero-name">
              {displayedText.slice(
                textBeforeName.length,
                textBeforeName.length + name.length
              )}
            </span>
            <span className="hero-role">
              {displayedText.slice(textBeforeName.length + name.length)}
            </span>
          </>
        ) : (
          displayedText
        )}
      </h1>

      <p className="hero-text">
        Frontend Developer specializing in React, JavaScript, HTML, CSS, and
        responsive web development.
      </p>

      <div className="hero-action">
        <AnchorLink className="hero-connect" offset={50} href="#contact">
          Connect with me
        </AnchorLink>

        <Link to="/resume" className="hero-resume">
          My Resume
        </Link>
      </div>
    </section>
  );
};

export default Hero;
