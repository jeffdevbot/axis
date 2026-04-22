
import React from 'react';
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  onSubmit: (e: React.FormEvent) => void;
  onRandomTest?: () => void;
  showRandomTest: boolean;
}

const FormActions: React.FC<FormActionsProps> = ({ onSubmit, onRandomTest, showRandomTest }) => {
  return (
    <div className="space-y-4">
      <Button 
        type="submit"
        className="w-full mt-6 bg-[#00A699] hover:bg-[#00A699]/90 hover:shadow-[0_0_8px_rgba(0,166,153,0.5)] transition-all py-3 font-poppins font-bold text-base rounded-md"
        onClick={onSubmit}
      >
        Crunch My Numbers
      </Button>
      
      {showRandomTest && onRandomTest && (
        <div className="flex justify-center mt-4">
          <Button
            onClick={onRandomTest}
            className="bg-[#00A699] hover:bg-[#00A699]/90 hover:shadow-[0_0_8px_rgba(0,166,153,0.5)] transition-all font-poppins text-sm"
          >
            Random Hustle Test
          </Button>
        </div>
      )}
    </div>
  );
};

export default FormActions;
