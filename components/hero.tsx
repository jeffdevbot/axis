"use client";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { useBooking } from "./booking-provider";
import { hero } from "@/content/site";

export function Hero() {
  const { open } = useBooking();
  return (
    <section
      id="top"
      className="relative bg-ink-800 overflow-hidden pt-40 pb-28 md:pt-48 md:pb-32"
    >
      <div
        aria-hidden
        className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(29, 78, 216, 0.22), rgba(29, 78, 216, 0) 70%)",
        }}
      />
      <Container className="relative z-10 on-dark text-center">
        <div className="mx-auto max-w-[920px]">
          <span className="eyebrow mb-6 text-azure-400">{hero.eyebrow}</span>
          <h1
            className="font-[family-name:var(--font-display)] font-extrabold text-white mt-6 mb-6"
            style={{
              fontSize: "var(--fs-display)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
            }}
          >
            {hero.headlineA}
            <br />
            <span className="text-azure-400">{hero.headlineB}</span>
          </h1>
          <p
            className="mx-auto max-w-[680px] text-slate-200"
            style={{ fontSize: "var(--fs-lead)", lineHeight: 1.5 }}
          >
            {hero.sub}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Button variant="primary" onClick={open}>
              {hero.primaryCTA}
              <ArrowRight size={16} strokeWidth={2} aria-hidden />
            </Button>
            <a
              href="#stats"
              className="inline-flex items-center gap-1.5 text-white text-[15px] font-medium py-3 px-1 border-b border-white/25 hover:text-azure-400 hover:border-azure-400 transition-colors cursor-pointer"
            >
              {hero.secondaryCTA}
              <ChevronDown size={16} aria-hidden />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
