import Link from "next/link";
import Image from "next/image";
import { Service, Industry, Partner } from "@/lib/site";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-medium text-signal">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>}
    </div>
  );
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <div className="group rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-signal">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-circuit/10 text-circuit">
          <Image src={service.icon} alt="" width={24} height={24} aria-hidden="true" />
        </div>
        <span className="font-display text-xs text-slate-300">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="font-display mt-4 text-lg font-semibold text-ink">{service.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.short}</p>
      <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
        {service.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-sm text-slate-600">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-circuit" />
            {b}
          </li>
        ))}
      </ul>
      <Link
        href="/quote"
        className="focus-ring mt-5 inline-block rounded text-sm font-medium text-signal hover:text-signal-dark"
      >
        Get a quote for this
      </Link>
    </div>
  );
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="rounded-lg bg-slate-50 p-6">
      <h3 className="font-display text-base font-semibold text-ink">{industry.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{industry.description}</p>
    </div>
  );
}

export function PartnerBadge({ partner }: { partner: Partner }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-8 text-center">
      <span className="font-display text-sm font-semibold text-ink">{partner.name}</span>
      <span className="text-xs text-slate-500">{partner.category}</span>
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-3xl font-bold text-ink sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}
