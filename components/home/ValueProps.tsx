import { BadgeCheck, Building2, CreditCard, ShieldCheck, Stethoscope } from "lucide-react";
import Link from "next/link";

type ValueProp = {
  title: string;
  body: string;
  icon: typeof Stethoscope;
  href?: string;
  cta?: string;
};

const items: ValueProp[] = [
  {
    title: "Walk-In Speed",
    body: "Action-first care designed for fast answers and fast discharge.",
    icon: Stethoscope,
  },
  {
    title: "X-Ray + Rapid Lab",
    body: "Hospital-grade diagnostics on-site to avoid extra stops.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    body: "Clear self-pay tiers and fixed-price services—no surprises.",
    icon: CreditCard,
    href: "/patient-resources/pricing",
    cta: "View pricing",
  },
  {
    title: "Occupational Health",
    body: "DOT physicals, drug screening, and workers’ comp workflows.",
    icon: Building2,
    href: "/employer-services",
    cta: "Employer services",
  },
];

export function ValueProps() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
              The Command Center Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Everything you need, <span className="text-teal-600">in one visit.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-500 text-sm font-semibold">
            <BadgeCheck className="h-4 w-4 text-teal-600" aria-hidden />
            Family-owned • Indianapolis
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 shadow-sm">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center text-sm font-bold text-teal-700 hover:text-teal-800 hover:underline"
                  >
                    {item.cta}
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
