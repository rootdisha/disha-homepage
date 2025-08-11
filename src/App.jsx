import { useEffect, useLayoutEffect } from 'react'; // Use useGSAP handles animations better esp in dev
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ClientsSection from './components/ClientsSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// import './App.css' // ???

gsap.registerPlugin(ScrollTrigger);

function App() {
  console.log("Sections found:", gsap.utils.toArray(".section"));

  useGSAP(() => {
    // Section fade + slide in
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.from(section, {
        opacity: 0.5,
        x: -10,
        y: -100,
        scale:3,
        duration: 5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

      // Staggered child animations
      const children = section.querySelectorAll(".animate-item");
      if (children.length) {
        gsap.from(children, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.2,
          // ease: "power2.out",
          ease: "bounce.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%"
          }
        });
      }
    });

    // Parallax effect for background elements
    gsap.utils.toArray(".parallax").forEach((bg) => {
      gsap.to(bg, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: bg,
          start: "top bottom",
          scrub: true
        }
      });
    });

  }, []);

  return (
    <div className="font-anton">
      <div className="text-black bg-secondary font-anton">
        <Navbar />
      </div>
      {/* Alternate accent and monochrome as background */}
      <div className="text-black bg-secondary font-anton">
        <HeroSection />
      </div>
      <div className="text-secondary bg-black font-anton">
        <ClientsSection />
      </div>
      <div className="text-black bg-secondary font-anton">
        <AboutSection />
      </div>
      <div className="text-secondary bg-black font-anton">
        <PortfolioSection />
      </div>
      <div className="text-black bg-secondary font-anton">
        <ContactSection />
      </div>
      <Footer />
    </div>

  );

}

export default App
