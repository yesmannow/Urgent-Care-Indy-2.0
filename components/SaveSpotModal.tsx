"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ExternalLink } from "lucide-react";

// External booking – placeholder; replace with live scheduler URL when ready
const DESTINATION_URL = "https://urgentcareindy.com/save-spot";

const CHECKLIST_ITEMS = [
  "Please have your ID ready",
  "Have insurance card ready",
];

const REDIRECT_SECONDS = 3;

interface SaveSpotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SaveSpotModal({ isOpen, onClose }: SaveSpotModalProps) {
  const [countdown, setCountdown] = useState(REDIRECT_SECONDS);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const redirect = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    window.location.href = DESTINATION_URL;
  }, []);

  // Countdown and auto-redirect when modal opens
  useEffect(() => {
    if (!isOpen) return;
    setCountdown(REDIRECT_SECONDS);
    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          redirect();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isOpen, redirect]);

  // Escape key to close (cancel redirect)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleProceedNow = () => {
    redirect();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="save-spot-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="save-spot-modal-title"
          aria-describedby="save-spot-modal-desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden"
          >
            {/* Medical check-in step accent */}
            <div className="h-1.5 w-full bg-primary-blue" aria-hidden />
            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-blue mb-1">
                Step 1 — Check-in
              </p>
              <h2
                id="save-spot-modal-title"
                className="text-2xl font-bold text-slate-900 tracking-tight mb-2"
              >
                Save Your Spot
              </h2>
              <p
                id="save-spot-modal-desc"
                className="text-slate-600 text-base leading-relaxed mb-6"
              >
                You are being redirected to our secure scheduling portal.
              </p>

              <ul className="space-y-3 mb-8" aria-label="Before you go">
                {CHECKLIST_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-primary-blue"
                      aria-hidden
                    />
                    <span className="text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={handleProceedNow}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary-blue text-white font-semibold text-base hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 transition-colors"
                >
                  Proceed
                  <ExternalLink className="h-4 w-4" aria-hidden />
                </button>
                <p className="text-center text-sm text-slate-500">
                  Redirecting in {countdown} second{countdown !== 1 ? "s" : ""}…
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (timerRef.current) {
                      clearInterval(timerRef.current);
                      timerRef.current = null;
                    }
                    onClose();
                  }}
                  className="text-sm text-slate-500 hover:text-slate-700 underline focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded"
                >
                  Stay on site
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
