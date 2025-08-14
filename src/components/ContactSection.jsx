// components/ContactSection.jsx
import React, { forwardRef } from 'react';
import ContactInfo from './ContactInfo';

const ContactSection = forwardRef((props, ref) => {
  const contactData = [
    {
      title: "EMAIL",
      value: "hello@dishamedias.com",
      color: "#ED2E2D"
    },
    {
      title: "PHONE", 
      value: "+91 00000 00000",
      color: "#ED2E2D"
    },
    {
      title: "LOCATION",
      value: "Chennai/Bangalore", 
      color: "#ED2E2D"
    }
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-6 bg-bgmain font-lato"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="section-heading text-5xl font-anton md:text-7xl 
                        font-bgmain mb-8 animate-on-scroll"
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
          {contactData.map((contact, index) => (
            <ContactInfo
              key={index}
              title={contact.title}
              value={contact.value}
              color={contact.color}
            />
          ))}
        </div>

        <button className="bg-primary hover:bg-red-700 text-whitetwo px-12 py-6 
                                text-xl font-bold transition-all duration-300 scale-on-hover">
          START A PROJECT
        </button>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;