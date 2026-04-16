import React from 'react';
import { Element } from 'react-scroll';
import Cards from '../models/Cards';
import Header from '../models/Header';
import Footer from '../models/Footer';
import Contact from '../models/Contact';
import QuemSomos from '../models/QuemSomos';
import Hero from '../models/Hero';


function Home() {
  return (
    <div>
      <Header />

      <Element name="hero" className="element">
        <Hero />
      </Element>

      <Element name="portfolio" className="element">
        <Cards />
      </Element>

      <Element name="about" className="element">
        <QuemSomos />
      </Element>

      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default Home;
