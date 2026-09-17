import type { Metadata } from "next";
import { SectionHeading, Stat } from "@/components/Bits";
import { LinkButton } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who SBITS is, how we work, and why local businesses trust us with their IT.",
};

const values = [
  {
    title: "We answer the phone.",
    body: "Support tickets don't disappear into a queue. You get a named contact and a response-time commitment, in writing.",
  },
  {
    title: "We scope for your budget, not ours.",
    body: "We'd rather recommend the right-sized fix than upsell an enterprise setup you don't need yet.",
  },
  {
    title: "We document everything.",
    body: "Every network diagram, password, and configuration we touch is documented and handed to you — it's your infrastructure, not ours.",
  },
  {
    title: "We stay local.",
    body: "On-site visits across Metro Manila, and remote support for branches anywhere in the Philippines.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium text-signal">About {site.name}</p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              IT support, run the way you&apos;d want a colleague to run it.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              {site.name} started with a simple observation: most Philippine SMEs either have no dedicated
              IT support, or they have a single overworked person handling everything from Wi-Fi
              troubleshooting to server backups. We built a team that plugs that gap — as a full outsourced
              IT department, or as backup for the team you already have.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 rounded-lg bg-slate-50 p-8">
            <Stat value="10+ yrs" label="In business" />
            <Stat value="120+" label="Sites supported" />
            <Stat value="6" label="Core service lines" />
            <Stat value="24/7" label="Managed monitoring" />
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="How we work" title="Four things that don't change, project to project." />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="border-l-2 border-circuit pl-6">
              <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Our team"
            title="A small team of engineers and technicians, not a call center."
            description="Every client is assigned a lead engineer who knows your setup — not a rotating queue of first-time responders reading from a script."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Network & Infrastructure Engineers",
              "Cloud & Systems Administrators",
              "Software Developers",
              "Cybersecurity Specialists",
              "Helpdesk & Field Technicians",
              "Project & Account Managers",
            ].map((role) => (
              <div key={role} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-ink">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 text-center sm:py-20">
        <h2 className="font-display text-3xl font-bold text-ink">Curious if we're a fit?</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          Most first conversations are just a scoping call — no pressure, no lock-in.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <LinkButton href="/contact" variant="ghost">
            Talk to us
          </LinkButton>
          <LinkButton href="/quote" variant="primary">
            Get a Quote
          </LinkButton>
        </div>
      </section>
    </>
  );
}
