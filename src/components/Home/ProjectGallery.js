"use client";

import React, { useState } from "react";
import Image from "next/image";
import { filtersData } from "@/data/data";
import { getProjectsForFilter } from "../helper/helperFunctions";

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState("NEWEST");

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 overflow-x-auto">
        <div className="flex items-center space-x-4 md:space-x-7 min-w-max p-2 md:p-3 bg-white rounded-full border border-[#20202080]">
          {filtersData.map((filter) => (
            <button
              key={filter.id}
              className={`relative px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm rounded-full whitespace-nowrap transition-colors duration-200
                ${
                  activeFilter === filter.label
                    ? "bg-[#1AAC98] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              onClick={() => setActiveFilter(filter.label)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <div className="block md:hidden space-y-4">
        {getProjectsForFilter(activeFilter).map((project) => (
          <div
            key={project.id}
            className="relative rounded-2xl overflow-hidden bg-gray-100"
          >
            <div className="aspect-[3/4]">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                layout="fill"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-white/90">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
        {getProjectsForFilter(activeFilter).map((project) => (
          <div
            key={project.id}
            className="relative group rounded-lg overflow-hidden bg-gray-100"
          >
            <div className="aspect-square relative">
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="object-cover"
                layout="fill"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm">{project.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
