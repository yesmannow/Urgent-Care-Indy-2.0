import type { Metadata } from "next";
import Link from "next/link";
import { PricingGrid } from "@/components/PricingGrid";

export const metadata: Metadata = {
  title: "Precios y Tarifas | Urgent Care Indy",
  description:
    "Precios transparentes de pago por cuenta propia. Aceptamos la mayoría de los seguros. Vea niveles de self-pay y servicios de precio fijo.",
};

export default function PricingESPage() {
  return (
    <main className="min-h-screen bg-slate-50" lang="es">
      <div className="container max-w-4xl py-12 md:py-16 px-4">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Precios Transparentes
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Visitas de self-pay desde $100 por visita. Precios fijos para Examen Físico DOT, exámenes deportivos y más.{" "}
            <a
              href="#insurance"
              className="text-primary-blue font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              Seguro aceptado
            </a>
            .
          </p>
        </header>

        {/* Reuse grid; data is numeric and acceptable while Spanish copy expands over time */}
        <PricingGrid />

        <p className="mt-8">
          <Link href="/es" className="text-primary-blue font-medium hover:underline">
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </main>
  );
}

