// components/HeroSection.jsx
import React, { forwardRef } from 'react';

const HeroSection = forwardRef(({ scrollToSection, aboutRef }, ref) => {
  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-bgmain"></div>

      {/* Animated background elements */}
      <div className="float-animate absolute top-20 right-20 w-32 h-32 border-2 border-primary" />
      <div className="pulse-animate absolute bottom-32 left-16 bg-secondary w-24 h-24" />
      <div className="pulse-animate absolute top-1/4 right-1/4 w-4 h-4 bg-whitetwo" />
      <div className="float-animate absolute top-2/3 left-5 w-6 h-6 bg-whitetwo" />

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-anton text-left mb-8 leading-tight">
            <div className="hero-line" style={{ color: "#ED2E2D" }}>
              CREATIVE.
            </div>
            <div className="hero-line" style={{ color: "#EACF74" }}>
              IMPACTFUL.
            </div>
            <div className="hero-line text-whitetwo">DIRECTIONAL.</div>
          </h1>
        </div>
        
        <p className="text-xl font-lato text-right md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 animate-on-scroll">
          We craft bold brand experiences that cut through the noise and drive results.
        </p>
        
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="bg-red-600 hover:bg-red-700 text-whitetwo px-8 py-4 text-lg font-bold transition-all duration-300 scale-on-hover animate-on-scroll"
          style={{ backgroundColor: "#ED2E2D" }}
        >
          DISCOVER MORE
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="pulse-animate-line absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-whitetwo rounded-full opacity-50"></div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;