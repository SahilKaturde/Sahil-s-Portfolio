import React, { useState } from "react";
import Real_blog from "./Real_blog";
import BlogDetailsModal from "./BlogDetailsModal";

import budhlaMachi from '../../../Images_for_blog/budhla_machi.png';
import kokanDeaja from '../../../Images_for_blog/kokan_drwaja.png';
import mengaieTemple from '../../../Images_for_blog/mengaie_temple.png';
import GA from '../../../Images_for_blog/GA_Kul.png';

export default function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const tornaBlog = {
    id: 1,
    title: "Torna Fort: The Eagle's Nest",
    preview: "From Katraj to Torna — a morning bus ride and a timeless climb.",
    date: "Nov 2025",
    location: "Pune, MH",
    category: "History & Trekking",
    images: [kokanDeaja, budhlaMachi, mengaieTemple],
    fullText: {
      en: `
I remember catching the morning bus from Katraj. The bus was small...
(Full English text as in the Markdown above.)
      `,
      mr: `
मला कात्रजहून सकाळची बस आठवते. बस छोटी होती...
(Full Marathi text as in the Markdown above.)
      `
    }
  };

  const gaBlog = {
    id: 2,
    title: "G. A. Kulkarni — Stories that stayed",
    preview: "Reflections on Radhi, Goswami, and the Dhangar rooftop tale.",
    date: "Dec 2025",
    location: "Reading Notes",
    category: "Literature",
    images: [GA],
    fullText: {
      en: `
G. A. Kulkarni’s writing often cuts straight to the human mystery...
(Full English text as in the Markdown above.)
      `,
      mr: `
जी. ए. कुलकर्णींची लेखनशैली मानवी कोड्यांना सरळ स्पर्श करते...
(Full Marathi text as in the Markdown above.)
      `
    }
  };

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeBlog = () => setIsModalOpen(false);

  return (
    <>
      <div className="w-full flex justify-center py-10 font-mono">
        <div className="w-full max-w-[800px] px-4">
          <h2 className="opacity-60 mb-6 text-sm font-bold uppercase tracking-widest">
            Latest Adventure & Reads
          </h2>

          <div className="space-y-6">
            <div onClick={() => openBlog(tornaBlog)} className="cursor-pointer">
              <Real_blog
                id={tornaBlog.id}
                title={tornaBlog.title}
                preview={tornaBlog.preview}
                date={tornaBlog.date}
                location={tornaBlog.location}
                category={tornaBlog.category}
              />
            </div>

            <div onClick={() => openBlog(gaBlog)} className="cursor-pointer">
              <Real_blog
                id={gaBlog.id}
                title={gaBlog.title}
                preview={gaBlog.preview}
                date={gaBlog.date}
                location={gaBlog.location}
                category={gaBlog.category}
              />
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <BlogDetailsModal blog={selectedBlog} close={closeBlog} />
      )}
    </>
  );
}
