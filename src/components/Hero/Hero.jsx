import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resumePDF from "../../../public/resume.pdf";

const Hero = () => {
  const fullText = "I'm Manish Verma, Frontend Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100; // milliseconds per character
    let timeout;

    if (charIndex < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, fullText]);

  // Highlight "Manish Verma" with gradient
  const formattedText = displayedText.includes("Manish Verma")
    ? displayedText.replace(
        "Manish Verma",
        "<span class='hero-name'>Manish Verma</span>"
      )
    : displayedText;

  return (
    <section id="home" className="hero">
      <img src={profile_img} alt="Manish Verma Profile" className="hero-img" />
      <h1
        className="hero-heading"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />
      <p className="hero-text">
        Frontend Developer specializing in building responsive, user-friendly,
        and performance-focused web applications using React, JavaScript, HTML,
        and CSS.
      </p>
      <div className="hero-action">
        <AnchorLink className="hero-connect" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
        <a
          href={resumePDF}
          className="hero-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
