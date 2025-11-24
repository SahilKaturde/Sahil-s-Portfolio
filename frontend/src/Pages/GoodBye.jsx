import React from 'react';
import touch1 from './../assets/first_half/touch1.png';
import touch2 from './../assets/first_half/touch2.png';
import { Linkedin, Github, Archive, Mail } from 'lucide-react';

function GoodBye() {
  return (
    <div className="w-full bg-white py-16 px-4 flex flex-col items-center relative font-mono border-t border-gray-200">
      {/* Touch images - desktop absolute */}
      <img
        src={touch1}
        alt="Touch Left"
        className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 w-36 lg:w-64 opacity-90 hover:opacity-100 transition-opacity duration-300"
      />
      <img
        src={touch2}
        alt="Touch Right"
        className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 w-36 lg:w-64 opacity-90 hover:opacity-100 transition-opacity duration-300"
      />

      {/* Center Content */}
      <div className="flex flex-col items-center text-center z-10 max-w-2xl mx-auto px-4 sm:px-0">
        {/* Profile Section */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Sahil Katurde
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
            <Mail size={20} className="text-gray-600" />
            <a 
              href="mailto:sahilkaturde1@gmail.com"
              className="text-gray-700 text-lg hover:text-gray-900 transition-colors duration-200 break-all"
            >
              sahilkaturde1@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/sahil-katurde-b26690345/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={28} className="text-gray-700 group-hover:text-gray-900" />
          </a>
          <a
            href="https://github.com/SahilKaturde"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={28} className="text-gray-700 group-hover:text-gray-900" />
          </a>
          <a
            href="https://www.kaggle.com/sahilkaturde"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110"
            aria-label="Kaggle Profile"
          >
            <Archive size={28} className="text-gray-700 group-hover:text-gray-900" />
          </a>
        </div>

        {/* Mobile Touch Images */}
        <div className="flex justify-center gap-4 mb-6 sm:hidden">
          <img src={touch1} alt="Touch Left" className="w-24 opacity-90 hover:opacity-100 transition-opacity duration-300" />
          <img src={touch2} alt="Touch Right" className="w-24 opacity-90 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Additional Info */}
        <div className="mb-6 px-4 sm:px-0">
          <p className="text-gray-600 text-sm sm:text-base max-w-md leading-relaxed">
            Open to new opportunities and collaborations. Let's build something amazing together!
          </p>
        </div>

        {/* Copyright Text */}
        <div className="border-t border-gray-200 pt-6 w-full">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Sahil Katurde. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GoodBye;
