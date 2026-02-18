import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Urgent Care Indy",
  description:
    "Contacto y ubicación de Urgent Care Indy. 7911 N Michigan Rd, Indianapolis. Teléfono y horario.",
};

export default function ContactESPage() {
  return (
    <main className="min-h-screen bg-slate-50" lang="es">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Contacto</h1>
        <p className="mt-3 text-lg text-slate-600">
          ¿Necesita ayuda? Llámenos o visítenos.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-teal-600 shrink-0 mt-0.5" aria-hidden />
              <div>
                <p className="font-extrabold text-slate-900">Dirección</p>
                <p className="text-slate-600 mt-1">7911 N Michigan Rd, Indianapolis, IN 46268</p>
                <a
                  href="https://maps.google.com/?q=7911+N+Michigan+Rd,+Indianapolis,+IN+46268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-3 text-teal-700 font-bold hover:underline"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <Phone className="h-6 w-6 text-teal-600 shrink-0 mt-0.5" aria-hidden />
              <div>
                <p className="font-extrabold text-slate-900">Teléfono</p>
                <a
                  href="tel:+13179566288"
                  className="text-primary-blue font-extrabold text-lg hover:underline mt-1 inline-block"
                >
                  (317) 956-6288
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-teal-600 shrink-0 mt-0.5" aria-hidden />
              <div>
                <p className="font-extrabold text-slate-900">Horario</p>
                <p className="text-slate-600 mt-1">Lun-Vie: 8:00 AM – 6:30 PM</p>
                <p className="text-slate-600">Sáb: 8:00 AM – 2:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10">
          <Link href="/es" className="text-primary-blue font-medium hover:underline">
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </main>
  );
}

