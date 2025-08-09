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

  useEffect(() => {
    gsap.utils.toArray('.section').forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  return (
    // <div className="bg-white text-black ">
    <div className="bg-white text-black font-anton">
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
