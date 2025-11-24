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
    <div className="w-full max-w-[1100px] mx-auto px-6 py-16 font-mono">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-center mb-10 tracking-tight">
        Explore My Work
      </h2>

      {/* Tab Bar */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${
                  activeTab === tab.id
                    ? "bg-black text-white shadow-lg scale-105"
                    : "text-gray-600 hover:text-black hover:scale-105"
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
