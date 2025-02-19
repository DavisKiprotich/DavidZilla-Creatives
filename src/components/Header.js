'use client'
import React, { useState} from "react";
import { motion } from "framer-motion";
// import ImageCarousel from "./ImageCarousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from '../../public/Images/africa.jpg'
import image2 from '../../public/Images/bab.jpg'
import image3 from '../../public/Images/beau.jpg'
import image4 from '../../public/Images/makeup.jpg'
import image5 from '../../public/Images/test.jpg'

const images = [
  { src: image1, title: "Rainy Streets", tilt: "-10deg" },
  { src: image2, title: "Spring Harmony", tilt: "-5deg" },
  { src: image3, title: "Keeper of the Night", tilt: "0deg" }, // Center image upright
  { src: image4, title: "City Stroll", tilt: "5deg" },
  { src: image5, title: "Mystic Waterfalls", tilt: "10deg" },
];
const Header = () => {
  const [index, setIndex] = useState(2); // Start with the middle image

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-10">
      {/* H1 & Paragraph Section */}
      <div className="w-full flex justify-between items-center max-w-6xl">
        <h1 className="text-4xl font-bold text-primary leading-tight">
          Drive into <br /> 
          <span className="text-accent italic">creativity</span> with our <br />
          <span className="text-secondary italic">gallery collection</span>
        </h1>
        <div className="max-w-md">
          <p className="text-lg text-gray-600">
            Explore our curated gallery collections, featuring captivating works from renowned artists. Immerse yourself in upcoming exhibitions and events that celebrate creativity.
          </p>
          <button className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg shadow-md">
            Explore Collection
          </button>
        </div>
      </div>

      {/* Image Carousel Below */}
      <div className="relative flex flex-col items-center mt-12">
        {/* Navigation Buttons */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button onClick={prevImage} className="bg-secondary p-2 rounded-full">
            <FaArrowLeft size={20} color="white" />
          </button>
        </div>

        {/* Image Carousel */}
        <div className="flex space-x-4">
          {images.map((img, i) => {
            const isCenter = i === index;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: isCenter ? 1 : 0.85, rotate: isCenter ? "0deg" : img.tilt }}
                animate={{ opacity: 1, scale: isCenter ? 1 : 0.85, rotate: isCenter ? "0deg" : img.tilt }}
                transition={{ duration: 0.5 }}
                className={`rounded-xl shadow-lg ${isCenter ? "w-60 h-80" : "w-40 h-60"}`}
              >
                <img src={img.src} alt={img.title} className="rounded-xl w-full h-full object-cover" />
                {isCenter && <p className="text-center text-primary font-bold mt-2">{img.title}</p>}
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button onClick={nextImage} className="bg-accent p-2 rounded-full">
            <FaArrowRight size={20} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
