import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/Bits";
import { LinkButton } from "@/components/Button";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Managed IT support, networking, cloud, software development, cybersecurity, and IT consulting for Philippine businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services"
            title="IT support that scales from one office to multiple branches."
            description="Every engagement starts the same way: we look at what you already have, tell you honestly what needs fixing, and scope work around your budget — not a generic package."
          />
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="space-y-16">
          {services.map((service, i) => (
            <div
              key={service.slug}
              id={service.slug}
              className="grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-[auto_1fr] lg:gap-16"
            >
              <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-6">
                <span className="font-display text-sm text-slate-300">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-circuit/10 text-circuit">
                  <Image src={service.icon} alt="" width={26} height={26} aria-hidden="true" />
                </div>
              </div>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">{service.name}</h2>
                  <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">{service.description}</p>
                  <LinkButton href="/quote" variant="ghost" className="mt-6">
                    Get a quote for {service.name.toLowerCase()}
                  </LinkButton>
                </div>
                <ul className="space-y-3 rounded-lg bg-slate-50 p-6">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-circuit" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">Not sure which service you need?</h2>
            <p className="mt-3 max-w-lg text-slate-300">
              Tell us what&apos;s going on and we&apos;ll point you in the right direction — no obligation.
            </p>
          </div>
          <LinkButton href="/contact" variant="primary" className="shrink-0">
            Talk to us
          </LinkButton>
        </div>
      </section>
    </>
  );
}
