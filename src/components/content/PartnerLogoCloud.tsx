import Image from 'next/image';
import { getPartners } from '@/lib/content/partners';

/**
 * PartnerLogoCloud
 *
 * Compact "trust bar" logo row — distinct from PartnerGrid (which groups
 * all 35 partners by category with name labels for the full Partners
 * section/page). This shows just logos, muted until hover, for a quick
 * credibility signal directly under the Hero.
 *
 * Takes the first `limit` partners by their existing `order` field rather
 * than any new "featured" flag — `order` is already documented in
 * mock/partners.ts as designed to double as a homepage sort weight, so
 * this reuses real, already-modeled data rather than introducing a new
 * curation mechanism.
 */

interface PartnerLogoCloudProps {
  limit?: number;
}

export function PartnerLogoCloud({ limit = 8 }: PartnerLogoCloudProps) {
  const partners = getPartners().slice(0, limit);

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="relative h-8 w-24 grayscale opacity-60 transition hover:grayscale-0 hover:opacity-100"
          title={partner.name}
        >
          <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
        </div>
      ))}
    </div>
  );
}
