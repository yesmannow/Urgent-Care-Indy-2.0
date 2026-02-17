import type { Metadata } from "next";
import { PortalBridge } from "@/components/portal/PortalBridge";

export const metadata: Metadata = {
  title: "Patient Portal | Urgent Care Indy",
  description:
    "Access My Medical Locker. New patients: learn how to connect. Returning patients: log in to the portal.",
};

export default function PortalPage() {
  return (
    <div className="min-h-[60vh] bg-surface-cream py-12 px-4 sm:px-6">
      <div className="container max-w-4xl mx-auto">
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Patient Portal
          </h1>
          <p className="mt-2 text-slate-600 text-lg">
            Access your health records and communicate with our team.
          </p>
        </header>

        <PortalBridge />
      </div>
    </div>
  );
}
