export function SectionHeader({
  eyebrow,
  heading,
  lead,
}: {
  eyebrow: string;
  heading: string;
  lead?: string;
}) {
  return (
    <header className="text-center max-w-[720px] mx-auto mb-14 md:mb-20">
      <span className="eyebrow block mb-4">{eyebrow}</span>
      <h2
        className="mb-4"
        style={{
          fontSize: "var(--fs-h2)",
          lineHeight: 1.2,
          letterSpacing: "-0.01em",
          fontWeight: 700,
        }}
      >
        {heading}
      </h2>
      {lead ? (
        <p
          className="text-slate-500 mx-auto"
          style={{ fontSize: "var(--fs-lead)", lineHeight: 1.45 }}
        >
          {lead}
        </p>
      ) : null}
    </header>
  );
}
