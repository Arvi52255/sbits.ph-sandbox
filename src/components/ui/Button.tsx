import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button
 *
 * Renders as a real <button> by default, or as a Next.js <Link> when an
 * `href` is passed — same visual component either way, so callers don't
 * need to choose between a styled Link and a styled button separately.
 *
 * Variants map directly to the locked brand palette. `teal` variant uses
 * white text on a teal background specifically because teal-on-white
 * text fails WCAG AA (see tailwind.config.ts comment) — background+white
 * text is one of the approved safe uses. `outline-light` is a separate
 * variant (not an override of `outline` via className) because this
 * project has no tailwind-merge/clsx, so conflicting border/text-color
 * utilities passed in via className aren't guaranteed to win over the
 * variant's own classes — a dedicated variant is the reliable way to get
 * a light outline button for use on the dark/gradient Hero section.
 */

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-light' | 'teal';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-red text-white hover:bg-brand-red-dark',
  secondary: 'bg-brand-charcoal text-white hover:bg-black',
  outline: 'border border-brand-charcoal text-brand-charcoal hover:bg-gray-50',
  'outline-light': 'border border-white text-white hover:bg-white/10',
  teal: 'bg-brand-teal text-white hover:bg-brand-teal-dark',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ' +
  'disabled:cursor-not-allowed disabled:opacity-50';

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: undefined;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  ...rest
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    const { target, rel } = rest as ButtonAsLink;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}