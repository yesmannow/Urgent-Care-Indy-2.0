"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function InsuranceSearchPreview() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    const url = `/insurance?${params.toString()}`;
    window.location.href = url;
  };

  return (
    <motion.section
      className="py-16 md:py-20 bg-slate-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      aria-labelledby="insurance-heading"
    >
      <div className="container max-w-2xl">
        <h2 id="insurance-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Check Your Insurance
        </h2>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <label htmlFor="insurance-search" className="sr-only">
            Search insurance plans
          </label>
          <input
            id="insurance-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter plan or carrier name"
            className="min-h-[44px] flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-blue focus:outline-none focus:ring-2 focus:ring-primary-blue/20"
            aria-describedby="insurance-search-hint"
          />
          <button
            type="submit"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-2 rounded-xl bg-primary-blue px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
          >
            <Search className="h-5 w-5 shrink-0" aria-hidden />
            <span>Search</span>
          </button>
        </form>
        <p id="insurance-search-hint" className="mt-2 text-sm text-slate-500">
          <Link href="/insurance" className="text-primary-blue font-medium hover:underline">
            View full insurance page →
          </Link>
        </p>
      </div>
    </motion.section>
  );
}
