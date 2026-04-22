import { Container } from "./container";
import { Logo } from "./logo";
import { footer } from "@/content/site";

function LinkedinMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0 4.881 0 3.5C0 2.12 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.56 0h4.37v2.05h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.67c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V23H7.78V8z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink-900 text-slate-200 pt-14">
      <Container className="pb-12 border-b border-white/[0.06] grid md:grid-cols-[1.2fr_1.8fr] gap-12 md:gap-16">
        <div>
          <div className="text-white">
            <Logo height={20} />
          </div>
          <p className="text-slate-400 text-[14px] mt-4 max-w-[280px] leading-relaxed">
            {footer.tag}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {footer.columns.map((col) => (
            <div key={col.label}>
              <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-4">
                {col.label}
              </div>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="flex items-center gap-2 text-slate-200 text-[14px] mb-2.5 hover:text-white transition-colors"
                >
                  {l.icon === "linkedin" ? <LinkedinMark size={16} /> : null}
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </Container>
      <div className="py-6">
        <Container>
          <small className="text-slate-500 text-[13px]">{footer.legal}</small>
        </Container>
      </div>
    </footer>
  );
}
