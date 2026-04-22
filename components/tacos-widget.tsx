"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";
import { LinkButton } from "./button";
import { Glow } from "./glow";
import { NumberField } from "./number-field";
import {
  calcTacos,
  roundTo,
  verdictBarClass,
  verdictColor,
  verdictExplanation,
  verdictFor,
  verdictLabel,
} from "@/lib/tacos";
import { tacos as copy } from "@/content/site";

export function TacosWidget() {
  const [price, setPrice] = useState(50);
  const [conversionRate, setConversionRate] = useState(5);
  const [cpc, setCpc] = useState(0.75);

  const tacos = roundTo(calcTacos({ price, conversionRate, cpc }), 2);
  const verdict = verdictFor(tacos);
  const progress = Math.min(Math.max(tacos, 0), 100);

  return (
    <section
      className="relative bg-ink-800 overflow-hidden"
      style={{ paddingBlock: "var(--section-y)" }}
    >
      <Glow position="bottom-left" size="60vw" maxSize={700} alpha={0.2} />
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
            <NumberField
              tone="dark"
              label="Selling price"
              prefix="$"
              value={price}
              step={0.5}
              onChange={setPrice}
              min={0}
            />
            <NumberField
              tone="dark"
              label="Conversion rate (%)"
              value={conversionRate}
              step={0.1}
              onChange={setConversionRate}
              min={0}
              max={100}
            />
            <NumberField
              tone="dark"
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
                  color: verdictColor(verdict),
                }}
              >
                {tacos.toFixed(1)}%
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full ${verdictBarClass(verdict)} transition-all duration-300`}
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
