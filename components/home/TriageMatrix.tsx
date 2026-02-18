import { Check, Clock, DollarSign } from "lucide-react";
import Image from "next/image";
import { getPexelsImageUrlFromQueries } from "@/lib/pexels";

const FALLBACK = "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (6).jpg";

export async function TriageMatrix() {
  const [urgentCareImg, erImg, freestandingImg] = await Promise.all([
    getPexelsImageUrlFromQueries(["calm happy patient waiting room", "clinic waiting room calm"], {
      orientation: "landscape",
    }),
    getPexelsImageUrlFromQueries(["hospital hallway blur", "ambulance lights night", "emergency room hallway"], {
      orientation: "landscape",
    }),
    getPexelsImageUrlFromQueries(["ambulance lights night", "hospital emergency entrance night"], {
      orientation: "landscape",
    }),
  ]);

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Know Where to Go</h2>
          <p className="text-slate-500 mt-4 text-lg">
            Save time and money by choosing the right level of care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 items-end">
          <div className="relative overflow-hidden p-8 rounded-2xl border border-slate-100 bg-slate-50 text-slate-400 order-2 md:order-1 scale-90">
            <div className="absolute inset-0" aria-hidden>
              <Image
                src={erImg ?? FALLBACK}
                alt="Busy hospital emergency room hallway with motion blur"
                fill
                className="object-cover object-center opacity-15"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-slate-950/10" />
            </div>
            <h3 className="relative text-xl font-bold text-slate-700 mb-4">Emergency Room</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Wait: 4+ Hours
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Cost: $$$$$
              </div>
            </div>
            <ul className="relative space-y-3 text-sm">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-slate-400" /> Chest Pain / Stroke
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-slate-400" /> Severe Head Trauma
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-slate-400" /> Uncontrolled Bleeding
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden p-8 rounded-3xl border-2 border-teal-500 bg-white shadow-xl order-1 md:order-2 z-10">
            <div className="absolute inset-0" aria-hidden>
              <Image
                src={urgentCareImg ?? FALLBACK}
                alt="Calm, modern urgent care waiting room with happy patients"
                fill
                className="object-cover object-center opacity-12"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-teal-900/5" />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Best Choice
            </div>
            <h3 className="relative text-2xl font-bold text-slate-900 mb-4">UrgentCare Indy</h3>
            <div className="relative space-y-4 mb-8 p-4 bg-teal-50/90 backdrop-blur-sm rounded-xl border border-teal-100">
              <div className="flex items-center gap-2 text-teal-800 font-bold">
                <Clock className="w-5 h-5" /> Wait: &lt; 45 Mins
              </div>
              <div className="flex items-center gap-2 text-teal-800 font-bold">
                <DollarSign className="w-5 h-5" /> Cost: $ (10x Less)
              </div>
            </div>
            <ul className="relative space-y-3 font-medium text-slate-700">
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-teal-500" /> Stitches & Minor Burns
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-teal-500" /> Fractures (X-Ray On-Site)
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-teal-500" /> Flu, Strep, & Fevers
              </li>
              <li className="flex gap-3">
                <Check className="w-5 h-5 text-teal-500" /> Occupational Injuries
              </li>
            </ul>
          </div>

          <div className="relative overflow-hidden p-8 rounded-2xl border border-slate-100 bg-slate-50 text-slate-400 order-3 scale-90">
            <div className="absolute inset-0" aria-hidden>
              <Image
                src={freestandingImg ?? FALLBACK}
                alt="Ambulance lights at night outside a hospital emergency entrance"
                fill
                className="object-cover object-center opacity-12"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-slate-950/10" />
            </div>
            <h3 className="relative text-xl font-bold text-slate-700 mb-4">Freestanding ER</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Wait: 1-2 Hours
              </div>
              <div className="flex items-center gap-2 text-red-500 font-bold">
                <DollarSign className="w-4 h-4" /> Cost: $$$$$
              </div>
            </div>
            <p className="relative text-sm italic">
              Often confuses patients with Urgent Care, but bills like a Hospital ER.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
