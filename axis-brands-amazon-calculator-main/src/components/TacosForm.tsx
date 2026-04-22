
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import PriceInput from './tacos/PriceInput';
import ConversionRateSlider from './tacos/ConversionRateSlider';
import CpcInput from './tacos/CpcInput';
import TargetTacosSlider from './tacos/TargetTacosSlider';
import ReverseTacosToggle from './tacos/ReverseTacosToggle';
import TacosResult from './TacosResult';
import TacoRain from './TacoRain';

const TacosForm: React.FC = () => {
  const [price, setPrice] = useState<number>(50);
  const [conversionRate, setConversionRate] = useState<number[]>([5]);
  const [cpc, setCpc] = useState<number>(0.75);
  const [targetTacos, setTargetTacos] = useState<number[]>([15]);
  const [useReverseTacos, setUseReverseTacos] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [showTacoRain, setShowTacoRain] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const validateInputs = (): boolean => {
    if (price <= 0) {
      setError("Please enter a valid price");
      return false;
    }
    
    if (conversionRate[0] === 0) {
      setError("Conversion Rate can't be 0%—no one's buying!");
      return false;
    }
    
    if (conversionRate[0] < 0 || conversionRate[0] > 30) {
      setError("Please enter a valid conversion rate");
      return false;
    }
    
    if (!useReverseTacos && cpc <= 0) {
      setError("Please enter a valid cost per click");
      return false;
    }
    
    if (useReverseTacos && (targetTacos[0] <= 0 || targetTacos[0] > 30)) {
      setError("Please enter a valid TACOS target");
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (validateInputs()) {
      // Trigger taco rain before showing results
      setShowTacoRain(true);
      setTimeout(() => {
        setShowTacoRain(false);
      }, 3000);
      
      setShowResults(true);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full mt-6">
        <div className="w-full max-w-[400px] mx-auto bg-axis-darkgray rounded-md p-6 shadow-lg border border-gray-800">
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Price Input */}
            <PriceInput price={price} setPrice={setPrice} />

            {/* Conversion Rate Slider */}
            <ConversionRateSlider 
              conversionRate={conversionRate} 
              setConversionRate={setConversionRate} 
            />

            {/* CPC or Target TACOS based on checkbox */}
            {!useReverseTacos ? (
              <CpcInput cpc={cpc} setCpc={setCpc} />
            ) : (
              <TargetTacosSlider 
                targetTacos={targetTacos} 
                setTargetTacos={setTargetTacos} 
              />
            )}

            {/* Reverse TACOS Checkbox */}
            <ReverseTacosToggle 
              useReverseTacos={useReverseTacos} 
              setUseReverseTacos={setUseReverseTacos} 
            />

            {/* Error message */}
            {error && (
              <div className="text-red-400 text-sm font-medium mt-2">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <Button 
              type="submit"
              className="w-full mt-6 bg-axis-purple hover:bg-axis-purple/90 hover:shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all py-3 font-sans font-bold text-base rounded-md"
            >
              Calculate TACOS
            </Button>
          </form>
        </div>
      </div>

      {/* Taco Rain Animation */}
      <TacoRain isTriggered={showTacoRain} />

      {/* Results section */}
      {showResults && (
        <TacosResult 
          price={price}
          conversionRate={conversionRate[0]}
          cpc={cpc}
          targetTacos={targetTacos[0]}
          useReverseTacos={useReverseTacos}
          isVisible={showResults}
        />
      )}
    </>
  );
};

export default TacosForm;
