"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneCall, TriangleAlert, Stethoscope, X } from "lucide-react";

type CareMode = "urgent" | "er";

const STORAGE_KEY = "uci-care-mode";

export function EmergencyToggleBar() {
  const [mode, setMode] = useState<CareMode>("urgent");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const confirmButtonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "urgent" || stored === "er") {
      Promise.resolve().then(() => setMode(stored));
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  useEffect(() => {
    if (!confirmOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setConfirmOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [confirmOpen]);

  useEffect(() => {
    if (!confirmOpen) return;
    confirmButtonRef.current?.focus();
  }, [confirmOpen]);

  const tone = useMemo(() => {
    if (mode === "er") return "bg-red-50 border-red-200";
    return "bg-slate-50 border-slate-200";
  }, [mode]);

  return (
    <>
      <div className={`border-b ${tone}`} role="region" aria-label="Care level toggle">
        <div className="container py-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            {mode === "er" ? (
              <TriangleAlert className="h-4 w-4 text-red-600 shrink-0" aria-hidden />
            ) : (
              <Stethoscope className="h-4 w-4 text-primary-blue shrink-0" aria-hidden />
            )}
            <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">
              {mode === "er" ? "Life-threatening emergency?" : "Not sure where to go?"}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div
              className="inline-flex rounded-full bg-white border border-slate-200 p-0.5 shadow-sm"
              role="group"
              aria-label="Select urgent care or emergency room"
            >
              <button
                type="button"
                onClick={() => setMode("urgent")}
                aria-pressed={mode === "urgent"}
                className={`min-h-[36px] px-3 rounded-full text-xs sm:text-sm font-bold transition-colors ${
                  mode === "urgent" ? "bg-primary-blue text-white" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Urgent Care
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("er");
                  setConfirmOpen(true);
                }}
                aria-pressed={mode === "er"}
                className={`min-h-[36px] px-3 rounded-full text-xs sm:text-sm font-bold transition-colors ${
                  mode === "er" ? "bg-red-600 text-white" : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                ER / 911
              </button>
            </div>

            <Link
              href="/resources/urgent-care-vs-er"
              className="hidden sm:inline text-xs sm:text-sm font-semibold text-slate-700 hover:text-primary-blue underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
            >
              Urgent Care vs ER
            </Link>

            <button
              type="button"
              onClick={() => setConfirmOpen(true)}
              className={`inline-flex items-center gap-2 min-h-[36px] px-3 rounded-xl text-xs sm:text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                mode === "er"
                  ? "bg-red-600 text-white hover:bg-red-500 focus:ring-red-600 focus:ring-offset-red-50"
                  : "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 focus:ring-offset-slate-50"
              }`}
              aria-haspopup="dialog"
            >
              <PhoneCall className="h-4 w-4" aria-hidden />
              Call 911
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {confirmOpen ? (
          <motion.div
            key="er-confirm-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px] p-4 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="er-confirm-title"
            aria-describedby="er-confirm-desc"
            onClick={(e) => {
              if (e.target === e.currentTarget) setConfirmOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 4 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4 p-5">
                <div className="min-w-0">
                  <h2 id="er-confirm-title" className="text-lg font-extrabold text-slate-900">
                    Call 911 now?
                  </h2>
                  <p id="er-confirm-desc" className="mt-1 text-sm text-slate-600">
                    If this is life-threatening (chest pain, severe trouble breathing, stroke symptoms, heavy
                    bleeding), call 911 immediately.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setConfirmOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <div className="p-5 pt-0 flex flex-col gap-3">
                <a
                  ref={(node) => {
                    confirmButtonRef.current = node;
                  }}
                  href="tel:911"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-red-600 text-white font-extrabold hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                >
                  <PhoneCall className="h-5 w-5" aria-hidden />
                  Call 911
                </a>

                <Link
                  href="/resources/urgent-care-vs-er"
                  onClick={() => setConfirmOpen(false)}
                  className="inline-flex items-center justify-center min-h-[48px] px-5 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                >
                  Help me decide
                </Link>

                <button
                  type="button"
                  onClick={() => setConfirmOpen(false)}
                  className="text-sm text-slate-600 hover:text-slate-800 underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
