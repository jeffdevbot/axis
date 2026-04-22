"use client";
import { ArrowRight } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { useBooking } from "./booking-provider";
import { finalCTA } from "@/content/site";

export function FinalCTA() {
  const { open } = useBooking();
  return (
    <section
      className="relative bg-ink-900 text-center overflow-hidden on-dark"
      style={{ paddingBlock: "calc(var(--section-y) + 16px)" }}
    >
      <div
        aria-hidden
        className="absolute -bottom-[40%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(29, 78, 216, 0.16), rgba(29, 78, 216, 0) 70%)",
        }}
      />
      <Container className="relative z-10">
        <div className="max-w-[760px] mx-auto">
          <h2
            className="text-white text-center text-balance mb-5"
            style={{
              fontSize: "var(--fs-h1)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            {finalCTA.heading}
          </h2>
          <p
            className="text-slate-200 text-center text-balance mx-auto max-w-[640px] mb-8"
            style={{ fontSize: "var(--fs-lead)", lineHeight: 1.5 }}
          >
            {finalCTA.sub}
          </p>
          <Button variant="primary" onClick={open}>
            {finalCTA.cta}
            <ArrowRight size={16} aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
