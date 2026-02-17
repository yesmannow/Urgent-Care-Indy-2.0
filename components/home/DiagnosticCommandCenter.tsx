"use client";

import { Microscope, Bone, HeartPulse, Bandage, ArrowRight } from "lucide-react";
import Link from "next/link";

export function DiagnosticCommandCenter() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
              Advanced Diagnostics
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Hospital-Grade Tech. <span className="text-teal-600">Walk-In Speed.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="text-slate-600 font-medium hover:text-teal-600 flex items-center gap-2 transition-colors"
          >
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Bone className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Digital X-Ray Suite</h3>
              <p className="text-slate-500 max-w-md">
                On-site imaging for fractures, dislocations, and foreign bodies. Immediate digital
                interpretation means you leave with answers, not just a referral.
              </p>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="md:row-span-2 bg-slate-900 rounded-2xl p-8 text-white shadow-lg flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Microscope className="h-6 w-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Rapid In-House Lab</h3>
              <ul className="space-y-3 text-slate-300 mt-4">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" /> Strep & Flu (15 mins)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" /> RSV & Mono
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" /> Urinalysis & STI
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" /> Pregnancy Testing
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-teal-600/30 rounded-full blur-3xl group-hover:bg-teal-600/40 transition-all" />
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:scale-110 transition-transform">
              <HeartPulse className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Cardiac Monitoring</h3>
            <p className="text-slate-500 text-sm mt-2">
              12-Lead EKG on-site for chest pain triage and pre-op clearance.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
              <Bandage className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Trauma Care</h3>
            <p className="text-slate-500 text-sm mt-2">
              Laceration repair (stitches/glue), abscess drainage, and minor burn care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

