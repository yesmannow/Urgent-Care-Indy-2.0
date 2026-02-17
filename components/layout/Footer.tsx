import Link from "next/link";
import { Plus } from "lucide-react";
import { ClinicMap } from "@/components/ui/ClinicMap";

const serviceLinks = [
  { href: "/services/occupational-health", label: "Occupational Health" },
  { href: "/employer-services", label: "Employer Services" },
  { href: "/services/bone-density", label: "Bone Density" },
  { href: "/services/sleep-apnea", label: "Sleep Apnea" },
];

const quickLinks = [
  { href: "/resources/forms", label: "Patient Forms" },
  { href: "/patient-resources/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
  { href: "https://quickclick.com/r/6nwjs", label: "Pay Bill Online", external: true },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand: Logo + Address + Phone */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-white mb-4"
            >
              <Plus className="h-5 w-5 text-accent-red" aria-hidden />
              <span>UrgentCare Indy</span>
            </Link>
            <address className="not-italic text-slate-300 text-sm space-y-1 flex flex-col">
              <a
                href="https://www.google.com/maps/dir//7911+N+Michigan+Rd,+Indianapolis,+IN+46268"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
              >
                7911 N Michigan Rd, Indianapolis, IN 46268
              </a>
              <a
                href="tel:3179566288"
                className="text-white hover:text-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
              >
                (317) 956-6288
              </a>
            </address>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label, external }) => (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white transition-colors text-sm"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="text-slate-300 hover:text-white transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Hours – highlighted */}
          <div>
            <h3 className="font-semibold text-white mb-4">Hours</h3>
            <p className="text-slate-300 text-sm">
              <span className="text-white font-medium">
                Mon–Fri: 8am–6:30pm | Sat: 8am–2:30pm
              </span>
            </p>
          </div>

          {/* Location: small map */}
          <div>
            <h3 className="font-semibold text-white mb-4">Location</h3>
            <Link href="/contact" className="block rounded-lg overflow-hidden shadow-md focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
              <ClinicMap className="h-[150px] w-full" />
            </Link>
          </div>
        </div>

        {/* Bottom: Copyright + HIPAA */}
        <div className="mt-10 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Urgent Care Indy. All rights reserved.</p>
          <p className="font-medium text-slate-300">HIPAA Compliant</p>
        </div>
      </div>
    </footer>
  );
}
