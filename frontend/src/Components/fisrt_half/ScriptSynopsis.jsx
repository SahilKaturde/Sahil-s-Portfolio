import React, { useState, useContext, createContext } from "react";
import { BookOpen, Feather, Globe, ChevronRight, ChevronLeft, CloudRain } from "lucide-react";

// --- LOCAL CONTEXT SETUP ---
const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// --- MAIN COMPONENT ---
export default function Scripts() {
  return (
    <LanguageProvider>
      <div className="w-full px-4 sm:px-0 flex justify-center py-10 bg-gray-50 min-h-screen">
        <ScriptSynopsis />
      </div>
    </LanguageProvider>
  );
}

/**
 * ScriptSynopsis Component
 * Features:
 * - Slideshow functionality (Next/Prev)
 * - Multi-language support (English/Marathi)
 * - "Widget" aesthetic (Black & White, Rounded)
 */
function ScriptSynopsis() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- DATA: Script Collection ---
  const scripts = [
    {
      id: "atmantar",
      title: language === "marathi" ? "आत्मांतर" : "ATMAṆTAR",
      subtitle: language === "marathi" ? "काळ आणि आत्म्याचा प्रवास" : "A Journey Through the Self",
      version: "v.Initial_Draft",
      icon: Feather,
      description: language === "marathi"
        ? `ही कथा एका तरुण प्रवाशांची आहे, जे धोडप, महाराष्ट्र येथील पवित्र मंदिराला भेट देतात. 
        जीवनाच्या मार्गावर अडचणी, अंतःकरणातील दुरगम भावनांचे भडक अनुभव आणि भितीची कुजबुज त्यांना घेऊन जाते. 
        
        मुख्य पात्र संघर्षानंतर टेकडीवर उडी मारतो; मृत्यूच्या दाराशी झुंज देताना, एक तपस्वी त्याला वाचवतो. तपस्वी देतो दुसरा अवसर — १९२४ च्या एका वेगळ्या काळात, जिथे तोरणा, राजगड आणि कोकण रायगडच्या काही भागात इतिहासाने नवीन मार्ग धरला आहे.`
        : `This is the story of a young group of trekkers visiting a sacred temple in Dhodap, Maharashtra. On the journey of life, they face trials, deep, inscrutable emotions, and the whispers of fear. 
        
        The protagonist leaps from a cliff after conflict, confronting the edge of death, only to be saved by a hermit. The hermit grants a second chance — into an alternate timeline in 1924, spanning the regions of Torna, Rajgad, and parts of Konkan Raigad, where history has charted a new course.`,
      themes: language === "marathi"
        ? ["जीवन", "मृत्यू", "आत्मा", "पर्यायी वास्तव"]
        : ["Life", "Death", "Soul", "Alternate Reality"],
      genre: language === "marathi" ? "अध्यात्मिक / थ्रिलर" : "Spiritual / Thriller / Sci-Fi"
    },
    {
      id: "aranya",
      title: language === "marathi" ? "अरण्य" : "ARANYA",
      subtitle: language === "marathi" ? "शेवटचे जंगल" : "The Last Jungle",
      version: "v.Concept_Note",
      icon: CloudRain,
      description: language === "marathi"
        ? `नजीकच्या भविष्यात, भारताचा बहुतांश भाग ओसाड वाळवंट झाला आहे. पण पश्चिम घाटात—सह्याद्रीपासून कन्याकुमारीपर्यंत—सतत पाऊस पडतो. हे अरण्य आहे—पृथ्वीवर उरलेला शेवटचा हिरवा पट्टा.
        
        नायक एक शांत, अंतर्मुख माणूस आहे. वाढत्या लोकसंख्येचा भार कमी करण्यासाठी त्याने तरुणपणीच वंध्यत्व स्वीकारले आहे. समाज आणि स्वतःला 'देव' मानणारा एक उद्योगपती त्याला "अपूर्ण पुरुष" म्हणून हिणवतात. हा उद्योगपती पवित्र पर्वतावर धरण बांधून "प्रगती" आणू पाहतोय.
        
        पण नायकाला जाणवते की हे धरण अरण्याला बुडवेल. त्याला साक्षात्कार होतो की देव एखादी व्यक्ती किंवा मूर्ती नाही, तर निसर्गच खरा देव आहे. हीच जाणीव घेऊन तो खोट्या देवाविरुद्ध आणि निसर्गाच्या रक्षणासाठी उभा राहतो. 
        
        (पिंक फ्लॉइडच्या संगीतासारखा उदास पण सुंदर माहोल)`
        : `In the near future, most of India has turned into a barren wasteland. But along the Western Ghats, it always rains. This is Aranya—the last jungle.

        The protagonist is a quiet man who, overwhelmed by global collapse, chose infertility in his youth to save resources. He is mocked for this choice by a powerful businessman who plans to build a massive hydro-dam on a sacred mountain, claiming it will bring salvation.

        The protagonist realizes the dam will kill the last living ecosystem. Through visions and the rhythm of the rain, he awakens to a truth: God is not a figure to worship—Nature itself is the divinity. He stands against the false god to protect the only true prayer left: The Jungle.
        
        (Mood inspired by Pink Floyd)`,
      themes: language === "marathi"
        ? ["हवामान डिस्टोपिया", "ओळख आणि लज्जा", "निसर्गच देव", "अतिवास्तववाद"]
        : ["Climate Dystopia", "Identity & Shame", "Nature as God", "Surrealism"],
      genre: language === "marathi" ? "डिस्टोपिया / साय-फाय / ड्रामा" : "Dystopian / Sci-Fi / Drama"
    }
  ];

  // Navigation Logic
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % scripts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + scripts.length) % scripts.length);
  };

  const currentStory = scripts[currentIndex];
  const CurrentIcon = currentStory.icon;

  return (
    <div className="w-full max-w-[1000px] font-mono relative">
      
      {/* NAVIGATION BUTTONS (Desktop: Floating on sides) */}
      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute -left-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-400 hover:text-black hover:border-black hover:scale-110 transition-all shadow-sm z-20"
        title="Previous Script"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-400 hover:text-black hover:border-black hover:scale-110 transition-all shadow-sm z-20"
        title="Next Script"
      >
        <ChevronRight size={24} />
      </button>

      {/* MAIN CARD */}
      <div className="
        group relative w-full
        bg-white
        rounded-[2rem] sm:rounded-[2.5rem]
        p-8 md:p-12
        border border-gray-200
        shadow-sm hover:shadow-md
        transition-all duration-500
        min-h-[600px] flex flex-col
      ">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-md bg-gray-100 text-xs font-bold tracking-wider text-gray-600 uppercase">
                {language === "marathi" ? "पटकथा" : "Screenplay"}
              </span>
              <span className="text-xs text-gray-400">
                {currentIndex + 1} / {scripts.length} • {currentStory.version}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter text-black mb-1">
              {currentStory.title}
            </h1>
            <p className="text-lg text-gray-500 font-medium">
              {currentStory.subtitle}
            </p>
          </div>

          {/* Language Toggle & Icon */}
          <div className="flex items-center gap-4 self-end md:self-auto">
            <button 
              onClick={() => setLanguage(language === "english" ? "marathi" : "english")}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors text-sm font-medium"
              title="Switch Language"
            >
              <Globe size={16} />
              {language === "english" ? "EN" : "MR"}
            </button>

            <div className="hidden md:block p-4 rounded-full border border-gray-100 bg-gray-50 text-black">
              <CurrentIcon size={32} strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-100 mb-8" />

        {/* CONTENT BODY */}
        <div className="flex flex-col lg:flex-row gap-10 flex-grow">
          
          {/* Left: Main Description */}
          <div className="flex-1">
             <div className="prose prose-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {currentStory.description}
             </div>
          </div>

          {/* Right: Metadata / Themes */}
          <div className="lg:w-1/3 flex flex-col gap-6">
             <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  {language === "marathi" ? "मुख्य विषय" : "Core Themes"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentStory.themes.map((theme, idx) => (
                    <span 
                      key={idx}
                      className="
                        bg-black text-white 
                        px-4 py-2 rounded-xl
                        text-sm font-medium
                        cursor-default
                        transition-transform hover:-translate-y-0.5
                      "
                    >
                      {theme}
                    </span>
                  ))}
                </div>
             </div>

             {/* Additional Meta Info */}
             <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 mt-auto">
                <div className="flex items-center gap-3 mb-2 text-black">
                   <BookOpen size={18} />
                   <span className="font-bold text-sm">Genre</span>
                </div>
                <p className="text-sm text-gray-600">
                  {currentStory.genre}
                </p>
             </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION (Visible only on small screens) */}
        <div className="flex md:hidden justify-between items-center mt-8 pt-6 border-t border-gray-100">
          <button 
            onClick={prevSlide}
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black"
          >
            <ChevronLeft size={18} /> Prev
          </button>
          <span className="text-xs text-gray-300 tracking-widest">
            {currentIndex + 1} / {scripts.length}
          </span>
          <button 
            onClick={nextSlide}
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black"
          >
            Next <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}