import Link from "next/link";
import { BadgeCheck, Building2, ShieldCheck, Stethoscope, Wallet } from "lucide-react";

type ValueProp = {
  title: string;
  body: string;
  icon: typeof Stethoscope;
  href?: string;
  cta?: string;
};

const items: ValueProp[] = [
  {
    title: "Sin Cita Previa",
    body: "Atención enfocada en la acción: evaluación, pruebas y plan en una sola visita.",
    icon: Stethoscope,
  },
  {
    title: "Rayos X + Laboratorio Rápido",
    body: "Diagnósticos de nivel hospitalario en el lugar para evitar visitas adicionales.",
    icon: ShieldCheck,
  },
  {
    title: "Económico",
    body: "Precios claros y opciones de pago por cuenta propia.",
    icon: Wallet,
    href: "/es/patient-resources/pricing",
    cta: "Ver precios",
  },
  {
    title: "Salud Ocupacional",
    body: "Examen Físico DOT, Prueba de Detección de Drogas y Compensación Laboral.",
    icon: Building2,
    href: "/es/employer-services",
    cta: "Servicios para empresas",
  },
];

export function ValuePropsES() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
              Beneficios Clave
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Todo lo que necesita, <span className="text-teal-600">en una sola visita.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-slate-500 text-sm font-semibold">
            <BadgeCheck className="h-4 w-4 text-teal-600" aria-hidden />
            Empresa familiar • Indianápolis
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 shadow-sm">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center text-sm font-bold text-teal-700 hover:text-teal-800 hover:underline"
                  >
                    {item.cta}
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
