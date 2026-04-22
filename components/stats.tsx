import { Container } from "./container";
import { stats, statsFootnote } from "@/content/site";

function StatCell({ n, suffix, label }: { n: string; suffix?: string; label: string }) {
  return (
    <div className="text-center relative px-4 flex-1">
      <div
        className="font-[family-name:var(--font-display)] font-extrabold text-ink-800 mono tabular-nums"
        style={{
          fontSize: "var(--fs-stat)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <span className="font-[family-name:var(--font-display)]">{n}</span>
        {suffix ? <span className="text-azure-600">{suffix}</span> : null}
      </div>
      <div className="mt-2.5 text-[13px] font-medium text-slate-500">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-14 md:py-16 bg-surface-100">
      <Container>
        <div className="rounded-[var(--radius-xl)] border border-slate-100 bg-white px-6 py-10 shadow-[var(--shadow-sm)] grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={
                i > 0
                  ? "md:border-l md:border-slate-200 md:[&>div]:pl-4"
                  : undefined
              }
            >
              <StatCell n={s.n} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[13px] italic text-slate-400">
          {statsFootnote}
        </p>
      </Container>
    </section>
  );
}
