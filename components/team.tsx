import Image from "next/image";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { team } from "@/content/site";

export function Team() {
  return (
    <section
      id="team"
      className="bg-surface-100"
      style={{ paddingBlock: "var(--section-y)" }}
    >
      <Container>
        <SectionHeader
          eyebrow={team.eyebrow}
          heading={team.heading}
          lead={team.lead}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.members.map((m) => (
            <article
              key={m.name}
              className="bg-white rounded-[var(--radius-xl)] border border-slate-100 p-6 shadow-[var(--shadow-xs)]"
            >
              <div className="relative w-full aspect-square rounded-[var(--radius-lg)] overflow-hidden bg-surface-100 mb-5">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  className="object-cover"
                  style={{ filter: "saturate(0.95)" }}
                />
              </div>
              <h3
                className="text-ink-800 mb-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "20px",
                  letterSpacing: "-0.01em",
                }}
              >
                {m.name}
              </h3>
              <div className="text-[13px] font-semibold text-azure-600 mb-3.5">
                {m.title}
              </div>
              <p className="text-[14px] leading-[1.55] text-slate-500">{m.bio}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
