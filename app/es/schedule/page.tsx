import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Reserva tu Lugar | Urgent Care Indy",
  description:
    "Reserva tu Lugar para Atención de Urgencia. Sin Cita Previa. Dirección y teléfono disponibles.",
};

export default function ScheduleESPage() {
  return (
    <main className="min-h-screen bg-slate-50" lang="es">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          Reserva tu Lugar
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Sin Cita Previa. Al enviar su registro, nuestro equipo sabrá que viene en camino.
        </p>

        <div className="mt-8 rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
          <p className="text-slate-700 font-semibold flex items-center gap-2">
            <Clock className="h-5 w-5 text-teal-600" aria-hidden />
            Acceso rápido
          </p>
          <p className="mt-2 text-slate-600">
            La integración con el sistema clínico está en progreso. Por ahora, puede continuar al flujo actual.
          </p>
          <Link
            href="/schedule"
            className="mt-5 inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-xl bg-blue-600 text-white font-extrabold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            Reserva tu Lugar <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </main>
  );
}

