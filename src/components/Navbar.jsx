// components/Navbar.jsx
import React, { useRef } from 'react';
import DishaLogo from "/src/assets/disha-logo copy 2.svg";

const Navbar = ({ scrollToSection, mobileMenuOpen, toggleMobileMenu, refs }) => {
  const navbarRef = useRef(null);
  const { heroRef, aboutRef, capabilitiesRef, workRef, clientsRef, contactRef } = refs;

  const navItems = [
    { label: 'HOME', ref: heroRef },
    { label: 'ABOUT', ref: aboutRef },
    { label: 'SERVICES', ref: capabilitiesRef },
    { label: 'WORK', ref: workRef },
    { label: 'CLIENTS', ref: clientsRef },
    { label: 'CONTACT', ref: contactRef },
  ];

  return (
    <nav
      ref={navbarRef}
      className="navbar fixed font-lato top-0 left-0 right-0 z-50 bg-bgother/65 bg-opacity-75 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 hover-lift">
          <div className="relative w-12 h-12">
            <img src={DishaLogo} alt="Disha Logo" />
          </div>
          <div
            className="text-xl font-bgmain font-hypesunset"
            style={{ color: "#ED2E2D" }}
          >
            Disha Medias
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.ref)}
              className="hover:text-yellow-400 transition-colors font-bold scale-on-hover"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none scale-on-hover"
        >
          <span
            className={`block w-6 h-0.5 bg-whitetwo transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-whitetwo my-1 transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-whitetwo transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-bgother/95 backdrop-blur-md border-t border-gray-700">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.ref)}
                className="mobile-menu-item block w-full text-left text-whitetwo hover:text-secondary transition-colors font-bold py-2 text-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;