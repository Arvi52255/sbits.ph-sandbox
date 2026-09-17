import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost" | "outlineLight";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-signal text-white hover:bg-signal-dark",
  secondary: "bg-ink text-white hover:bg-slate-800",
  ghost: "bg-transparent text-ink border border-slate-300 hover:border-signal hover:text-signal",
  // Same shape as "ghost" but tuned for use on dark sections — a separate variant
  // avoids fighting ghost's own text/border classes via className overrides.
  outlineLight: "bg-transparent text-white border border-slate-500 hover:border-circuit hover:text-circuit",
};

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={clsx(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
