// components/Footer.jsx
import React from 'react';
import DishaLogo from "/src/assets/disha-logo copy 2.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bgmain border-t border-gray-800 py-12 px-6 font-lato">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="relative w-8 h-8">
            <img src={DishaLogo} alt="Disha Logo" />
          </div>
          <div
            className="text-lg font-hypesunset"
            style={{ color: "#ED2E2D" }}
          >
            Disha Medias
          </div>
        </div>
        
        <div className="text-gray-400 text-sm">
          © {currentYear} Disha Medias. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;