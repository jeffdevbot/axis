import Image from "next/image";

export function ClientLogo({ slug, name }: { slug: string; name: string }) {
  const isHairmax = slug === "hairmax";

  return (
    <div className="flex items-center justify-center h-12 text-slate-400 transition-colors duration-200 hover:text-ink-800">
      <Image
        src={`/assets/clients/${slug}.svg`}
        alt={name}
        width={220}
        height={44}
        className={`w-auto h-auto opacity-70 hover:opacity-100 transition-opacity duration-200 ${
          isHairmax ? "max-h-6" : "max-h-9"
        }`}
      />
    </div>
  );
}
