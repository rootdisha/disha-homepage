
import React, { forwardRef } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm'; 
import SecureEmailButton from './SecureEmailButton'; // TBD: use for better contact data management

const ContactSection = forwardRef((props, ref) => {
  const contactData = [
    {
      title: "EMAIL",
      value: "client [at] dishamedias [dot] com",
      color: "#ED2E2D",
      type: "email"
    },
    {
      title: "PHONE", 
      value: "+91-76672-526226",
      color: "#ED2E2D",
      type: "phone"
    },
    {
      title: "LOCATION",
      value: "Chennai/Bangalore", 
      color: "#ED2E2D",
      type: "location"
    }
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-6 bg-bgmain font-lato"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h4 className="text-2xl font-bold text-secondarytwo text-center mb-8">Get In Touch</h4>
            <div className="space-y-8">
              {contactData.map((contact, index) => (
                <ContactInfo
                  key={index}
                  title={contact.title}
                  value={contact.value}
                  color={contact.color}
                  type={contact.type}
                />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="animate-on-scroll text-2xl font-bold text-secondarytwo text-center mb-8">Send Message</h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export default ContactSection;
