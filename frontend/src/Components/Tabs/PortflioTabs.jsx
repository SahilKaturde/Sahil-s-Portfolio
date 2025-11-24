import React, { useState, Suspense, lazy } from "react";

// Lazy imports
const TechStack = lazy(() => import("./TechStack"));
const Projects = lazy(() => import("./Projects"));
const Blog = lazy(() => import("./Blog"));
const Scripts = lazy(() => import("./Scripts"));

const tabs = [
  { id: "tech", label: "Tech Stack", component: TechStack },
  { id: "projects", label: "Projects", component: Projects },
  { id: "blog", label: "Blog", component: Blog },
  { id: "scripts", label: "Scripts", component: Scripts },
];

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("tech");
  const [fade, setFade] = useState(true);

  const handleTabClick = (id) => {
    if (id === activeTab) return;
    setFade(false);
    setTimeout(() => {
      setActiveTab(id);
      setFade(true);
    }, 200);
  };

  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.component;

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 py-8 md:px-6 md:py-16 font-mono">
      {/* Utility to hide scrollbar but allow scrolling */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-10 tracking-tight">
        Explore My Work
      </h2>

      {/* Tab Bar Container */}
      <div className="flex justify-center mb-8 md:mb-12">
        <div className="
          flex gap-2 overflow-x-auto no-scrollbar w-full 
          px-2 pb-2 md:pb-0 md:w-auto md:justify-center
        ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`
                whitespace-nowrap flex-shrink-0 px-5 py-2.5 md:px-6 md:py-3 
                rounded-xl text-sm font-medium transition-all duration-200
                ${
                  activeTab === tab.id
                    ? "bg-black text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-black hover:scale-105 bg-gray-50 md:bg-transparent"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div
        className={`transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        <Suspense
          fallback={
            <div className="text-center text-gray-400 py-16">
              Loading...
            </div>
          }
        >
          <ActiveComponent />
        </Suspense>
      </div>
    </div>
  );
}