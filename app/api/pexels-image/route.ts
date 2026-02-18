import { NextResponse } from "next/server";
import { getPexelsImageUrl, getPexelsImageUrlFromQueries } from "@/lib/pexels";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");
  const qs = searchParams.get("qs");
  const orientation = (searchParams.get("orientation") ?? "landscape") as
    | "landscape"
    | "portrait"
    | "square";

  const queries =
    qs?.split("|").map((s) => s.trim()).filter(Boolean) ??
    (q ? [q] : []);

  if (queries.length === 0) {
    return NextResponse.json({ url: null }, { status: 400 });
  }

  const url =
    queries.length > 1
      ? await getPexelsImageUrlFromQueries(queries, { orientation })
      : await getPexelsImageUrl(queries[0], { orientation });

  return NextResponse.json(
    { url },
    {
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      },
    }
  );
}

