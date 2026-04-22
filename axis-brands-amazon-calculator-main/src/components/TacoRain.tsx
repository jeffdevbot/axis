
import React, { useEffect, useState } from 'react';

interface TacoRainProps {
  isTriggered: boolean;
}

interface Taco {
  id: number;
  left: string;
  duration: number;
  delay: number;
}

const TacoRain: React.FC<TacoRainProps> = ({ isTriggered }) => {
  const [tacos, setTacos] = useState<Taco[]>([]);
  
  useEffect(() => {
    if (isTriggered) {
      // Generate 10-15 random tacos
      const tacoCount = Math.floor(Math.random() * 6) + 10; // Random number between 10-15
      const newTacos: Taco[] = [];
      
      for (let i = 0; i < tacoCount; i++) {
        newTacos.push({
          id: i,
          left: `${Math.random() * 100}%`, // Random position across viewport width
          duration: 2 + Math.random(), // Random duration between 2-3 seconds
          delay: Math.random() * 0.5, // Random delay up to 0.5 seconds
        });
      }
      
      setTacos(newTacos);
      
      // Clear tacos after animation completes
      const timer = setTimeout(() => {
        setTacos([]);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isTriggered]);
  
  if (!isTriggered) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 5 }}>
      {tacos.map((taco) => (
        <div 
          key={taco.id}
          className="absolute top-0 animate-taco-fall"
          style={{
            left: taco.left,
            fontSize: '24px',
            animationDuration: `${taco.duration}s`,
            animationDelay: `${taco.delay}s`,
          }}
        >
          🌮
        </div>
      ))}
    </div>
  );
};

export default TacoRain;
