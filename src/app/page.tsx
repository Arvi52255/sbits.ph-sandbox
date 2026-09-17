import Hero from "@/components/Hero";
import { ServiceCard } from "@/components/content/ServiceCard";
import { PartnerGrid } from "@/components/content/PartnerGrid";
import { Button } from "@/components/ui/Button";
import { getServices } from "@/lib/content/services";

export default function Home() {
  const services = getServices();

  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Services overview */}
      <section id="services" className="py-16 px-6 md:px-12 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-charcoal mb-2">
            How we help
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl">
            Our services cover the full range of IT infrastructure, cloud, and
            network solutions your business needs to grow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications / Partners strip */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-charcoal text-center mb-2">
            Trusted partners
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            We work with industry-leading vendors to deliver reliable,
            certified solutions.
          </p>
          <PartnerGrid />
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 px-6 md:px-12 bg-brand-charcoal text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to modernize your IT infrastructure?
          </h2>
          <p className="mb-8 text-gray-300">
            Talk to our team and find out how SBITS can support your business.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get in touch
          </Button>
        </div>
      </section>
    </main>
  );
}