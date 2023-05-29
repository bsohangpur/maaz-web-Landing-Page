import React from "react";
import { Footer, Navbar } from "../constants";
import { About, Contact, Hero, Service } from "../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      {/* <Project /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
