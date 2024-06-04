import React from "react";
import webDesignImage from "../assets/images/ba0eb82dbe74fb21925083c2ea7475b4.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <span>
          <div className="title">DÉVELOPPEMENT WEB</div>
          <div className="title">SUR MESURE.</div>
          <div className="description">
            Je suis le développeur web qu'il <br />
            vous faut pour vos projets!
          </div>
          <a href="/contact" className="cta-button">
            CONTACTEZ-MOI!
          </a>
        </span>
        <img src={webDesignImage} alt="Web Design" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
