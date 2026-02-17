export type Language = "en" | "es";

export const LANGUAGE_COOKIE = "uci_lang";
export const DEFAULT_LANGUAGE: Language = "en";

export function normalizeLanguage(value: string | undefined | null): Language {
  if (value === "es") return "es";
  return "en";
}

