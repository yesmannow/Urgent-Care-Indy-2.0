import Image from "next/image";
import Link from "next/link";
import { getPexelsImageUrlFromQueries } from "@/lib/pexels";

const INTERIOR_IMAGE = "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (5).jpg";
const PRIMARY_CARE_URL = "https://primarycareindy.com";

export async function PrimaryCareBridge() {
  const relationshipImage =
    (await getPexelsImageUrlFromQueries(
      ["senior doctor talking to patient", "happy family doctor checkup", "physician holding hands"],
      { orientation: "landscape" }
    )) ?? INTERIOR_IMAGE;

  return (
    <section
      className="bg-slate-50 py-16 md:py-20 border-y border-slate-200"
      aria-labelledby="primary-care-bridge-heading"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src={relationshipImage}
              alt="Primary care provider talking with a patient in a warm, supportive clinic setting"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2
              id="primary-care-bridge-heading"
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-balance"
            >
              Comprehensive Care Under One Roof
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Urgent Care Indy is uniquely partnered with <strong className="text-slate-900">PrimaryCare Indy</strong>. If your urgent visit reveals a need for long-term management—like blood pressure or diabetes care—we provide a seamless handoff to our primary care team in the same building.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Co-located at 7911 N Michigan Rd, we offer chronic disease management (diabetes, hypertension), annual wellness visits, and weight loss support—so you get continuity, not just a one-time fix.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={PRIMARY_CARE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl bg-primary-blue text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                Explore Primary Care Services
              </a>
              <Link
                href="/services/prevention"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Wellness Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
