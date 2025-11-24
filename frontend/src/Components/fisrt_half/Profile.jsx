import React, { useContext } from "react";
import profile_photo from "../../assets/first_half/pfp.png";
import { LanguageContext } from "../context/LanguageProvider";

function Profile() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="
      w-full 
      min-h-[45vh] sm:min-h-[65vh] /* Reduced height constraints by ~10% to reduce vertical whitespace */
      flex justify-center items-center 
      bg-white 
      px-4 sm:px-4 
      pt-5 pb-1 sm:py-0 /* Mobile: Kept top padding, reduced bottom padding significantly */
      font-mono
    ">
      {/* Container */}
      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        {/* Profile Photo */}
        <div className="flex-shrink-0">
          <img
            src={profile_photo}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-gray-300"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center sm:text-left">
          {language === "english" ? (
            <p className="text-md text-gray-600 leading-relaxed">
              Hey, nice to see you here! My name is Sahil Katurde, and I am pursuing a <strong>Bachelor of Computer Science</strong> from PVG COSC. I have learned <strong>data structures</strong> and have a solid understanding of <strong>web development</strong>, having created several projects in this area. Currently, I am diving into <strong>machine learning</strong>. I have completed the foundational aspects, including <strong>data gathering</strong>, <strong>data cleaning</strong>, and other essential steps for data analysis, and I am now preparing to work with machine learning algorithms.
            </p>
          ) : (
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed text-gray-700">
              हाय! मी साहिल कातुर्डे आहे आणि मी PVG COSC मधून <strong>बैचलर ऑफ कंप्युटर सायन्स</strong> करत आहे. मी <strong>डेटा स्ट्रक्चर्स</strong> शिकले आहेत आणि <strong>वेब डेव्हलपमेंट</strong> मध्ये ठीक समज आहे, आणि या क्षेत्रात काही प्रोजेक्ट्स तयार केले आहेत. सध्या मी <strong>मशीन लर्निंग</strong> मध्ये लक्ष केंद्रित करत आहे. मी मूलभूत बाबी पूर्ण केल्या आहेत, जसे की <strong>डेटा गोळा करणे</strong>, <strong>डेटा क्लीनिंग</strong>, आणि इतर आवश्यक पायऱ्या डेटा विश्लेषणासाठी, आणि आता मशीन लर्निंग अल्गोरिदमवर काम करण्यासाठी तयार आहे.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;