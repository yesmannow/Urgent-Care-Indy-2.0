import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { ClinicMap } from "@/components/ui/ClinicMap";
import { ContactForm } from "@/components/forms/ContactForm";
import { ObfuscatedEmail } from "@/components/contact/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Contact Us | Urgent Care Indy",
  description:
    "Visit or contact Urgent Care Indy. 7911 N Michigan Rd, Indianapolis. Phone, fax, email. Map and hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container py-8 md:py-12 max-w-5xl px-4">
        {/* Emergency warning at top */}
        <div
          className="mb-8 rounded-xl border-2 border-red-200 bg-red-50 p-4 flex gap-3"
          role="alert"
        >
          <AlertTriangle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" aria-hidden />
          <div>
            <p className="font-bold text-red-900">Have an Emergency?</p>
            <p className="text-sm text-red-800 mt-0.5">
              If you are experiencing chest pain or severe bleeding, call 911
              immediately. Do not use this form.
            </p>
          </div>
        </div>

        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Contact Us
          </h1>
          <p className="mt-2 text-slate-600 text-lg">
            Get in touch or stop by. We&apos;re here to help.
          </p>
        </header>

        {/* Two columns: Contact Info | Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-12">
          {/* Left: Contact Info */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-medical">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Contact Info
            </h2>
            <address className="not-italic space-y-4 text-slate-600">
              <p className="font-semibold text-slate-900">
                7911 N Michigan Rd
                <br />
                Indianapolis, IN 46268
              </p>
              <p>
                <span className="text-slate-500">Phone:</span>{" "}
                <a
                  href="tel:+13179566288"
                  className="text-primary-blue font-medium hover:underline"
                >
                  (317) 956-6288
                </a>
              </p>
              <p>
                <span className="text-slate-500">Fax:</span> (317) 956-6289
              </p>
              <p>
                <span className="text-slate-500">Email:</span>{" "}
                <ObfuscatedEmail />
              </p>
            </address>
            <p className="text-slate-500 text-sm mt-6">
              Mon–Fri: 8am–6:30pm | Sat: 8am–2:30pm
            </p>
            <p className="text-slate-500 text-sm mt-1">
              Near the intersection of N. Michigan Rd and 79th St
            </p>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-medical">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Map at bottom */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Find Us</h2>
          <div className="min-h-[320px] w-full rounded-xl overflow-hidden">
            <ClinicMap className="h-[320px] w-full" />
          </div>
        </div>

        <p>
          <Link href="/" className="text-primary-blue font-medium hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
