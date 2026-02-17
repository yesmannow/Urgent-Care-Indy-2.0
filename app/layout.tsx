import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { AirQualityAlert } from "@/components/tools/AirQualityAlert";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCTA } from "@/components/ui/MobileStickyCTA";
import { ChatWidget } from "@/components/ChatWidget";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://urgentcareindy.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Urgent Care Indy | Immediate Care & Occupational Health in Indianapolis",
    template: "%s | Urgent Care Indy",
  },
  description:
    "No appointment needed, $35 sports physicals. Pike Township urgent care on N Michigan Rd. Walk-in care, occupational health, X-ray, DOT physicals. Michigan Rd medical—open M–F 8am–6:30pm, Sat 8am–2:30pm.",
  keywords: [
    "Urgent Care",
    "Indianapolis",
    "Pike Township Urgent Care",
    "Michigan Rd Medical",
    "DOT Physical",
    "X-Ray",
    "urgent care near me",
  ],
  authors: [{ name: "Urgent Care Indy", url: SITE_URL }],
  creator: "Urgent Care Indy",
  publisher: "Urgent Care Indy",
  applicationName: "Urgent Care Indy",
  category: "Medical",
  manifest: "/manifest.json",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Urgent Care Indy",
    title: "Urgent Care Indy | Immediate Care & Occupational Health in Indianapolis",
    description:
      "No appointment needed, $35 sports physicals. Family-owned urgent care on N Michigan Rd. Walk-in care, occupational health, X-ray, DOT physicals. Open M–F 8am–6:30pm, Sat 8am–2:30pm.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Urgent Care Indy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urgent Care Indy | Immediate Care & Occupational Health in Indianapolis",
    description:
      "No appointment needed, $35 sports physicals. Family-owned urgent care on N Michigan Rd. Walk-in care, occupational health, X-ray, DOT physicals. Open M–F 8am–6:30pm, Sat 8am–2:30pm.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    // Optional: add when you have them
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} font-sans antialiased bg-slate-50 min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
        >
          Skip to content
        </a>
        <JsonLd />
        <AirQualityAlert />
        <Header />
        <main id="main-content" className="flex-1 pb-20 sm:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <ChatWidget />
      </body>
    </html>
  );
}
