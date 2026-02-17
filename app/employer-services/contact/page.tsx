import { CorporateQuote } from "@/components/forms/CorporateQuote";

export default function EmployerContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-10">
          <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
            Employer Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">
            Setup a Corporate Account
          </h1>
          <p className="text-slate-600 text-lg mt-4 max-w-2xl">
            Request employer pricing, protocols, and billing setup. Our account manager will follow up within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <CorporateQuote />
          </div>
          <aside className="lg:col-span-1 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Fast Support</h2>
            <p className="text-slate-600 text-sm mt-2">
              Need help immediately? Call the Client Service Center.
            </p>
            <a
              href="tel:317-956-6288"
              className="mt-4 inline-flex items-center justify-center w-full min-h-[44px] rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
            >
              Call (317) 956-6288
            </a>
            <p className="text-xs text-slate-500 mt-4">
              For urgent medical emergencies, call 911.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}

