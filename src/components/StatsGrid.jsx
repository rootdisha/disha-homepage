// components/StatsGrid.jsx
import React from 'react';
import StatItem from './StatItem';

const StatsGrid = () => {
  const stats = [
    {
      value: "150+",
      label: "BRANDS TRANSFORMED",
      color: "#ED2E2D"
    },
    {
      value: "8",
      label: "YEARS EXPERIENCE", 
      color: "#EACF74"
    },
    {
      value: "95%",
      label: "CLIENT RETENTION",
      color: "#FFFFFF"
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-8 font-lato">
      {stats.map((stat, index) => (
        <StatItem 
          key={index}
          value={stat.value}
          label={stat.label}
          color={stat.color}
        />
      ))}
    </div>
  );
};

export default StatsGrid;