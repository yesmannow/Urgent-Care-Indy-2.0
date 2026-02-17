import type { Language } from "@/lib/i18n";

type ClinicStatus = {
  isOpen: boolean;
  statusLabel: string;
  detailLabel: string;
};

const TIME_ZONE = "America/Indiana/Indianapolis";

function getZonedParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  return { weekday, minutes: hour * 60 + minute };
}

function formatTime(minutes: number, language: Language) {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const d = new Date(Date.UTC(2000, 0, 1, h24, m));
  return new Intl.DateTimeFormat(language === "es" ? "es-US" : "en-US", {
    timeZone: "UTC",
    hour: "numeric",
    minute: "2-digit",
  }).format(d);
}

const WEEKDAYS: Array<{ short: string; index: number; es: string; en: string }> = [
  { short: "Sun", index: 0, en: "Sun", es: "Dom" },
  { short: "Mon", index: 1, en: "Mon", es: "Lun" },
  { short: "Tue", index: 2, en: "Tue", es: "Mar" },
  { short: "Wed", index: 3, en: "Wed", es: "Mié" },
  { short: "Thu", index: 4, en: "Thu", es: "Jue" },
  { short: "Fri", index: 5, en: "Fri", es: "Vie" },
  { short: "Sat", index: 6, en: "Sat", es: "Sáb" },
];

function weekdayIndex(short: string) {
  return WEEKDAYS.find((w) => w.short === short)?.index ?? 1;
}

function weekdayLabel(index: number, language: Language) {
  const w = WEEKDAYS.find((x) => x.index === index) ?? WEEKDAYS[1];
  return language === "es" ? w.es : w.en;
}

function hoursForDay(index: number): { open: number; close: number } | null {
  // Mon–Fri: 8:00–18:30, Sat: 8:00–14:30, Sun: closed
  if (index >= 1 && index <= 5) return { open: 8 * 60, close: 18 * 60 + 30 };
  if (index === 6) return { open: 8 * 60, close: 14 * 60 + 30 };
  return null;
}

export function getClinicStatus(language: Language, now = new Date()): ClinicStatus {
  const { weekday, minutes } = getZonedParts(now);
  const dayIndex = weekdayIndex(weekday);
  const hours = hoursForDay(dayIndex);

  if (hours && minutes >= hours.open && minutes < hours.close) {
    return {
      isOpen: true,
      statusLabel: language === "es" ? "Abierto ahora" : "Open now",
      detailLabel:
        language === "es"
          ? `Cierra a las ${formatTime(hours.close, language)}`
          : `Closes at ${formatTime(hours.close, language)}`,
    };
  }

  // Find next open day
  for (let offset = 0; offset < 8; offset++) {
    const idx = (dayIndex + offset) % 7;
    const nextHours = hoursForDay(idx);
    if (!nextHours) continue;
    if (offset === 0 && minutes < nextHours.open) {
      return {
        isOpen: false,
        statusLabel: language === "es" ? "Cerrado" : "Closed",
        detailLabel:
          language === "es"
            ? `Abre a las ${formatTime(nextHours.open, language)}`
            : `Opens at ${formatTime(nextHours.open, language)}`,
      };
    }
    if (offset > 0) {
      const day = weekdayLabel(idx, language);
      return {
        isOpen: false,
        statusLabel: language === "es" ? "Cerrado" : "Closed",
        detailLabel:
          language === "es"
            ? `Abre ${day} a las ${formatTime(nextHours.open, language)}`
            : `Opens ${day} at ${formatTime(nextHours.open, language)}`,
      };
    }
  }

  return {
    isOpen: false,
    statusLabel: language === "es" ? "Cerrado" : "Closed",
    detailLabel: language === "es" ? "Consulta el horario" : "Check hours",
  };
}

