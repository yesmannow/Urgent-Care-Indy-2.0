"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export type StickySubNavLink = { label: string; href: string };

type Props = {
  links: StickySubNavLink[];
  /** Optional aria-label for the nav */
  label?: string;
};

export function StickySubNav({ links, label = "Page sections" }: Props) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = document.getElementById("sticky-subnav-sentinel");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => setStuck(!e?.isIntersecting),
      { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="sticky-subnav-sentinel" className="h-0 w-full" aria-hidden />
      <nav
        className={`sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm transition-shadow ${
          stuck ? "shadow-slate-200/50" : ""
        }`}
        aria-label={label}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {links.map(({ label: linkLabel, href }) => (
              <Link
                key={href}
                href={href}
                className="shrink-0 px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-teal-600 hover:bg-teal-50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                {linkLabel}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
