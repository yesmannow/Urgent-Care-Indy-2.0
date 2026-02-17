import { Check, Clock, DollarSign } from "lucide-react";

export function TriageMatrix() {
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
          <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 text-slate-400 order-2 md:order-1 scale-90">
            <h3 className="text-xl font-bold text-slate-700 mb-4">Emergency Room</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Wait: 4+ Hours
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" /> Cost: $$$$$
              </div>
            </div>
            <ul className="space-y-3 text-sm">
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

          <div className="p-8 rounded-3xl border-2 border-teal-500 bg-white shadow-xl order-1 md:order-2 relative z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Best Choice
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">UrgentCare Indy</h3>
            <div className="space-y-4 mb-8 p-4 bg-teal-50 rounded-xl">
              <div className="flex items-center gap-2 text-teal-800 font-bold">
                <Clock className="w-5 h-5" /> Wait: &lt; 45 Mins
              </div>
              <div className="flex items-center gap-2 text-teal-800 font-bold">
                <DollarSign className="w-5 h-5" /> Cost: $ (10x Less)
              </div>
            </div>
            <ul className="space-y-3 font-medium text-slate-700">
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

          <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 text-slate-400 order-3 scale-90">
            <h3 className="text-xl font-bold text-slate-700 mb-4">Freestanding ER</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Wait: 1-2 Hours
              </div>
              <div className="flex items-center gap-2 text-red-500 font-bold">
                <DollarSign className="w-4 h-4" /> Cost: $$$$$
              </div>
            </div>
            <p className="text-sm italic">
              Often confuses patients with Urgent Care, but bills like a Hospital ER.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

