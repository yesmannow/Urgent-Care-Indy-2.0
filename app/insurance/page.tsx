import Link from "next/link";
import { cookies } from "next/headers";
import { InsuranceSearch } from "@/components/tools/InsuranceSearch";
import { DEFAULT_LANGUAGE, LANGUAGE_COOKIE, normalizeLanguage } from "@/lib/i18n";

export default async function InsurancePage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const initialQuery = typeof searchParams?.q === "string" ? searchParams.q : "";
  const language = normalizeLanguage((await cookies()).get(LANGUAGE_COOKIE)?.value ?? DEFAULT_LANGUAGE);

  const copy =
    language === "es"
      ? {
          title: "Seguros que aceptamos",
          subtitle:
            "Busca en nuestra lista publicada. La cobertura varía por plan y puede cambiar; llama para confirmar.",
          back: "← Volver al inicio",
        }
      : {
          title: "Insurance We Accept",
          subtitle: "Search our published list. Coverage varies by plan and may change—call to confirm.",
          back: "← Back to home",
        };

  return (
    <div className="container py-16 max-w-4xl">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">{copy.title}</h1>
      <p className="text-slate-600 mb-8">{copy.subtitle}</p>
      <InsuranceSearch initialQuery={initialQuery} language={language} />
      <p className="mt-8">
        <Link href="/" className="text-primary-blue font-medium hover:underline">
          {copy.back}
        </Link>
      </p>
    </div>
  );
}

