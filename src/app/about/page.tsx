import type { Metadata } from "next";
import { SectionHeading, Stat } from "@/components/Bits";
import { LinkButton } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Who SBITS is, how we work, and why local businesses trust us with their IT.",
};

const businessLines = [
  "Structured Cabling",
  "Network & Telephony",
  "Servers & Storage",
  "ICT Security",
  "Cloud Solutions",
  "Computers",
  "Software Licenses",
  "Auxiliary Solutions",
];

const mission = [
  "Provide new experience to our valued clients with service excellence through highly reliable IT products.",
  "Act sincerely as a trusted company in the field of IT.",
  "Enhance customer value by leveraging the alliance.",
];

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
    body: "Every network diagram, password, and configuration we touch is documented and handed to you. It's your infrastructure, not ours.",
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
              troubleshooting to server backups. We built a team that plugs that gap, as a full outsourced
              IT department, or as backup for the team you already have.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="font-display text-3xl font-bold text-ink">2018</p>
              <p className="mt-1 text-sm text-slate-600">Founded</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="font-display text-3xl font-bold text-ink">10&ndash;15</p>
              <p className="mt-1 text-sm text-slate-600">Years of engineer experience</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="font-display text-3xl font-bold text-ink">SME&ndash;Enterprise</p>
              <p className="mt-1 text-sm text-slate-600">Clients served</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <p className="font-display text-3xl font-bold text-ink">PH</p>
              <p className="mt-1 text-sm text-slate-600">Registered company</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our history" title="From one engineer's idea to a full IT team." />
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              SKWER Base Information Technology Solutions, known as &ldquo;SKWER,&rdquo; is a Philippine
              registered company founded by Mr. Patrick Jan Mantes in 2018. SKWER&apos;s engineers are
              backed by 10 to 15 years of IT experience in planning and designing solutions,
              implementation, and project management for clients ranging from small businesses to
              enterprises.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Nature of business" title="IT products, solutions and services." />
            <p className="mt-6 text-sm leading-relaxed text-slate-600">
              SKWER&apos;s main business is providing IT products, solutions and services across the
              following areas:
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {businessLines.map((line) => (
                <div
                  key={line}
                  className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-ink"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="border-l-2 border-circuit pl-6">
            <h3 className="font-display text-lg font-semibold text-ink">Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Become the trusted IT solutions partner by leading the way in innovation, quality and
              values.
            </p>
          </div>
          <div className="border-l-2 border-circuit pl-6">
            <h3 className="font-display text-lg font-semibold text-ink">Mission</h3>
            <ol className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
              {mission.map((item, i) => (
                <li key={item} className="flex gap-2">
                  <span className="font-semibold text-ink">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
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
            title="A team of engineers and technicians.."
            description="Every client is assigned a lead engineer who knows your setup, not a rotating queue of first-time responders reading from a script."
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
          Most first conversations are just a scoping call, no pressure, no lock-in.
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