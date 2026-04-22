
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

interface ConversionRateSliderProps {
  conversionRate: number[];
  setConversionRate: (value: number[]) => void;
}

const ConversionRateSlider: React.FC<ConversionRateSliderProps> = ({ conversionRate, setConversionRate }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 justify-center">
        <label className="font-sans text-sm font-bold text-center block text-white">
          Conversion Rate
        </label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoIcon className="h-4 w-4 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent className="bg-axis-darkgray text-gray-300 text-xs p-2 border border-gray-800">
              <p>% of visitors who buy—be realistic!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="text-xs italic text-gray-400 -mt-1 text-center">
        % of folks buying
      </p>
      <Slider
        value={conversionRate}
        onValueChange={(value) => setConversionRate(value)}
        min={0}
        max={30}
        step={0.1}
        className="my-4 [&>.relative>.absolute]:bg-axis-purple [&>.relative]:bg-gray-800 [&>span]:bg-axis-purple [&>span]:border-axis-purple"
      />
      <div className="flex justify-between items-center text-xs text-gray-500">
        <span>0%</span>
        <span 
          className="font-medium text-base" 
          style={{ color: conversionRate[0] > 15 ? '#D946EF' : '#6366F1' }}
        >
          {conversionRate[0]}%
        </span>
        <span>30%</span>
      </div>
    </div>
  );
};

export default ConversionRateSlider;
