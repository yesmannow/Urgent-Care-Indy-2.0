"use client";

import Link from "next/link";
import { ShieldAlert, FlaskConical, Truck, ChevronRight } from "lucide-react";

export function EmployerMegaMenuES({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-full w-[600px] bg-white border border-slate-200 shadow-xl rounded-xl p-6 grid grid-cols-2 gap-6 z-50">
      <div className="col-span-2 border-b border-slate-100 pb-4 mb-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Servicios para Empresas
        </h3>
      </div>

      <Link href="/es/employer-services/workers-comp" onClick={onClose} className="flex gap-3 group">
        <ShieldAlert className="h-5 w-5 text-teal-600 group-hover:scale-110 transition-transform" />
        <div>
          <div className="font-bold text-slate-900 group-hover:text-teal-600">
            Compensación Laboral
          </div>
          <div className="text-xs text-slate-500">Gestión de lesiones y retorno al trabajo.</div>
        </div>
      </Link>

      <Link href="/es/employer-services/dot-physicals" onClick={onClose} className="flex gap-3 group">
        <Truck className="h-5 w-5 text-teal-600 group-hover:scale-110 transition-transform" />
        <div>
          <div className="font-bold text-slate-900 group-hover:text-teal-600">
            Examen Físico DOT
          </div>
          <div className="text-xs text-slate-500">Examinadores certificados por FMCSA.</div>
        </div>
      </Link>

      <Link
        href="/es/employer-services/drug-screening"
        onClick={onClose}
        className="flex gap-3 group"
      >
        <FlaskConical className="h-5 w-5 text-teal-600 group-hover:scale-110 transition-transform" />
        <div>
          <div className="font-bold text-slate-900 group-hover:text-teal-600">
            Prueba de Detección de Drogas
          </div>
          <div className="text-xs text-slate-500">Paneles 5/10/12 y eScreen.</div>
        </div>
      </Link>

      <div className="col-span-2 bg-slate-50 p-4 rounded-lg mt-2 flex justify-between items-center">
        <div>
          <div className="font-bold text-slate-900 text-sm">¿Necesita una cuenta corporativa?</div>
          <div className="text-xs text-slate-500">Facturación directa y portal de resultados.</div>
        </div>
        <Link
          href="/es/contact"
          onClick={onClose}
          className="text-teal-600 font-bold text-sm flex items-center hover:underline"
        >
          Solicitar Cotización <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

