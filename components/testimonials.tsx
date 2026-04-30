import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "./container";
import { SectionHeader } from "./section-header";
import { testimonials } from "@/content/site";

export function Testimonials() {
  return (
    <section
      className="bg-white"
      style={{ paddingBlock: "var(--section-y)" }}
    >
      <Container>
        <SectionHeader eyebrow="Proof" heading="What Our Clients Say" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-white rounded-[var(--radius-xl)] border border-slate-100 shadow-[var(--shadow-sm)] p-7 m-0 flex flex-col"
            >
              <Quote size={22} className="text-azure-600 mb-3.5" aria-hidden />
              <blockquote
                className="font-[family-name:var(--font-display)] font-semibold text-ink-800 mb-5 flex-1"
                style={{
                  fontSize: "17px",
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                }}
              >
                "{t.quote}"
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-100 bg-surface-100 shrink-0 relative">
                  <Image
                    src={t.photo}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-ink-800 leading-tight">
                    {t.name}
                  </div>
                  <div className="text-[13px] text-slate-400 leading-tight">
                    {t.title}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
