import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { services } from "@/content/site";

export function Services() {
  return (
    <section
      className="bg-surface-100"
      style={{ paddingBlock: "var(--section-y)" }}
    >
      <Container>
        <SectionHeader
          eyebrow={services.eyebrow}
          heading={services.heading}
          lead={services.lead}
        />

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
