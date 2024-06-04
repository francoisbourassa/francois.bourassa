import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import Header1 from "../../components/header1";
import Hero1 from "../../components/hero1";
import Hero2 from "../../components/hero2";

const Home = () => {
  return (
    <div>
      <Header1 />
      <Header />
      <Hero />
      <Hero1 />
      <Hero2 />
      <Footer />
    </div>
  );
};

export default Home;
