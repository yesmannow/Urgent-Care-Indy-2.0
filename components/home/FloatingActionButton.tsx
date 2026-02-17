"use client";

import { useState, useEffect } from "react";
import { Phone, CalendarCheck } from "lucide-react";

const PHONE = "tel:+13179566288";

type Props = {
  onSaveSpotClick?: () => void;
};

export function FloatingActionButton({ onSaveSpotClick }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-pb"
      role="region"
      aria-label="Quick actions"
    >
      <div className="flex gap-2 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
        <a
          href={PHONE}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-teal-600 text-white font-bold text-sm hover:bg-teal-500 active:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          aria-label="Call now: (317) 956-6288"
        >
          <Phone size={20} aria-hidden />
          Call Now
        </a>
        {onSaveSpotClick ? (
          <button
            type="button"
            onClick={onSaveSpotClick}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 active:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            aria-label="Save your spot"
          >
            <CalendarCheck size={20} aria-hidden />
            Save Your Spot
          </button>
        ) : (
          <a
            href="/save-your-spot"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 active:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            aria-label="Save your spot"
          >
            <CalendarCheck size={20} aria-hidden />
            Save Your Spot
          </a>
        )}
      </div>
    </div>
  );
}
