import React, { useState } from "react";
import Real_blog from "./Real_blog";
import BlogDetailsModal from "./BlogDetailsModal";

export default function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Updated Blog Data: Torna Fort
  const blogData = {
    id: 1,
    title: "Torna Fort: The Eagle's Nest",
    preview:
      "Explore Prachandagad, the massive fort that marked the beginning of the Maratha Empire.",
    date: "Nov 2025",
    location: "Pune, MH",
    category: "History & Trekking",
    fullText: `
      Torna Fort, historically known as Prachandagad, holds a special place in history. 
      It was the very first fort captured by Chhatrapati Shivaji Maharaj in 1646 at the young age of 16, 
      marking the foundation of the Maratha Empire.

      Located in the Pune district, it stands as the highest hill-fort in the region (1403m). 
      The trek is thrilling, offering breathtaking views of the Sahyadri mountain ranges and the backwaters of the Bhatghar Dam.

      Key spots to see include the Zunjar Machi, Budhla Machi, and the temple of Goddess Mengai.
    `
  };

  const openBlog = () => {
    setSelectedBlog(blogData);
    setIsModalOpen(true);
  };

  const closeBlog = () => setIsModalOpen(false);

  return (
    <>
      <div className="w-full flex justify-center py-10 font-mono">
        <div className="w-full max-w-[800px] px-4">

          <h2 className="opacity-60 mb-6 text-sm font-bold uppercase tracking-widest">
            Latest Adventure
          </h2>

          {/* Card opens the modal */}
          <div onClick={openBlog} className="cursor-pointer">
            <Real_blog
              id={blogData.id}
              title={blogData.title}
              preview={blogData.preview}
              date={blogData.date}
              location={blogData.location}
              category={blogData.category}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <BlogDetailsModal blog={selectedBlog} close={closeBlog} />
      )}
    </>
  );
}