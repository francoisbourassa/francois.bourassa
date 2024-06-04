import React from "react";
import canadaFlag from "../assets/images/canada-flag-background-vector.jpg";
import "../assets/css/styles.css";

const Header1 = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <span>Parlons-ensemble!</span>
        <img src={canadaFlag} alt="Drapeau du Canada" className="canada-flag" />
        <a href="tel:+15145606616" className="phone-link">
          (514) 560-6616
        </a>
      </div>
    </div>
  );
};

export default Header1;
