"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Language } from "@/lib/i18n";
import { HeaderES } from "@/components/layout/es/HeaderES";
import { FooterES } from "@/components/layout/es/FooterES";

type Props = {
  children: React.ReactNode;
  language: Language;
};

export function RootChrome({ children, language }: Props) {
  const pathname = usePathname() ?? "/";
  const isSpanish = pathname === "/es" || pathname.startsWith("/es/");

  if (isSpanish) {
    return (
      <>
        <HeaderES />
        {children}
        <FooterES />
      </>
    );
  }

  return (
    <>
      <Header language={language} />
      {children}
      <Footer />
    </>
  );
}
