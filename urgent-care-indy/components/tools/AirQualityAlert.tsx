"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const DISMISS_KEY = "air-quality-alert-dismissed";

type AirQualityData = {
  aqi: number;
  category: string;
};

export function AirQualityAlert() {
  const [data, setData] = useState<AirQualityData | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const wasDismissed = typeof window !== "undefined" && sessionStorage.getItem(DISMISS_KEY) === "true";
    if (wasDismissed) {
      setDismissed(true);
      setLoading(false);
      return;
    }

    fetch("/api/air-quality")
      .then((res) => res.json())
      .then((json: AirQualityData) => {
        setData(json);
      })
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(DISMISS_KEY, "true");
    }
  };

  if (loading || dismissed || !data) return null;
  if (data.category === "Good" && data.aqi < 50) return null;

  const isUnhealthy = data.category === "Unhealthy";

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`relative flex items-center justify-center gap-4 px-4 py-2.5 text-sm font-medium ${
        isUnhealthy
          ? "bg-red-600 text-white"
          : "bg-amber-400 text-amber-950"
      }`}
    >
      {isUnhealthy ? (
        <span>High Respiratory Risk Today. Reduce outdoor exposure.</span>
      ) : (
        <span>
          Air quality is {data.category.toLowerCase()} today (AQI: {data.aqi}). Sensitive groups may want to limit prolonged outdoor activity.
        </span>
      )}
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Dismiss air quality alert"
      >
        <X className="h-5 w-5" aria-hidden />
      </button>
    </div>
  );
}
