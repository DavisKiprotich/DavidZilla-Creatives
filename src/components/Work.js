'use client'
import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const categories = ["All", "Logo", "Banner", "Business Cards", "Flyers"];
const projects = [
  { id: 1, title: "Divine Circuits", category: "Logo", image: "/images/circuits Logo.jpg" },
  { id: 2, title: "Famous Novels", category: "Book", image: "/images/book1.jpg" },
  { id: 3, title: "Ahsante", category: "Logo", image: "/images/ahsante logo.jpg" },
  { id: 4, title: "Alopias", category: "Logo", image: "/images/alopias logo.jpg" },
  { id: 5, title: "Sculpture Showcase", category: "Art", image: "/images/art2.jpg" },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="flex flex-col md:flex-row p-6 gap-6" id="collections">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 border-r border-gray-300 pr-4">
        <h2 className="text-3xl font-bold text-textBlue">Featured <span className="text-orange-500 italic relative top-0.5">Work</span></h2>
        <ul className="mt-4 flex flex-wrap md:flex-col gap-4 md:gap-2">
          {categories.map((category) => (
            <li
              key={category}
              className={`flex items-center gap-2 cursor-pointer text-lg font-medium transition-colors duration-200 hover:text-orange-500 ${
                selectedCategory === category ? "text-orange-500 font-semibold" : "text-gray-700"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className={`w-8 h-8 flex items-center justify-center rounded-full border ${selectedCategory === category ? "bg-orange-500 text-white" : "border-gray-400 text-gray-700"}`}>
                <IoMdArrowRoundForward />
              </span>
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Projects Grid */}
      <div className="w-full md:w-3/4 h-[400px] overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="flex space-x-4 bg-white shadow-md rounded-lg p-4">
            <img src={project.image} alt={project.title} className="w-24 h-24 object-cover rounded-lg" />
            <div>
              <h3 className="text-l font-light text-textBlue">{project.title}</h3>
              <p className="text-gray-500 text-sm">Category: {project.category}</p>
              <a href="#" className="text-orange-500 mt-2 inline-block">Details →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Work