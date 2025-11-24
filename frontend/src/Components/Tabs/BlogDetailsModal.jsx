import React, { useContext } from "react";
import { X } from "lucide-react";
import { LanguageContext } from "../context/LanguageProvider";

export default function BlogDetailsModal({ blog, close }) {
  const { lang, toggleLanguage } = useContext(LanguageContext);

  // fallback if blog missing
  if (!blog) return null;

  // choose text for preview in both languages
  const textEN = blog.fullText?.en || "";
  const textMR = blog.fullText?.mr || "";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start p-4 z-[9999] overflow-y-auto">
      <div className="bg-white w-full max-w-[900px] rounded-2xl shadow-xl p-6 my-8 overflow-y-auto relative font-mono">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <X size={22} />
        </button>

        <div className="flex items-center justify-between gap-4 mb-4">
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleLanguage()}
              className="text-sm px-3 py-1 rounded-md border"
              title="Toggle language view"
            >
              Toggle Lang
            </button>
            <span className="text-xs opacity-60">{blog.date} • {blog.location}</span>
          </div>
        </div>

        {/* Images: scattered layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {blog.images?.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`blog-img-${idx}`}
              className={`w-full ${idx === 0 ? "md:col-span-2 h-48 object-cover rounded-lg" : "h-44 object-cover rounded-lg"}`}
              style={{ objectPosition: "center" }}
            />
          ))}
        </div>

        {/* Dual language side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-2">English</h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{textEN}</p>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-2">मराठी</h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{textMR}</p>
          </div>
        </div>

        {/* Footer / notes */}
        <div className="mt-6 text-sm opacity-70">
          <p>
            Note: This is a static modal (no API) — the content is stored locally in the component.
            Replace the text with your final edits when ready.
          </p>
        </div>
      </div>
    </div>
  );
}
