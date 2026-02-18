import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, ShieldAlert, Truck, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "Salud Ocupacional | Servicios para Empresas",
  description:
    "Salud Ocupacional para empresas en Indianápolis: Compensación Laboral, Examen Físico DOT, Prueba de Detección de Drogas y exámenes ocupacionales.",
};

const items = [
  {
    title: "Compensación Laboral",
    body: "Gestión de lesiones y retorno al trabajo con documentación clara.",
    href: "/es/employer-services/workers-comp",
    icon: ShieldAlert,
  },
  {
    title: "Examen Físico DOT",
    body: "Examinadores certificados por FMCSA para mantener a los conductores en regla.",
    href: "/es/employer-services/dot-physicals",
    icon: Truck,
  },
  {
    title: "Prueba de Detección de Drogas",
    body: "Paneles 5/10/12 y flujos de cumplimiento con cadena de custodia.",
    href: "/es/employer-services/drug-screening",
    icon: FlaskConical,
  },
  {
    title: "Exámenes Ocupacionales",
    body: "Aptitud laboral, pre-empleo y evaluaciones de regreso al trabajo.",
    href: "/es/employer-services/physicals",
    icon: Activity,
  },
] as const;

export default function EmployerServicesESPage() {
  return (
    <main className="min-h-screen bg-slate-50" lang="es">
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <span className="text-teal-400 font-bold uppercase tracking-wider text-sm">
            Servicios para Empresas
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 max-w-3xl">
            Salud Ocupacional
          </h1>
          <p className="text-slate-300 text-xl mt-4 max-w-2xl">
            Protocolos rápidos y documentación clara para reducir tiempos de inactividad.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl mt-[-40px] pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-extrabold text-slate-900">{item.title}</h2>
                    <p className="text-slate-600 mt-2">{item.body}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-teal-700 font-bold">
                      Ver detalles <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl bg-white border border-slate-200 p-8 shadow-sm">
          <p className="text-slate-900 font-extrabold">¿Necesita ayuda ahora?</p>
          <p className="text-slate-600 mt-2">
            Llame al <a className="text-primary-blue font-extrabold hover:underline" href="tel:+13179566288">(317) 956-6288</a> o{" "}
            <Link className="text-teal-700 font-extrabold hover:underline" href="/es/contact">
              solicite una cotización
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}

