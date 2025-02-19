import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Header';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;