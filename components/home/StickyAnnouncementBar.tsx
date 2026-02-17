"use client";

import Link from "next/link";

export function StickyAnnouncementBar() {
  return (
    <div
      className="sticky top-0 z-[100] w-full bg-teal-600 text-white py-2.5 px-4 text-center text-sm font-medium shadow-md"
      role="region"
      aria-label="Seasonal announcement"
    >
      Flu shots are here! High-dose & standard quadrivalent available in-house.{" "}
      <Link
        href="/patient-resources/pricing"
        className="underline font-bold hover:text-teal-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 rounded"
      >
        View Pricing
      </Link>
    </div>
  );
}
