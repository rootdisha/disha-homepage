// hooks/useScrollAnimations.js
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollAnimations = (mobileMenuOpen) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.killAll();
    
    // Set default states to prevent blank screens
    gsap.set(".animate-on-scroll", { opacity: 1, y: 0 });
    gsap.set(".client-item", { opacity: 1, y: 0 });
    gsap.set(".work-item", { opacity: 1, y: 0 });

    // Helper function for responsive values
    const getAnimationDistance = () => window.innerWidth < 768 ? 50 : 100;
    const herotl = gsap.timeline();

    // Mobile menu animations
    if (mobileMenuOpen) {
      gsap.fromTo(
        ".mobile-menu",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        ".mobile-menu-item",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, ease: "power2.out" }
      );
    } else {
      // Hero animations
      herotl.from(".hero-line", {
        x: 50,
        opacity: 0,
        duration: 0.5,
        ease: "back.out",
        stagger: 0.2,
      })
      .from(".navbar", {  // don't animate navbar. doesnt go well with hamburger.
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Delayed scroll animations
      gsap.delayedCall(0.1, () => {
        // General scroll animations
        gsap.utils.toArray(".animate-on-scroll").forEach((element) => {
          gsap.from(element, {
            y: getAnimationDistance(),
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          });
        });

        // Client grid animation
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".clients-grid",
              start: "top 90%",
            },
          })
          .from(".client-item", {
            y: window.innerWidth < 768 ? 20 : 30,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: {
              amount: window.innerWidth < 768 ? 1 : 1.5,
              from: "start",
            },
          });

        // Work grid animation
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".work-grid",
              start: "top 90%",
            },
          })
          .from(".work-item", {
            y: window.innerWidth < 768 ? 20 : 30,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: {
              amount: window.innerWidth < 768 ? 1 : 1.5,
              from: "start",
            },
          });
      });
    }

 
    // Background animations
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

    // Hover effects
    const setupHoverEffects = () => {
      gsap.set(".hover-lift", { transformOrigin: "center bottom" });
      gsap.set(".scale-on-hover", { transformOrigin: "center" });

      document.querySelectorAll(".hover-lift").forEach((element) => {
        element.addEventListener("mouseenter", () => {
          gsap.to(element, { y: -10, duration: 0.3, ease: "power2.out" });
        });
        element.addEventListener("mouseleave", () => {
          gsap.to(element, { y: 0, duration: 0.3, ease: "power2.out" });
        });
      });

      document.querySelectorAll(".scale-on-hover").forEach((element) => {
        element.addEventListener("mouseenter", () => {
          gsap.to(element, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        element.addEventListener("mouseleave", () => {
          gsap.to(element, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    };
    setupHoverEffects();
    
    ScrollTrigger.refresh();

  }, [mobileMenuOpen]);
};