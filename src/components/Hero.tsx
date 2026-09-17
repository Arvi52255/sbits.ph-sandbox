// src/components/Hero.tsx
import { siteSettings } from "@/mock/siteSettings";
import { Button } from "./ui/Button";

export default function Hero() {
  const { title, subtitle, backgroundImage, ctaText, ctaLink } = siteSettings.hero;

  return (
    <section
      className={`relative flex items-center justify-center min-h-[520px] px-6 py-20 ${
        !backgroundImage ? "bg-gradient-to-br from-brand-blue via-brand-teal to-brand-charcoal" : ""
      }`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative z-10 text-center text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-white/90">{subtitle}</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {ctaText && ctaLink && (
            <Button href={ctaLink} variant="primary" size="lg">
              {ctaText}
            </Button>
          )}
          <Button href="#services" variant="outline-light" size="lg">
            See our services
          </Button>
        </div>
      </div>
    </section>
  );
}