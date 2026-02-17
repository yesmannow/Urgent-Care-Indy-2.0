"use client";

import Link from "next/link";
import { FileText, UserPlus, FlaskConical, ExternalLink } from "lucide-react";

const b2bResources = [
  {
    title: "Treatment Authorization",
    href: "/forms/auth.pdf",
    icon: FileText,
    external: false,
  },
  {
    title: "New Account Setup",
    href: "/contact?type=new-account",
    icon: UserPlus,
    external: false,
  },
  {
    title: "Drug Test Panel Info",
    href: "/services/occupational-health/drug-testing",
    icon: FlaskConical,
    external: false,
  },
  {
    title: "DOT Guidelines",
    href: "https://www.fmcsa.dot.gov/",
    icon: ExternalLink,
    external: true,
  },
] as const;

export function EmployerSidebar() {
  return (
    <aside
      className="lg:sticky lg:top-24 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl"
      aria-labelledby="employer-sidebar-heading"
    >
      <div className="p-6">
        <h2
          id="employer-sidebar-heading"
          className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4"
        >
          Quick Resources
        </h2>
        <ul className="space-y-2">
          {b2bResources.map(({ title, href, icon: Icon, external }) => (
            <li key={href}>
              <Link
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Icon className="h-5 w-5 text-blue-400 shrink-0" aria-hidden />
                <span>{title}</span>
                {external && (
                  <ExternalLink className="h-4 w-4 text-slate-400 shrink-0 ml-auto" aria-hidden />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/forms/auth.pdf"
          className="mt-6 flex items-center justify-center gap-2 w-full min-h-[48px] px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <FileText className="h-5 w-5" aria-hidden />
          Download Treatment Authorization Form
        </Link>
      </div>
    </aside>
  );
}
