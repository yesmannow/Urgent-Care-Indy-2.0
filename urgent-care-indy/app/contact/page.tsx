import Link from "next/link";
import { ClinicMap } from "@/components/ui/ClinicMap";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container py-12 md:py-16 max-w-4xl">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Visit Our Clinic
          </h1>
          <p className="mt-2 text-slate-600 text-lg">
            Get in touch or stop by. We&apos;re here to help.
          </p>
        </header>

        {/* Map – full width at top */}
        <div className="mb-10 min-h-[450px] w-full">
          <ClinicMap className="h-[450px] w-full" />
        </div>

        {/* Contact details */}
        <div className="rounded-xl bg-white border border-slate-200 p-6 md:p-8 shadow-medical">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Contact</h2>
          <p className="text-lg font-semibold text-slate-900 mb-2">
            7911 N Michigan Rd, Indianapolis, IN 46268
          </p>
          <p className="text-slate-600 mb-2">
            Mon–Fri: 8am–6:30pm | Sat: 8am–2:30pm
          </p>
          <p className="text-slate-600 mb-4">
            <a href="tel:+13179566288" className="text-primary-blue font-medium hover:underline">
              (317) 956-6288
            </a>
          </p>
          <p className="text-slate-500 text-sm">
            Located near the intersection of N. Michigan Rd and 79th St
          </p>
        </div>

        <p className="mt-8">
          <Link href="/" className="text-primary-blue font-medium hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
