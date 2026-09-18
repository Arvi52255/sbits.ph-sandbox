import { LinkButton } from "@/components/Button";
import { NetworkMotif } from "@/components/NetworkMotif";
import { SectionHeading, ServiceCard, PartnerBadge } from "@/components/Bits";
import { LogoMarquee } from "@/components/content/LogoMarquee";
import { services, partners, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-page grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <div>
            <p className="text-sm font-medium text-circuit">IT solutions for Philippine businesses</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              The IT team behind businesses that can&apos;t afford downtime.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {site.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <LinkButton href="/quote" variant="primary">
                Get a Quote
              </LinkButton>
              <LinkButton href="/services" variant="outlineLight">
                Explore services
              </LinkButton>
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-md text-circuit sm:block">
            <NetworkMotif className="w-full" />
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-grid-dots opacity-20" />
      </section>

      {/* Trusted by */}
      <section className="border-b border-slate-200 bg-white py-12">
        <div className="container-page">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
            Trusted by teams running on
          </p>
          <div className="mt-8">
            <LogoMarquee />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="container-page py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Six ways we keep your business running."
            description="From the network cable to the cloud dashboard, we cover the parts of IT that businesses tend to outsource, and the ones they wish they had outsourced sooner."
          />
          <LinkButton href="/services" variant="ghost" className="shrink-0">
            View all services
          </LinkButton>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>

      {/* Partners strip */}
      <section className="container-page py-20 sm:py-28">
        <SectionHeading eyebrow="Backed by" title="The vendors and platforms we build on." align="center" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <PartnerBadge key={p.name} partner={p} />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          Want to partner with us instead?{" "}
          <a href="/partners" className="focus-ring rounded font-medium text-signal">
            See how partnerships work.
          </a>
        </p>
      </section>

      {/* CTA banner */}
      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="container-page flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Tell us what&apos;s slowing you down.
            </h2>
            <p className="mt-3 max-w-lg text-slate-300">
              A quote request takes about three minutes. We usually reply within one business day.
            </p>
          </div>
          <LinkButton href="/quote" variant="primary" className="shrink-0">
            Get a Quote
          </LinkButton>
        </div>
      </section>
    </>
  );
}
