import React, { useState } from 'react';

const SecureEmailButton = ({ color }) => {
  const [showEmail, setShowEmail] = useState(false);
  
  // Email parts stored separately
  const emailParts = {
    user: 'client',
    domain: 'dishamedias',
    tld: 'com'
  };

  const phoneParts = {
    code: '+91',
    half1: '76672',
    half2: '526226'
  };

  const revealAndContact = () => {
    const email = `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`;
    setShowEmail(true);
    
    // Small delay before opening email client
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=Project Inquiry from Website`;
    }, 100);
  };

  return (
    <div className="text-center animate-on-scroll hover-lift">
<div className="text-2xl font-bold mb-4" style={{ color }}>
        EMAIL
      </div>
      {showEmail ? (
        <div className="text-gray-300">
          {emailParts.user}@{emailParts.domain}.{emailParts.tld}
        </div>
      ) : (
        <button
          onClick={revealAndContact}
          className="text-gray-300 hover:text-white transition-colors duration-300 
                     cursor-pointer underline bg-transparent border-none"
        >
          Click to Email Us
        </button>
      )}
    </div>
  );
};

export default SecureEmailButton;