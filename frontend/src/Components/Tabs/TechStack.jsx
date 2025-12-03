import React from "react";
import { Code, Layers, Terminal } from "lucide-react";

const techData = [
  {
    category: "Programming Languages",
    icon: Code,
    items: ["Python", "JavaScript", "C/ C++"],
    description: "Syntactical Foundation"
  },
  {
    category: "Core Stack (Web/Data)",
    icon: Layers,
    items: ["Django", "React.js", "REST API", "Streamlit"],
    description: "Full Stack Development"
  },
  {
    category: "Data & ML Tools",
    icon: Terminal,
    items: ["Pandas", "Scikit-Learn", "Seaborn", "Matplotlib", "LangChain"],
    description: "Data Science Pipelines"
  }
];

export default function TechStack() {
  return (
    <div className="w-full min-h-screen py-12 px-4 font-mono flex justify-center items-start">
      <div className="w-full max-w-[900px]">

        {/* Header Section */}
        <div className="mb-10 text-center">
          <span className="px-3 py-1 rounded-md bg-gray-100 text-xs font-bold tracking-wider text-gray-600 uppercase mb-3 inline-block">
            Skills & Tools
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black">
            Tech Stack
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {techData.map((tech, index) => (
            <div
              key={index}
              className={`group relative w-full
                bg-white
                rounded-2xl
                p-6 sm:p-8
                border border-black
                shadow-sm hover:shadow-md
                transition-all duration-500
                flex flex-col justify-between
                ${index === 2 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
              `}
            >
              
              {/* Card Header */}
              <div className="flex flex-col items-start mb-6">
                <div className="p-3 rounded-2xl bg-white border border-black text-black mb-4 group-hover:scale-105 transition-transform duration-300">
                  <tech.icon size={24} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-black mb-1">
                  {tech.category}
                </h3>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  {tech.description}
                </p>
              </div>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="
                      bg-black text-white 
                      px-3 py-1.5 rounded-xl
                      text-sm font-medium
                      cursor-default
                      transition-transform hover:-translate-y-0.5
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
