import { CheckCircle2, Phone } from "lucide-react";

export interface ServiceDetailSectionProps {
  id: string;
  title: string;
  description: string;
  items: string[];
  priceInfo?: string;
  ctaText?: string;
}

export function ServiceDetailSection({
  id,
  title,
  description,
  items,
  priceInfo,
  ctaText = "Call for Availability",
}: ServiceDetailSectionProps) {
  return (
    <section
      id={id}
      className="py-12 md:py-16 border-b border-slate-200 last:border-0 scroll-mt-24"
      aria-labelledby={`${id}-heading`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div>
          <h2
            id={`${id}-heading`}
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-6"
          >
            {title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            {description}
          </p>
          {priceInfo && (
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6 rounded-r-lg">
              <p className="text-teal-900 font-medium text-sm md:text-base">
                {priceInfo}
              </p>
            </div>
          )}
          <a
            href="tel:+13179566288"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors min-h-[48px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <Phone size={20} aria-hidden />
            {ctaText}
          </a>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-medical border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            What to Expect
          </h3>
          <ul className="space-y-4" role="list">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 items-start text-slate-600"
              >
                <CheckCircle2
                  className="text-teal-600 shrink-0 mt-0.5"
                  size={20}
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
