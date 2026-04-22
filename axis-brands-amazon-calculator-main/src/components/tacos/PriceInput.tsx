
import React from 'react';
import { Input } from "@/components/ui/input";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";

interface PriceInputProps {
  price: number;
  setPrice: (price: number) => void;
}

const PriceInput: React.FC<PriceInputProps> = ({ price, setPrice }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 justify-center">
        <label htmlFor="price" className="font-sans text-sm font-bold text-center text-white">
          Average Selling Price
        </label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoIcon className="h-4 w-4 text-gray-400" />
            </TooltipTrigger>
            <TooltipContent className="bg-axis-darkgray text-gray-300 text-xs p-2 border border-gray-800">
              <p>How much you'll charge per sale</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="text-xs italic text-gray-400 -mt-1 text-center">
        Your product's selling price
      </p>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
        <Input 
          id="price"
          type="number" 
          placeholder="9.99" 
          className="pl-8 border-gray-800 focus:border-axis-purple bg-axis-black text-white py-3 focus:ring-0 focus:shadow-none focus:outline-none"
          value={price || ''}
          onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
        />
      </div>
    </div>
  );
};

export default PriceInput;
