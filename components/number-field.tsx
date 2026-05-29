type Tone = "light" | "dark";

const TONES: Record<Tone, { label: string; wrap: string; prefix: string; input: string }> = {
  light: {
    label: "text-ink-800",
    wrap: "bg-white border border-slate-200 focus-within:border-azure-500 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.18)]",
    prefix: "text-slate-400",
    input: "text-ink-800",
  },
  dark: {
    label: "text-slate-200",
    wrap: "bg-ink-900 border border-white/10 focus-within:border-azure-400 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.18)]",
    prefix: "text-slate-300",
    input: "text-white",
  },
};

export function NumberField({
  label,
  value,
  onChange,
  step,
  min,
  max,
  prefix,
  tone = "light",
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step: number;
  min?: number;
  max?: number;
  prefix?: string;
  tone?: Tone;
}) {
  const t = TONES[tone];
  return (
    <div className="mb-4">
      <label className={`block text-[13px] font-semibold mb-1.5 ${t.label}`}>
        {label}
      </label>
      <div
        className={`flex items-center rounded-md px-3.5 transition-all ${t.wrap}`}
      >
        {prefix ? <span className={`mono text-[14px] ${t.prefix}`}>{prefix}</span> : null}
        <input
          type="number"
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(+e.target.value || 0)}
          className={`flex-1 bg-transparent border-0 outline-none mono text-[15px] py-3 px-1.5 tabular-nums ${t.input}`}
        />
      </div>
    </div>
  );
}
