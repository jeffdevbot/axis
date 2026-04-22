import { ArrowRight, ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost" | "ghost-dark";
type TrailingIcon = "arrow-right" | "chevron-down";

const base =
  "inline-flex items-center gap-2 whitespace-nowrap px-5 py-3 text-[15px] font-semibold rounded-[var(--radius-md)] border border-transparent cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-azure-600 text-white shadow-[0_8px_24px_rgba(29,78,216,0.24)] hover:bg-azure-500 hover:-translate-y-px active:bg-azure-700 active:scale-[0.98] active:shadow-none",
  ghost:
    "bg-transparent text-ink-800 border-slate-200 hover:bg-surface-100",
  "ghost-dark":
    "bg-transparent text-white border-white/20 hover:bg-white/10",
};

const icons = {
  "arrow-right": ArrowRight,
  "chevron-down": ChevronDown,
};

type ButtonProps = {
  variant?: Variant;
  trailingIcon?: TrailingIcon;
  children: React.ReactNode;
} & Omit<ComponentProps<"button">, "ref">;

export function Button({
  variant = "primary",
  trailingIcon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const Icon = trailingIcon ? icons[trailingIcon] : null;
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {Icon ? <Icon size={16} strokeWidth={2} aria-hidden /> : null}
    </button>
  );
}

type LinkButtonProps = {
  variant?: Variant;
  trailingIcon?: TrailingIcon;
  children: React.ReactNode;
  href: string;
} & Omit<ComponentProps<"a">, "ref">;

export function LinkButton({
  variant = "primary",
  trailingIcon,
  children,
  href,
  className = "",
  ...rest
}: LinkButtonProps) {
  const Icon = trailingIcon ? icons[trailingIcon] : null;
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
      {Icon ? <Icon size={16} strokeWidth={2} aria-hidden /> : null}
    </a>
  );
}
