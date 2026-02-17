import { AlertTriangle, Clock, Check } from "lucide-react";

const urgentCareItems = [
  "Fever & Flu Symptoms",
  "Sprains, Strains & Stitches",
  "Urinary Tract Infections (UTI)",
  "Allergies & Minor Asthma",
  "On-site X-Rays & Labs",
  "Occupational Health & Physicals",
];

const erItems = [
  "Chest Pain or Heart Attack",
  "Difficulty Breathing",
  "Severe Head Injuries",
  "Loss of Consciousness",
  "Deep Lacerations / Heavy Bleeding",
  "Major Bone Fractures",
];

export function ERvsUrgentCare() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200" aria-labelledby="er-vs-uc-heading">
      <div className="container mx-auto px-4 max-w-5xl text-center mb-12 md:mb-16">
        <h2 id="er-vs-uc-heading" className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
          Urgent Care or ER?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto italic leading-relaxed">
          Knowing where to go can save you hours of wait time and thousands in medical bills. We treat non-life-threatening emergencies.
        </p>
      </div>
      <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8 md:gap-10">
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-teal-100 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-teal-100 rounded-2xl">
              <Clock size={24} className="text-teal-500" aria-hidden />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Urgent Care</h3>
          </div>
          <ul className="space-y-4" role="list">
            {urgentCareItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium text-left">
                <Check className="text-teal-500 shrink-0" size={18} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 p-8 md:p-10 rounded-[2.5rem] text-white shadow-xl">
          <div className="flex items-center gap-3 mb-8 text-left">
            <div className="p-3 bg-red-500 rounded-2xl">
              <AlertTriangle size={24} className="text-white" aria-hidden />
            </div>
            <h3 className="text-2xl font-bold">Emergency Room</h3>
          </div>
          <ul className="space-y-4 text-left" role="list">
            {erItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
