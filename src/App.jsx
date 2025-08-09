import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroSection from './components/HeroSection';
import ClientsSection from './components/ClientsSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// import './App.css' // ???

gsap.registerPlugin(ScrollTrigger);

function App() {
  console.log("Sections found:", gsap.utils.toArray(".section"));

  useLayoutEffect(() => {
    // Section fade + slide in
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1,
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
          ease: "power2.out",
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
    // <div className="bg-white text-black ">
    <div className="bg-secondary text-black font-anton">
      <HeroSection />
      <ClientsSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );

}

export default App
