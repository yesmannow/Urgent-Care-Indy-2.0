import { Phone, Calendar } from "lucide-react";
import Link from "next/link";

interface ServiceDetailLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function ServiceDetailLayout({
  title,
  subtitle,
  children,
}: ServiceDetailLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
          {subtitle && (
            <p className="text-xl text-primary-blue font-medium">{subtitle}</p>
          )}
          <div className="prose prose-slate max-w-none text-slate-600">
            {children}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4">Book This Service</h3>
            <p className="text-sm text-slate-500 mb-6">
              This service requires a scheduled appointment.
            </p>
            <a
              href="tel:+13179566288"
              className="flex items-center justify-center gap-2 w-full bg-white border border-slate-300 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-100 transition-all mb-3 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              (317) 956-6288
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-primary-blue text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            >
              <Calendar className="h-4 w-4 shrink-0" aria-hidden />
              Request Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
