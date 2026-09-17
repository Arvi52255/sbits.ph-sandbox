import Link from "next/link";
import { navLinks, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-ink text-slate-300">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-white text-sm font-bold text-ink font-display">
              S
            </span>
            <span className="font-display text-lg font-bold text-white">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{site.description}</p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Navigate</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="focus-ring rounded text-slate-400 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/quote" className="focus-ring rounded text-slate-400 hover:text-white">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="focus-ring rounded text-slate-400 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Get in touch</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li>{site.address}</li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="focus-ring rounded hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="focus-ring rounded hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Built in the Philippines.</p>
        </div>
      </div>
    </footer>
  );
}
