"use client";
import { useState } from "react";
import { Container } from "./container";
import { NumberField } from "./number-field";
import {
  calcCpcForTargetTacos,
  calcTacos,
  roundTo,
  verdictBarClass,
  verdictExplanation,
  verdictFor,
  verdictLabel,
  verdictTextClass,
} from "@/lib/tacos";

export function TacosFull() {
  const [price, setPrice] = useState(50);
  const [conversionRate, setConversionRate] = useState(5);
  const [cpc, setCpc] = useState(0.75);
  const [targetTacos, setTargetTacos] = useState(15);
  const [reverseMode, setReverseMode] = useState(false);

  const result = reverseMode
    ? {
        mode: "reverse" as const,
        tacos: roundTo(targetTacos, 2),
        requiredCpc: roundTo(
          calcCpcForTargetTacos({ price, conversionRate, targetTacos }),
          2,
        ),
        verdict: verdictFor(targetTacos),
      }
    : (() => {
        const t = roundTo(calcTacos({ price, conversionRate, cpc }), 2);
        return { mode: "forward" as const, tacos: t, verdict: verdictFor(t) };
      })();

  return (
    <section
      className="bg-surface-100"
      style={{ paddingBlock: "var(--section-y)" }}
    >
      <Container>
        <div className="max-w-[840px] mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-3">Free tool</span>
            <h1
              className="mb-4"
              style={{
                fontSize: "var(--fs-h1)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              Amazon TACoS Calculator
            </h1>
            <p
              className="text-slate-500 max-w-[640px] mx-auto"
              style={{ fontSize: "var(--fs-lead)", lineHeight: 1.45 }}
            >
              Validate your Amazon product economics before you invest. Enter your price, conversion
              rate, and CPC — we'll tell you whether the numbers work.
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-start">
            <div className="bg-white rounded-[var(--radius-xl)] border border-slate-100 p-7 shadow-[var(--shadow-sm)]">
              <NumberField
                label="Selling price (ASP)"
                prefix="$"
                value={price}
                onChange={setPrice}
                step={0.5}
                min={0}
              />

              <SliderField
                label="Conversion rate"
                value={conversionRate}
                onChange={setConversionRate}
                min={0}
                max={30}
                step={0.1}
                suffix="%"
              />

              {reverseMode ? (
                <SliderField
                  label="Target TACoS"
                  value={targetTacos}
                  onChange={setTargetTacos}
                  min={1}
                  max={30}
                  step={0.5}
                  suffix="%"
                />
              ) : (
                <NumberField
                  label="Cost per click (CPC)"
                  prefix="$"
                  value={cpc}
                  onChange={setCpc}
                  step={0.05}
                  min={0}
                />
              )}

              <label className="mt-4 flex items-center gap-2.5 text-[14px] text-slate-500 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={reverseMode}
                  onChange={(e) => setReverseMode(e.target.checked)}
                  className="h-4 w-4 accent-azure-600"
                />
                Reverse: find the CPC needed to hit a target TACoS
              </label>
            </div>

            <div className="bg-ink-800 rounded-[var(--radius-xl)] p-7 on-dark">
              <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-300">
                {result.mode === "forward" ? "Your TACoS" : "CPC to hit target"}
              </div>
              <div
                className={`mt-2 font-[family-name:var(--font-display)] font-extrabold tabular-nums ${verdictTextClass(result.verdict)}`}
                style={{
                  fontSize: "clamp(3rem, 2rem + 4vw, 4.5rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {result.mode === "forward"
                  ? `${result.tacos.toFixed(1)}%`
                  : `$${result.requiredCpc.toFixed(2)}`}
              </div>

              <div className="mt-5 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full ${verdictBarClass(result.verdict)} transition-all duration-300`}
                  style={{ width: `${Math.min(Math.max(result.tacos, 0), 100)}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-[11px] mono text-slate-400">
                <span>0%</span>
                <span>20%</span>
                <span>30%</span>
                <span>100%</span>
              </div>

              <div className="mt-5 text-[14px] font-medium text-white">
                {verdictLabel(result.verdict)}
              </div>
              <p className="mt-2 text-[13px] text-slate-300 leading-relaxed">
                {verdictExplanation(result.verdict)}
              </p>

              <div className="mt-6 pt-5 border-t border-white/[0.08] mono text-[12px] text-slate-400 tabular-nums">
                ASP: ${price.toFixed(2)} · CR: {conversionRate}%{" "}
                {result.mode === "forward"
                  ? `· CPC: $${cpc.toFixed(2)}`
                  : `· Target: ${targetTacos}%`}
              </div>
            </div>
          </div>

          <details className="mt-10 text-[14px] text-slate-500">
            <summary className="cursor-pointer font-medium text-ink-800 mb-2">
              How the math works
            </summary>
            <div className="mt-3 leading-relaxed space-y-2">
              <p>
                <strong>TACoS</strong> (Total Advertising Cost of Sales) = ad spend ÷ total sales.
                On a per-click basis: <span className="mono">TACoS = (CPC ÷ (ASP × CR)) × 100</span>.
              </p>
              <p>
                <strong>Reverse mode</strong>: to hit a target TACoS, the maximum CPC you can pay
                is{" "}
                <span className="mono">CPC = (Target TACoS × ASP × CR) ÷ 100</span>.
              </p>
              <p>
                Rules of thumb: under 20% is strong for most brands; 20–30% is workable for high-margin
                categories; above 30% usually squeezes profitability unless conversion rate is lifted
                or CPC reduced.
              </p>
            </div>
          </details>
        </div>
      </Container>
    </section>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-[13px] font-semibold text-ink-800">{label}</label>
        <span className="mono text-[14px] font-medium text-azure-600 tabular-nums">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="w-full accent-azure-600"
      />
    </div>
  );
}
