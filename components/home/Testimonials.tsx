"use client";

import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah J.", city: "Indianapolis", text: "Fastest urgent care. In and out with my daughter in under 40 minutes.", stars: 5 },
  { name: "Mark T.", city: "Zionsville", text: "Staff was professional and explained my X-ray results clearly.", stars: 5 },
  { name: "Linda M.", city: "Carmel", text: "Clean facility. Online check-in saved time. Highly recommend for flu shots.", stars: 5 },
  { name: "James K.", city: "Pike Township", text: "Great with kids. Seen in 10 minutes.", stars: 5 },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 id="testimonials-heading" className="text-3xl font-bold text-center mb-4">Social Proof</h2>
        <p className="text-slate-400 text-center mb-12 max-w-xl mx-auto">The best urgent care experience in Indy.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
              <div className="flex gap-1 mb-4 text-teal-400" aria-label="5 stars">
                {[...Array(rev.stars)].map((_, s) => <Star key={s} size={16} fill="currentColor" aria-hidden />)}
              </div>
              <p className="text-slate-300 mb-5 text-sm italic">{rev.text}</p>
              <p className="font-bold text-white">{rev.name}</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest">{rev.city}, IN</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
