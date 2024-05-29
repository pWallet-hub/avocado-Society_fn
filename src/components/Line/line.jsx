
import React from 'react';
import './Line.css';
const WaveLine = () => {
  return (
    <div className="wave-line-container">
      <svg className="wave-line" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,50 C360,150 1080,-50 1440,50"
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default WaveLine;
