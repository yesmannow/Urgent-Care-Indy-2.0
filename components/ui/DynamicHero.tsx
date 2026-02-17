import Image from "next/image";
import { MapPin } from "lucide-react";
import type { PexelsSearchResponse } from "@/types/pexels";

const FALLBACK_IMAGE =
  "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (6).jpg";
const PEXELS_API = "https://api.pexels.com/v1/search";

async function fetchPexelsPhoto(query: string): Promise<string | null> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "test") {
      console.warn(
        "[DynamicHero] PEXELS_API_KEY is not set. Using fallback image."
      );
    }
    return null;
  }

  try {
    const res = await fetch(
      `${PEXELS_API}?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      {
        headers: { Authorization: apiKey },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const data: PexelsSearchResponse = await res.json();
    const photo = data.photos?.[0];
    if (!photo?.src?.landscape) return null;
    return photo.src.landscape;
  } catch {
    return null;
  }
}

type DynamicHeroProps = {
  query: string;
  title: string;
  subtitle?: string;
};

export async function DynamicHero({
  query,
  title,
  subtitle,
}: DynamicHeroProps) {
  const pexelsUrl = await fetchPexelsPhoto(query);
  const src = pexelsUrl ?? FALLBACK_IMAGE;

  return (
    <section
      className="relative min-h-[40vh] flex items-end md:items-center overflow-hidden"
      aria-label={title}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={src}
          alt=""
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
