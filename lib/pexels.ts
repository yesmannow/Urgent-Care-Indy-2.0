import type { PexelsSearchResponse } from "@/types/pexels";

const PEXELS_API = "https://api.pexels.com/v1/search";

export type PexelsOrientation = "landscape" | "portrait" | "square";

/**
 * Fetches a single high-resolution image URL from Pexels for the given query.
 * Use for heroes, cards, or any dynamic imagery. Returns null if API key is missing or request fails.
 */
export async function getPexelsImageUrl(
  query: string,
  options?: { orientation?: PexelsOrientation; perPage?: number }
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
    const photo = data.photos?.[0];
    if (!photo?.src?.landscape && !photo?.src?.large) return null;
    return photo.src.landscape ?? photo.src.large ?? null;
  } catch {
    return null;
  }
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
      const url = photo.src?.landscape ?? photo.src?.large;
      if (url) urls.push(url);
    }
    return urls;
  } catch {
    return [];
  }
}
