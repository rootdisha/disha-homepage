// Main App Component
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkSection from './components/WorkSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import CapabilitiesSection from './components/CapabilitiesSection';

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);
  const capabilitiesRef = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize scroll animations
  useScrollAnimations(mobileMenuOpen);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-bgmain text-whitetwo min-h-screen overflow-x-hidden">
      <Navbar 
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        refs={{ heroRef, aboutRef, capabilitiesRef, workRef, clientsRef, contactRef }}
      />
      
      <HeroSection 
        ref={heroRef}
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
      />
      
      <AboutSection ref={aboutRef} />

      <CapabilitiesSection ref={capabilitiesRef} /> 
      
      <WorkSection ref={workRef} />
      
      <ClientsSection ref={clientsRef} />
      
      <ContactSection ref={contactRef} />
      
      <Footer />
    </div>
  );
};

export default App;