import Link from "next/link";
import { Plus } from "lucide-react";
import { ClinicMap } from "@/components/ui/ClinicMap";

const serviceLinks = [
  { href: "/es/services", label: "Servicios Clínicos" },
  { href: "/es/employer-services", label: "Salud Ocupacional" },
  { href: "/es/patient-resources/pricing", label: "Precios" },
];

const quickLinks = [
  { href: "/es/contact", label: "Contacto" },
  { href: "/es/schedule", label: "Reserva tu Lugar" },
  { href: "https://quickclick.com/r/6nwjs", label: "Pagar Factura", external: true },
];

export function FooterES() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          <div>
            <Link href="/es" className="inline-flex items-center gap-2 font-bold text-white mb-4">
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

          <div>
            <h3 className="font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Enlaces</h3>
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
                    <Link href={href} className="text-slate-300 hover:text-white transition-colors text-sm">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Horario</h3>
            <p className="text-slate-300 text-sm">
              <span className="text-white font-medium">Lun-Vie: 8am-6:30pm | Sáb: 8am-2:30pm</span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Ubicación</h3>
            <Link
              href="/es/contact"
              className="block rounded-lg overflow-hidden shadow-md focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <ClinicMap className="h-[150px] w-full" />
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Urgent Care Indy. Todos los derechos reservados.</p>
          <p className="font-medium text-slate-300">Cumple con HIPAA</p>
        </div>
      </div>
    </footer>
  );
}

