import { CorporateQuote } from "@/components/forms/CorporateQuote";

export function CorporateQuoteSection() {
  return (
    <section
      className="py-16 md:py-20 bg-slate-50 border-t border-slate-200"
      aria-labelledby="corporate-quote-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-xl mx-auto">
          <h2
            id="corporate-quote-heading"
            className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center"
          >
            Request Corporate Rates
          </h2>
          <p className="text-slate-600 text-center mb-8">
            HR managers and business owners: get preferred pricing and streamlined billing for your team.
          </p>
          <div className="rounded-3xl overflow-hidden">
            <CorporateQuote />
          </div>
        </div>
      </div>
    </section>
  );
}
