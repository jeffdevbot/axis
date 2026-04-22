
import React from 'react';
import AxisHeader from '@/components/AxisHeader';
import Header from '@/components/Header';
import TacosExplainer from '@/components/TacosExplainer';
import TacosForm from '@/components/TacosForm';
import GridBackground from '@/components/GridBackground';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-axis-black overflow-hidden">
      <GridBackground />
      
      <AxisHeader />
      
      <div className="axis-container max-w-6xl mx-auto px-4 py-4 flex-1 w-full">
        <main className="container mx-auto px-4 py-4 flex-1 relative z-10">
          <Header />
          <div className="text-center">
            <p className="font-sans text-sm text-gray-400 mb-6 max-w-[400px] mx-auto">
              Enter your proposed selling price, conversion rate, and ad cost per click—we'll analyze if your product can be successful on Amazon.
            </p>
            <TacosForm />
            <TacosExplainer />
          </div>
        </main>
      </div>
      
      <footer className="w-full py-5 px-4 text-center text-gray-500 text-xs bg-axis-black border-t border-gray-800 relative z-10">
        <p>© {new Date().getFullYear()} Axis Brands Group • Not affiliated with Amazon</p>
      </footer>
    </div>
  );
};

export default Index;
