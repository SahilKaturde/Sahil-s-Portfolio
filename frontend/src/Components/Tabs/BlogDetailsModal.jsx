import React from "react";
import { X } from "lucide-react";

export default function BlogDetailsModal({ blog, close }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-[9999]">

      <div className="bg-white w-full max-w-[700px] max-h-[85vh] rounded-2xl shadow-xl p-8 overflow-y-auto relative font-mono">

        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <X size={22} />
        </button>

        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-700 whitespace-pre-line leading-relaxed">
          {blog.fullText}
        </p>
      </div>

    </div>
  );
}

