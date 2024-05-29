import React from "react";
import "../assets/css/styles.css";
import Header from "./header";
import Footer from "./footer";
import Hero from "./hero";
// import Education from "./education";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Education /> */}
      <Footer />
    </div>
  );
};

export default App;
