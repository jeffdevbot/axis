import { Container } from "./container";
import { ClientLogo } from "./client-logo";
import { clients } from "@/content/site";

export function Clients() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <Container>
        <div className="text-center mono text-[14px] uppercase tracking-[0.08em] text-slate-400 mb-8">
          {clients.label}
        </div>
      </Container>
      <div className="logo-marquee">
        <div className="logo-marquee__track">
          {/* Second copy makes the loop seamless; hidden from screen readers */}
          {[false, true].map((duplicate) => (
            <div
              key={String(duplicate)}
              className="logo-marquee__group"
              aria-hidden={duplicate || undefined}
            >
              {clients.logos.map((c) => (
                <ClientLogo key={c.slug} slug={c.slug} name={c.name} width={c.width} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
