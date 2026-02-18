"use client";

import { DollarSign, Info } from "lucide-react";

export default function PricingModule() {
  const items = [
    { service: "Self-Pay Visit", price: "$110", detail: "Provider evaluation" },
    { service: "Rapid Strep/Flu/COVID", price: "$37", detail: "Results in 15m" },
    { service: "Sports Physicals", price: "$30", detail: "Fast school clearance" },
    { service: "X-Ray Imaging", price: "$85", detail: "Includes Radiologist read" },
    { service: "Abscess Drainage", price: "$175", detail: "Procedure + follow-up" },
  ];

  return (
    <div className="bg-blue-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden my-16">
      <div className="absolute top-0 right-0 p-12 opacity-5" aria-hidden>
        <DollarSign size={150} />
      </div>
      <h3 className="text-4xl font-bold mb-8 italic">Transparent Pricing</h3>
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.service}
            className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-blue-800 pb-4 group hover:bg-white/5 p-2 rounded-lg transition-colors"
          >
            <div>
              <h4 className="font-bold text-xl group-hover:text-teal-400">
                {item.service}
              </h4>
              <p className="text-sm text-blue-300">{item.detail}</p>
            </div>
            <div className="text-3xl font-black text-teal-400 font-mono tracking-tighter">
              {item.price}*
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex items-start gap-3 bg-blue-950/50 p-4 rounded-xl border border-blue-800">
        <Info className="text-blue-400 shrink-0" size={20} aria-hidden />
        <p className="text-xs text-blue-300 italic">
          *Estimated self-pay rates. Most insurance accepted.
        </p>
      </div>
    </div>
  );
}

