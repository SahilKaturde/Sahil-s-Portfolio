import React from "react";
import { X } from "lucide-react";

export default function BlogDetailsModal({ blog, close }) {
  if (!blog) return null;

  const textMR = blog.fullText || "";

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-start p-4 z-[9999] overflow-y-auto">

      <div className="bg-white w-full max-w-[950px] rounded-2xl shadow-2xl p-8 my-10 relative font-mono">

        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
        >
          <X size={28} />
        </button>

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">{blog.title}</h1>

          <span className="text-xs opacity-70">
            {blog.date} • {blog.location}
          </span>
        </div>

        {/* IMAGE GALLERY */}
        <div className="w-full mb-10 space-y-6">

          {/* MAIN IMAGE */}
          {blog.images?.[0] && (
            <img
              src={blog.images[0]}
              className="w-full max-h-[450px] object-contain rounded-xl shadow-md bg-gray-100"
              alt="main-img"
            />
          )}

          {/* NEXT 3 IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {blog.images?.slice(1, 4).map((src, i) => (
              <div key={i} className={`${i === 1 ? "md:col-span-2" : ""}`}>
                <img
                  src={src}
                  className="w-full max-h-[350px] object-contain bg-gray-100 rounded-xl shadow-md"
                  alt={`blog-img-${i}`}
                />
              </div>
            ))}
          </div>

          {/* REMAINING IMAGES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {blog.images?.slice(4).map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-full max-h-[250px] object-contain bg-gray-100 rounded-lg shadow"
                alt={`blog-extra-${i}`}
              />
            ))}
          </div>

        </div>

        {/* MARATHI TEXT ONLY */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 border-b pb-1">मराठी</h3>

          <p className="text-gray-800 whitespace-pre-line leading-relaxed text-[16px]">
            {textMR}
          </p>
        </div>

        <footer className="mt-10 pt-4 border-t text-sm opacity-60">
          हा ब्लॉग React Component मध्ये Static स्वरूपात संग्रहित आहे.
        </footer>

      </div>
    </div>
  );
}
