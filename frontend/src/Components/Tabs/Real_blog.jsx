// Real_blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

export default function Real_blog({ id, title, preview, date, location, category }) {
  return (
    <Link to={`/blog/${id}`} className="block">
      <div
        className="
        group bg-white p-8 rounded-3xl border border-gray-200 
        hover:border-black hover:shadow-lg transition-all duration-300
      "
      >
        {/* Top Section */}
        <div className="flex justify-between items-start mb-6">
          <span className="px-3 py-1 text-xs font-bold uppercase bg-gray-50 border border-gray-200 rounded-full group-hover:bg-black group-hover:text-white transition">
            {category}
          </span>

          <div className="flex items-center text-xs text-gray-400 gap-2">
            <Calendar size={12} />
            <span>{date}</span>
          </div>
        </div>

        {/* Main Text */}
        <h3 className="text-2xl font-bold mb-3 group-hover:underline underline-offset-4">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {preview}
        </p>

        {/* Bottom Section */}
        <div className="flex justify-between items-center border-t border-gray-200 mt-6 pt-6">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin size={14} />
            <span>{location}</span>
          </div>

          <div className="p-2 rounded-full bg-gray-50 group-hover:bg-black group-hover:text-white transition">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}
