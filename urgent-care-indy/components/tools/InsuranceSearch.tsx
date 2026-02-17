"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Check } from "lucide-react";

const commonInsurances = [
  "Aetna Choice POS II",
  "Anthem Blue Cross",
  "Cigna Open Access",
  "Humana ChoiceCare",
  "Medicare Part B",
  "UnitedHealthcare Choice Plus",
  "Indiana Medicaid",
  "Tricare",
  "Blue Cross Blue Shield Federal",
];

export function InsuranceSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [verified, setVerified] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return commonInsurances;
    const q = query.trim().toLowerCase();
    return commonInsurances.filter((name) =>
      name.toLowerCase().includes(q)
    );
  }, [query]);

  const isExactMatch = useMemo(() => {
    const q = query.trim();
    if (!q) return false;
    return commonInsurances.some(
      (name) => name.toLowerCase() === q.toLowerCase()
    );
  }, [query]);

  useEffect(() => {
    if (isExactMatch) setVerified(true);
  }, [isExactMatch]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (name: string) => {
    setQuery(name);
    setVerified(true);
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setVerified(false);
    setIsOpen(true);
  };

  const handleFocus = () => setIsOpen(true);

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      <label htmlFor="insurance-search-input" className="sr-only">
        Search insurance plans
      </label>
      <div className="relative">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none"
          aria-hidden
        />
        <input
          id="insurance-search-input"
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Search your insurance plan..."
          className="w-full min-h-[48px] pl-12 pr-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20 text-base"
          autoComplete="off"
          aria-expanded={isOpen}
          aria-controls="insurance-results"
          aria-describedby={verified ? "insurance-verified" : undefined}
        />
      </div>

      {/* Verified badge */}
      <AnimatePresence mode="wait">
        {verified && (
          <motion.div
            id="insurance-verified"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-emerald-800 font-semibold"
          >
            <Check className="h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
            Verified In-Network
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (query.trim() || filtered.length > 0) && (
          <motion.ul
            id="insurance-results"
            role="listbox"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 z-20 mt-1 max-h-60 overflow-auto rounded-xl border border-slate-200 bg-white shadow-xl py-1"
          >
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-slate-500 text-sm">
                No plans match &ldquo;{query.trim()}&rdquo;
              </li>
            ) : (
              filtered.map((name) => (
                <li key={name} role="option">
                  <button
                    type="button"
                    onClick={() => handleSelect(name)}
                    className="w-full text-left px-4 py-3 text-slate-900 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none min-h-[44px]"
                  >
                    {name}
                  </button>
                </li>
              ))
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
