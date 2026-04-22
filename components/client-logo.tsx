"use client";
import { useEffect, useRef } from "react";

export function ClientLogo({ slug, name }: { slug: string; name: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/assets/clients/${slug}.svg`);
        const text = await res.text();
        if (cancelled || !ref.current) return;
        ref.current.innerHTML = text;
        const svg = ref.current.querySelector("svg");
        if (svg) {
          svg
            .querySelectorAll("path, polygon, polyline, rect, circle, ellipse")
            .forEach((s) => {
              s.setAttribute("fill", "currentColor");
              s.removeAttribute("class");
            });
          svg.querySelector("defs")?.remove();
          svg.setAttribute("style", "max-height: 47px; max-width: 100%; width: auto; height: auto;");
        }
      } catch {
        /* ignore */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return (
    <div
      ref={ref}
      aria-label={name}
      title={name}
      className="flex items-center justify-center h-16 text-slate-400 transition-colors duration-200 hover:text-ink-800"
    />
  );
}
