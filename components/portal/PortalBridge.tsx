"use client";

import { CheckCircle, Lock } from "lucide-react";

const STEPS = [
  "Check your email for a registration key.",
  "Click the 'Register' button on the portal.",
  "Create your username and password.",
];

const PORTAL_URL = "https://www.mymedicallocker.com";

export function PortalBridge() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card 1: New Patients – How to Connect */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-medical">
        <h2 className="text-xl font-bold text-slate-900 mb-6">
          How to Connect
        </h2>
        <p className="text-sm text-slate-600 mb-6">New patients</p>
        <ol className="space-y-4" role="list">
          {STEPS.map((step, i) => (
            <li key={i} className="flex gap-3">
              <CheckCircle
                className="h-6 w-6 shrink-0 text-primary-blue mt-0.5"
                aria-hidden
              />
              <span className="text-slate-700">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Card 2: Returning Patients – Access My Medical Locker (focal point) */}
      <div className="rounded-2xl border-2 border-primary-blue/20 bg-white p-6 md:p-8 shadow-medical md:shadow-xl">
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          Access My Medical Locker
        </h2>
        <p className="text-sm text-slate-600 mb-6">Returning patients</p>
        <a
          href={PORTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-primary-blue px-6 py-4 text-white font-bold shadow-medical hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
        >
          <Lock className="h-5 w-5 shrink-0" aria-hidden />
          Log In to Portal
        </a>
        <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          <Lock className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
          Secure, HIPAA-compliant access
        </p>
      </div>
    </div>
  );
}
