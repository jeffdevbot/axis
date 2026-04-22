import { Container } from "./container";
import { difference } from "@/content/site";

export function WhyAxis() {
  return (
    <section
      id="why-axis"
      className="bg-white"
      style={{ paddingBlock: "var(--section-y)" }}
    >
      <Container>
        <header className="text-center max-w-[720px] mx-auto mb-14 md:mb-20">
          <span className="eyebrow block mb-4">{difference.eyebrow}</span>
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--fs-h2)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              fontWeight: 700,
            }}
          >
            {difference.heading}
          </h2>
          <p
            className="text-slate-500 mx-auto"
            style={{ fontSize: "var(--fs-lead)", lineHeight: 1.45 }}
          >
            {difference.lead}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 rounded-[var(--radius-xl)] border border-slate-100 overflow-hidden bg-white">
          {difference.pillars.map((p, i) => (
            <article
              key={p.heading}
              className={[
                "px-8 py-9",
                i < difference.pillars.length - 1
                  ? "md:border-r border-slate-100 border-b md:border-b-0"
                  : "",
              ].join(" ")}
            >
              <div className="mono text-[13px] font-medium text-azure-600 tracking-[0.02em] mb-5">
                0{i + 1}
              </div>
              <h3
                className="mb-3.5 text-ink-800"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "22px",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.heading}
              </h3>
              <p className="text-[15px] leading-[1.6] text-slate-500">{p.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
