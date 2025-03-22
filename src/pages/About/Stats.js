import React from 'react';
import './Stats.css';

const statsData = [
  { value: '10+', label1: 'YEARS', label2: 'EXPERIENCE' },
  { value: '786', label1: 'HAPPY', label2: 'MEMBERS' },
  { value: '25k', label1: 'CALORIES', label2: 'BURNED' },
  { value: '90k', label1: 'HOURS', label2: 'TRAINERS' }
];

const Stats = () => {
  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <div key={index} className="stat-box">
          <h1>{stat.value}</h1>
          <p>
            {stat.label1} <br /> {stat.label2}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;