import fs from "fs";
import path from "path";
import { getPartners } from "@/lib/content/partners";
import type { Partner } from "@/types/content";

/**
 * LogoMarquee
 *
 * Infinite auto-scrolling "trusted by" logo ticker. Pulls from the same
 * partner content model as PartnerGrid (lib/content/partners.ts), so once
 * the remaining vendor SVGs land in /public/images/partners/, they show up
 * here automatically — no code change needed, and no risk of a broken
 * <img> for a partner whose logo hasn't been sourced yet.
 *
 * Pure CSS animation (two duplicated tracks scrolling together, second
 * one aria-hidden), so this stays a server component — no client JS.
 * Respects prefers-reduced-motion via the global rule in globals.css.
 */

function partnerHasLogoFile(partner: Partner): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", partner.logo));
  } catch {
    return false;
  }
}

function LogoTrack({
  partners,
  keyPrefix,
  ariaHidden = false,
}: {
  partners: Partner[];
  keyPrefix: string;
  ariaHidden?: boolean;
}) {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={ariaHidden}>
      {partners.map((partner) => (
        <img
          key={`${keyPrefix}-${partner.id}`}
          src={partner.logo}
          alt={partner.name}
          title={partner.name}
          className="h-7 w-auto shrink-0 object-contain opacity-60 grayscale transition duration-200 hover:opacity-100 hover:grayscale-0 sm:h-8"
        />
      ))}
    </div>
  );
}

export function LogoMarquee() {
  const partners = getPartners().filter(partnerHasLogoFile);

  if (partners.length === 0) return null;

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <LogoTrack partners={partners} keyPrefix="a" />
        <LogoTrack partners={partners} keyPrefix="b" ariaHidden />
      </div>
    </div>
  );
}
