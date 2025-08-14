// components/ContactInfo.jsx
import React from 'react';

const ContactInfo = ({ title, value, color }) => {
  return (
    <div className="text-center animate-on-scroll hover-lift">
      <div
        className="text-2xl font-bold mb-4"
        style={{ color }}
      >
        {title}
      </div>
      <div className="text-gray-300">
        {value}
      </div>
    </div>
  );
};

export default ContactInfo;