import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            François Bourassa
          </Link>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <Link to="/service" className="navbar-link">
                Service
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="navbar-link">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/history" className="navbar-link">
                François Bourassa
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-link">
                Contactez-moi!
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
