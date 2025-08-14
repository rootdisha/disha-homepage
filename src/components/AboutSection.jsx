// components/AboutSection.jsx
import React, { forwardRef } from 'react';
import StatsGrid from './StatsGrid.jsx';

const AboutSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen py-20 px-6 font-anton">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl 
                        text-primary mb-16 text-center 
                        animate-on-scroll">
          ABOUT US
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-on-scroll font-lato">
            <h3
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: "#EACF74" }}
            >
              We don't follow trends.
              <br />
              We set them.
            </h3>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our approach is brutally honest, creatively fearless, and
              strategically sound. We believe great brands aren't born from
              committee meetings – they're forged in the fire of bold
              decisions and unwavering vision.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              From startups to Fortune 500 companies, we've helped brands
              find their voice, sharpen their message, and dominate their
              market. We're not just consultants – we're brand warriors.
            </p>
            
            <StatsGrid />
          </div>

          {/* Visual Element */}
          <div className="relative animate-on-scroll font-lato">
            <div
              className="w-full h-96 relative overflow-hidden hover-lift"
              style={{ backgroundColor: "#ED2E2D" }}
            >
              <div className="absolute bottom-8 left-8 text-whitetwo">
                <div className="text-2xl font-bold">BRAND POWER</div>
                <div className="text-sm opacity-75">
                  Unleash Your Potential
                </div>
              </div>
              <div className="absolute top-8 right-8 w-16 h-16 border-4 border-whitetwo float-animate"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;