import Image from "next/image";
import { MapPin } from "lucide-react";
import { getPexelsImageUrl, getPexelsImageUrlFromQueries } from "@/lib/pexels";
import { HeroStatusTicker } from "@/components/ui/HeroStatusTicker";

const FALLBACK_IMAGE =
  "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (6).jpg";

type DynamicHeroProps = {
  query?: string | string[];
  title: string;
  subtitle?: string;
  /** When provided, use this image and skip Pexels fetch (e.g. local employer hero). */
  imageSrc?: string;
  /** Used when Pexels is unavailable or returns no result. */
  fallbackSrc?: string;
  /** Accessibility text for the background image. */
  imageAlt?: string;
};

export async function DynamicHero({
  query = "medical",
  title,
  subtitle,
  imageSrc,
  fallbackSrc,
  imageAlt,
}: DynamicHeroProps) {
  const pexelsUrl = imageSrc
    ? null
    : Array.isArray(query)
      ? await getPexelsImageUrlFromQueries(query, { orientation: "landscape" })
      : await getPexelsImageUrl(query, { orientation: "landscape" });

  const src = imageSrc ?? pexelsUrl ?? fallbackSrc ?? FALLBACK_IMAGE;
  const alt = imageAlt ?? `${title} background image`;

  return (
    <section
      className="relative min-h-[40vh] flex items-end md:items-center overflow-hidden"
      aria-label={title}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-slate-900/20"
          aria-hidden
        />
      </div>
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-200">{subtitle}</p>
          )}
        </div>
      </div>
      <HeroStatusTicker />
      {/* Watermark: local clinic anchor */}
      <div
        className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 rounded-lg bg-black/40 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm"
        aria-hidden
      >
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        7911 N Michigan Rd
      </div>
    </section>
  );
}
