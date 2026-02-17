// Transparent pricing – self-pay tiers + fixed-price services (conversion-focused)
import Link from "next/link";

const SELF_PAY_TIERS = [
  {
    level: "Level 1",
    price: "$100",
    perVisit: "Per Visit",
    bullets: [
      "Office visit for common conditions & injuries",
      "Up to two in-house labs and/or medications*",
    ],
  },
  {
    level: "Level 2",
    price: "$200",
    perVisit: "Per Visit",
    bullets: [
      "Office visit for STI, suturing, pelvic exam, incisions & drainage",
      "STI visits include prescriptive treatment within 7 days of positive test",
    ],
  },
  {
    level: "Level 3",
    price: "$250",
    perVisit: "Per Visit",
    bullets: [
      "Office visit for STI including 1 additional test (BV / yeast / blood work)",
      "STI visits include prescriptive treatment within 7 days of positive test",
    ],
  },
  {
    level: "Level 4",
    price: "$300",
    perVisit: "Per Visit",
    bullets: [
      "Office visit for STI including 2 additional tests (BV / yeast / blood work)",
      "STI visits include prescriptive treatment within 7 days of positive test",
    ],
  },
];

const PRICES = [
  { service: "Sports Physical", price: "$35", note: "No appointment needed" },
  { service: "DOT Physical", price: "$95", note: "Certified examiners" },
  {
    service: "Pre-employment Physical",
    price: "$50",
    note: "Includes paperwork",
  },
  { service: "TB Skin Test", price: "$25", note: "Results in 48-72 hrs" },
];

const INSURANCES = [
  "Anthem",
  "UnitedHealthcare",
  "Cigna",
  "Aetna",
  "Medicare",
  "Medicaid",
  "Tricare",
];

export function PricingGrid() {
  return (
    <div className="space-y-10">
      {/* Self-Pay Office Visit Tiers */}
      <section
        id="self-pay-tiers"
        className="rounded-2xl border-2 border-primary-blue bg-white p-6 md:p-8 shadow-medical ring-2 ring-primary-blue/10 scroll-mt-24"
        role="region"
        aria-labelledby="self-pay-heading"
      >
        <h2
          id="self-pay-heading"
          className="text-2xl font-bold text-slate-900 mb-3"
        >
          Self-Pay Pricing
        </h2>
        <p className="text-slate-600 mb-4 max-w-3xl">
          If you do not have insurance, we offer an affordable and easy
          self-pay option for many of our services. The tiers below are general
          guidelines for office visits. Additional in-office testing for
          specific conditions (e.g., strep, mono, COVID) may incur extra fees.
        </p>
        <p className="text-sm text-slate-500 mb-6 max-w-3xl">
          Prices are subject to change. We recommend confirming with our office
          before your visit so you understand self-pay for the services you
          need.{" "}
          <Link
            href="/contact"
            className="text-primary-blue font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
          >
            Contact us
          </Link>{" "}
          anytime with questions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SELF_PAY_TIERS.map((tier) => (
            <div
              key={tier.level}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-4 md:p-5 flex flex-col"
            >
              <div className="mb-3">
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                  {tier.level}
                </span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl md:text-3xl font-bold text-primary-blue">
                    {tier.price}
                  </span>
                  <span className="text-sm text-slate-500">{tier.perVisit}</span>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 flex-1">
                {tier.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary-blue shrink-0 mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Common fixed-price services + Insurance side by side */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Fixed-price services */}
        <div
          className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-medical"
          role="region"
          aria-labelledby="fixed-pricing-heading"
        >
          <h2
            id="fixed-pricing-heading"
            className="text-xl font-bold text-slate-900 mb-1"
          >
            Common Services (Fixed Price)
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            No appointment needed. Pay at time of service.
          </p>
          <ul className="space-y-4">
            {PRICES.map((item) => (
              <li
                key={item.service}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3 border-b border-slate-100 last:border-0 last:pb-0"
              >
                <div>
                  <span className="font-semibold text-slate-900">
                    {item.service}
                  </span>
                  {item.note && (
                    <span className="block text-sm text-slate-500 mt-0.5">
                      {item.note}
                    </span>
                  )}
                </div>
                <span className="text-lg font-bold text-primary-blue shrink-0 sm:ml-4">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Insurance */}
        <div
          id="insurance"
          className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-medical scroll-mt-24"
          role="region"
          aria-labelledby="insurance-heading"
        >
          <h2
            id="insurance-heading"
            className="text-xl font-bold text-slate-900 mb-1"
          >
            We Accept Insurance
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Most major plans accepted. Verify your benefits at visit.
          </p>
          <div className="flex flex-wrap gap-2">
            {INSURANCES.map((name) => (
              <span
                key={name}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200/80"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
