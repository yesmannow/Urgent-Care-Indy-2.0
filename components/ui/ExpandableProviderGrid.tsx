"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Award, ChevronDown, GraduationCap, ShieldCheck, Star, X } from "lucide-react";
import { providerProfiles, type ProviderProfile } from "@/lib/providers";

function trustIcon(text: string) {
  const t = text.toLowerCase();
  if (t.includes("fellow") || t.includes("board") || t.includes("cert")) return ShieldCheck;
  if (t.includes("director") || t.includes("lead") || t.includes("leadership")) return Award;
  if (t.includes("university") || t.includes("preceptor") || t.includes("graduate")) return GraduationCap;
  return Star;
}

type ExpandableProviderGridProps = {
  headingId: string;
};

export function ExpandableProviderGrid({ headingId }: ExpandableProviderGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const providers = useMemo(() => providerProfiles, []);

  useEffect(() => {
    if (!expandedId) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpandedId(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [expandedId]);

  const collapse = () => {
    const prev = expandedId;
    setExpandedId(null);
    if (prev) Promise.resolve().then(() => buttonRefs.current[prev]?.focus());
  };

  return (
    <div aria-labelledby={headingId}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {providers.map((p) => (
          <ProviderCard
            key={p.id}
            provider={p}
            expanded={expandedId === p.id}
            onToggle={() => setExpandedId((cur) => (cur === p.id ? null : p.id))}
            onCollapse={collapse}
            buttonRef={(node) => {
              buttonRefs.current[p.id] = node;
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ProviderCard({
  provider,
  expanded,
  onToggle,
  onCollapse,
  buttonRef,
}: {
  provider: ProviderProfile;
  expanded: boolean;
  onToggle: () => void;
  onCollapse: () => void;
  buttonRef: (node: HTMLButtonElement | null) => void;
}) {
  const panelId = `provider-panel-${provider.id}`;
  const titleId = `provider-title-${provider.id}`;

  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 380, damping: 34 }}
      className="rounded-2xl overflow-hidden shadow-medical bg-white border border-slate-100"
    >
      <div className="relative aspect-square">
        <Image
          src={provider.imageSrc}
          alt={`${provider.name}${provider.credentials ? `, ${provider.credentials}` : ""}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={provider.id === "james-pike" || provider.id === "karina-white"}
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-extrabold text-slate-900 border border-slate-200">
            {provider.role}
          </span>
          {provider.credentials ? (
            <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-700 border border-slate-200">
              {provider.credentials}
            </span>
          ) : null}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 id={titleId} className="font-extrabold text-slate-900 text-lg leading-tight">
              {provider.name}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{provider.shortBio}</p>
          </div>
          <button
            ref={buttonRef}
            type="button"
            onClick={onToggle}
            className="shrink-0 inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-xl border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            aria-expanded={expanded}
            aria-controls={panelId}
            aria-label={expanded ? `Hide bio for ${provider.name}` : `View bio for ${provider.name}`}
          >
            {expanded ? <X className="h-5 w-5" aria-hidden /> : <ChevronDown className="h-5 w-5" aria-hidden />}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {provider.specialties.slice(0, expanded ? provider.specialties.length : 3).map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-700"
            >
              {s}
            </span>
          ))}
          {!expanded && provider.specialties.length > 3 ? (
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600">
              +{provider.specialties.length - 3} more
            </span>
          ) : null}
        </div>

        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={titleId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-5">
                <p className="text-sm text-slate-700 leading-relaxed">{provider.fullBio}</p>

                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                    Trust Signals
                  </p>
                  <ul className="space-y-2" role="list">
                    {provider.trustSignals.map((t) => {
                      const Icon = trustIcon(t);
                      return (
                        <li key={t} className="flex items-start gap-2 text-sm text-slate-700">
                          <Icon className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" aria-hidden />
                          <span>{t}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] rounded-xl bg-primary-blue text-white font-extrabold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                  >
                    Save Your Spot <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <button
                    type="button"
                    onClick={onCollapse}
                    className="text-sm font-bold text-slate-600 hover:text-slate-800 underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
                  >
                    Collapse
                  </button>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Information is for general introduction only and may change over time.
                </p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
