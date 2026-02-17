import {
  ShieldCheck,
  CreditCard,
  AlertCircle,
  HeartHandshake,
} from "lucide-react";

const insurancePlans = [
  "Anthem / Blue Cross",
  "Aetna",
  "Cigna",
  "United HealthCare",
  "Humana",
  "Tricare",
  "Medicare",
];

export function InsuranceSection() {
  return (
    <div className="space-y-12">
      {/* 1. Commercial Insurance Grid */}
      <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="h-6 w-6 text-primary-blue shrink-0" />
          <h2 className="text-2xl font-bold text-slate-900">
            In-Network Insurance
          </h2>
        </div>
        <p className="text-slate-600 mb-6">
          We accept most major plans. If you don&apos;t see yours, please call
          to verify.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {insurancePlans.map((name) => (
            <span
              key={name}
              className="text-lg font-bold tracking-wider text-slate-400 text-center"
            >
              {name.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Critical Medicaid Alert */}
        <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg flex gap-3">
          <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-amber-800 text-sm uppercase tracking-wide">
              Important Policy Note
            </h4>
            <p className="text-amber-700 text-sm mt-1">
              We accept <strong>Indiana Medicaid only</strong>. We strictly{" "}
              <u>cannot</u> accept out-of-state Medicaid plans.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Alternative Payments (Grid) */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Medical Sharing */}
        <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex items-center gap-3 mb-4">
            <HeartHandshake className="h-6 w-6 text-primary-blue shrink-0" />
            <h3 className="text-xl font-bold text-slate-900">
              Faith-Based Sharing
            </h3>
          </div>
          <p className="text-slate-700 leading-relaxed">
            We are proud to work with medical sharing ministries. We
            specifically recognize and bill for:
          </p>
          <ul className="mt-4 space-y-2 font-medium text-blue-900">
            <li className="flex items-center">✓ Medishare</li>
            <li className="flex items-center">✓ Liberty Healthshare</li>
          </ul>
        </section>

        {/* Online Bill Pay */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 shadow-medical">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="h-6 w-6 text-blue-400 shrink-0" />
            <h3 className="text-xl font-bold">Pay Your Bill</h3>
          </div>
          <p className="text-slate-300 mb-6">
            Received a statement? You can pay securely online 24/7 using our
            QuickClick portal.
          </p>
          <a
            href="https://quickclick.com/r/6nwjs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Go to Secure Payment Portal
          </a>
          <p className="text-xs text-slate-500 mt-4 text-center">
            Questions? Call Billing at (317) 983-3246
          </p>
        </section>
      </div>
    </div>
  );
}
