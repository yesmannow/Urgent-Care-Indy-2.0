import type { Metadata } from "next";
import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { getPexelsImageUrl } from "@/lib/pexels";
import { SaveYourSpotForm } from "@/components/forms/SaveYourSpotForm";

export const metadata: Metadata = {
  title: "Save Your Spot | Urgent Care Indy",
  description:
    "Walk-ins welcome. Submit your name and we'll expect you-or call (317) 956-6288. 7911 N Michigan Rd, Indianapolis.",
};

const FALLBACK_IMAGE = "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (6).jpg";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=7911+N+Michigan+Rd,+Indianapolis,+IN+46268";

export default async function SchedulePage() {
  const pexelsUrl = await getPexelsImageUrl("clinic waiting room", {
    orientation: "landscape",
  });
  const heroImage = pexelsUrl ?? FALLBACK_IMAGE;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-2">
          Save Your Spot
        </h1>
        <p className="text-slate-600 text-lg mb-8 md:mb-10">
          Walk-ins are always welcome. Submitting this form alerts our staff to your arrival.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-medical bg-white">
            <Image
              src={heroImage}
              alt="Modern clinic waiting room at Urgent Care Indy"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="space-y-6">
            <div
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-medical"
              aria-labelledby="clinic-status-heading"
            >
              <h2
                id="clinic-status-heading"
                className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2"
              >
                <Clock className="h-5 w-5 text-teal-600" aria-hidden />
                Current Clinic Status
              </h2>
              <p className="text-slate-600 mb-2">
                Walk-ins are always welcome. Submitting this form alerts our staff to your arrival.
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Mon-Fri: 8:00 AM - 6:30 PM | Sat: 8:00 AM - 2:30 PM
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-medical">
              <SaveYourSpotForm />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-medical">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-600" aria-hidden />
                Location
              </h3>
              <p className="text-slate-700 font-medium mb-1">7911 N Michigan Rd</p>
              <p className="text-slate-600 text-sm mb-4">Indianapolis, IN 46268</p>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Click to Navigate
              </a>
              <p className="mt-4 text-slate-600 text-sm">
                <a
                  href="tel:+13179566288"
                  className="inline-flex items-center gap-1.5 text-primary-blue font-medium hover:underline"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  (317) 956-6288
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
