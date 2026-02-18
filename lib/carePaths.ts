import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bandage,
  Droplets,
  Thermometer,
  Stethoscope,
  Syringe,
} from "lucide-react";

export type CarePath = {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  treatedHere: string[];
  testing: string[];
  whenToGoEr: string[];
  whatToBring: string[];
  seo: {
    title: string;
    description: string;
  };
};

export const carePaths: CarePath[] = [
  {
    slug: "strep-throat",
    title: "Strep Throat",
    summary: "Fast evaluation + rapid testing when appropriate. Get answers and next steps quickly.",
    icon: Stethoscope,
    treatedHere: ["Sore throat", "Fever", "Swollen lymph nodes", "Tonsil pain"],
    testing: ["Rapid strep test", "Flu/COVID testing as needed"],
    whenToGoEr: [
      "Trouble breathing or swallowing saliva",
      "Severe dehydration or confusion",
      "Neck stiffness with high fever",
    ],
    whatToBring: ["Photo ID", "Insurance card (if applicable)", "List of current medications"],
    seo: {
      title: "Strep Throat Testing & Treatment | Urgent Care Indy",
      description:
        "Rapid strep testing and treatment guidance. Know when urgent care is right and when to go to the ER.",
    },
  },
  {
    slug: "flu",
    title: "Flu Symptoms",
    summary: "Fever, body aches, and cough? We can help you figure out what’s going on.",
    icon: Thermometer,
    treatedHere: ["Fever", "Body aches", "Cough", "Fatigue"],
    testing: ["Flu testing", "COVID testing as needed", "Strep testing if throat symptoms"],
    whenToGoEr: [
      "Shortness of breath or chest pain",
      "Blue lips/face",
      "Symptoms suddenly worsen after improving",
    ],
    whatToBring: ["Photo ID", "Insurance card (if applicable)", "List of chronic conditions"],
    seo: {
      title: "Flu Testing & Care | Urgent Care Indy",
      description:
        "Flu evaluation and testing. Understand red flags and the right place to seek care.",
    },
  },
  {
    slug: "uti",
    title: "UTI Symptoms",
    summary: "Burning with urination, urgency, or lower abdominal discomfort—get evaluated quickly.",
    icon: Droplets,
    treatedHere: ["Burning with urination", "Urgency/frequency", "Lower abdominal pain"],
    testing: ["Urinalysis", "Culture sent as needed", "Pregnancy testing when appropriate"],
    whenToGoEr: [
      "Severe back/flank pain with fever or chills",
      "Vomiting or inability to keep fluids down",
      "Pregnancy with severe symptoms",
    ],
    whatToBring: ["Photo ID", "Insurance card (if applicable)", "List of allergies (especially antibiotics)"],
    seo: {
      title: "UTI Testing & Treatment | Urgent Care Indy",
      description:
        "UTI evaluation with on-site urinalysis. Know when to seek urgent care vs. ER.",
    },
  },
  {
    slug: "sprains-strains",
    title: "Sprains & Strains",
    summary: "Twisted ankle or pulled muscle? We can evaluate and help you recover safely.",
    icon: Activity,
    treatedHere: ["Ankle sprain", "Wrist sprain", "Muscle strain", "Swelling and bruising"],
    testing: ["X-ray available when needed to rule out fracture"],
    whenToGoEr: [
      "Deformity or bone visible",
      "Loss of sensation or severe uncontrolled pain",
      "Signs of poor circulation (cold, pale limb)",
    ],
    whatToBring: ["Photo ID", "Insurance card (if applicable)", "Any braces/splints you’re using"],
    seo: {
      title: "Sprain & Strain Care (X-Ray Available) | Urgent Care Indy",
      description:
        "Evaluation for sprains and strains with imaging available when appropriate.",
    },
  },
  {
    slug: "cuts-stitches",
    title: "Cuts, Lacerations & Stitches",
    summary: "Need stitches or wound care? Don’t wait—timing matters for best healing.",
    icon: Bandage,
    treatedHere: ["Minor cuts", "Lacerations", "Wound cleaning", "Bandaging"],
    testing: ["Tetanus booster as needed", "X-ray if foreign body suspected"],
    whenToGoEr: [
      "Uncontrolled bleeding",
      "Deep wound with numbness or loss of function",
      "Bite wounds with severe swelling or fever",
    ],
    whatToBring: ["Photo ID", "Insurance card (if applicable)", "Approx time of injury"],
    seo: {
      title: "Stitches & Wound Care | Urgent Care Indy",
      description:
        "Same-day laceration repair and wound care guidance. Know ER red flags.",
    },
  },
  {
    slug: "vaccines-shots",
    title: "Vaccines & Shots",
    summary: "Need a quick shot visit? We offer common vaccines and injections when available.",
    icon: Syringe,
    treatedHere: ["Routine vaccines (availability varies)", "Tetanus boosters", "Select injections"],
    testing: ["Vaccine screening questions and documentation"],
    whenToGoEr: [
      "Severe allergic reaction (trouble breathing, swelling of face/throat)",
      "Fainting with injury",
    ],
    whatToBring: ["Photo ID", "Insurance card (if applicable)", "Any prior vaccine records"],
    seo: {
      title: "Vaccines & Shots | Urgent Care Indy",
      description:
        "Quick vaccination visits and documentation guidance. Check availability and timing.",
    },
  },
];

export function getCarePath(slug: string) {
  return carePaths.find((path) => path.slug === slug) ?? null;
}

