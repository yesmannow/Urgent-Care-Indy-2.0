import type { PexelsSearchResponse } from "@/types/pexels";

const PEXELS_API = "https://api.pexels.com/v1/search";

export type PexelsOrientation = "landscape" | "portrait" | "square";

type PexelsFetchOptions = {
  orientation?: PexelsOrientation;
  perPage?: number;
};

function pickBestPhotoUrl(
  photo: PexelsSearchResponse["photos"][number] | undefined,
  orientation: PexelsOrientation
): string | null {
  if (!photo?.src) return null;
  if (orientation === "portrait") return photo.src.portrait ?? photo.src.large ?? null;
  if (orientation === "square") return photo.src.medium ?? photo.src.large ?? null;
  return photo.src.landscape ?? photo.src.large2x ?? photo.src.large ?? null;
}

/**
 * Fetches a single high-resolution image URL from Pexels for the given query.
 * Use for heroes, cards, or any dynamic imagery. Returns null if API key is missing or request fails.
 */
export async function getPexelsImageUrl(
  query: string,
  options?: PexelsFetchOptions
): Promise<string | null> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "test") {
      console.warn("[pexels] PEXELS_API_KEY is not set. Returning null.");
    }
    return null;
  }

  const orientation = options?.orientation ?? "landscape";
  const perPage = options?.perPage ?? 1;

  try {
    const params = new URLSearchParams({
      query,
      per_page: String(perPage),
      orientation,
    });
    const res = await fetch(`${PEXELS_API}?${params.toString()}`, {
      headers: { Authorization: apiKey },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data: PexelsSearchResponse = await res.json();
    return pickBestPhotoUrl(data.photos?.[0], orientation);
  } catch {
    return null;
  }
}

/**
 * Fetches the first matching image URL from Pexels across multiple queries.
 * Useful when you want a consistent "vibe" but need fallbacks for search variance.
 */
export async function getPexelsImageUrlFromQueries(
  queries: string[],
  options?: PexelsFetchOptions
): Promise<string | null> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV !== "test") {
      console.warn("[pexels] PEXELS_API_KEY is not set. Returning null.");
    }
    return null;
  }

  for (const query of queries) {
    const url = await getPexelsImageUrl(query, options);
    if (url) return url;
  }
  return null;
}

/**
 * Fetches multiple image URLs from Pexels for the given query (e.g. for service cards).
 */
export async function getPexelsImageUrls(
  query: string,
  count: number = 4,
  options?: { orientation?: PexelsOrientation }
): Promise<string[]> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return [];

  const orientation = options?.orientation ?? "landscape";
  try {
    const params = new URLSearchParams({
      query,
      per_page: String(Math.min(count, 15)),
      orientation,
    });
    const res = await fetch(`${PEXELS_API}?${params.toString()}`, {
      headers: { Authorization: apiKey },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data: PexelsSearchResponse = await res.json();
    const urls: string[] = [];
    for (const photo of data.photos ?? []) {
      const url = pickBestPhotoUrl(photo, orientation);
      if (url) urls.push(url);
    }
    return urls;
  } catch {
    return [];
  }
}
