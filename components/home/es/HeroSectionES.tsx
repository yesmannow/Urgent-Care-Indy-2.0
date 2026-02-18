import Link from "next/link";
import Image from "next/image";
import { Clock, Video, CreditCard, Star } from "lucide-react";

export function HeroSectionES() {
  return (
    <section className="relative bg-white pt-12 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-bold border border-green-100">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Espera Actual: &lt; 15 Min
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Atención de Urgencia que <br />
              <span className="text-teal-600">respeta su tiempo.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Sin Cita Previa. Rayos X en el lugar. Empresa familiar al servicio de Indianápolis con
              atención de nivel hospitalario a una fracción del costo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/es/schedule"
                className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl transition-all shadow-xl shadow-blue-900/10 transform hover:-translate-y-1"
              >
                Reserva tu Lugar
              </Link>
              <Link
                href="https://www.mymedicallocker.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 hover:border-teal-500 hover:text-teal-600 text-slate-700 font-bold rounded-xl transition-all"
              >
                <Video className="w-5 h-5 mr-2" /> Telemedicina
              </Link>
            </div>

            <div className="flex gap-6 pt-4 text-slate-500 text-sm font-medium border-t border-slate-100 mt-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-600" /> Abierto 6 días
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-teal-600" /> La mayoría de seguros
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-teal-600" /> 4.8/5 Reseñas
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white lg:translate-x-10">
            <Image
              src="/images/home/hero-bg.jpg"
              alt="Médico examinando a un paciente con estetoscopio en UrgentCare Indy"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

