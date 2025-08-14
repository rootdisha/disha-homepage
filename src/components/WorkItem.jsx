// components/WorkItem.jsx
import React from 'react';

const WorkItem = ({ work }) => {
  const { title, category, bgColor } = work;
  const isWhiteBackground = bgColor === "#FFFFFF";
  const isBlackBackground = bgColor === "#000000";

  return (
    <div className="work-item group cursor-pointer hover-lift">
      <div
        className="w-full h-64 relative overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute bottom-6 left-6">
          <div
            className={`text-xs uppercase tracking-wider opacity-75 mb-2 ${
              isWhiteBackground ? "text-black" : "text-white"
            }`}
          >
            {category}
          </div>
          <div
            className={`text-xl font-bold ${
              isWhiteBackground ? "text-bgmain" : "text-whitetwo"
            }`}
          >
            {title}
          </div>
        </div>
        
        {/* Decorative elements */}
        {isWhiteBackground && (
          <div
            className="absolute top-4 right-4 w-8 h-8"
            style={{ backgroundColor: "#ED2E2D" }}
          />
        )}
        {isBlackBackground && (
          <div
            className="absolute top-4 right-4 w-8 h-8"
            style={{ backgroundColor: "#EACF74" }}
          />
        )}
      </div>
    </div>
  );
};

export default WorkItem;