import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import DishaLogo from "/src/assets/disha-logo copy 2.svg";

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

  // Mock client logos
  const clients = [
    'Nike', 'Apple', 'Google', 'Microsoft', 'Amazon', 'Meta', 'Tesla', 'Netflix',
    'Spotify', 'Adobe', 'Airbnb', 'Uber', 'Twitter', 'LinkedIn', 'Pinterest',
    'Dropbox', 'Slack', 'Zoom', 'Shopify', 'PayPal', 'Square', 'Stripe',
    'Mailchimp', 'Canva', 'Figma', 'Notion', 'Discord', 'TikTok', 'Snapchat',
    'Reddit', 'Medium', 'Behance', 'Dribbble'
  ];

  // Mock work projects - brand colors only
  const works = [
    { title: 'Brand Revolution', category: 'Rebranding', bgColor: '#ED2E2D' },
    { title: 'Digital Transformation', category: 'Strategy', bgColor: '#000000' },
    { title: 'Visual Identity', category: 'Design', bgColor: '#EACF74' },
    { title: 'Market Positioning', category: 'Strategy', bgColor: '#FFFFFF' },
    { title: 'Campaign Launch', category: 'Marketing', bgColor: '#ED2E2D' },
    { title: 'Brand Guidelines', category: 'Design', bgColor: '#EACF74' },
    { title: 'Logo Redesign', category: 'Branding', bgColor: '#000000' },
    { title: 'Website Overhaul', category: 'Digital', bgColor: '#FFFFFF' },
    { title: 'Social Strategy', category: 'Marketing', bgColor: '#ED2E2D' },
    { title: 'Print Collateral', category: 'Design', bgColor: '#EACF74' },
    { title: 'Brand Audit', category: 'Strategy', bgColor: '#000000' },
    { title: 'Voice & Tone', category: 'Branding', bgColor: '#FFFFFF' },
    { title: 'Packaging Design', category: 'Design', bgColor: '#ED2E2D' },
    { title: 'Event Branding', category: 'Marketing', bgColor: '#EACF74' },
    { title: 'Brand Story', category: 'Strategy', bgColor: '#000000' }
  ];

  useGSAP(() => {
    // Simulate GSAP animations with CSS animations and transitions
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('animated');
        }
      });
    };

    // Hero text animation
    const heroText = heroTextRef.current?.children;
    if (heroText) {
      Array.from(heroText).forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(50px)';
        line.style.animation = `slideInUp 1s ease-out ${index * 0.2}s forwards`;
      });
    }

    // Stagger animations for work items
    const workItems = workGridRef.current?.children;
    if (workItems) {
      Array.from(workItems).forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.animation = `scaleIn 0.6s ease-out ${index * 0.1}s forwards`;
      });
    }

    // Client logos animation
    const clientItems = clientsGridRef.current?.children;
    if (clientItems) {
      Array.from(clientItems).forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.animation = `slideUp 0.5s ease-out ${index * 0.05}s forwards`;
      });
    }

    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }
        
        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hover-lift:hover {
          transform: translateY(-10px);
          transition: transform 0.3s ease;
        }
        
        .scale-on-hover:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
      
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        {/* Sticky Navbar */}
        <nav ref={navbarRef} className="fixed font-lato top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3 hover-lift">
              <div className="relative w-12 h-12">
                {/* <div className="absolute inset-0 border-2 rounded-full" style={{ borderColor: '#ED2E2D', borderRightColor: '#EACF74', borderTopColor: '#EACF74' }}></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <div className="w-1 h-6" style={{ backgroundColor: '#ED2E2D' }}></div>
                </div> */}
                <img src={DishaLogo} alt="Disha Logo" />
              </div>
              <div className="text-xl font-black font-hypesunset" style={{ color: '#ED2E2D' }}>
                Disha Medias
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection(heroRef)} className="hover:text-yellow-400 transition-colors font-bold scale-on-hover">HOME</button>
              <button onClick={() => scrollToSection(aboutRef)} className="hover:text-yellow-400 transition-colors font-bold scale-on-hover">ABOUT</button>
              <button onClick={() => scrollToSection(workRef)} className="hover:text-yellow-400 transition-colors font-bold scale-on-hover">WORK</button>
              <button onClick={() => scrollToSection(clientsRef)} className="hover:text-yellow-400 transition-colors font-bold scale-on-hover">CLIENTS</button>
              <button onClick={() => scrollToSection(contactRef)} className="hover:text-yellow-400 transition-colors font-bold scale-on-hover">CONTACT</button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-20 right-20 w-32 h-32 border-2 float-animation" style={{ borderColor: '#ED2E2D' }}></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 pulse-animation" style={{ backgroundColor: '#EACF74' }}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white pulse-animation"></div>
          
          <div className="relative z-10 text-center px-6">
            <div ref={heroTextRef}>
              <h1 className="text-6xl font-anton text-left md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
                <div style={{ color: '#ED2E2D' }}>CREATIVE.</div>
                <div style={{ color: '#EACF74' }}>IMPACTFUL.</div>
                <div className="text-white">DIRECTIONAL.</div>
              </h1>
            </div>
            <p className="text-xl font-lato text-right md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 animate-on-scroll">
              We craft bold brand experiences that cut through the noise and drive results.
            </p>
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold transition-all duration-300 scale-on-hover animate-on-scroll"
              style={{ backgroundColor: '#ED2E2D' }}
            >
              DISCOVER MORE
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pulse-animation">
            <div className="w-1 h-16 bg-white rounded-full opacity-50"></div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="min-h-screen py-20 px-6 font-anton">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-16 text-center animate-on-scroll" style={{ color: '#ED2E2D' }}>
              ABOUT US
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll font-lato">
                <h3 className="text-3xl  md:text-4xl font-bold mb-8" style={{ color: '#EACF74' }}>
                  We don't follow trends.<br />We set them.
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Our approach is brutally honest, creatively fearless, and strategically sound. We believe great brands aren't born from committee meetings – they're forged in the fire of bold decisions and unwavering vision.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  From startups to Fortune 500 companies, we've helped brands find their voice, sharpen their message, and dominate their market. We're not just consultants – we're brand warriors.
                </p>
                <div ref={aboutStatsRef} className="grid grid-cols-3 gap-8 font-lato">
                  <div className="text-center hover-lift">
                    <div className="text-3xl font-black mb-2" style={{ color: '#ED2E2D' }}>150+</div>
                    <div className="text-sm text-gray-400">BRANDS TRANSFORMED</div>
                  </div>
                  <div className="text-center hover-lift">
                    <div className="text-3xl font-black mb-2" style={{ color: '#EACF74' }}>8</div>
                    <div className="text-sm text-gray-400">YEARS EXPERIENCE</div>
                  </div>
                  <div className="text-center hover-lift">
                    <div className="text-3xl font-black mb-2 text-white">95%</div>
                    <div className="text-sm text-gray-400">CLIENT RETENTION</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-on-scroll font-lato">
                <div className="w-full h-96 relative overflow-hidden hover-lift" style={{ backgroundColor: '#ED2E2D' }}>
                  <div className="absolute bottom-8 left-8 text-white">
                    <div className="text-2xl font-bold">BRAND POWER</div>
                    <div className="text-sm opacity-75">Unleash Your Potential</div>
                  </div>
                  <div className="absolute top-8 right-8 w-16 h-16 border-4 border-white float-animation"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section ref={workRef} className="min-h-screen py-20 px-6 font-lato" style={{ backgroundColor: '#1a1a1a' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-anton md:text-7xl font-black mb-16 text-center animate-on-scroll" style={{ color: '#EACF74' }}>
              OUR WORK
            </h2>
            <div ref={workGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {works.map((work, index) => (
                <div key={index} className="group cursor-pointer hover-lift">
                  <div 
                    className="w-full h-64 relative overflow-hidden"
                    style={{ backgroundColor: work.bgColor }}
                  >
                    <div className="absolute bottom-6 left-6">
                      <div className={`text-xs uppercase tracking-wider opacity-75 mb-2 ${work.bgColor === '#FFFFFF' ? 'text-black' : 'text-white'}`}>
                        {work.category}
                      </div>
                      <div className={`text-xl font-bold ${work.bgColor === '#FFFFFF' ? 'text-black' : 'text-white'}`}>
                        {work.title}
                      </div>
                    </div>
                    {work.bgColor === '#FFFFFF' && (
                      <div className="absolute top-4 right-4 w-8 h-8" style={{ backgroundColor: '#ED2E2D' }}></div>
                    )}
                    {work.bgColor === '#000000' && (
                      <div className="absolute top-4 right-4 w-8 h-8" style={{ backgroundColor: '#EACF74' }}></div>
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
            <h2 className="text-5xl font-anton md:text-7xl font-black mb-16 text-center animate-on-scroll" style={{ color: '#ED2E2D' }}>
              OUR CLIENTS
            </h2>
            <div ref={clientsGridRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {clients.map((client, index) => (
                <div key={index} className="group cursor-pointer hover-lift">
                  <div className="bg-gray-900 hover:bg-gray-800 p-6 h-24 flex items-center justify-center transition-all duration-300 border-2 border-transparent hover:border-red-600">
                    <div className="text-white font-bold text-sm group-hover:text-yellow-400 transition-colors duration-300">
                      {client}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="min-h-screen py-20 px-6 bg-black font-lato">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-anton md:text-7xl font-black mb-8 animate-on-scroll" style={{ color: '#EACF74' }}>
              LET'S CREATE
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-12 text-white animate-on-scroll">
              Something Extraordinary
            </h3>
            <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto animate-on-scroll">
              Ready to transform your brand? Let's have a conversation about how we can make your vision a reality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="text-center animate-on-scroll hover-lift">
                <div className="text-2xl font-bold mb-4" style={{ color: '#ED2E2D' }}>EMAIL</div>
                <div className="text-gray-300">hello@dishamedias.com</div>
              </div>
              <div className="text-center animate-on-scroll hover-lift">
                <div className="text-2xl font-bold mb-4" style={{ color: '#ED2E2D' }}>PHONE</div>
                <div className="text-gray-300">+91 98765 43210</div>
              </div>
              <div className="text-center animate-on-scroll hover-lift">
                <div className="text-2xl font-bold mb-4" style={{ color: '#ED2E2D' }}>LOCATION</div>
                <div className="text-gray-300">Kochi, Kerala</div>
              </div>
            </div>

            <button 
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold transition-all duration-300 scale-on-hover animate-on-scroll"
              style={{ backgroundColor: '#ED2E2D' }}
            >
              START A PROJECT
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800 py-12 px-6 font-lato">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border-2 rounded-full" style={{ borderColor: '#ED2E2D', borderRightColor: '#EACF74', borderTopColor: '#EACF74' }}></div>
                <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                  <div className="w-0.5 h-4" style={{ backgroundColor: '#ED2E2D' }}></div>
                </div>
              </div>
              <div className="text-lg font-bold font-hypesunset" style={{ color: '#ED2E2D' }}>
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