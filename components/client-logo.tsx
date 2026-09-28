import fs from "node:fs";
import path from "node:path";

const PROCESSED = new Map<string, string>();

function loadLogo(slug: string, preserveColors: boolean, width: number): string {
  const cacheKey = `${slug}:${preserveColors ? "color" : "mono"}:${width}`;
  const cached = PROCESSED.get(cacheKey);
  if (cached) return cached;
  const raw = fs.readFileSync(
    path.join(process.cwd(), "public", "assets", "clients", `${slug}.svg`),
    "utf8",
  );
  const sized = raw.replace(
    /<svg([^>]*)>/,
    `<svg$1 style="width:${width}px;max-width:100%;height:auto;display:block">`,
  );
  const processed = preserveColors
    ? sized
    : sized
        .replace(/<defs>[\s\S]*?<\/defs>/g, "")
        .replace(/<(path|polygon|polyline|rect|circle|ellipse)([^>]*?)\/?>/g, (_m, tag, attrs) => {
          const cleaned = attrs
            .replace(/\sfill="[^"]*"/g, "")
            .replace(/\sclass="[^"]*"/g, "");
          return `<${tag}${cleaned} fill="currentColor"/>`;
        });
  PROCESSED.set(cacheKey, processed);
  return processed;
}

export function ClientLogo({
  slug,
  name,
  width,
  colored,
}: {
  slug: string;
  name: string;
  width: number;
  colored?: boolean;
}) {
  const svg = loadLogo(slug, !!colored, width);
  const className = colored
    ? "flex shrink-0 items-center justify-center h-16 grayscale opacity-70 transition duration-200 hover:grayscale-0 hover:opacity-100"
    : "flex shrink-0 items-center justify-center h-16 text-slate-400 transition-colors duration-200 hover:text-ink-800";
  return (
    <div
      role="img"
      aria-label={name}
      title={name}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
