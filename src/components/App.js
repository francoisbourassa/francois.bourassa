import React from "react";
import "../assets/css/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../assets/pages/home";
import Service from "../assets/pages/service";
import Portfolio from "../assets/pages/portfolio";
import History from "../assets/pages/history";
import Contact from "../assets/pages/contact";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
