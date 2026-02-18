"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useMemo, useState } from "react";

type BrandImageProps = Omit<ImageProps, "src"> & {
  src: string;
  queries?: string[] | string;
  orientation?: "landscape" | "portrait" | "square";
};

function toQueryParam(queries?: string[] | string) {
  if (!queries) return null;
  const arr = Array.isArray(queries) ? queries : [queries];
  const cleaned = arr.map((q) => q.trim()).filter(Boolean);
  if (cleaned.length === 0) return null;
  return cleaned.join("|");
}

export default function BrandImage({
  src,
  queries,
  orientation = "landscape",
  alt,
  ...props
}: BrandImageProps) {
  const qs = useMemo(() => toQueryParam(queries), [queries]);
  const [resolvedSrc, setResolvedSrc] = useState<string>(src);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function run() {
      if (!qs) {
        setResolvedSrc(src);
        return;
      }

      try {
        const res = await fetch(
          `/api/pexels-image?qs=${encodeURIComponent(qs)}&orientation=${encodeURIComponent(orientation)}`,
          { signal: controller.signal }
        );
        if (!res.ok) return;
        const data = (await res.json()) as { url: string | null };
        if (!cancelled && data.url) setResolvedSrc(data.url);
      } catch {
        // ignore
      }
    }

    run();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [orientation, qs, src]);

  return <Image src={resolvedSrc} alt={alt} {...props} />;
}
