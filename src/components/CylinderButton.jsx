import React from 'react';

const CylinderButton = ({ text, onClick, additionalClass }) => {
  return (
    <button 
      onClick={onClick}
      className="group relative overflow-hidden rounded-full  transition-all duration-300"
    >
      <div className="relative flex items-center justify-center">
        {text.split('').map((char, i) => (
          <span key={i} className="relative inline-block overflow-hidden">
            <span
              className="inline-block transition-transform duration-500 group-hover:-translate-y-full"
              style={{
                transitionDelay: `${i * 0.02}s`,
                transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
            <span
              className={`absolute left-0 top-0 inline-block translate-y-full transition-transform duration-500 group-hover:translate-y-0 ${additionalClass}`}
              style={{
                transitionDelay: `${i * 0.02}s`,
                transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          </span>
        ))}
      </div>
    </button>
  );
};

export default CylinderButton;
