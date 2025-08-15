
import React, { useState } from 'react';

const ContactInfo = ({ title, value, color, type }) => {
  const [revealed, setRevealed] = useState(false);

  // Email obfuscation function
  const revealEmail = () => {
    if (type === 'email') {
      return value.replace(' [at] ', '@').replace(' [dot] ', '.');
    }
    return value;
  };

  // Handle click for email/phone
  const handleClick = () => {
    if (type === 'email') {
      setRevealed(true);
      // Create mailto link
      const email = revealEmail();
      window.location.href = `mailto:${email}`;
    } else if (type === 'phone') {
      // Create tel link
      window.location.href = `tel:${value}`;
    }
  };

  return (
    <div className="text-center animate-on-scroll hover-lift">
      <div
        className="text-2xl font-bold mb-4"
        style={{ color }}
      >
        {title}
      </div>
      {type === 'email' || type === 'phone' ? (
        <button
          onClick={handleClick}
          className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer underline"
        >
          {type === 'email' && !revealed ? value : revealEmail()}
        </button>
      ) : (
        <div className="text-gray-300">
          {value}
        </div>
      )}
    </div>
  );
};

export default ContactInfo;