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
        opacity: 1,
        x: 0,
        y: 0,
        scale:3,
        duration: 3,
        ease: "back.out",
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
          // delay: 5,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          // ease: "bounce.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%"
          }
        });
      }
    });

    gsap.utils.toArray(".navbar").forEach((navbar) => {
      gsap.from(navbar, {
        opacity: 0,
        delay: 4,
        x: -100,
        y: 0,
        scale:1,
        duration: 6,
        ease: "elastic.out",
        scrollTrigger: {
          trigger: navbar,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });   
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
    }); // .parallax

  }, []); // useGSAP

  return (
    <div className="font-anton">
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
