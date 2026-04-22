"use client";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";
import { LinkButton } from "./button";
import {
  calcTacos,
  roundTo,
  verdictExplanation,
  verdictFor,
  verdictLabel,
} from "@/lib/tacos";
import { tacos as copy } from "@/content/site";

export function TacosWidget() {
  const [price, setPrice] = useState(50);
  const [conversionRate, setConversionRate] = useState(5);
  const [cpc, setCpc] = useState(0.75);

  const { tacos, verdict, progress } = useMemo(() => {
    const raw = calcTacos({ price, conversionRate, cpc });
    const t = roundTo(raw, 2);
    return {
      tacos: t,
      verdict: verdictFor(t),
      progress: Math.min(Math.max(t, 0), 100),
    };
  }, [price, conversionRate, cpc]);

  const bar =
    verdict === "excellent"
      ? "bg-[#34D399]"
      : verdict === "moderate"
        ? "bg-[#FBBF24]"
        : "bg-[#F87171]";

  return (
    <section
      className="relative bg-ink-800 overflow-hidden"
      style={{ paddingBlock: "var(--section-y)" }}
    >
      <div
        aria-hidden
        className="absolute -bottom-[30%] -left-[20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(29, 78, 216, 0.20), rgba(29, 78, 216, 0) 70%)",
        }}
      />
      <Container className="relative z-10 on-dark">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="eyebrow mb-3.5">{copy.eyebrow}</span>
            <h2
              className="text-white mt-3 mb-4"
              style={{
                fontSize: "var(--fs-h2)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                fontWeight: 700,
              }}
            >
              {copy.heading}
            </h2>
            <p
              className="text-slate-200 max-w-[460px] mb-7"
              style={{ fontSize: "var(--fs-lead)", lineHeight: 1.5 }}
            >
              {copy.body}
            </p>
            <LinkButton variant="primary" href="/tools/tacos-calculator">
              {copy.cta}
              <ArrowRight size={16} aria-hidden />
            </LinkButton>
          </div>

          <div className="rounded-[var(--radius-xl)] bg-ink-700 border border-white/[0.08] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_32px_rgba(15,23,42,0.08)]">
            <Field
              label="Selling price"
              prefix="$"
              value={price}
              step={0.5}
              onChange={setPrice}
              min={0}
            />
            <Field
              label="Conversion rate (%)"
              value={conversionRate}
              step={0.1}
              onChange={setConversionRate}
              min={0}
              max={100}
            />
            <Field
              label="Cost per click"
              prefix="$"
              value={cpc}
              step={0.05}
              onChange={setCpc}
              min={0}
            />

            <div className="mt-6 pt-6 border-t border-white/[0.08]">
              <div className="text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-300">
                Estimated TACoS
              </div>
              <div
                className="mt-1.5 font-[family-name:var(--font-display)] font-extrabold tabular-nums"
                style={{
                  fontSize: "48px",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color:
                    verdict === "excellent"
                      ? "#34D399"
                      : verdict === "moderate"
                        ? "#FBBF24"
                        : "#F87171",
                }}
              >
                {tacos.toFixed(1)}%
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full ${bar} transition-all duration-300`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-3 text-[13px] text-slate-300">
                {verdictLabel(verdict)}
              </div>
              <p className="mt-2 text-[13px] text-slate-400 leading-relaxed">
                {verdictExplanation(verdict)}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  step,
  min,
  max,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step: number;
  min?: number;
  max?: number;
  prefix?: string;
}) {
  return (
    <div className="mb-4">
      <label className="block text-[12px] font-semibold text-slate-200 mb-1.5">
        {label}
      </label>
      <div className="flex items-center bg-ink-900 border border-white/10 rounded-md px-3.5 focus-within:border-azure-400 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.18)] transition-all">
        {prefix ? (
          <span className="mono text-[14px] text-slate-300">{prefix}</span>
        ) : null}
        <input
          type="number"
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(+e.target.value || 0)}
          className="flex-1 bg-transparent border-0 outline-none text-white mono text-[15px] py-3 px-1.5 tabular-nums"
        />
      </div>
    </div>
  );
}
