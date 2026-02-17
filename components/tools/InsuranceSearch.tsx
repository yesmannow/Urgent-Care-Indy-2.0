"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Phone, Search, TriangleAlert } from "lucide-react";
import {
  formatInsuranceLabel,
  matchInsurance,
  searchInsurancePlans,
  type InsurancePlan,
} from "@/lib/insurancePlans";

const PHONE_HREF = "tel:+13179566288";

export function InsuranceSearch({ initialQuery = "" }: { initialQuery?: string }) {
  const inputId = useId();
  const listboxId = useId();

  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const results = useMemo(() => searchInsurancePlans(query, 12), [query]);
  const match = useMemo(() => matchInsurance(query), [query]);
  const active = results[activeIndex] ?? null;

  useEffect(() => {
    // Keep in sync when navigating from preview (?q=...)
    setQuery(initialQuery);
    setOpen(Boolean(initialQuery.trim()));
  }, [initialQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const selectPlan = (p: InsurancePlan) => {
    setQuery(formatInsuranceLabel(p));
    setOpen(false);
    Promise.resolve().then(() => inputRef.current?.focus());
  };

  const activeDescendantId = active ? `ins-option-${active.carrier}-${active.plan}`.replace(/\s+/g, "-") : undefined;

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <label htmlFor={inputId} className="sr-only">
            Search insurance plans
          </label>
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none"
              aria-hidden
            />
            <input
              ref={inputRef}
              id={inputId}
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  setOpen(false);
                  return;
                }
                if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
                  setOpen(true);
                  return;
                }
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActiveIndex((prev) => Math.min(prev + 1, Math.max(0, results.length - 1)));
                  return;
                }
                if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActiveIndex((prev) => Math.max(prev - 1, 0));
                  return;
                }
                if (e.key === "Enter" && open) {
                  if (!active) return;
                  e.preventDefault();
                  selectPlan(active);
                }
              }}
              placeholder="Search your plan (carrier + plan name)…"
              className="w-full min-h-[52px] pl-12 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20 text-base"
              autoComplete="off"
              role="combobox"
              aria-autocomplete="list"
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-controls={listboxId}
              aria-activedescendant={open ? activeDescendantId : undefined}
            />
          </div>
          <p className="mt-2 text-sm text-slate-500">
            This checks our published list. Coverage varies by plan and may change—call to confirm.
          </p>
        </div>
        <a
          href={PHONE_HREF}
          className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[52px] px-5 rounded-xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 shrink-0"
          aria-label="Call to verify insurance"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Verify by phone
        </a>
      </div>

      <AnimatePresence mode="wait">
        {match.type === "exact-plan" ? (
          <motion.div
            key="listed"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-emerald-900 font-semibold"
          >
            <Check className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
            Listed as accepted: {match.carrier} ({match.plan})
          </motion.div>
        ) : match.type === "carrier" ? (
          <motion.div
            key="carrier"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-950 font-semibold"
          >
            <Check className="h-5 w-5 shrink-0 text-primary-blue" aria-hidden />
            Carrier found: {match.carrier}. Select a plan to verify, or call us.
          </motion.div>
        ) : query.trim() ? (
          <motion.div
            key="not-found"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4"
            role="region"
            aria-label="Insurance not found"
          >
            <div className="flex items-start gap-3">
              <TriangleAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" aria-hidden />
              <div className="min-w-0">
                <p className="font-extrabold text-slate-900">Not found in our published list</p>
                <p className="text-sm text-slate-700 mt-1">
                  Plans are sometimes listed under a parent carrier name. For the fastest answer, call us and we’ll
                  verify.
                </p>
                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-xl bg-slate-900 text-white font-extrabold hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    Call to verify
                  </a>
                  <Link
                    href="/payments-insurance"
                    className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                  >
                    Insurance guide
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.ul
            id={listboxId}
            role="listbox"
            aria-label="Insurance search results"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
            className="absolute top-full left-0 right-0 z-20 mt-2 max-h-72 overflow-auto rounded-2xl border border-slate-200 bg-white shadow-xl py-1"
          >
            {results.length === 0 ? (
              <li className="px-4 py-3 text-slate-600 text-sm">
                No matches. Try a carrier name like <span className="font-semibold text-slate-900">Anthem</span> or{" "}
                <span className="font-semibold text-slate-900">UnitedHealthcare</span>.
              </li>
            ) : (
              results.map((p, idx) => {
                const optionId = `ins-option-${p.carrier}-${p.plan}`.replace(/\s+/g, "-");
                const selected = idx === activeIndex;
                return (
                  <li key={formatInsuranceLabel(p)}>
                    <button
                      type="button"
                      id={optionId}
                      role="option"
                      aria-selected={selected}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onClick={() => selectPlan(p)}
                      className={`w-full text-left px-4 py-3 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none min-h-[44px] ${
                        selected ? "bg-slate-50" : "bg-white"
                      }`}
                    >
                      <p className="font-bold text-slate-900">{p.carrier}</p>
                      <p className="text-sm text-slate-600">{p.plan}</p>
                    </button>
                  </li>
                );
              })
            )}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
