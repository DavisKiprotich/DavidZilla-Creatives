"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const images = [
  { src: "/images/Modicum logo.jpg", title: "Modicum", tilt: "-10deg" },
  { src: "/images/waridi logo.jpg", title: "Waridih", tilt: "-5deg" },
  { src: "/images/elite logo.jpg", title: "Elite Task Hub", tilt: "0deg" }, // Center image upright
  { src: "/images/black logo.jpg", title: "Black Coffee", tilt: "5deg" },
  { src: "/images/juvington logo.jpg", title: "Juvington travels", tilt: "10deg" },
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
    <section className="w-full bg-gray-100 px-6 lg:px-10 pt-20">
  {/* Text Section */}
  <div className="w-full flex flex-col lg:flex-row items-center lg:justify-between max-w-6xl mx-auto text-center lg:text-left">
    <h1 className="text-3xl lg:text-5xl font-bold text-textBlue leading-tight">
      Drive into <br />
      <span className="text-accent italic">creativity</span> with our <br />
      <span className="text-secondary italic">gallery collection</span>
    </h1>
    <div className="max-w-md mt-4 lg:mt-0">
      <p className="text-base lg:text-lg text-primary">
        Explore our curated gallery collections, featuring captivating works
        from renowned artists. Immerse yourself in upcoming exhibitions and
        events that celebrate creativity.
      </p>
      <button className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg shadow-md hover:bg-gray-200 hover:text-secondary">
        <a href="#collections">Explore Collection</a>
      </button>
    </div>
  </div>

  {/* Carousel */}
  <div className="relative flex items-center justify-center w-full mt-6 max-w-lg lg:max-w-4xl mx-auto">
    {/* Left Button */}
    <button
      onClick={prevImage}
      className="absolute left-4 bg-secondary p-3 hover:bg-opacity-80 rounded-full z-30 transition-all shadow-lg"
    >
      <FaArrowLeft size={20} color="white" />
    </button>

    {/* Images */}
    <div className="flex items-center justify-center gap-4 lg:gap-8 flex-wrap lg:flex-nowrap">
      {images.map((img, i) => {
        const isCenter = i === index;
        const isMdScreen = i === index || i === (index + 1) % images.length;
        const isSmScreen = i === index;

        return (
          <motion.div
            key={i}
            initial={{ scale: 1, rotate: img.tilt }}
            animate={{
              scale: isCenter ? 1.1 : 1,
              rotate: isCenter ? "0deg" : img.tilt,
            }}
            transition={{ duration: 0.5 }}
            className={`relative w-52 h-72 xl:w-64 xl:h-80 rounded-xl shadow-lg overflow-hidden 
              ${isCenter ? "z-20" : "z-10"}
              ${isSmScreen ? "sm:flex lg:flex hidden" : "sm:hidden lg:flex"}
              ${isMdScreen ? "md:flex lg:flex hidden" : "md:hidden lg:flex"}`}
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

    {/* Right Button */}
    <button
      onClick={nextImage}
      className="absolute right-4 z-30 bg-secondary p-3 rounded-full hover:bg-opacity-80 transition-all shadow-lg"
    >
      <FaArrowRight size={24} color="white" />
    </button>
  </div>
</section>
  );
};

export default Header;
