import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageProvider"
import { ArrowLeft } from "lucide-react";

const BLOGS = {
  "1": {
    id: 1,
    title: "Torna Fort",
    fullText: {
      en: "...",
      mr: "..."
    }
  },
  "2": {
    id: 2,
    title: "G. A. Kulkarni",
    fullText: {
      en: "...",
      mr: "..."
    }
  }
}


export default function BlogDetails() {
  const { id } = useParams();
  const blog = BLOGS[id];
  const { lang } = useContext(LanguageContext);

  if (!blog) {
    return (
      <div className="max-w-[800px] mx-auto py-12 px-4 font-mono">
        <Link to="/blog" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 mb-6">
          <ArrowLeft size={16} />
          Back
        </Link>
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto py-12 px-4 font-mono">
      <Link to="/blog" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 mb-6">
        <ArrowLeft size={16} />
        Back
      </Link>

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">English</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.fullText?.en}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">मराठी</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{blog.fullText?.mr}</p>
        </div>
      </div>
    </div>
  );
}
