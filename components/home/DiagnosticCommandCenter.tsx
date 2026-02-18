import { Microscope, HeartPulse, Syringe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPexelsImageUrlFromQueries } from "@/lib/pexels";

const FALLBACKS = {
  xray: "/images/home/dr-pike-xray.jpg",
  lab: "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (6).jpg",
  ekg: "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (5).jpg",
  vaccines: "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (2).jpg",
} as const;

export async function DiagnosticCommandCenter() {
  const [xrayImage, labImage, ekgImage, vaccinesImage] = await Promise.all([
    getPexelsImageUrlFromQueries(
      ["radiologist looking at x-ray blue", "digital bone scan", "radiology workstation"],
      { orientation: "landscape" }
    ),
    getPexelsImageUrlFromQueries(
      ["medical microscope laboratory", "scientist holding test tube", "clinical lab technician"],
      { orientation: "landscape" }
    ),
    getPexelsImageUrlFromQueries(
      ["heart rate monitor hospital", "EKG monitor hospital", "doctor holding stethoscope"],
      { orientation: "landscape" }
    ),
    getPexelsImageUrlFromQueries(
      ["child getting vaccine", "immunization syringe", "nurse giving vaccine"],
      { orientation: "landscape" }
    ),
  ]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
              Advanced Diagnostics
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Hospital-Grade Tech. <span className="text-teal-600">Walk-In Speed.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="text-slate-600 font-medium hover:text-teal-600 flex items-center gap-2 transition-colors"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-lg group min-h-[300px]">
            <Image
              src={xrayImage ?? FALLBACKS.xray}
              alt="Provider reviewing a digital X-ray on a blue-lit radiology workstation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/45 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 max-w-lg">
              <h3 className="text-2xl font-bold text-white mb-2">Digital X-Ray Suite</h3>
              <p className="text-slate-200">
                On-site imaging for fractures and foreign bodies. Immediate digital interpretation by our
                certified providers means you leave with answers.
              </p>
            </div>
          </div>

          <div className="md:row-span-2 relative rounded-3xl overflow-hidden shadow-lg group min-h-[360px] md:min-h-[520px]">
            <Image
              src={labImage ?? FALLBACKS.lab}
              alt="Lab technician working with a microscope in a modern clinical laboratory"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-slate-950/10" />
            <div className="absolute inset-0 bg-teal-900/15" aria-hidden />
            <div className="relative z-10 p-8 text-white flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Microscope className="h-6 w-6 text-teal-300" aria-hidden />
                </div>
                <h3 className="text-2xl font-bold mb-2">Rapid On-Site Lab</h3>
                <ul className="space-y-4 text-slate-200 mt-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-300 rounded-full" /> Strep & Flu (15 mins)
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-300 rounded-full" /> RSV & Mono
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-300 rounded-full" /> Urinalysis & STI
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-300 rounded-full" /> Pregnancy Testing
                  </li>
                </ul>
              </div>
              <div className="text-sm font-semibold text-slate-200/90">
                Most results while you wait.
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group min-h-[240px]">
            <Image
              src={ekgImage ?? FALLBACKS.ekg}
              alt="Close-up of a heart monitor displaying an EKG waveform in a hospital setting"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
            <div className="absolute inset-0 bg-teal-900/15" aria-hidden />
            <div className="relative z-10 p-8 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <HeartPulse className="h-6 w-6 text-red-200" aria-hidden />
              </div>
              <h3 className="text-xl font-bold">EKG (12-Lead)</h3>
              <p className="text-slate-200 text-sm mt-2">
                On-site cardiac monitoring for fast triage and clearance.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group min-h-[240px]">
            <Image
              src={vaccinesImage ?? FALLBACKS.vaccines}
              alt="Nurse preparing a vaccine injection in a clean clinical setting"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
            <div className="absolute inset-0 bg-teal-900/15" aria-hidden />
            <div className="relative z-10 p-8 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                <Syringe className="h-6 w-6 text-teal-200" aria-hidden />
              </div>
              <h3 className="text-xl font-bold">Vaccines & Prevention</h3>
              <p className="text-slate-200 text-sm mt-2">
                Seasonal vaccines and preventive care with walk-in convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
