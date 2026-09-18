import type { Metadata } from "next";
import { SectionHeading, PartnerBadge } from "@/components/Bits";
import { LinkButton } from "@/components/Button";
import { partners } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners",
  description: "The technology vendors SBITS builds on, and how to become a channel or referral partner.",
};

const partnerTiers = [
  {
    name: "Vendor & Technology Partners",
    body: "We're certified or authorized resellers for the platforms behind most of our deployments, so licensing, support escalation, and warranty claims go through us, not a call center overseas.",
  },
  {
    name: "Referral Partners",
    body: "Accountants, business consultants, and agencies who send clients our way for IT support, and receive a referral fee or preferred client rate in return.",
  },
  {
    name: "Channel Resellers",
    body: "Businesses that want to offer managed IT under their own brand, with SBITS delivering the technical work behind the scenes (white-label).",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Partners"
            title="We don't build alone, and we don't expect you to grow alone either."
            description="From the vendors whose hardware we deploy to the businesses who refer us clients, partnerships are how SBITS stays sharp and how our partners extend what they can offer."
          />
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <h2 className="font-display text-xl font-semibold text-ink">Technology partners</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p) => (
            <PartnerBadge key={p.name} partner={p} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Ways to partner" title="Three ways to work with us." />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {partnerTiers.map((tier) => (
              <div key={tier.name} className="rounded-lg bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-semibold text-ink">{tier.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{tier.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl font-bold text-ink">Interested in partnering with {"SBITS"}?</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Send us a note about your business and how you&apos;d like to work together.
        </p>
        <div className="mt-8">
          <LinkButton href="/contact" variant="primary">
            Contact our partnerships team
          </LinkButton>
        </div>
      </section>
    </>
  );
}
