import React from "react";
import { GrGithub } from "react-icons/gr";
import { projects } from "./projects.js";

export const Project = () => {
  return (
    <div className="h-screen py-24 translate-y-4 transition-all duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-xl text-center mb-16 text-gray-300">Check out some of my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/5" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-black">{project.title}</h3>
                <p className="text-gray-600 mb-4 h-16">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-500 text-white rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 flex items-center gap-2 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
                  >
                    <GrGithub className="text-xl" /> Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
