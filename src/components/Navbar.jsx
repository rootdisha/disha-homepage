// components/Navbar.jsx - Enhanced with GSAP hamburger animation
import React, { useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import DishaLogo from "/src/assets/disha-logo copy 2.svg";


// Alternative hamburger animations - choose your style

// 1. MORPHING HAMBURGER (Recommended)
const MorphingHamburger = ({ isOpen, onClick }) => {
  const hamburgerRef = useRef(null);
  
  useGSAP(() => {
    const lines = hamburgerRef.current?.querySelectorAll('.morph-line');
    if (!lines || lines.length !== 3) return;

    const [line1, line2, line3] = lines;
    
    const tl = gsap.timeline({ paused: true });
    
    tl.to(line1, {
      rotation: 45,
      y: 8,
      backgroundColor: "#ED2E2D",
      duration: 0.4,
      ease: "back.out(1.7)"
    }, 0)
    .to(line3, {
      rotation: -45, 
      y: -8,
      backgroundColor: "#ED2E2D",
      duration: 0.4,
      ease: "back.out(1.7)"
    }, 0)
    .to(line2, {
      scaleX: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out"
    }, 0.1);

    if (isOpen) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [isOpen]);

  return (
    <button 
      ref={hamburgerRef}
      onClick={onClick}
      className="w-12 h-12 flex flex-col justify-center items-center focus:outline-none group"
    >
      <span className="morph-line block w-7 h-0.5 bg-whitetwo mb-1.5"></span>
      <span className="morph-line block w-7 h-0.5 bg-whitetwo mb-1.5"></span>
      <span className="morph-line block w-7 h-0.5 bg-whitetwo"></span>
    </button>
  );
};

const Navbar = ({ scrollToSection, mobileMenuOpen, toggleMobileMenu, refs }) => {
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const { heroRef, aboutRef, capabilitiesRef, workRef, clientsRef, contactRef } = refs;

  const navItems = [
    { label: 'HOME', ref: heroRef },
    { label: 'ABOUT', ref: aboutRef },
    { label: 'SERVICES', ref: capabilitiesRef },
    { label: 'WORK', ref: workRef },
    { label: 'CLIENTS', ref: clientsRef },
    { label: 'CONTACT', ref: contactRef },
  ];

  // Enhanced mobile menu click handler with debugging
  const handleMobileMenuItemClick = (itemRef, label) => {
    console.log(`Mobile menu item clicked: ${label}`);
    
    // // Debug first
    // debugNavigation(itemRef, label);
    
    // Close the mobile menu
    toggleMobileMenu();
    
    // Try immediate scroll first
    if (itemRef?.current) {
      console.log('Attempting immediate scroll...');
      scrollToSection(itemRef);
    }
    
    // Also try with delay as backup
    setTimeout(() => {
      console.log('Attempting delayed scroll...');
      if (itemRef?.current) {
        scrollToSection(itemRef);
      } else {
        console.error('Ref still not available after delay');
      }
    }, 300);
  };

  // GSAP animations for hamburger menu
  useGSAP(() => {
    const line1 = hamburgerRef.current?.querySelector('.line-1');
    const line2 = hamburgerRef.current?.querySelector('.line-2');
    const line3 = hamburgerRef.current?.querySelector('.line-3');
    const menuOverlay = mobileMenuRef.current?.querySelector('.menu-overlay');
    const menuItems = mobileMenuRef.current?.querySelectorAll('.mobile-menu-item');

    if (!line1 || !line2 || !line3) return;

    // Create timeline for hamburger transformation
    const hamburgerTl = gsap.timeline({ paused: true });
    
    hamburgerTl
      .to(line1, {
        rotation: 45,
        y: 8,
        transformOrigin: "center",
        duration: 0.3,
        ease: "power2.out"
      }, 0)
      .to(line3, {
        rotation: -45,
        y: -8,
        transformOrigin: "center", 
        duration: 0.3,
        ease: "power2.out"
      }, 0)
      .to(line2, {
        opacity: 0,
        scaleX: 0,
        duration: 0.2,
        ease: "power2.out"
      }, 0.1);

    // Menu overlay animation
    const menuTl = gsap.timeline({ paused: true });
    
    if (menuOverlay && menuItems.length > 0) {
      // Set initial states
      gsap.set(menuOverlay, { opacity: 0, y: -20 });
      gsap.set(menuItems, { opacity: 0, x: -50 });
      
      menuTl
        .to(menuOverlay, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out"
        })
        .to(menuItems, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }, 0.2);
    }

    // Control animations based on menu state
    if (mobileMenuOpen) {
      hamburgerTl.play();
      menuTl.play();
      console.log("mobileMenuOpen : hamburger play")
    } else {
      hamburgerTl.reverse();
      menuTl.reverse();
      console.log("mobileMenuOpen : hamburger reverse")

    }

    // Store timelines for cleanup
    return () => {
      hamburgerTl.kill();
      menuTl.kill();
    };
    
  }, [mobileMenuOpen]);

  // Enhanced toggle with haptic feedback (if supported)
  const handleToggle = () => {
    // Add haptic feedback for mobile devices
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    toggleMobileMenu();
  };

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

        {/* Enhanced GSAP Hamburger Button */}
        <button
          ref={hamburgerRef}
          onClick={handleToggle}
          className="md:hidden relative w-12 h-12 flex flex-col justify-center items-center focus:outline-none hover-lift group"
          aria-label="Toggle mobile menu"
        >
          {/* Line 1 */}
          <span className="line-1 block w-7 h-0.5 bg-whitetwo mb-1.5 origin-center transition-colors duration-200 group-hover:bg-yellow-400"></span>
          
          {/* Line 2 */}
          <span className="line-2 block w-7 h-0.5 bg-whitetwo mb-1.5 origin-center transition-colors duration-200 group-hover:bg-yellow-400"></span>
          
          {/* Line 3 */}
          <span className="line-3 block w-7 h-0.5 bg-whitetwo origin-center transition-colors duration-200 group-hover:bg-yellow-400"></span>
        </button>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`mobile-menu-container md:hidden fixed top-full left-0 w-full transition-all duration-300 ${
          mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        style={{ height: mobileMenuOpen ? 'auto' : '0' }}
      >
        {/* Menu Overlay */}
        <div className="menu-overlay bg-bgother/95 backdrop-blur-lg border-t border-gray-700 shadow-2xl">
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleMobileMenuItemClick(item.ref, item.label)}
                className="mobile-menu-item block w-full text-left text-whitetwo hover:text-secondary transition-all duration-300 font-bold py-4 text-xl border-b border-gray-800 hover:border-red-600 hover:pl-4 group"
                style={{
                  borderBottomColor: index === navItems.length - 1 ? 'transparent' : '#374151'
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="group-hover:text-yellow-400 transition-colors duration-300">
                    {item.label}
                  </span>
                  <div 
                    className="w-0 h-0.5 bg-red-600 group-hover:w-8 transition-all duration-300"
                    style={{ backgroundColor: "#ED2E2D" }}
                  ></div>
                </div>
              </button>
            ))}
            
            {/* Additional menu footer */}
            <div className="pt-6 border-t border-gray-800">
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="text-sm text-gray-400 font-lato">Follow Us</div>
                  <div className="flex space-x-4 mt-2">
                    <div className="w-8 h-8 bg-red-600 hover:bg-red-700 transition-colors duration-300 cursor-pointer"></div>
                    <div className="w-8 h-8 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 cursor-pointer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;