
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full text-center px-5 py-6 relative z-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-sans font-bold text-3xl md:text-4xl text-white mb-2">
          Should I Sell This on <span className="text-axis-purple">Amazon</span>?
        </h1>
        <p className="font-sans text-base text-gray-300 mb-6">
          Validate your product idea with our Amazon TACOS calculator
        </p>
        <p className="text-sm text-gray-400">
          <a 
            href="https://www.axisbrandsgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-axis-purple transition-colors"
          >
            Powered by Axis Brands Group
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
