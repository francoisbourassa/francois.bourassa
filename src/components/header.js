// src/components/Header.js
import React from "react";
import "../assets/css/styles.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#" className="navbar-brand">
            François Bourassa
          </a>
        </div>
        <div className="navbar-right">
          <a href="#education">Éducation</a>
          <a href="#projects">Projets</a>
          <a href="#history">Histoire</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
