"use client";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { site } from "@/content/site";

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const lastActive = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    lastActive.current = document.activeElement as HTMLElement;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("button, [href]")?.focus();
    }, 50);

    return () => {
      document.removeEventListener("keydown", onKey);
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(top || "0", 10) * -1);
      lastActive.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-ink-800/72 backdrop-blur-sm"
      style={{ animation: "fadeIn 180ms cubic-bezier(0.16, 1, 0.3, 1)" }}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[640px] bg-white rounded-[var(--radius-xl)] overflow-hidden shadow-[0_24px_48px_rgba(15,23,42,0.2)]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-1.5 rounded-md text-slate-400 hover:bg-surface-100 hover:text-ink-800 transition-colors"
        >
          <X size={20} aria-hidden />
        </button>
        <div className="px-8 pt-8 pb-2">
          <span className="eyebrow">15-Minute Call</span>
          <h3
            id="booking-title"
            className="font-[family-name:var(--font-display)] text-2xl font-bold mt-2 mb-2 text-ink-800"
          >
            Pick a time that works.
          </h3>
          <p className="text-slate-500 text-[15px] leading-relaxed mb-4">
            15 minutes, no slides — we'll share an honest read on your Amazon performance.
          </p>
        </div>
        {site.calendlyUrl.includes("placeholder") ? (
          <div className="px-8 pb-8">
            <div className="rounded-md border border-slate-200 bg-surface-100 p-6 text-center">
              <p className="text-sm text-slate-500 mb-3">
                Calendly embed placeholder — set{" "}
                <code className="mono text-ink-800">NEXT_PUBLIC_CALENDLY_URL</code> to wire the real booking link.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-semibold text-azure-600 hover:text-azure-500"
              >
                Or email {site.email} →
              </a>
            </div>
          </div>
        ) : (
          <iframe
            src={site.calendlyUrl}
            title="Book a 15-minute call"
            className="w-full border-0"
            style={{ height: "620px" }}
          />
        )}
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  );
}
