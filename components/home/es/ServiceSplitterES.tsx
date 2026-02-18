import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ServiceSplitterES() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">¿A quién atendemos hoy?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link
            href="/es/services"
            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            <Image
              src="/images/home/patient-care.jpg"
              alt="Madre e hijo recibiendo atención"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Para Mí o Mi Familia</h3>
              <p className="text-slate-200 mb-6 text-lg">
                Enfermedades, lesiones, exámenes físicos deportivos y bienestar.
              </p>
              <span className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2 rounded-full font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                Ver Servicios para Pacientes <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          <Link
            href="/es/employer-services"
            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            <Image
              src="/images/home/employer-care.webp"
              alt="Trabajador regresando al sitio de trabajo"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">Mi Fuerza Laboral</h3>
              <p className="text-teal-100 mb-6 text-lg">
                Compensación Laboral, Prueba de Detección de Drogas y Examen Físico DOT.
              </p>
              <span className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-2 rounded-full font-bold text-sm group-hover:bg-teal-600 group-hover:text-white transition-colors">
                Ver Soluciones para Empresas <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

