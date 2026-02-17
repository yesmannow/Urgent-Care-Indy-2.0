import type { Metadata } from "next";
import { AssessmentQuiz } from "@/components/tools/AssessmentQuiz";

export const metadata: Metadata = {
  title: "Should I Come In? | Quick Assessment | Urgent Care Indy",
  description:
    "A quick, general guidance quiz to help decide urgent care vs ER/911. Not medical advice. If emergency symptoms, call 911.",
};

export default function ShouldIComeInPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container py-12 md:py-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Should I come in today?
        </h1>
        <p className="text-slate-600 mb-8">
          This tool provides general guidance only and does not replace medical advice. If you believe you are having
          a medical emergency, call 911.
        </p>
        <AssessmentQuiz />
      </div>
    </div>
  );
}

