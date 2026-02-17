"use client";

/** Renders a mailto link without exposing the raw email in static HTML. */
const DOMAIN = "urgentcareindy.com";

type ObfuscatedEmailProps = {
  /** Local part of the email (e.g. "info", "careers"). Default: "info". */
  local?: string;
};

export function ObfuscatedEmail({ local = "info" }: ObfuscatedEmailProps) {
  const href = `mailto:${local}@${DOMAIN}`;
  const displayDomain = DOMAIN.replace(".", " [dot] ");
  return (
    <a
      href={href}
      className="text-primary-blue font-medium hover:underline break-all"
    >
      {local} [at] {displayDomain}
    </a>
  );
}
