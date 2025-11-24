// BlogDetails.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BlogDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-[800px] mx-auto py-12 px-4 font-mono">
      <Link to="/blog" className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 mb-6">
        <ArrowLeft size={16} />
        Back
      </Link>

      <h1 className="text-4xl font-bold mb-4">Static Blog #{id}</h1>

      <p className="text-gray-700 leading-relaxed text-lg">
        This is a static big-page version of the blog.  
        You clicked the card, so this page opened — no API, no data fetch.  
        Everything here is just a clean static layout.
      </p>
    </div>
  );
}
