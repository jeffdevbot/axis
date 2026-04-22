
import React from 'react';
import { Slider } from "@/components/ui/slider";

interface TargetTacosSliderProps {
  targetTacos: number[];
  setTargetTacos: (value: number[]) => void;
}

const TargetTacosSlider: React.FC<TargetTacosSliderProps> = ({ targetTacos, setTargetTacos }) => {
  return (
    <div className="space-y-2">
      <label className="font-sans text-sm font-bold text-center block text-white">
        My TACOS Goal %
      </label>
      <p className="text-xs italic text-gray-400 -mt-1 text-center">
        Your ad-to-sales ratio goal
      </p>
      <Slider
        value={targetTacos}
        onValueChange={(value) => setTargetTacos(value)}
        min={5}
        max={30}
        step={0.5}
        className="my-4 [&>.relative>.absolute]:bg-axis-purple [&>.relative]:bg-gray-800 [&>span]:bg-axis-purple [&>span]:border-axis-purple"
      />
      <div className="flex justify-between text-xs text-gray-500">
        <span>5%</span>
        <span 
          className="font-medium text-base" 
          style={{ color: targetTacos[0] > 25 ? '#D946EF' : '#6366F1' }}
        >
          {targetTacos[0]}%
        </span>
        <span>30%</span>
      </div>
    </div>
  );
};

export default TargetTacosSlider;
