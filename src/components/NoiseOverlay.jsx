import React from 'react';

const NoiseOverlay = () => {
  return (
    <svg className="noise-overlay" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
         <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
         />
         <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.05 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  );
};

export default NoiseOverlay;
