import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios Clínicos | Urgent Care Indy",
  description:
    "Atención de Urgencia para enfermedades y lesiones leves. Sin Cita Previa. Conozca servicios, precios y guías por síntomas.",
};

export default function ServicesESPage() {
  return (
    <main className="min-h-screen bg-slate-50" lang="es">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Servicios Clínicos
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Atención de Urgencia para enfermedades y lesiones leves, Sin Cita Previa.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/services"
            className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            <h2 className="text-xl font-extrabold text-slate-900">Ver servicios (en inglés)</h2>
            <p className="mt-2 text-slate-600">
              Estamos completando la versión en español. Mientras tanto, puede ver la lista de servicios aquí.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-teal-700 font-bold">
              Abrir <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>

          <Link
            href="/care"
            className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            <h2 className="text-xl font-extrabold text-slate-900">Guías por síntomas</h2>
            <p className="mt-2 text-slate-600">
              Consulte recomendaciones sobre qué tratamos y cuándo ir a la sala de emergencias.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-teal-700 font-bold">
              Explorar <ArrowRight className="h-4 w-4" aria-hidden />
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}

