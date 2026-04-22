export type TacosInputs = {
  price: number;
  conversionRate: number;
  cpc: number;
};

export type ReverseInputs = {
  price: number;
  conversionRate: number;
  targetTacos: number;
};

export type Verdict = "excellent" | "moderate" | "high";

export type TacosResult = {
  tacos: number;
  verdict: Verdict;
  label: string;
  explanation: string;
};

export function calcTacos({ price, conversionRate, cpc }: TacosInputs): number {
  if (price <= 0 || conversionRate <= 0) return 0;
  return (cpc / (price * (conversionRate / 100))) * 100;
}

export function calcCpcForTargetTacos({
  price,
  conversionRate,
  targetTacos,
}: ReverseInputs): number {
  if (price <= 0 || conversionRate <= 0) return 0;
  return (targetTacos * price * (conversionRate / 100)) / 100;
}

export function verdictFor(tacos: number): Verdict {
  if (tacos <= 20) return "excellent";
  if (tacos <= 30) return "moderate";
  return "high";
}

export function verdictLabel(v: Verdict): string {
  switch (v) {
    case "excellent":
      return "Excellent — consider moving forward";
    case "moderate":
      return "Moderate — approach with caution";
    case "high":
      return "High advertising costs — reconsider strategy";
  }
}

export function verdictExplanation(v: Verdict): string {
  switch (v) {
    case "excellent":
      return "With under 20% of sales allocated to advertising, efficiency is strong. Top-performing Amazon brands often achieve these levels, especially with strong organic rankings and positive reviews.";
    case "moderate":
      return "Spending 20–30% of sales on advertising is acceptable for some established brands with high margins, but may be challenging for others. Consider your overall margins carefully.";
    case "high":
      return "With over 30% of sales going to advertising, profitability may be challenging. Consider improving your conversion rate or finding ways to reduce advertising costs.";
  }
}

export function roundTo(value: number, decimals = 2): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
