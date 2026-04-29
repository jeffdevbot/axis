"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Container } from "./container";
import { Button } from "./button";
import { useBooking } from "./booking-provider";
import { site } from "@/content/site";

export function Nav() {
  const { open } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 24;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 inset-x-0 z-50 border-b transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)]",
        scrolled
          ? "py-3 bg-[rgba(15,23,42,0.72)] backdrop-blur-[16px] border-white/[0.06]"
          : "py-4 border-transparent",
      ].join(" ")}
    >
      <Container className="flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center cursor-pointer text-white">
          <Logo height={27} />
        </a>

        <div className="hidden lg:flex items-center gap-8 ml-auto mr-6">
          {site.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[17px] font-medium text-slate-200 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="primary" onClick={open}>
            Book a Call
          </Button>
        </div>

        <button
          className="lg:hidden p-1.5 text-white"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-ink-800 border-t border-white/[0.06]">
          <Container className="py-6 flex flex-col gap-4">
            {site.navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-base font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <Button
              variant="primary"
              onClick={() => {
                setMobileOpen(false);
                open();
              }}
            >
              Book a Call
            </Button>
          </Container>
        </div>
      )}
    </nav>
  );
}
