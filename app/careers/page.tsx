import type { Metadata } from "next";
import Link from "next/link";
import { Heart, HandHeart, Users } from "lucide-react";
import { ObfuscatedEmail } from "@/components/contact/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Careers | Join Urgent Care Indy",
  description:
    "Join the Urgent Care Indy family. Medical Assistant, X-Ray Technician, Nurse Practitioner openings. Compassion, devotion, respect.",
};

const values = [
  {
    title: "Compassion",
    description: "Moved by the suffering of others to give of ourselves and our time.",
    icon: Heart,
  },
  {
    title: "Devotion",
    description: "Doing all things wholeheartedly, with great care and attention to detail.",
    icon: HandHeart,
  },
  {
    title: "Respect",
    description: "Treating all people with dignity as unique, valuable individuals.",
    icon: Users,
  },
];

const openings = [
  "Medical Assistant (MA)",
  "X-Ray Technician",
  "Nurse Practitioner",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-3xl mx-auto px-4 py-12 md:py-16">
        {/* Hero */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Join the Urgent Care Indy Family
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We&apos;re always looking for people who share our values and want to
            make a difference in our community.
          </p>
        </header>

        {/* Values */}
        <section className="mb-12" aria-labelledby="values-heading">
          <h2 id="values-heading" className="text-2xl font-bold text-slate-900 mb-6">
            Our Values
          </h2>
          <p className="text-slate-600 mb-6">
            We build our team around three core values: Compassion, Devotion,
            and Respect. If that sounds like you, we&apos;d love to hear from
            you.
          </p>
          <ul className="space-y-4">
            {values.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary-blue">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{title}</h3>
                  <p className="text-sm text-slate-600 mt-0.5">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Current Openings */}
        <section className="mb-12" aria-labelledby="openings-heading">
          <h2 id="openings-heading" className="text-2xl font-bold text-slate-900 mb-6">
            Current Openings
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            {openings.map((role) => (
              <li key={role} className="font-medium">
                {role}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-slate-600">
            To apply, please email your resume to{" "}
            <ObfuscatedEmail local="careers" /> or drop it off at our front desk
            at 7911 N Michigan Rd, Indianapolis, IN 46268.
          </p>
        </section>

        <p>
          <Link href="/" className="text-primary-blue font-medium hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
