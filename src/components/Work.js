'use client'
import React, { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const categories = ["All", "Logo", "Business Card", "Flyer", "Company Profile"];
const projects = [
  { id: 1, title: "Divine Circuits", category: "Logo", image: "/images/circuits Logo.jpg" },
  { id: 2, title: "Famous Novels", category: "Flyer", image: "/images/Acute flyer.jpg" },
  { id: 3, title: "Ahsante", category: "Logo", image: "/images/ahsante logo.jpg" },
  { id: 4, title: "MavoHills", category: "Business Card", image: "/images/mavohill bcards.jpg" },
  { id: 5, title: "Alopias", category: "Logo", image: "/images/alopias logo.jpg" },
  { id: 6, title: "Ahsante Preparation", category: "Flyer", image: "/images/Asante flyer (2).jpg" },
  { id: 7, title: "MK Business Card", category: "Business Card", image: "/images/mk business card.jpg" },
  { id: 8, title: "Aivapor Dark", category: "Logo", image: "/images/aivapor dark logo.jpg" },
  { id: 9, title: "Ceelusive", category: "Logo", image: "/images/ceelusive banner.jpg" },
  { id: 10, title: "Blessings", category: "Flyer", image: "/images/cup flyer.jpg" },
  { id: 11, title: "Global", category: "Logo", image: "/images/global logo.jpg" },
  { id: 12, title: "Asante", category: "Flyer", image: "/images/Asante flyer.jpg" },
  { id: 13, title: "Gospel Drill", category: "Flyer", image: "/images/drill flyer.jpg" },
  { id: 14, title: "Black Coffee", category: "Logo", image: "/images/black logo.jpg" },
  { id: 15, title: "Psalms", category: "Flyer", image: "/images/christ banner.jpg"},
  { id: 16, title: "Dari Life", category: "Logo", image: "/images/dari life logo.jpg"},
  { id: 17, title: "George", category: "Business Card", image: "/images/george bcard.jpg"},
  { id: 18, title: "Ecospeck", category: "Flyer", image: "/images/ecospeck flyer.jpg"},
  { id: 19, title: "Elite", category: "Logo", image: "/images/elite logo.jpg"},
  { id: 20, title: "EM", category: "Logo", image: "/images/em logo.jpg"},
  { id: 21, title: "Fathers Day", category: "Flyer", image: "/images/fathers flyer.jpg"},
  { id: 22, title: "Fruit Freeze", category: "Logo", image: "/images/fruit logo.jpg"},
  { id: 23, title: "The Glamour", category: "Flyer", image: "/images/glamour flyer.jpg"},
  { id: 24, title: "Juvington", category: "Logo", image: "/images/juvington logo.jpg"},
  { id: 25, title: "Kalroi", category: "Flyer", image: "/images/kalroi flyer.jpg"},
  { id: 26, title: "KD", category: "Logo", image: "/images/kd flyer.jpg"},
  { id: 27, title: "Housemaid in need", category: "Flyer", image: "/images/housemaid flyer.jpg"},
  { id: 28, title: "Ino Banner", category: "Flyer", image: "/images/ino banner.jpg"},
  { id: 29, title: "JKris", category: "Logo", image: "/images/jkris logo.jpg"},
  { id: 30, title: "Graduation Flyer", category: "Logo", image: "/images/graduation flyer.jpg"},
  { id: 31, title: "Gospel", category: "Flyer", image: "/images/gospel flyer.jpg"},
  { id: 32, title: "Global", category: "Company Profile", image: "/images/Global Company1.jpg"},
  { id: 33, title: "Kwint", category: "Logo", image: "/images/kwint logo.jpg"},
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="flex flex-col md:flex-row p-6 gap-6" id="collections">
      <h2 className="text-3xl font-bold text-textBlue">Featured <span className="text-orange-500 italic relative top-0.5">Work</span></h2>
      {/* Sidebar */}
      <div className="hidden md:block md:w-1/4 border-r border-gray-300 pr-4">
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

      {/* Mobile View with Sidebar - Visible only on small screens */}
<div className="block md:hidden w-full h-[85vh] overflow-y-auto">
  {/* Mobile Sidebar as horizontal scrollable category list */}
  <div className="flex overflow-x-auto gap-4 py-2 border-b border-gray-200 mb-4">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`flex-shrink-0 px-4 py-2 rounded-full border text-sm whitespace-nowrap transition-colors duration-200 ${
          selectedCategory === category
            ? "bg-orange-500 text-white border-orange-500"
            : "text-gray-700 border-gray-300"
        }`}
      >
        {category}
      </button>
    ))}
  </div>

  {/* Mobile Image Grid */}
  <div className="grid grid-cols-2 gap-4">
    {filteredProjects.map((project) => (
      <img
        key={project.id}
        src={project.image}
        alt={project.title}
        className="w-full h-auto rounded-xl object-cover"
      />
    ))}
  </div>
</div>



      {/* Projects Grid - For md and up */}
<div className="hidden md:grid w-full md:w-3/4 h-[400px] overflow-y-auto grid-cols-1 md:grid-cols-2 gap-6">
  {filteredProjects.map((project) => (
    <div key={project.id} className="flex space-x-4 bg-white shadow-md rounded-lg p-4">
      <img src={project.image} alt={project.title} className="w-24 h-24 object-cover rounded-lg" />
      <div>
        <h3 className="text-l font-light text-textBlue">{project.title}</h3>
        <p className="text-gray-500 text-sm">Category: {project.category}</p>
        <a href={project.image} target="_blank" className="text-orange-500 mt-2 inline-block">Details</a>
      </div>
    </div>
  ))}
</div>

    </section>
  )
}

export default Work