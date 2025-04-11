"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const About = () => {
  const cards = [
    {
      id: "01",
      title: "Logo Design",
      description:
        "Where your brand’s personality meets pixels:we design logos that stick in minds and look sharp everywhere, from business cards to billboards.",
      rotate: "-rotate-3",
    },
    {
      id: "02",
      title: "Flyers",
      description:
        "Big energy in one sheet! Whether it’s a sale, an event, or just vibes, our flyers shout your message loud, clear, and creatively.",
      bgColor: "bg-red-100",
      rotate: "rotate-2",
    },
    {
      id: "03",
      title: "Company Profile",
      description:
        "Tell your story like a pro. We design sleek, scroll-worthy company profiles that showcase your journey, services, and swagger.",
      bgColor: "bg-orange-400",
      rotate: "-rotate-2",
    },
    {
      id: "04",
      title: "Business Cards",
      description:
        "Not your average name tag — our business cards pack a punch of personality in a palm-sized design that leaves a lasting impression.",
      bgColor: "bg-blue-300",
      rotate: "rotate-3",
    },
  ];
  return (
    <section className="px-6 lg:px-24 py-12 bg-gray-200" id="about">
      {/* Heading */}
      <h1 className="left-0 text-3xl lg:text-4xl font-bold mb-8 text-primary">
        <span className="text-textBlue">
          Why We <span className="text-secondary">Rock!</span>
        </span>
      </h1>

      {/* Description for Small Screens */}
      <div className="block md:hidden text-center px-6 py-4">
        <h2 className="text-lg font-semibold text-secondary">About Us</h2>
        <div className="w-12 h-0.5 bg-textBlue mx-auto my-2" />
        <p className="text-primary font-medium italic">
          A creative gateway to{" "}
          <span className="text-secondary">unique visual branding</span> that
          makes a statement. <br />
          Logos, company profiles, and more — all crafted with flair and
          precision to wow your audience and bring your ideas to life.
        </p>
      </div>

      {/* Card Container */}
      <div className="hidden md:flex flex-wrap justify-center gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative p-6 w-52 md:w-60 rounded-2xl shadow-lg ${card.bgColor} ${card.rotate}`}
          >
            {/* Card Number */}
            <span className="absolute top-3 left-3 text-sm font-sans text-black rounded-full w-8 h-8 flex items-center justify-center">
              {card.id}
            </span>

            {/* Link Icon */}
            <a href="#collections" className="absolute top-3 right-3">
              <ArrowUpRight size={18} />
            </a>

            {/* Title */}
            <h3 className="text-textBlue text-lg font-bold mt-6 mb-2">{card.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
