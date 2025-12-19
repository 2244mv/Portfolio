import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const Hero = () => {
  const fullText = "I'm Manish Verma, Frontend Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, fullText]);

  const formattedText = displayedText.includes("Manish Verma")
    ? displayedText.replace(
        "Manish Verma",
        "<span class='hero-name'>Manish Verma</span>"
      )
    : displayedText;

  return (
    <section id="home" className="hero">
      <img src={profile_img} alt="Manish Verma" className="hero-img" />

      <h1
        className="hero-heading"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />

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
