import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2025-26 Flu Season FAQ | Urgent Care Indy",
  description:
    "When to get the flu shot, high-dose for seniors, flu shot with sports physical. Walk-ins welcome.",
};

const faqs = [
  {
    question: "When should I get the flu shot?",
    answer:
      "We recommend getting your flu shot in September or October, before flu activity typically peaks. It takes about two weeks for protection to develop.",
  },
  {
    question: "Do you offer high-dose for seniors?",
    answer: "Yes. We offer high-dose flu vaccine for adults 65 and older, which is designed to create a stronger immune response.",
  },
  {
    question: "Can I get a flu shot with a sports physical?",
    answer:
      "Yes. You can get a flu shot during the same visit as a sports physical. It’s a great way to knock out both in one trip.",
  },
];

export default function FluFaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          2025-26 Flu Season FAQ
        </h1>

        <div className="space-y-2">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-primary-blue focus-within:ring-offset-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors [&::-webkit-details-marker]:hidden">
                <span>{question}</span>
                <span className="shrink-0 text-slate-400 transition-transform group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-slate-100 px-5 py-4 text-slate-600">
                {answer}
              </div>
            </details>
          ))}
        </div>

        <p className="mt-10">
          <Link
            href="/services"
            className="text-primary-blue font-medium hover:underline"
          >
            ← All services
          </Link>
        </p>
      </div>
    </div>
  );
}
