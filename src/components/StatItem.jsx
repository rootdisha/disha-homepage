// components/StatItem.jsx
import React from 'react';

const StatItem = ({ value, label, color }) => {
  return (
    <div className="text-center hover-lift">
      <div
        className="text-3xl font-bgmain mb-2"
        style={{ color }}
      >
        {value}
      </div>
      <div className="text-sm text-gray-400">
        {label}
      </div>
    </div>
  );
};

export default StatItem;