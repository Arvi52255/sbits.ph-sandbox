import { LinkButton } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-sm font-medium text-signal">404</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">This page took a wrong turn.</h1>
      <p className="mt-4 max-w-sm text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist, or has moved.
      </p>
      <div className="mt-8 flex gap-4">
        <LinkButton href="/" variant="ghost">
          Back home
        </LinkButton>
        <LinkButton href="/contact" variant="primary">
          Contact us
        </LinkButton>
      </div>
    </section>
  );
}
