"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, PhoneCall, TriangleAlert } from "lucide-react";
import {
  ASSESSMENT_QUIZ_START_ID,
  getQuizNode,
  type QuizAnswer,
  type QuizNode,
  type QuizOutcome,
  type QuizQuestionNode,
  type QuizResultNode,
} from "@/lib/assessmentQuiz";

type Step = {
  nodeId: string;
  answerId?: string;
};

function isQuestion(node: QuizNode): node is QuizQuestionNode {
  return node.type === "question";
}

function isResult(node: QuizNode): node is QuizResultNode {
  return node.type === "result";
}

function outcomeStyles(outcome: QuizOutcome) {
  switch (outcome) {
    case "er-911":
      return {
        badge: "bg-red-100 text-red-900 border-red-200",
        icon: TriangleAlert,
        title: "text-red-900",
      };
    case "urgent-care":
      return {
        badge: "bg-blue-100 text-blue-900 border-blue-200",
        icon: CheckCircle2,
        title: "text-slate-900",
      };
    case "self-care":
      return {
        badge: "bg-slate-100 text-slate-800 border-slate-200",
        icon: CheckCircle2,
        title: "text-slate-900",
      };
    case "info":
      return {
        badge: "bg-slate-100 text-slate-800 border-slate-200",
        icon: CheckCircle2,
        title: "text-slate-900",
      };
  }
}

export function AssessmentQuiz() {
  const [history, setHistory] = useState<Step[]>([{ nodeId: ASSESSMENT_QUIZ_START_ID }]);
  const [confirm911, setConfirm911] = useState(false);
  const topRef = useRef<HTMLDivElement | null>(null);

  const currentStep = history[history.length - 1];
  const node = useMemo(() => getQuizNode(currentStep.nodeId), [currentStep.nodeId]);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentStep.nodeId]);

  useEffect(() => {
    if (!confirm911) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setConfirm911(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [confirm911]);

  const goBack = () => {
    setConfirm911(false);
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const restart = () => {
    setConfirm911(false);
    setHistory([{ nodeId: ASSESSMENT_QUIZ_START_ID }]);
  };

  const choose = (answer: QuizAnswer) => {
    setConfirm911(false);
    setHistory((prev) => [...prev, { nodeId: answer.next, answerId: answer.id }]);
  };

  if (!node) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-medical">
        <p className="font-bold text-slate-900">Quiz error</p>
        <p className="text-sm text-slate-600 mt-1">We couldn&apos;t load this quiz step.</p>
        <button
          type="button"
          onClick={restart}
          className="mt-4 inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
        >
          Restart
        </button>
      </div>
    );
  }

  return (
    <div ref={topRef} className="rounded-2xl border border-slate-200 bg-white shadow-medical overflow-hidden">
      <div className="p-6 md:p-8 border-b border-slate-200">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Quick Assessment</p>
            <h2 className="mt-1 text-2xl md:text-3xl font-extrabold text-slate-900">Should I come in?</h2>
            <p className="mt-2 text-sm md:text-base text-slate-600">
              General guidance only. If you believe you are experiencing a medical emergency, call 911.
            </p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-xs font-bold text-slate-500">Progress</p>
            <p className="text-sm font-extrabold text-slate-900">{Math.max(1, history.length - 1)} step(s)</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {isQuestion(node) ? (
              <QuestionStep node={node} onChoose={choose} />
            ) : isResult(node) ? (
              <ResultStep node={node} onConfirm911={() => setConfirm911(true)} />
            ) : null}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={goBack}
              disabled={history.length <= 1}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back
            </button>
            <button
              type="button"
              onClick={restart}
              className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            >
              Restart
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              href="/resources/urgent-care-vs-er"
              className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            >
              Urgent Care vs ER
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-xl bg-primary-blue text-white font-extrabold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
            >
              Save Your Spot <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {confirm911 ? (
          <motion.div
            key="confirm-911-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-[2px] p-4 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-911-title"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setConfirm911(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.99, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.99, y: 6 }}
              transition={{ duration: 0.15 }}
              className="w-full max-w-md rounded-2xl bg-white border border-slate-200 shadow-xl p-5"
            >
              <h3 id="confirm-911-title" className="text-lg font-extrabold text-slate-900">
                Call 911 now?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                If symptoms are severe, sudden, or worsening, call 911 immediately.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="tel:911"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] rounded-xl bg-red-600 text-white font-extrabold hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                >
                  <PhoneCall className="h-5 w-5" aria-hidden />
                  Call 911
                </a>
                <button
                  type="button"
                  onClick={() => setConfirm911(false)}
                  className="inline-flex items-center justify-center min-h-[48px] rounded-xl border border-slate-200 bg-white text-slate-900 font-bold hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function QuestionStep({ node, onChoose }: { node: QuizQuestionNode; onChoose: (a: QuizAnswer) => void }) {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">{node.title}</h3>
      {node.description ? <p className="mt-2 text-slate-600">{node.description}</p> : null}
      <div className="mt-6 grid grid-cols-1 gap-3">
        {node.answers.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => onChoose(a)}
            className="text-left rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
          >
            <p className="font-extrabold text-slate-900">{a.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultStep({ node, onConfirm911 }: { node: QuizResultNode; onConfirm911: () => void }) {
  const styles = outcomeStyles(node.outcome);
  const Icon = styles.icon;

  const primaryCta =
    node.outcome === "er-911" ? (
      <button
        type="button"
        onClick={onConfirm911}
        className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-xl bg-red-600 text-white font-extrabold hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
      >
        <PhoneCall className="h-4 w-4" aria-hidden />
        Call 911
      </button>
    ) : node.primaryCta ? (
      <Link
        href={node.primaryCta.href}
        className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-xl bg-primary-blue text-white font-extrabold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
      >
        {node.primaryCta.label} <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    ) : (
      <Link
        href="/schedule"
        className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 rounded-xl bg-primary-blue text-white font-extrabold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2"
      >
        Save Your Spot <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    );

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="min-w-0">
          <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-extrabold ${styles.badge}`}>
            <Icon className="h-4 w-4" aria-hidden />
            {node.outcome === "er-911"
              ? "ER / 911"
              : node.outcome === "urgent-care"
                ? "Urgent Care"
                : node.outcome === "self-care"
                  ? "Self-care / PCP"
                  : "Info"}
          </div>
          <h3 className={`mt-3 text-xl md:text-2xl font-extrabold ${styles.title}`}>{node.title}</h3>
          <p className="mt-2 text-slate-700">{node.summary}</p>
        </div>
        <div className="shrink-0">{primaryCta}</div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">Next steps</p>
        <ul className="space-y-2" role="list">
          {node.nextSteps.map((s) => (
            <li key={s} className="text-sm text-slate-700 flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" aria-hidden />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
