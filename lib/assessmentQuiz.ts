export type QuizOutcome = "er-911" | "urgent-care" | "primary-care" | "self-care" | "info";

export type QuizAnswer = {
  id: string;
  label: string;
  next: string;
};

export type QuizQuestionNode = {
  type: "question";
  id: string;
  title: string;
  description?: string;
  answers: QuizAnswer[];
};

export type QuizResultNode = {
  type: "result";
  id: string;
  outcome: QuizOutcome;
  title: string;
  summary: string;
  nextSteps: string[];
  primaryCta?: {
    label: string;
    href: string;
  };
};

export type QuizNode = QuizQuestionNode | QuizResultNode;

export const ASSESSMENT_QUIZ_START_ID = "start";

export const assessmentQuizNodes: QuizNode[] = [
  {
    type: "question",
    id: "start",
    title: "Should I come in today?",
    description:
      "This quick quiz provides general guidance only and is not medical advice. If you think it’s an emergency, call 911.",
    answers: [
      { id: "start-yes", label: "Start quiz", next: "red-flags" },
      { id: "start-no", label: "Skip (see options)", next: "skip" },
    ],
  },
  {
    type: "result",
    id: "skip",
    outcome: "urgent-care",
    title: "Quick options",
    summary: "Use these shortcuts to get help fast.",
    nextSteps: [
      "If life-threatening: call 911.",
      "If you need care today: save your spot and walk in.",
      "If you’re unsure: review urgent care vs ER guidance.",
    ],
    primaryCta: { label: "Save Your Spot", href: "/schedule" },
  },

  {
    type: "question",
    id: "red-flags",
    title: "Any emergency warning signs right now?",
    description:
      "Select the option that best fits. If symptoms are severe, sudden, or worsening, call 911.",
    answers: [
      {
        id: "rf-yes",
        label:
          "Yes: chest pain, severe trouble breathing, stroke symptoms, fainting, uncontrolled bleeding, severe head injury, or severe allergic reaction",
        next: "result-er",
      },
      { id: "rf-no", label: "No emergency warning signs", next: "severity" },
      { id: "rf-unsure", label: "Not sure", next: "result-er-caution" },
    ],
  },
  {
    type: "result",
    id: "result-er",
    outcome: "er-911",
    title: "Call 911 / go to the ER",
    summary: "Your answers suggest a potential emergency.",
    nextSteps: [
      "Call 911 if symptoms are severe or rapidly worsening.",
      "Do not drive yourself if you feel unsafe to travel.",
      "If safe, bring your ID and medication list.",
    ],
  },
  {
    type: "result",
    id: "result-er-caution",
    outcome: "er-911",
    title: "When in doubt, choose safety",
    summary: "If you’re unsure and symptoms feel serious, call 911 or go to the ER.",
    nextSteps: [
      "If symptoms are severe: call 911 now.",
      "If symptoms are not severe: review urgent care vs ER guidance.",
      "If you still aren’t sure: call us for help deciding.",
    ],
  },

  {
    type: "question",
    id: "severity",
    title: "How severe are your symptoms?",
    answers: [
      { id: "sev-mild", label: "Mild (annoying but manageable)", next: "duration" },
      { id: "sev-moderate", label: "Moderate (impacting my day)", next: "duration" },
      { id: "sev-severe", label: "Severe (hard to function)", next: "result-er-caution" },
    ],
  },
  {
    type: "question",
    id: "duration",
    title: "How long has this been going on?",
    answers: [
      { id: "dur-today", label: "Started today / last 24 hours", next: "type" },
      { id: "dur-few", label: "2–7 days", next: "type" },
      { id: "dur-long", label: "More than a week", next: "result-primary-care" },
      { id: "dur-recurring", label: "Recurring / ongoing issue", next: "result-primary-care" },
    ],
  },
  {
    type: "question",
    id: "type",
    title: "Which best matches your situation?",
    answers: [
      { id: "type-illness", label: "Illness (sore throat, fever, cough, UTI, etc.)", next: "illness-check" },
      { id: "type-injury", label: "Injury (sprain, cut, possible fracture, burn)", next: "injury-check" },
      { id: "type-work", label: "Work-related / DOT / employer service", next: "result-occ" },
      {
        id: "type-primary",
        label: "Ongoing care (annual physical, prevention, chronic condition management)",
        next: "result-primary-care",
      },
      { id: "type-other", label: "Other / not sure", next: "result-uc-general" },
    ],
  },

  {
    type: "question",
    id: "illness-check",
    title: "Any of these apply?",
    description: "These common illness scenarios are often appropriate for urgent care.",
    answers: [
      { id: "ill-yes", label: "Yes (I have one of these)", next: "result-uc-general" },
      { id: "ill-no", label: "No / not sure", next: "result-uc-general" },
    ],
  },
  {
    type: "question",
    id: "injury-check",
    title: "Is the injury severe or deformity is present?",
    description: "If you can’t bear weight, have severe pain, or a deformity, consider ER evaluation.",
    answers: [
      { id: "inj-severe", label: "Yes (severe, deformity, or can’t bear weight)", next: "result-er-caution" },
      { id: "inj-not", label: "No (minor/moderate injury)", next: "result-uc-injury" },
    ],
  },

  {
    type: "result",
    id: "result-uc-general",
    outcome: "urgent-care",
    title: "Urgent care is likely a good fit",
    summary: "Walk-ins are welcome. If symptoms worsen or feel emergent, choose ER/911.",
    nextSteps: [
      "Save your spot online and come in today.",
      "Bring your ID, insurance card (if applicable), and medication list.",
      "If you’re not improving or symptoms escalate, go to the ER.",
    ],
    primaryCta: { label: "Save Your Spot", href: "/schedule" },
  },
  {
    type: "result",
    id: "result-uc-injury",
    outcome: "urgent-care",
    title: "Come in for evaluation",
    summary: "Many minor injuries can be evaluated and treated in urgent care, including imaging when appropriate.",
    nextSteps: [
      "Save your spot online and come in today.",
      "If bleeding is uncontrolled, severe pain develops, or you feel unsafe: call 911.",
    ],
    primaryCta: { label: "Save Your Spot", href: "/schedule" },
  },
  {
    type: "result",
    id: "result-primary-care",
    outcome: "primary-care",
    title: "Primary care is likely the best fit",
    summary: "For ongoing or recurring concerns, a primary care relationship helps with continuity and long-term planning.",
    nextSteps: [
      "For annual physicals, prevention, or chronic conditions: start with primary care.",
      "If you need same-day evaluation for an acute issue, urgent care can still help.",
      "If symptoms become severe or emergent, call 911.",
    ],
    primaryCta: { label: "Visit Primary Care Indy", href: "https://primarycareindy.com" },
  },
  {
    type: "result",
    id: "result-occ",
    outcome: "info",
    title: "Employer / occupational services",
    summary: "DOT physicals, employer testing, and work-related services are available.",
    nextSteps: [
      "Review occupational health services.",
      "Save your spot or call for scheduling assistance.",
    ],
    primaryCta: { label: "Occupational Health Services", href: "/services/occupational-health" },
  },
];

export function getQuizNode(id: string): QuizNode | undefined {
  return assessmentQuizNodes.find((n) => n.id === id);
}
