// Transparent pricing – data from old site audit (conversion-focused)
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
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
      {/* Self-Pay – prominent card with blue border (trust + conversion) */}
      <div
        className="rounded-2xl border-2 border-primary-blue bg-white p-6 md:p-8 shadow-medical ring-2 ring-primary-blue/10"
        role="region"
        aria-labelledby="self-pay-heading"
      >
        <h2
          id="self-pay-heading"
          className="text-xl font-bold text-slate-900 mb-1"
        >
          Self-Pay Pricing
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Clear prices, no surprises. No hidden fees. Pay at time of service.
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

      {/* Insurance – simple grid of badges */}
      <div
        className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-medical"
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
  );
}
