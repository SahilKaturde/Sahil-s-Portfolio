import React, { useContext } from 'react';
import { LanguageContext } from './context/LanguageProvider';

function Nav() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="
      h-[9vh] w-full 
      flex items-center justify-center 
      bg-white 
      border-b border-gray-300/50 
      font-mono 
      relative
    ">
      
      {/* Language Buttons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-2">
        <button
          onClick={() => setLanguage('marathi')}
          className="w-3 h-3 bg-green-500 rounded-full hover:scale-110 transition"
        ></button>
        <button
          onClick={() => setLanguage('english')}
          className="w-3 h-3 bg-red-500 rounded-full hover:scale-110 transition"
        ></button>
      </div>

      {/* Center Title */}
      <h1 className="text-lg sm:text-xl tracking-wide text-gray-800">
        {language === 'english' ? 'Sahil Katurde' : 'साहिल कातुर्डे'}
      </h1>
    </div>
  );
}

export default Nav;
