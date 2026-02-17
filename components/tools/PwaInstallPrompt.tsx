"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Download, X } from "lucide-react";
import type { Language } from "@/lib/i18n";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

const DISMISS_KEY = "uci_pwa_install_dismissed";

export function PwaInstallPrompt({ language = "en" }: { language?: Language }) {
  const [visible, setVisible] = useState(false);
  const installEventRef = useRef<BeforeInstallPromptEvent | null>(null);

  const copy = useMemo(
    () =>
      language === "es"
        ? {
            title: "Instala la app",
            body: "Acceso rápido desde tu pantalla de inicio, incluso con conexión inestable.",
            install: "Instalar",
            later: "Ahora no",
          }
        : {
            title: "Install the app",
            body: "Quick access from your home screen, even with spotty connection.",
            install: "Install",
            later: "Not now",
          },
    [language]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(DISMISS_KEY) === "true") return;

    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      installEventRef.current = e as BeforeInstallPromptEvent;
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }, []);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, "true");
    } catch {}
  };

  const install = async () => {
    const ev = installEventRef.current;
    if (!ev) return;
    setVisible(false);
    await ev.prompt();
    try {
      await ev.userChoice;
    } catch {}
    installEventRef.current = null;
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-24 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-[75] sm:w-[360px]">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm font-extrabold text-slate-900">{copy.title}</p>
            <p className="text-xs text-slate-600 mt-1">{copy.body}</p>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            aria-label={copy.later}
          >
            <X className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={install}
            className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] rounded-xl bg-primary-blue text-white font-extrabold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            <Download className="h-4 w-4" aria-hidden />
            {copy.install}
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="min-h-[44px] px-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            {copy.later}
          </button>
        </div>
      </div>
    </div>
  );
}

