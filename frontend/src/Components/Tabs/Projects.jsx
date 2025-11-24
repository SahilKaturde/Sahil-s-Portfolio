import React from "react";
import { ArrowUpRight, Github, FolderGit2, Globe, Database } from "lucide-react";

// --- Project Card Component ---
function ProjectCard({ title, description, link, icon: Icon }) {
  const hasLink = link && link !== "#";
  
  return (
    <a 
      href={hasLink ? link : "https://github.com/SahilKaturde"} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`
        group relative 
        bg-white 
        rounded-[2rem] 
        p-8 
        border border-gray-200 
        hover:border-black hover:shadow-lg
        transition-all duration-300
        flex flex-col h-full
        ${!hasLink ? "cursor-default" : "cursor-pointer"}
      `}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-full bg-gray-50 border border-gray-100 text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
           <Icon size={20} strokeWidth={1.5} />
        </div>
        
        {hasLink && (
          <div className="flex items-center gap-1 text-gray-400 group-hover:text-black transition-colors">
            <Github size={16} />
            <ArrowUpRight size={16} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mb-6 flex-grow">
        <h3 className="text-xl font-bold leading-tight mb-3 group-hover:underline decoration-1 underline-offset-4">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed font-mono mb-4 line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  );
}

// --- Main Projects Layout ---
export default function Projects() {
  const projectList = [
    {
      title: "E-Vik Frontend",
      description: "A modern frontend interface for Electronic Vehicles services or marketplace, built with React.",
      link: "https://github.com/SahilKaturde/e-vik-frontend",
      icon: Globe
    },
    {
      title: "Sales Prediction ML",
      description: "Machine Learning model using Multiple Linear Regression to predict sales based on advertising budgets.",
      link: "https://github.com/SahilKaturde/multiple-linear-regression-sales-prediction",
      icon: Database
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasting application providing current conditions and forecasts.",
      link: "https://github.com/SahilKaturde/Weather-APP",
      icon: Globe
    }
  ];

  return (
    <div className="w-full flex justify-center font-mono">
      <div className="w-full max-w-[1000px]">
        
        {/* Optional Header */}
        <div className="flex items-center gap-2 mb-8 px-2 opacity-40">
           <FolderGit2 size={16} />
           <span className="text-xs font-bold tracking-widest uppercase">Selected Projects</span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              {...project} 
            />
          ))}
        </div>

        {/* Github CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/SahilKaturde"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
          >
            <Github size={14} />
            View all repositories on GitHub
          </a>
        </div>

      </div>
    </div>
  );
}