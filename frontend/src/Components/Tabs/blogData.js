// IMPORT ONLY EXISTING IMAGES
import budhlaMachi from "../../../Images_for_blog/budhla_machi.png";
import kokanDeaja from "../../../Images_for_blog/kokan_drwaja.png";
import mengaieTemple from "../../../Images_for_blog/mengaie_temple.png";
import GA from "../../../Images_for_blog/GA_Kul.png";

export const blogData = {
  "1": {
    id: 1,
    title: "Torna Fort – प्रचंडगड",
    date: "10 Feb 2025",
    location: "Velhe, Pune",

    // ONLY 3 IMAGES
    images: [budhlaMachi, kokanDeaja, mengaieTemple],

    fullText: {
      en: "",
      mr: `
तोरणा… प्रचंडगड. सह्याद्रीच्या कातळकड्यांवर पसरलेला, विशाल, रांगडा आणि इतिहासाने भरलेला...

(Your full Torna text)
      `
    }
  },

  "2": {
    id: 2,
    title: "G. A. Kulkarni – सावल्यांचे शिल्पकार",
    date: "14 Feb 2025",
    location: "Pune",

    // ONLY 1 IMAGE
    images: [GA],

    fullText: {
      en: "",
      mr: `
(Your full GA Kulkarni Marathi text)
      `
    }
  }
};
