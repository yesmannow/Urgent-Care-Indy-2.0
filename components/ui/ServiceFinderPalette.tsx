"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight, TriangleAlert, Stethoscope, X, PhoneCall } from "lucide-react";
import { getServiceFinderResults, type ServiceFinderRecommendation } from "@/lib/serviceFinder";

function isTextInputLike(el: Element | null) {
  if (!el) return false;
  const tag = el.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select") return true;
  if (el instanceof HTMLElement && el.isContentEditable) return true;
  return false;
}

function badgeStyles(rec: ServiceFinderRecommendation) {
  if (rec === "er-911") return "bg-red-100 text-red-800 border-red-200";
  if (rec === "urgent-care") return "bg-blue-100 text-blue-900 border-blue-200";
  return "bg-slate-100 text-slate-700 border-slate-200";
}

type ServiceFinderPaletteProps = {
  variant?: "full" | "icon";
};

export function ServiceFinderPalette({ variant = "full" }: ServiceFinderPaletteProps) {
  const router = useRouter();
  const inputId = useId();
  const listboxId = useId();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [confirm911Open, setConfirm911Open] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);

  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const results = useMemo(() => getServiceFinderResults(query, 12), [query]);

  const activeResult = results[activeIndex] ?? null;

  const closePalette = () => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
    setConfirm911Open(false);
    setPendingHref(null);
    Promise.resolve().then(() => {
      const launcher = launcherRef.current;
      if (!launcher) return;
      if (launcher.offsetParent === null) return;
      launcher.focus();
    });
  };

  const openPalette = () => {
    setQuery("");
    setActiveIndex(0);
    setConfirm911Open(false);
    setPendingHref(null);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;

      if (key === "Escape") {
        e.preventDefault();
        closePalette();
        return;
      }

      if (confirm911Open) return;

      if (key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, Math.max(0, results.length - 1)));
        return;
      }

      if (key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
        return;
      }

      if (key === "Enter") {
        if (!activeResult) return;
        e.preventDefault();
        if (activeResult.recommendation === "er-911") {
          setPendingHref(activeResult.href);
          setConfirm911Open(true);
          return;
        }
        closePalette();
        router.push(activeResult.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeResult, confirm911Open, open, results.length, router]);

  useEffect(() => {
    if (!open) return;
    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;

      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));

      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey) {
        if (active === first || !panel.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTabTrap);
    return () => window.removeEventListener("keydown", handleTabTrap);
  }, [open]);

  useEffect(() => {
    const handleGlobalShortcut = (e: KeyboardEvent) => {
      if (e.defaultPrevented) return;
      if (isTextInputLike(document.activeElement)) return;

      const isCmdK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      const isSlash = e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey;

      if (isCmdK || isSlash) {
        e.preventDefault();
        openPalette();
      }
    };

    window.addEventListener("keydown", handleGlobalShortcut);
    return () => window.removeEventListener("keydown", handleGlobalShortcut);
  }, []);

  const handleSelect = (href: string, recommendation: ServiceFinderRecommendation) => {
    if (recommendation === "er-911") {
      setPendingHref(href);
      setConfirm911Open(true);
      return;
    }
    closePalette();
    router.push(href);
  };

  const activeDescendantId = activeResult ? `sf-option-${activeResult.id}` : undefined;

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={openPalette}
        className={
          variant === "icon"
            ? "hidden md:inline-flex items-center justify-center rounded-full border border-slate-200 bg-white h-10 w-10 text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            : "hidden md:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
        }
        aria-label="Open service finder"
        aria-haspopup="dialog"
      >
        <Search className={variant === "icon" ? "h-5 w-5" : "h-4 w-4"} aria-hidden />
        {variant === "full" ? (
          <>
            Find Care
            <span className="ml-1 hidden lg:inline text-xs font-semibold text-slate-400" aria-hidden>
              Ctrl K
            </span>
          </>
        ) : (
          <span className="sr-only">Find care (Ctrl+K)</span>
        )}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="service-finder-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-[2px] p-4 flex items-start md:items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-finder-title"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) closePalette();
            }}
          >
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: 8, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.99 }}
              transition={{ duration: 0.12 }}
              className="w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden"
            >
              <div className="p-4 sm:p-5 border-b border-slate-200 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 id="service-finder-title" className="text-base sm:text-lg font-extrabold text-slate-900">
                    Service Finder
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Type a symptom to see where to go. This is general info, not medical advice.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closePalette}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <div className="p-4 sm:p-5">
                <label htmlFor={inputId} className="sr-only">
                  Search symptoms
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" aria-hidden />
                  <input
                    ref={inputRef}
                    id={inputId}
                    type="search"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setActiveIndex(0);
                    }}
                    placeholder='Try "sore throat", "UTI", "sprain", "chest pain"...'
                    className="w-full min-h-[52px] pl-12 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20 text-base"
                    autoComplete="off"
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded={true}
                    aria-controls={listboxId}
                    aria-activedescendant={activeDescendantId}
                  />
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Results
                    </p>
                    <div className="flex items-center gap-2">
                      <Link
                        href="/resources/urgent-care-vs-er"
                        className="text-xs font-semibold text-slate-600 hover:text-primary-blue underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
                        onClick={closePalette}
                      >
                        Urgent Care vs ER
                      </Link>
                      <Link
                        href="/schedule"
                        className="text-xs font-semibold text-slate-600 hover:text-primary-blue underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
                        onClick={closePalette}
                      >
                        Save Your Spot
                      </Link>
                    </div>
                  </div>

                  <ul
                    id={listboxId}
                    role="listbox"
                    aria-label="Service finder results"
                    className="mt-2 max-h-[46vh] overflow-auto rounded-xl border border-slate-200 divide-y divide-slate-100"
                  >
                    {results.length === 0 ? (
                      <li className="p-4 text-sm text-slate-600">
                        No matches for <span className="font-semibold text-slate-900">“{query.trim()}”</span>.
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Link
                            href="/services"
                            onClick={closePalette}
                            className="inline-flex items-center justify-center min-h-[40px] px-4 rounded-lg bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-colors"
                          >
                            Browse services <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
                          </Link>
                          <Link
                            href="/schedule"
                            onClick={closePalette}
                            className="inline-flex items-center justify-center min-h-[40px] px-4 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm font-bold hover:bg-slate-50 transition-colors"
                          >
                            Save your spot
                          </Link>
                        </div>
                      </li>
                    ) : (
                      results.map((r, idx) => (
                        <li key={r.id} className="bg-white">
                          <button
                            type="button"
                            id={`sf-option-${r.id}`}
                            role="option"
                            aria-selected={idx === activeIndex}
                            onMouseEnter={() => setActiveIndex(idx)}
                            onClick={() => handleSelect(r.href, r.recommendation)}
                            className={`w-full text-left p-4 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none ${
                              idx === activeIndex ? "bg-slate-50" : ""
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  {r.recommendation === "er-911" ? (
                                    <TriangleAlert className="h-4 w-4 text-red-600 shrink-0" aria-hidden />
                                  ) : (
                                    <Stethoscope className="h-4 w-4 text-primary-blue shrink-0" aria-hidden />
                                  )}
                                  <p className="font-extrabold text-slate-900 truncate">{r.label}</p>
                                </div>
                                <p className="mt-1 text-sm text-slate-600">{r.description}</p>
                              </div>
                              <span
                                className={`shrink-0 inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold ${badgeStyles(
                                  r.recommendation
                                )}`}
                              >
                                {r.recommendation === "urgent-care"
                                  ? "Urgent Care"
                                  : r.recommendation === "er-911"
                                    ? "ER / 911"
                                    : "Info"}
                              </span>
                            </div>
                          </button>
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Emergency? Call 911. For life-threatening symptoms, don&apos;t wait.
                </p>
              </div>

              <AnimatePresence>
                {confirm911Open ? (
                  <motion.div
                    key="confirm-911"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    className="border-t border-slate-200 bg-slate-50 p-4 sm:p-5"
                    aria-label="Confirm emergency action"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-extrabold text-slate-900">Potential emergency</p>
                        <p className="text-sm text-slate-600">
                          If symptoms are severe, sudden, or worsening, call 911. Otherwise, see guidance.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                        <a
                          href="tel:911"
                          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-xl bg-red-600 text-white font-extrabold hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                        >
                          <PhoneCall className="h-4 w-4" aria-hidden />
                          Call 911
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            const href = pendingHref ?? "/resources/urgent-care-vs-er";
                            setConfirm911Open(false);
                            closePalette();
                            router.push(href);
                          }}
                          className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                        >
                          View guidance
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirm911Open(false)}
                          className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl text-slate-700 font-bold hover:bg-slate-200/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
