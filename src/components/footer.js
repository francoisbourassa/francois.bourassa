// src/components/Footer.js
import React from "react";
import "../assets/css/styles.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section"></div>
          <div className="footer-section">
            <ul className="footer-links">
              <li>
                <a href="#education">Éducation</a>
              </li>
              <li>
                <a href="#projects">Projets</a>
              </li>
              <li>
                <a href="#history">Histoire</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2024 | Designed by François Bourassa
        </div>
      </div>
    </footer>
  );
};

export default Footer;
