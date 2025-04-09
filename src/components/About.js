'use client'
import React from 'react'
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
        "Построить интуитивно понятную навигацию, которая упрощает пользователю процесс поиска, выбора и покупки украшений. Структура сайта должна вести клиента к целевому действию — оформлению заказа.",
      bgColor: "bg-yellow-200",
      rotate: "-rotate-3",
    },
    {
      id: "02",
      title: "Flyers",
      description:
        "Спроектировать сайт, который будет одинаково удобен для использования на любых устройствах — от мобильных телефонов до больших экранов.",
      bgColor: "bg-red-100",
      rotate: "rotate-2",
    },
    {
      id: "03",
      title: "Company Profile",
      description:
        "Сделать процесс покупки простым, быстрым и приятным, чтобы пользователь мог легко принять решение и завершить оформление заказа.",
      bgColor: "bg-orange-400",
      rotate: "-rotate-2",
    },
    {
      id: "Business Cards",
      title: "",
      description:
        "Создать дизайн, который будет актуальным и функциональным в долгосрочной перспективе, учитывая возможное расширение ассортимента или развитие новых направлений.",
      bgColor: "bg-blue-300",
      rotate: "rotate-3",
    },
  ];
  return (
    <section className="px-6 lg:px-24 py-12 bg-gray-200" id='about'>
      {/* Heading */}
      <h1 className="left-0 text-3xl lg:text-4xl font-bold mb-8 text-primary">
          <span className="text-textBlue">Why We <span className='text-secondary'>Rock!</span></span>
      </h1>

      {/* Description for Small Screens */}
      <div className="block md:hidden text-center p-4 rounded-lg">
        <p className="text-lg font-medium">
          We focus on graphical design services which entail logo design, flyers, cards, and other works.
        </p>
      </div>
   

      {/* Card Container */}
      <div className="hidden lg:flex flex-wrap justify-center gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative p-6 w-52 md:w-60 rounded-2xl shadow-lg ${card.bgColor} ${card.rotate}`}
          >
            {/* Card Number */}
            <span className="absolute top-3 left-3 text-sm font-sans text-black rounded-full w-8 h-8 flex items-center justify-center">{card.id}</span>

            {/* Link Icon */}
            <a href="#" className="absolute top-3 right-3">
              <ArrowUpRight size={18} />
            </a>

            {/* Title */}
            <h3 className="text-lg font-bold mt-6 mb-2">{card.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About