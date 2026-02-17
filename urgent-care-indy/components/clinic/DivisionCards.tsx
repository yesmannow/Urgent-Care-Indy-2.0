import {
  ExternalLink,
  Stethoscope,
  Activity,
  Heart,
  type LucideIcon,
} from "lucide-react";

const divisions: {
  name: string;
  desc: string;
  url: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}[] = [
  {
    name: "PrimaryCare Indy",
    desc: "Long-term health management, diabetes care, and heart health.",
    url: "https://primarycareindy.com",
    icon: Stethoscope,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "LungCare Indy",
    desc: "Specialized pulmonary care for Asthma, COPD, and Sleep Apnea.",
    url: "https://lungcareindy.com",
    icon: Activity,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    name: "GeriCare Indy",
    desc: "Compassionate, family-focused long-term care for seniors.",
    url: "https://gericareindy.com",
    icon: Heart,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

export function DivisionCards() {
  return (
    <section
      id="divisions"
      className="py-16 bg-slate-50 border-t border-slate-200"
      aria-labelledby="divisions-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2
            id="divisions-heading"
            className="text-3xl font-bold text-slate-900"
          >
            Part of the Pike Medical Family
          </h2>
          <p className="text-slate-600 mt-2">
            Continuity of care from urgent needs to long-term health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {divisions.map((div) => {
            const Icon = div.icon;
            return (
              <a
                key={div.name}
                href={div.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                <div
                  className={`w-12 h-12 ${div.bg} ${div.color} rounded-xl flex items-center justify-center mb-6`}
                >
                  <Icon className="w-6 h-6" aria-hidden />
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-blue transition-colors flex items-center gap-2">
                  {div.name}
                  <ExternalLink
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 shrink-0"
                    aria-hidden
                  />
                </h3>
                <p className="text-slate-500 mt-3 text-sm leading-relaxed">
                  {div.desc}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
