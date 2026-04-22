
import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 grid-background animate-grid-lines"></div>
    </div>
  );
};

export default GridBackground;
