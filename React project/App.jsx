import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/hero";
import Programs from "./components/programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Company from "./components/Company/Company";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTital="Our Program" Title="What We Offer" />
        <Programs />
        <About/>
        <Title subTital="Gallery" Title="Company Photos" />
        <Company />
        <Title subTital="Testimonials" Title="What Clients Says" />
        <Testimonials />
        <Title subTital="Contacts Us" Title="Get in touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
