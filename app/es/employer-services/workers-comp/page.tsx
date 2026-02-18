import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";

const PAGE_DATA = {
  title: "Compensación Laboral y Lesiones",
  subtitle: "Protocolos agresivos de retorno al trabajo para empresas de Indianápolis.",
  features: [
    "Comunicación directa con ajustadores de seguros",
    "Informes de estado digitales enviados inmediatamente",
    "Rayos X en el lugar para reducir el tiempo de inactividad",
    "Coordinación de tareas modificadas",
  ],
  mainContent:
    "Los accidentes ocurren. Cuando suceden, necesita un socio que entienda la documentación, la comunicación y la urgencia de regresar a los empleados al trabajo de forma segura. Tratamos lesiones laborales comunes en el lugar y entregamos restricciones claras para que RR. HH. pueda actuar rápidamente.",
  cta: "Reportar una Lesión Ahora",
};

export default function PageES() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20" lang="es">
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <span className="text-teal-400 font-bold uppercase tracking-wider text-sm">
            Servicios para Empresas
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 max-w-3xl">
            {PAGE_DATA.title}
          </h1>
          <p className="text-slate-300 text-xl mt-4 max-w-2xl">{PAGE_DATA.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-[-40px] grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Qué Esperar</h2>
          <ul className="space-y-4 mb-8">
            {PAGE_DATA.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-teal-600 shrink-0" />
                <span className="text-slate-700 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
          <hr className="my-8 border-slate-100" />
          <p className="text-slate-600 leading-relaxed">{PAGE_DATA.mainContent}</p>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Acciones Rápidas</h3>
            <Link
              href="/es/contact"
              className="flex items-center justify-center w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-bold transition-colors"
            >
              {PAGE_DATA.cta}
            </Link>
            <a
              href="tel:+13179566288"
              className="mt-3 flex items-center justify-center w-full py-3 bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg font-bold transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" /> (317) 956-6288
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

