"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

type Props = {
  text: string;
  label?: string;
};

export function CopyAddressButtonES({ text, label = "Copiar dirección" }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 min-h-[36px] px-3 rounded-full bg-white/10 border border-white/15 text-white text-sm font-extrabold hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
      aria-live="polite"
      aria-label={copied ? "Dirección copiada" : label}
    >
      {copied ? <Check className="h-4 w-4" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
      {copied ? "Copiado" : "Copiar"}
    </button>
  );
}

