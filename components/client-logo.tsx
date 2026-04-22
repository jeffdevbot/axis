import fs from "node:fs";
import path from "node:path";

const PROCESSED = new Map<string, string>();

function loadLogo(slug: string): string {
  const cached = PROCESSED.get(slug);
  if (cached) return cached;
  const raw = fs.readFileSync(
    path.join(process.cwd(), "public", "assets", "clients", `${slug}.svg`),
    "utf8",
  );
  const processed = raw
    .replace(/<defs>[\s\S]*?<\/defs>/g, "")
    .replace(/<(path|polygon|polyline|rect|circle|ellipse)([^>]*)>/g, (_m, tag, attrs) => {
      const cleaned = attrs
        .replace(/\sfill="[^"]*"/g, "")
        .replace(/\sclass="[^"]*"/g, "");
      return `<${tag}${cleaned} fill="currentColor">`;
    })
    .replace(
      /<svg([^>]*)>/,
      '<svg$1 style="max-height:47px;max-width:100%;width:auto;height:auto">',
    );
  PROCESSED.set(slug, processed);
  return processed;
}

export function ClientLogo({ slug, name }: { slug: string; name: string }) {
  const svg = loadLogo(slug);
  return (
    <div
      aria-label={name}
      title={name}
      className="flex items-center justify-center h-16 text-slate-400 transition-colors duration-200 hover:text-ink-800"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
