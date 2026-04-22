
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface TacosResultProps {
  price: number;
  conversionRate: number;
  cpc: number;
  targetTacos?: number;
  useReverseTacos: boolean;
  isVisible: boolean;
}

const TacosResult: React.FC<TacosResultProps> = ({ 
  price, 
  conversionRate, 
  cpc, 
  targetTacos, 
  useReverseTacos,
  isVisible 
}) => {
  if (!isVisible) return null;

  // Calculate TACOS: (CPC / (ASP × CR)) × 100
  // If using reverse TACOS, we use the targetTacos directly
  const tacos = useReverseTacos ? 
    (targetTacos || 15) : 
    ((cpc / (price * (conversionRate / 100))) * 100);
  
  // Round to 2 decimal places
  const tacosRounded = Math.round(tacos * 100) / 100;

  // For reverse TACOS, calculate the CPC needed to achieve the target TACOS
  // CPC = (TACOS × ASP × CR) / 100
  const reverseCpc = useReverseTacos ? 
    ((tacosRounded * price * (conversionRate / 100)) / 100) : 
    cpc;
  const reverseCpcRounded = Math.round(reverseCpc * 100) / 100;

  // Updated to always use white text color for the main result
  let tacosColor = "text-white";
  
  // Determine color and verdict based on TACOS value
  let tacosVerdict = "";
  let tacosEmoji = "";
  
  if (tacosRounded <= 20) {
    tacosVerdict = "Excellent! Consider moving forward";
    tacosEmoji = "✅";
  } else if (tacosRounded <= 30) {
    tacosVerdict = "Moderate - approach with caution";
    tacosEmoji = "⚠️";
  } else {
    tacosVerdict = "High advertising costs - reconsider strategy";
    tacosEmoji = "❌";
  }

  // Determine progress color based on TACOS value
  let progressColor = "";
  if (tacosRounded <= 20) {
    progressColor = "bg-green-400";
  } else if (tacosRounded <= 30) {
    progressColor = "bg-yellow-400";
  } else {
    progressColor = "bg-red-400";
  }

  // Set detailed explanation text based on TACOS range
  let explanationText = "";
  if (tacosRounded > 30) {
    explanationText = "With over 30% of your sales going to advertising, profitability may be challenging. Consider improving your conversion rate or finding ways to reduce your advertising costs.";
  } else if (tacosRounded >= 20 && tacosRounded <= 30) {
    explanationText = "Spending 20-30% of your sales on advertising is acceptable for some established brands with high margins, but may be challenging for others. Consider your overall margins carefully.";
  } else {
    explanationText = "With under 20% of your sales allocated to advertising, your efficiency is strong. Top-performing Amazon brands often achieve these levels, especially with strong organic rankings and positive reviews.";
  }

  // Limit progress to 100%
  const progressValue = Math.min(tacosRounded, 100);

  return (
    <div className="flex justify-center w-full mt-6 animate-fade-in">
      <Card className="w-full max-w-[400px] bg-axis-darkgray border-gray-800 shadow-lg">
        <CardContent className="p-6">
          <h3 className="font-sans font-bold text-xl mb-3 text-white">
            {useReverseTacos 
              ? `CPC to Hit Target: $${reverseCpcRounded}`
              : `Your TACOS: ${tacosRounded}%`
            }
          </h3>
          
          <p className="font-sans text-sm italic mb-4 text-gray-300">
            {tacosVerdict} {tacosEmoji}
          </p>
          
          <div className="mb-4">
            <Progress 
              value={progressValue} 
              className={cn("h-3 mt-2 bg-gray-800", progressColor)}
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
          
          <div className="text-xs text-gray-400 border-t border-gray-800 pt-3">
            ASP: ${price.toFixed(2)} | CR: {conversionRate}% | 
            {useReverseTacos 
              ? ` Target TACOS: ${targetTacos}%` 
              : ` CPC: $${cpc.toFixed(2)}`}
          </div>
          
          <div className="font-sans text-[14px] text-gray-300 normal-case mt-3">
            {explanationText}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TacosResult;
