import { Container } from "./container";
import { services } from "@/content/site";

export function Services() {
  return (
    <section
      className="bg-surface-100"
      style={{ paddingBlock: "var(--section-y)" }}
    >
      <Container>
        <header className="text-center max-w-[720px] mx-auto mb-14 md:mb-20">
          <span className="eyebrow block mb-4">{services.eyebrow}</span>
          <h2
            className="mb-4"
            style={{
              fontSize: "var(--fs-h2)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              fontWeight: 700,
            }}
          >
            {services.heading}
          </h2>
          <p
            className="text-slate-500"
            style={{ fontSize: "var(--fs-lead)", lineHeight: 1.45 }}
          >
            {services.lead}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.items.map((s, i) => (
            <article
              key={s.heading}
              className="group bg-white rounded-[var(--radius-xl)] border border-slate-100 p-8 shadow-[var(--shadow-sm)] flex flex-col transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)] hover:shadow-[var(--shadow-md)] hover:border-slate-200 hover:-translate-y-0.5"
            >
              <div
                className="font-[family-name:var(--font-display)] font-extrabold text-azure-600 mb-6 tabular-nums"
                style={{
                  fontSize: "40px",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                className="mb-3 text-ink-800"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "22px",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.heading}
              </h3>
              <p className="text-[15px] leading-[1.6] text-slate-500 flex-1">{s.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
