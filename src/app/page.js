import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Header';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "#F39248",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
      <Footer />
    </div>
  );
};

export default HomePage;