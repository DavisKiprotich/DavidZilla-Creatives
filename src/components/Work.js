"use client";
import React, { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import UploadForm from "./UploadForm";
import StaticProjects from "@/lib/StaticProjects";
import { useSession } from "next-auth/react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const categories = ["All", "Logo", "Business Card", "Flyer", "Company Profile"];

const Work = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null); // holds index of active image
  const [showLightbox, setShowLightbox] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [uploadedProjects, setUploadedProjects] = useState([]);
  const { data: session } = useSession(); // 👈 Access the session

  const fetchUploadedProjects = async () => {
    try {
      const res = await fetch("/uploads/projects.json");
      if (res.ok) {
        const data = await res.json();
        setUploadedProjects(data);
      }
    } catch (err) {
      console.error("Failed to load uploaded projects", err);
    }
  };

  useEffect(() => {
    fetchUploadedProjects();
  }, []);

  const combinedProjects = [...StaticProjects, ...uploadedProjects];

  const filteredProjects =
    selectedCategory === "All"
      ? combinedProjects
      : combinedProjects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section className="flex flex-col md:flex-row p-6 gap-6" id="collections">
      <h2 className="text-3xl font-bold text-textBlue">
        Featured{" "}
        <span className="text-orange-500 italic relative top-0.5">Work</span>
      </h2>

      {/* Categories for sm/md screens */}
      <div className="block lg:hidden mt-4">
        <ul className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 border ${
                selectedCategory === category
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-transparent text-gray-700 border-gray-300"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Category Sidebar */}
      <div className="hidden lg:block lg:w-1/4 border-r border-gray-300 pr-4">
        <ul className="mt-4 flex flex-wrap md:flex-col gap-4 md:gap-2">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 cursor-pointer text-lg font-medium transition-colors duration-200 hover:text-orange-500 ${
                selectedCategory === category
                  ? "text-orange-500 font-semibold"
                  : "text-gray-700"
              }`}
            >
              <span
                className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "border-gray-400 text-gray-700"
                }`}
              >
                <IoMdArrowRoundForward />
              </span>
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Upload Form - Only show if user is signed in */}
      {session?.user?.canUpload && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Upload Your Design</h2>
          <UploadForm onUploadSuccess={fetchUploadedProjects} />
        </section>
      )}

    
      {/* Projects Display - sm screens ONLY (gallery grid with scroll) */}
<div className="w-full md:hidden overflow-y-auto max-h-[85vh]">
  <div className="grid grid-cols-2 gap-1 ">
    {filteredProjects.map((project, index) => (
      <div key={`${project.title}-${index}`} className="w-full">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onClick={() => {
            setLightboxImage(project.image);
            setShowLightbox(true);
            setLightboxIndex(index);
          }}
          className="w-full h-auto object-cover rounded-sm cursor-pointer"
        />
      </div>
    ))}
  </div>
</div>

{/* Projects Display - md and lg screens ONLY (original list layout) */}
<div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-3/4 overflow-y-auto max-h-[85vh]">
  {filteredProjects.map((project, index) => (
    <div
      key={`${project.title}-${index}`}
      className="flex space-x-4 bg-white shadow-md rounded-lg p-4"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        onClick={() => {
          setLightboxImage(project.image);
          setShowLightbox(true);
          setLightboxIndex(index);
        }}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <div>
        <h3 className="text-l font-light text-textBlue">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm">
          Category: {project.category}
        </p>
        <a
          href={project.image}
          target="_blank"
          className="text-orange-500 mt-2 inline-block"
        >
          Details
        </a>
      </div>
    </div>
  ))}
</div>

      {showLightbox && lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setShowLightbox(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === 0 ? filteredProjects.length - 1 : prev - 1
              );
            }}
            className="absolute left-4 text-white text-3xl font-bold z-50"
          >
            <RiArrowLeftSLine />
          </button>

          <img
            src={filteredProjects[lightboxIndex].image}
            alt="Preview"
            className="max-w-full max-h-full rounded-md"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === filteredProjects.length - 1 ? 0 : prev + 1
              );
            }}
            className="absolute right-4 text-white text-3xl font-bold z-50"
          >
            <RiArrowRightSLine/>
          </button>
        </div>
      )}
    </section>
  );
};

export default Work;
