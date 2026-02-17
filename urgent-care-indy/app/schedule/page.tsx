import type { Metadata } from "next";
import { SchedulerFrame } from "@/components/tools/SchedulerFrame";

export const metadata: Metadata = {
  title: "Book Appointment | Urgent Care Indy",
  description:
    "Save your spot. Select a time below to skip the lobby at Urgent Care Indy.",
};

export default function SchedulePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Save Your Spot
        </h1>
        <p className="mt-2 text-slate-600 text-lg">
          Select a time below to skip the lobby.
        </p>
      </header>

      <SchedulerFrame />

      <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <p className="text-sm font-semibold text-slate-700">Need Help?</p>
        <p className="mt-1 text-slate-600">
          Having trouble? Call us at{" "}
          <a
            href="tel:+13179566288"
            className="text-primary-blue font-medium hover:underline"
          >
            (317) 956-6288
          </a>
          .
        </p>
      </div>
    </div>
  );
}
