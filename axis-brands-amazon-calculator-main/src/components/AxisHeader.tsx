
import React from 'react';

const AxisHeader: React.FC = () => {
  return (
    <header className="w-full bg-axis-black py-5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a 
            href="https://www.axisbrandsgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="/lovable-uploads/0069f4f6-5dc0-4d60-9a4c-e598f1c8ce94.png" 
              alt="Axis Brands Group" 
              className="h-10 md:h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default AxisHeader;
