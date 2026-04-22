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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 md:gap-12 items-center">
          {clients.logos.map((c) => (
            <ClientLogo key={c.slug} slug={c.slug} name={c.name} />
          ))}
        </div>
      </Container>
    </section>
  );
}
