'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from '../../public/Images/africa.jpg'
import image2 from '../../public/Images/bab.jpg'
import image3 from '../../public/Images/beau.jpg'
import image4 from '../../public/Images/makeup.jpg'
import image5 from '../../public/Images/test.jpg'

const images = [
  { src: image1, title: "Rainy Streets" },
  { src: image2, title: "Spring Harmony" },
  { src: image3, title: "Keeper of the Night" },
  { src: image4, title: "City Stroll" },
  { src: image5, title: "Mystic Waterfalls" },
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(2);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex justify-center items-center mt-10">
      <button onClick={prevImage} className="absolute left-0 z-10 bg-accent p-2 rounded-full">
        <FaArrowLeft size={20} color="white" />
      </button>

      <div className="flex space-x-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: i === index ? 1 : 0.8 }}
            animate={{ opacity: 1, scale: i === index ? 1 : 0.8 }}
            transition={{ duration: 0.5 }}
            className={`rounded-xl shadow-lg ${i === index ? "w-60" : "w-40"}`}
          >
            <img src={img.src} alt={img.title} className="rounded-xl" />
            {i === index && <p className="text-center text-primary font-bold mt-2">{img.title}</p>}
          </motion.div>
        ))}
      </div>

      <button onClick={nextImage} className="absolute right-0 z-10 bg-accent p-2 rounded-full">
        <FaArrowRight size={20} color="white" />
      </button>
    </div>
  );
};

export default ImageCarousel;
