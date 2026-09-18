import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a quote from SBITS for managed IT, networking, cloud, software, or cybersecurity work.",
};

const steps = [
  { title: "You tell us what's going on", body: "Three minutes, no account needed." },
  { title: "We scope it", body: "A lead engineer reviews your request, sometimes with a short call." },
  { title: "You get a written quote", body: "Fixed price where possible, itemized where it isn't." },
];

export default function QuotePage() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-medium text-signal">Get a Quote</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-ink">
            Tell us about your project.
          </h1>
          <p className="mt-4 max-w-md text-slate-600">
            The more detail you give us, the more accurate the quote. We reply within one business day,
            usually sooner.
          </p>

          <ol className="mt-10 space-y-6 border-t border-slate-200 pt-8">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="font-display text-sm text-slate-300">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-medium text-ink">{step.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
