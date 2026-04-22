
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TacosExplainer: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full mt-8 mb-8 space-y-5">
      <div className="w-full max-w-[400px] mx-auto">
        <Accordion type="single" collapsible className="border border-gray-800 rounded-md bg-axis-darkgray">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="font-sans font-bold text-base py-3 px-4 text-white">
              What is TACOS?
            </AccordionTrigger>
            <AccordionContent className="font-sans text-sm italic text-gray-300 px-4 pb-4">
              Total Advertising Cost of Sale—a metric showing what percentage of your revenue goes to advertising costs. It's calculated as (CPC / (ASP × CR)) × 100. Lower values indicate more efficient advertising spend.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="w-full max-w-[400px] mx-auto">
        <Accordion type="single" collapsible className="border border-gray-800 rounded-md bg-axis-darkgray">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="font-sans font-bold text-base py-3 px-4 text-white">
              Understanding the TACOS Formula
            </AccordionTrigger>
            <AccordionContent className="font-sans text-sm italic text-gray-300 px-4 pb-4">
              Let's break down the TACOS formula. TACOS (Total Advertising Cost of Sale) measures how much of your sale goes to advertising. Here's how it works: ASP is your average selling price per unit. CR is the percentage of visitors who make a purchase. CPC is the cost you pay per ad click. ASP × CR = your expected revenue per click. For example, if ASP is $20 and CR is 10%, that's $2 per click. If CPC is $0.50, you're paying $0.50 to make $2. The formula is:
              <div className="bg-axis-black border border-gray-800 p-[10px] my-[5px] font-mono text-gray-300">
                TACOS = (CPC / (ASP × CR)) × 100
              </div>
              So, (0.50 / 2) × 100 = 25%. This means 25% of your sale goes to advertising costs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="w-full max-w-[400px] mx-auto">
        <Accordion type="single" collapsible className="border border-gray-800 rounded-md bg-axis-darkgray">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="font-sans font-bold text-base py-3 px-4 text-white">
              Why Is TACOS Useful?
            </AccordionTrigger>
            <AccordionContent className="font-sans text-sm italic text-gray-300 px-4 pb-4">
              TACOS provides a quick assessment of your ad efficiency. If your TACOS is 60%, it means 60% of your revenue is being spent on advertising—which is concerning. This is before considering FBA fees, storage, and other Amazon costs. A TACOS of 15% is much more sustainable. This metric serves as an indicator to determine if your product can be profitable on Amazon given the advertising costs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="w-full max-w-[400px] mx-auto">
        <Accordion type="single" collapsible className="border border-gray-800 rounded-md bg-axis-darkgray">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="font-sans font-bold text-base py-3 px-4 text-white">
              Setting a TACOS Target
            </AccordionTrigger>
            <AccordionContent className="font-sans text-sm italic text-gray-300 px-4 pb-4">
              If you want to set a TACOS goal and determine what you can afford to spend on ads, use the 'Set TACOS Target' option. For example, if you select a TACOS target of 15% for a $20 item with 10% conversion rate, here's the formula:
              <div className="bg-axis-black border border-gray-800 p-[10px] my-[5px] font-mono text-gray-300">
                CPC = (TACOS × ASP × CR) / 100
              </div>
              So, (15 × 20 × 0.10) / 100 = $0.30. This is the maximum cost per click you can afford to maintain your target TACOS.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="w-full max-w-[400px] mx-auto">
        <Accordion type="single" collapsible className="border border-gray-800 rounded-md bg-axis-darkgray">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="font-sans font-bold text-base py-3 px-4 text-white">
              Typical CPC Values
            </AccordionTrigger>
            <AccordionContent className="font-sans text-sm italic text-gray-300 px-4 pb-4">
              Most Amazon Sponsored Product ads have a cost per click (CPC) ranging from $0.75 to $2.50, though this varies by category and competition level. For more accurate estimates specific to your product category, tools like Helium10 or JungleScout can provide valuable insights.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="w-full max-w-[400px] mx-auto">
        <Accordion type="single" collapsible className="border border-gray-800 rounded-md bg-axis-darkgray">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="font-sans font-bold text-base py-3 px-4 text-white">
              Estimating Conversion Rates
            </AccordionTrigger>
            <AccordionContent className="font-sans text-sm italic text-gray-300 px-4 pb-4">
              Amazon conversion rates typically range from below 1% to as high as 25%. The highest rates are usually achieved by highly discounted products with excellent reviews, compelling content, and established customer bases. For most products, conversion rates fall between 2-8%, which is a reasonable starting point for your calculations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default TacosExplainer;
