'use client'
import React, { useState} from "react";
import { motion } from "framer-motion";
// import ImageCarousel from "./ImageCarousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const images = [
  { src: "/images/africa.jpg", title: "Rainy Streets", tilt: "-10deg" },
  { src: "/images/bab.jpg", title: "Spring Harmony", tilt: "-5deg" },
  { src: "/images/beau.jpg", title: "Keeper of the Night", tilt: "0deg" }, // Center image upright
  { src: "/images/makeup.jpg", title: "City Stroll", tilt: "5deg" },
  { src: "/images/test.jpg", title: "Mystic Waterfalls", tilt: "10deg" },
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
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 lg:px-10 pt-20">
      {/* H1 & Paragraph Section */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between max-w-6xl text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold text-primary leading-tight">
          Drive into <br /> 
          <span className="text-accent italic">creativity</span> with our <br />
          <span className="text-secondary italic">gallery collection</span>
        </h1>
        <div className="max-w-md mt-4 lg:mt-0">
          <p className="text-base lg:text-lg text-gray-600">
            Explore our curated gallery collections, featuring captivating works from renowned artists. Immerse yourself in upcoming exhibitions and events that celebrate creativity.
          </p>
          <button className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg shadow-md">
            Explore Collection
          </button>
        </div>
      </div>

      {/* Image Carousel Below */}
      <div className="relative flex items-center justify-center w-full mt-12 max-w-lg lg:max-w-4xl">
        {/* Navigation Buttons */}
        <button onClick={prevImage} className="absolute left-0 bg-secondary p-3 hover:bg-opacity-80 rounded-full z-10 transition-all shadow-lg">
          <FaArrowLeft size={20} color="white" />
        </button>

        {/* Image Display */}
        <div className="flex items-center">
          {images.map((img, i) => {
            const isCenter = i === index;
            const isLargeScreen = "lg:flex"; // Show multiple images only on large screens

            return (
              <motion.div
                key={i}
                initial={{ opacity: isCenter ? 1 : 0.5, scale: isCenter ? 1 : 0.85, rotate: isCenter ? "0deg" : img.tilt }}
                animate={{ opacity: isCenter ? 1 : 0, scale: isCenter ? 1.1 : 0.85, rotate: isCenter ? "0deg" : img.tilt }}
                transition={{ duration: 0.5 }}
                className={`relative w-52 h-72 xl:w-64 xl:h-80 rounded-xl shadow-lg overflow-hidden ${
                  isCenter ? "block" : isLargeScreen
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                {isCenter && (
                  <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-1 rounded-lg text-sm">
                    {img.title}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={nextImage}
          className="absolute right-0 z-10 bg-secondary p-3 rounded-full hover:bg-opacity-80 transition-all shadow-lg"
        >
          <FaArrowRight size={24} color="white" />
        </button>
      </div>
    </section>
  );
};

export default Header;
