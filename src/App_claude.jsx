import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import DishaLogo from "/src/assets/disha-logo copy 2.svg";

gsap.registerPlugin(ScrollTrigger);


const App_claude = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const clientsRef = useRef(null);
  const contactRef = useRef(null);

  // Animation refs
  const heroTextRef = useRef(null);
  const navbarRef = useRef(null);
  const aboutStatsRef = useRef(null);
  const workGridRef = useRef(null);
  const clientsGridRef = useRef(null);

  // Client list
  const clients = [
    // Page 1
    "ARC",
    "Infosys",
    "Sri Krishna Sweets",
    "Bloom",
    "Cauvery",
    "HomeRunners",
    "RRR",
    "Welona",
    "GBR",
    "Happy Tods",
    "Dr. Dinesh's Skin & Hair Clinic",
    "Mattramas",
    "RK Hospital",
    "HSB",
    "Asian Bowl",
    "Siddhagiri Sal",
    "Tekraa",
    "Amara",
    "Sculpt",
    // Page 2
    "Anka",
    "Abhijay",
    "Covalsys",
    "Klean",
    "Kushi Hygiene Services",
    "Kushi",
    "Nandi's",
    "Quantic Edges",
    "Spectalent",
    "VKN",
    "Annai Hospital",
    "Sudharma",
    "Jose",
    "Ruthra Polyclinic",
    "Silk",
  ];

  // Mock work projects - brand colors only
  const works = [
    { title: "Print Collateral", category: "Design", bgColor: "#EACF74" },
    { title: "Commercial Ads", category: "Strategy", bgColor: "#FFFFFF" },
    { title: "Website Building", category: "Digital", bgColor: "#EACF74" },
    { title: "Billboards", category: "Marketing", bgColor: "#000000" },
    { title: "Website Overhaul", category: "Digital", bgColor: "#FFFFFF" },
    { title: "Social Strategy", category: "Marketing", bgColor: "#ED2E2D" },
    { title: "Packaging Design", category: "Design", bgColor: "#ED2E2D" },
    { title: "Brand Revolution", category: "Rebranding", bgColor: "#aaaaaa" },
    { title: "Digital Transformation", category: "Strategy", bgColor: "#aaaaaa" },
    { title: "Brand Audit", category: "Strategy", bgColor: "#aaaaaa" },
    { title: "Voice & Tone", category: "Branding", bgColor: "#aaaaaa" },
    { title: "Event Branding", category: "Marketing", bgColor: "#aaaaaa" },
    { title: "Brand Story", category: "Strategy", bgColor: "#aaaaaa" },
  ];

  useGSAP(() => {
    let herotl = gsap.timeline();

    // Instead of CSS keyframes - Hero text animation
    herotl.from(".hero-line", {
      // y: 150,
      x: 150,
      opacity: 0,
      duration: 0.5,
      ease: "back.out",
      stagger: 0.2,
    }).from(".navbar", {
      y: -150,
      opacity: 0,
      duration: 1,
      ease: "back.out",
      stagger: 0.2,
    });
    // Background elements float and pulse
    herotl.to(".float-animate", {
      y: -20,
      x: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
    herotl.from(".pulse-animate", {
      x: -20,
      y: 10,
      opacity: 0.5,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
    herotl.from(".pulse-animate-line", {
      y: 10,
      opacity: 0.5,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.utils.toArray(".animate-on-scroll").forEach(element => {
      gsap.from(element, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,  
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Some hover effects //
    // Hover lift
    gsap.set(".hover-lift", { transformOrigin: "center bottom" });

    document.querySelectorAll(".hover-lift").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          y: -10,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
    // Scale on hover
    gsap.set(".scale-on-hover", { transformOrigin: "center" });

    document.querySelectorAll(".scale-on-hover").forEach((element) => {
      element.addEventListener("mouseenter", () => {
        gsap.to(element, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      element.addEventListener("mouseleave", () => {
        gsap.to(element, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Client grid animation. logos fading in on scroll. Using timeline for better control over sequencing
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".clients-grid",
        start: "top 80%"
      }
    });
    tl.from(".client-item", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: {
        amount: 1.5,  // Total time to stagger all items
        from: "start"
      }
    });

    // Work grid animation
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-grid",
        start: "top 80%"
      }
    });
    tl.from(".work-item", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: {
        amount: 1.5,  // Total time to stagger all items
        from: "start"
      }
    });

  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="bg-bgmain text-whitetwo min-h-screen overflow-x-hidden">
        {/* Sticky Navbar */}
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

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="hover:text-yellow-400 transition-colors font-bold scale-on-hover"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="hover:text-yellow-400 transition-colors font-bold scale-on-hover"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection(workRef)}
                className="hover:text-yellow-400 transition-colors font-bold scale-on-hover"
              >
                WORK
              </button>
              <button
                onClick={() => scrollToSection(clientsRef)}
                className="hover:text-yellow-400 transition-colors font-bold scale-on-hover"
              >
                CLIENTS
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="hover:text-yellow-400 transition-colors font-bold scale-on-hover"
              >
                CONTACT
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-bgmain"></div>

          {/* Animated background elements */}
          <div
            className="float-animate absolute top-20 right-20 w-32 h-32 border-2 border-primary"

          ></div>
          <div
            className="pulse-animate absolute bottom-32 left-16 bg-secondary w-24 h-24 "
          ></div>
          <div className="pulse-animate absolute top-1/4 right-1/4 w-4 h-4 bg-whitetwo "></div>
          <div className="float-animate absolute top-2/3 left-5 w-6 h-6 bg-whitetwo "></div>
          {/* Animated hero lines */}
          <div className="relative z-10 text-center px-6">
            <div ref={heroTextRef}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl 
                font-anton text-left mb-8 leading-tight">
                <div className="hero-line" style={{ color: "#ED2E2D" }}>CREATIVE.</div>
                <div className="hero-line" style={{ color: "#EACF74" }}>IMPACTFUL.</div>
                <div className="hero-line text-whitetwo">DIRECTIONAL.</div>
              </h1>
            </div>
            <p className="text-xl font-lato text-right md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 animate-on-scroll">
              We craft bold brand experiences that cut through the noise and
              drive results.
            </p>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="bg-red-600 hover:bg-red-700 text-whitetwo px-8 py-4 text-lg font-bold transition-all duration-300 scale-on-hover animate-on-scroll"
              style={{ backgroundColor: "#ED2E2D" }}
            >
              DISCOVER MORE
            </button>
          </div>
          <div className="pulse-animate-line absolute bottom-10 left-1/2 transform -translate-x-1/2 ">
            <div className="w-1 h-16 bg-whitetwo rounded-full opacity-50"></div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="min-h-screen py-20 px-6 font-anton">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-5xl md:text-7xl lg:text-8xl 
                text-primary mb-16 text-center 
                animate-on-scroll"
            >
              ABOUT US
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll font-lato">
                <h3
                  className="text-3xl  md:text-4xl font-bold mb-8"
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
                <div
                  ref={aboutStatsRef}
                  className="grid grid-cols-3 gap-8 font-lato"
                >
                  <div className="text-center hover-lift">
                    <div
                      className="text-3xl font-bgmain mb-2"
                      style={{ color: "#ED2E2D" }}
                    >
                      150+
                    </div>
                    <div className="text-sm text-gray-400">
                      BRANDS TRANSFORMED
                    </div>
                  </div>
                  <div className="text-center hover-lift">
                    <div
                      className="text-3xl font-bgmain mb-2"
                      style={{ color: "#EACF74" }}
                    >
                      8
                    </div>
                    <div className="text-sm text-gray-400">
                      YEARS EXPERIENCE
                    </div>
                  </div>
                  <div className="text-center hover-lift">
                    <div className="text-3xl font-bgmain mb-2 text-whitetwo">
                      95%
                    </div>
                    <div className="text-sm text-gray-400">
                      CLIENT RETENTION
                    </div>
                  </div>
                </div>
              </div>
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

        {/* Work Section */}
        <section
          ref={workRef}
          className="min-h-screen py-20 px-6 font-lato bg-bgother"
          // style={{ backgroundColor: "#1a1a1a" }}
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className="section-heading text-5xl md:text-7xl font-anton text-secondary  mb-16 text-center animate-on-scroll"
              
            >
              OUR WORK
            </h2>
            <div
              ref={workGridRef}
              className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {works.map((work, index) => (
                <div key={index} className="work-item group cursor-pointer hover-lift">
                  <div
                    className="w-full h-64 relative overflow-hidden"
                    style={{ backgroundColor: work.bgColor }}
                  >
                    <div className="absolute bottom-6 left-6">
                      <div
                        className={`text-xs uppercase tracking-wider opacity-75 mb-2 ${
                          work.bgColor === "#FFFFFF"
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {work.category}
                      </div>
                      <div
                        className={`text-xl font-bold ${
                          work.bgColor === "#FFFFFF"
                            ? "text-bgmain"
                            : "text-whitetwo"
                        }`}
                      >
                        {work.title}
                      </div>
                    </div>
                    {work.bgColor === "#FFFFFF" && (
                      <div
                        className="absolute top-4 right-4 w-8 h-8"
                        style={{ backgroundColor: "#ED2E2D" }}
                      ></div>
                    )}
                    {work.bgColor === "#000000" && (
                      <div
                        className="absolute top-4 right-4 w-8 h-8"
                        style={{ backgroundColor: "#EACF74" }}
                      ></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section ref={clientsRef} className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2
              className="section-heading text-5xl font-anton md:text-7xl font-bgmain mb-16 text-center animate-on-scroll"
              style={{ color: "#ED2E2D" }}
            >
              OUR CLIENTS
            </h2>
            <div
              ref={clientsGridRef}
              className="clients-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
            >
              {clients.map((client, index) => (
                <div key={index} className="client-item slide-up-element  group cursor-pointer ">
                  <div className="bg-gray-900 hover:bg-gray-800 p-6 h-24 flex items-center justify-center transition-all duration-300 border-2 border-transparent hover:border-red-600">
                    <div className="text-whitetwo font-bold text-sm group-hover:text-yellow-400 transition-colors duration-300">
                      {client}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          ref={contactRef}
          className="min-h-screen py-20 px-6 bg-bgmain font-lato"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="section-heading text-5xl font-anton md:text-7xl font-bgmain mb-8 animate-on-scroll"
              style={{ color: "#EACF74" }}
            >
              LET'S CREATE
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-whitetwo animate-on-scroll">
              Something Extraordinary
            </h3>
            <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto animate-on-scroll">
              Ready to transform your brand? Let's have a conversation about how
              we can make your vision a reality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="text-center animate-on-scroll hover-lift">
                <div
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#ED2E2D" }}
                >
                  EMAIL
                </div>
                <div className="text-gray-300">hello@dishamedias.com</div>
              </div>
              <div className="text-center animate-on-scroll hover-lift">
                <div
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#ED2E2D" }}
                >
                  PHONE
                </div>
                <div className="text-gray-300">+91 00000 00000</div>
              </div>
              <div className="text-center animate-on-scroll hover-lift">
                <div
                  className="text-2xl font-bold mb-4"
                  style={{ color: "#ED2E2D" }}
                >
                  LOCATION
                </div>
                <div className="text-gray-300">Chennai/Bangalore</div>
              </div>
            </div>

            <button
              className="bg-primary hover:bg-red-700 text-whitetwo px-12 py-6 text-xl font-bold transition-all duration-300 scale-on-hover"
              
            >
              START A PROJECT
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-bgmain border-t border-gray-800 py-12 px-6 font-lato">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative w-8 h-8">
                <img src={DishaLogo} alt="Disha Logo" />
              </div>
              <div
                className="text-lg font-hypesunset"
                style={{ color: "#ED2E2D" }}
              >
                Disha Medias
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 Disha Medias. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App_claude;
