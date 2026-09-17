import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with SBITS — office address, phone, email, and support hours.",
};

export default function ContactPage() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium text-signal">Contact</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-ink">Let&apos;s talk.</h1>
          <p className="mt-4 max-w-md text-slate-600">
            For project quotes, use the{" "}
            <a href="/quote" className="focus-ring rounded font-medium text-signal">
              quote request form
            </a>{" "}
            instead — it gets your request to the right engineer faster. For everything else, reach us here.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="font-medium text-ink">Office</dt>
              <dd className="mt-1 text-slate-600">{site.address}</dd>
            </div>
            <div>
              <dt className="font-medium text-ink">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${site.phoneHref}`} className="focus-ring rounded text-slate-600 hover:text-signal">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-ink">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="focus-ring rounded text-slate-600 hover:text-signal">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-ink">Support hours</dt>
              <dd className="mt-1 text-slate-600">{site.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
