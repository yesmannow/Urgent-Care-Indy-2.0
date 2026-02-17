import type { Metadata } from "next";
import Image from "next/image";
import { ProviderGrid } from "@/components/sections/ProviderGrid";

export const metadata: Metadata = {
  title: "About Us | Meet Our Providers | Urgent Care Indy",
  description:
    "Meet the providers at Urgent Care Indy. Our team of board-certified clinicians and medical staff is dedicated to your care in Indianapolis.",
};

const HERO_IMAGE =
  "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (5).jpg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        aria-label="About Urgent Care Indy"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE}
            alt="Urgent Care Indy interior, welcoming waiting area"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/50"
            aria-hidden
          />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              About Urgent Care Indy
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-200">
              Meet the people behind your care. Our providers and staff are here
              to serve Indianapolis with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Providers */}
      <section className="container border-b border-slate-200">
        <ProviderGrid />
      </section>
    </div>
  );
}
