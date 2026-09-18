"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { LinkButton } from "./Button";
import clsx from "clsx";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-paper/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 focus-ring rounded" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-md">
            <Image
              src="/images/sbits_logo/sbitsLogo.svg"
              alt={`${site.name} logo`}
              width={36}
              height={36}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "link-underline focus-ring rounded text-sm font-medium",
                  active ? "text-ink after:w-full" : "text-slate-600 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <LinkButton href="/quote" variant="primary">
            Get a Quote
          </LinkButton>
        </div>

        <button
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={clsx(
                "absolute left-0 top-0 h-[2px] w-4 bg-ink transition-transform",
                open && "translate-y-[6px] rotate-45"
              )}
            />
            <span
              className={clsx("absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-ink transition-opacity", open && "opacity-0")}
            />
            <span
              className={clsx(
                "absolute bottom-0 left-0 h-[2px] w-4 bg-ink transition-transform",
                open && "-translate-y-[6px] -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-paper md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-2 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 rounded-md bg-signal px-2 py-3 text-center text-base font-medium text-white"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
