import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AirQualityAlert } from "@/components/tools/AirQualityAlert";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Urgent Care Indy | Immediate Care & Occupational Health",
  description:
    "Skip the ER. Book online at Urgent Care Indy. Treating minor injuries, illness, and offering employer services in Indianapolis.",
  keywords: [
    "Urgent Care Indianapolis",
    "Walk-in Clinic",
    "Occupational Health",
    "X-Ray",
    "DOT Physicals",
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-slate-50 min-h-screen flex flex-col`}
      >
        <AirQualityAlert />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
