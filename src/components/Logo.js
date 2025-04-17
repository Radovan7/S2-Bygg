import React from 'react';

const Logo = ({ color = "white", className = "" }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      style={{ width: 'auto', height: '40px' }}
      aria-label="Logo"
    >
      <g stroke={color} strokeWidth="15" fill="none">
        <path d="M12.5,20 L187.5,20" /> 
        <path d="M20,20 L20,90" /> 
        <path d="M40,55 L187.5,55" /> 
        <path d="M12.5,90 L187.5,90" /> 
        <path d="M12.5,110 L187.5,110" />
        <path d="M180,110 L180,180" /> 
        <path d="M12.5,145 L160,145" /> 
        <path d="M12.5,180 L187.5,180" /> 
      </g>
    </svg>
  );
};

export default Logo;