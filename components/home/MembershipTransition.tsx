import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export function MembershipTransition() {
  return (
    <section
      className="py-16 md:py-20 bg-white border-t border-slate-200"
      aria-labelledby="membership-transition-heading"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-100 text-teal-500 mb-6">
            <Heart size={28} aria-hidden />
          </div>
          <h2
            id="membership-transition-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance"
          >
            Beyond the Quick Fix: Holistic Care
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Urgent care is for today. Our primary care partner, <strong className="text-slate-900">PrimaryCare Indy</strong>, is for life.
          </p>
        </div>
        <div className="bg-slate-50 rounded-[2.5rem] border border-slate-200 p-8 md:p-10">
          <p className="text-slate-700 leading-relaxed mb-6">
            If an urgent visit reveals a chronic issue—like high blood pressure or ongoing respiratory needs—we offer a seamless handoff to specialist-led primary care in the same building. No starting over; your records and care team stay connected.
          </p>
          <Link
            href="/our-clinic"
            className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
          >
            Learn about our care ecosystem
            <ArrowRight size={18} className="text-teal-500" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
