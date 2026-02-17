"use client";

import { useState } from "react";

const SCHEDULER_URL = "https://scheduler.isalushealthcare.com/";

export function SchedulerFrame() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full">
      {isLoading && (
        <div
          className="absolute inset-0 z-10 flex h-[600px] w-full flex-col items-center justify-center gap-4 rounded-xl bg-slate-100 animate-pulse"
          aria-live="polite"
          aria-busy="true"
        >
          <p className="text-sm font-medium text-slate-500">
            Loading provider availability...
          </p>
        </div>
      )}
      <iframe
        src={SCHEDULER_URL}
        title="Book your appointment - provider availability"
        className="w-full h-[600px] border border-slate-200 rounded-xl shadow-medical bg-white"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
