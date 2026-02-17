import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://urgentcareindy.com";

const staticRoutes = [
  "",
  "/contact",
  "/employer-services",
  "/insurance",
  "/our-clinic",
  "/patient-services",
  "/pay-bill",
  "/portal",
  "/save-your-spot",
  "/schedule",
  "/services",
  "/services/diagnostics",
  "/services/prevention",
  "/services/urgent-care",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : ("monthly" as const),
    priority: path === "" ? 1 : 0.8,
  }));
}
