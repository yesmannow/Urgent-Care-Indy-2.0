"use client";

import { useRouter } from "next/navigation";
import { LANGUAGE_COOKIE, type Language } from "@/lib/i18n";

function setCookie(name: string, value: string) {
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; Max-Age=${oneYear}; Path=/; SameSite=Lax`;
}

export function LanguageToggle({
  language,
  size = "md",
}: {
  language: Language;
  size?: "sm" | "md";
}) {
  const router = useRouter();

  const setLanguage = (next: Language) => {
    setCookie(LANGUAGE_COOKIE, next);
    router.refresh();
  };

  const containerClass =
    size === "sm"
      ? "hidden md:inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5"
      : "hidden md:inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5 shadow-sm";

  const buttonBase =
    size === "sm"
      ? "min-h-[28px] px-2 rounded-full text-xs font-extrabold transition-colors"
      : "min-h-[36px] px-3 rounded-full text-sm font-extrabold transition-colors";

  return (
    <div
      className={containerClass}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`${buttonBase} ${
          language === "en" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("es")}
        aria-pressed={language === "es"}
        className={`${buttonBase} ${
          language === "es" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"
        }`}
      >
        ES
      </button>
    </div>
  );
}
