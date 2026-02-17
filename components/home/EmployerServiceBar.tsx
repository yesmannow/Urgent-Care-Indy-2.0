import Link from "next/link";
import { Clock, Truck, DollarSign } from "lucide-react";

export function EmployerServiceBar() {
  return (
    <section
      className="bg-slate-900 py-12 md:py-16 text-white"
      aria-labelledby="employer-bar-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 id="employer-bar-heading" className="sr-only">
          Employer services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="flex gap-4">
            <Clock className="h-8 w-8 text-teal-400 shrink-0" aria-hidden />
            <div>
              <h3 className="font-bold text-lg">Fast Turnaround</h3>
              <p className="text-slate-400 text-sm">
                Door-to-door in under 60 minutes.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Truck className="h-8 w-8 text-teal-400 shrink-0" aria-hidden />
            <div>
              <h3 className="font-bold text-lg">DOT Physicals</h3>
              <p className="text-slate-400 text-sm">
                Certified FMCSA examiners daily.
              </p>
            </div>
          </div>
          <div className="flex gap-4 md:justify-end">
            <DollarSign className="h-8 w-8 text-teal-400 shrink-0 hidden md:block" aria-hidden />
            <Link
              href="/employer-services"
              className="inline-flex items-center justify-center bg-teal-500 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-400 transition-all min-h-[48px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Employer Portal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
