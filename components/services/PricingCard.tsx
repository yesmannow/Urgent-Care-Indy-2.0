import Link from "next/link";
import { Check } from "lucide-react";

type PricingCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaHref?: string;
  ctaLabel?: string;
  /** Optional second link (e.g. "Fill Out Student Form Online") */
  secondaryLink?: { href: string; label: string };
  popular?: boolean;
  emphasis?: "primary" | "secondary";
};

export function PricingCard({
  title,
  price,
  description,
  features,
  ctaHref = "/schedule",
  ctaLabel = "Save Your Spot",
  secondaryLink,
  popular = false,
  emphasis = "primary",
}: PricingCardProps) {
  const isPrimary = emphasis === "primary";
  return (
    <div
      className={`rounded-2xl p-8 shadow-xl relative overflow-hidden ${
        isPrimary
          ? "bg-white border-2 border-primary-blue"
          : "bg-white border border-slate-200 shadow-medical"
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <div className="mt-4 flex items-baseline text-slate-900">
        <span
          className={`font-extrabold tracking-tight ${
            isPrimary ? "text-5xl" : "text-4xl"
          }`}
        >
          {price}
        </span>
      </div>
      <p className="mt-4 text-slate-500">{description}</p>
      <ul className="mt-6 space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center text-sm text-slate-600"
          >
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" aria-hidden />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-8 space-y-3">
        <Link
          href={ctaHref}
          className={`block w-full font-bold py-3 rounded-xl text-center transition-all focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 ${
            isPrimary
              ? "bg-primary-blue text-white hover:bg-blue-900"
              : "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200"
          }`}
        >
          {ctaLabel}
        </Link>
        {secondaryLink && (
          <Link
            href={secondaryLink.href}
            className="block w-full text-center text-sm font-medium text-primary-blue hover:underline py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 rounded-xl"
          >
            {secondaryLink.label}
          </Link>
        )}
      </div>
    </div>
  );
}
