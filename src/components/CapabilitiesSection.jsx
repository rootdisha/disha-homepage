// components/CapabilitiesSection.jsx
import React, { useState, forwardRef } from 'react';
import { capabilitiesData } from '../data/capabilitiesData';

const CapabilitiesSection = forwardRef((props, ref) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <section ref={ref} className="min-h-screen py-20 px-6 bg-bgother">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-anton text-center mb-16 animate-on-scroll" 
            style={{ color: "#EACF74" }}>
          OUR CAPABILITIES
        </h2>
        
        <div className="space-y-6">
          {capabilitiesData.map((capability, index) => (
            <div key={index} className="capability-item animate-on-scroll">
              {/* Category Header */}
              <div 
                className={`bg-bgmain border-2 transition-all duration-300 cursor-pointer hover:border-red-600 ${
                  activeCategory === index ? 'border-red-600' : 'border-gray-700'
                } ${capability.services ? 'hover-lift' : ''}`}
                onClick={() => capability.services && toggleCategory(index)}
                style={{ 
                  backgroundColor: activeCategory === index ? '#1a1a1a' : '#0d0d0d'
                }}
              >
                <div className="p-8 flex justify-between items-center">
                  <h3 className="text-2xl md:text-3xl font-anton text-whitetwo">
                    {capability.category}
                  </h3>
                  
                  {capability.services && (
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-400 text-sm font-lato">
                        {capability.services.length} Services
                      </span>
                      <div 
                        className={`w-8 h-8 border-2 border-red-600 flex items-center justify-center transition-transform duration-300 ${
                          activeCategory === index ? 'rotate-45' : ''
                        }`}
                        style={{ borderColor: "#ED2E2D" }}
                      >
                        <div className="w-3 h-0.5 bg-red-600" style={{ backgroundColor: "#ED2E2D" }}></div>
                        <div className="w-0.5 h-3 bg-red-600 absolute" style={{ backgroundColor: "#ED2E2D" }}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Services List */}
              {capability.services && (
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeCategory === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="bg-bgmain border-x-2 border-b-2 border-gray-700">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {capability.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex}
                          className="flex items-center space-x-3 py-2 hover:bg-gray-800 
                                      px-4 rounded transition-colors duration-200 cursor-pointer group"
                        >
                          <div 
                            className="w-2 h-2 bg-whitetwo" 
                          ></div>
                          <span className="text-gray-300  group-hover:text-whitetwo transition-colors duration-200 font-lato">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Business Consulting - No dropdown needed */}
              {!capability.services && (
                <div className="bg-gray-900 border-x-2 border-b-2 border-gray-700">
                  {/* <div className="p-6">
                    <p className="text-gray-300 font-lato">
                      Strategic business guidance and consultation services tailored to your unique needs.
                    </p>
                  </div> */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

CapabilitiesSection.displayName = 'CapabilitiesSection';

export default CapabilitiesSection;