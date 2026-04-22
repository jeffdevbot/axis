
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";

interface ReverseTacosToggleProps {
  useReverseTacos: boolean;
  setUseReverseTacos: (checked: boolean) => void;
}

const ReverseTacosToggle: React.FC<ReverseTacosToggleProps> = ({ useReverseTacos, setUseReverseTacos }) => {
  return (
    <div className="flex items-center space-x-2 mt-5">
      <Checkbox 
        id="reverse-tacos" 
        checked={useReverseTacos}
        onCheckedChange={(checked) => setUseReverseTacos(checked === true)}
        className="border-gray-600 data-[state=checked]:bg-axis-purple data-[state=checked]:border-axis-purple"
      />
      <label
        htmlFor="reverse-tacos"
        className="text-sm font-sans font-bold cursor-pointer text-white"
      >
        Set TACOS Target
      </label>
    </div>
  );
};

export default ReverseTacosToggle;
