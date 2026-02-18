import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceSiloLayout } from "@/components/services/urgent-care/ServiceSiloLayout";
import PricingModule from "@/components/ui/PricingModule";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildFaqPageJsonLd, buildMedicalBusinessJsonLd } from "@/lib/seo/structuredData";

type SiloKey = "illness" | "injury" | "wellness" | "labs";

const SILOS: Record<
  SiloKey,
  {
    title: string;
    subtitle: string;
    description: string;
    conditions: string[];
    fallbackImage: { src: string; alt: string };
    imageQueries: string[] | string;
    includePricing?: boolean;
    faq: Array<{ question: string; answer: string }>;
    metadata: Pick<Metadata, "title" | "description">;
  }
> = {
  illness: {
    title: "Illness & Infection Care",
    subtitle: "Fast evaluation and treatment for common sickness—walk in today.",
    description:
      "From sore throats to sinus pressure, we focus on clear diagnosis, symptom relief, and safe next steps. On-site diagnostics help you leave with answers.",
    conditions: [
      "Cold & Flu",
      "Strep Throat",
      "Sinus Infections",
      "UTI",
      "Bronchitis",
      "IV Hydration Therapy",
      "Ear Wax Removal",
    ],
    fallbackImage: {
      src: "/images/services/urgent-care/tamimt9b-doctor-9964865_1280.jpg",
      alt: "Patient being evaluated in a clinic exam room",
    },
    imageQueries: ["person with thermometer", "clinic exam room"],
    faq: [
      {
        question: "Do I need an appointment for illness visits?",
        answer:
          "Walk-ins are welcome. You can also check in online to reduce time in the waiting room.",
      },
      {
        question: "Do you treat cold, flu, and strep throat?",
        answer:
          "We evaluate many common respiratory and throat symptoms and may offer rapid testing when appropriate. Treatment plans are based on your visit and clinical findings.",
      },
      {
        question: "When should I go to the ER instead of urgent care?",
        answer:
          "If you have severe trouble breathing, chest pain, signs of stroke, uncontrolled bleeding, or a life-threatening emergency, call 911 or go to the nearest ER.",
      },
    ],
    metadata: {
      title: "Urgent Care for Illness | Cold, Flu, Strep, UTI | Urgent Care Indy",
      description:
        "Walk-in urgent care for illness and infection in Indianapolis: cold & flu, strep throat, sinus infections, UTIs, bronchitis, IV hydration therapy, and ear wax removal.",
    },
  },
  injury: {
    title: "Injury & Trauma Care",
    subtitle: "Treat injuries quickly with on-site imaging and clear guidance.",
    description:
      "We handle many non-emergency injuries on-site, including stitches, sprains, minor fractures, and wound care. If a higher level of care is needed, we’ll help you make the right call.",
    conditions: [
      "Laceration Repair (Stitches)",
      "Abscess Incision & Drainage",
      "Foreign Object Removal",
      "Minor Bone Fractures",
      "Sprains & Strains",
      "Wound Care",
      "Ingrown Toenail Treatment",
    ],
    fallbackImage: {
      src: "/images/home/dr-pike-xray.jpg",
      alt: "Provider reviewing imaging during an injury evaluation",
    },
    imageQueries: ["radiologist looking at x-ray", "broken bone blue x-ray"],
    faq: [
      {
        question: "Do you provide stitches and wound care?",
        answer:
          "We treat many non-emergency injuries, including laceration repair (stitches) and wound care, with clear aftercare instructions.",
      },
      {
        question: "Can you do X-rays for injuries?",
        answer:
          "On-site digital X-ray is available for many injury evaluations to help guide next steps.",
      },
      {
        question: "When is an injury an emergency?",
        answer:
          "If there is severe bleeding, major deformity, severe head injury, loss of consciousness, or any life-threatening concern, call 911 or go to the nearest ER.",
      },
    ],
    metadata: {
      title: "Urgent Care for Injuries | Stitches, Sprains, Fractures | Urgent Care Indy",
      description:
        "Walk-in injury care in Indianapolis: stitches, sprains & strains, minor fractures, wound care, foreign object removal, and more.",
    },
  },
  wellness: {
    title: "Wellness & Vaccines",
    subtitle: "Physicals and preventive care—simple, fast, and transparent.",
    description:
      "Need a sports physical, vaccine, or basic screening? Our team offers convenient preventive services designed to keep you on track without a long wait.",
    conditions: [
      "$30 Sports Physicals",
      "TB Skin Testing",
      "Tetanus Shots",
      "Flu Vaccines",
      "B12 Injections",
      "Pregnancy Testing",
    ],
    fallbackImage: {
      src: "/images/home/patient-care.jpg",
      alt: "Provider performing a wellness check in a clinic",
    },
    imageQueries: ["sports doctor checkup", "student athlete physical"],
    faq: [
      {
        question: "Do you offer sports physicals and vaccines?",
        answer:
          "Yes—our wellness services include sports physicals, vaccines and shots, and common screenings. Walk-ins are welcome.",
      },
      {
        question: "How long does a sports physical take?",
        answer:
          "Most visits are quick. If you check in online and bring required forms, the process is usually faster.",
      },
      {
        question: "Do you accept insurance for wellness services?",
        answer:
          "We accept most major insurance plans. Self-pay options are also available; pricing varies by service.",
      },
    ],
    metadata: {
      title: "Urgent Care Wellness | Physicals, Vaccines, Shots | Urgent Care Indy",
      description:
        "Walk-in wellness services in Indianapolis: sports physicals, TB testing, vaccines and shots, B12 injections, and pregnancy testing.",
    },
  },
  labs: {
    title: "Labs & Diagnostics",
    subtitle: "Answers fast—hospital-grade diagnostics with walk-in speed.",
    description:
      "When symptoms need a deeper look, we use on-site testing and imaging to reduce uncertainty and get you a clear plan. Many results are available during your visit.",
    conditions: [
      "Rapid Strep & Flu",
      "Rapid COVID-19",
      "Digital X-Ray",
      "EKG Monitoring",
      "Blood Glucose",
      "Mononucleosis Screening",
    ],
    fallbackImage: {
      src: "/images/services/urgent-care/xray-service.jpg",
      alt: "Digital imaging and diagnostic equipment",
    },
    imageQueries: ["medical laboratory technician", "blood test vials"],
    includePricing: true,
    faq: [
      {
        question: "Do you offer rapid tests like strep, flu, or COVID-19?",
        answer:
          "Rapid testing is available for many common conditions, and some results may be ready during your visit.",
      },
      {
        question: "Do you have X-ray and EKG on-site?",
        answer:
          "Yes—on-site imaging and cardiac monitoring are available for many evaluations to help guide next steps.",
      },
      {
        question: "How much does urgent care cost without insurance?",
        answer:
          "We offer transparent self-pay pricing for common services. Visit the pricing module on this page for estimates.",
      },
    ],
    metadata: {
      title: "Urgent Care Labs & Diagnostics | X-Ray, EKG, Rapid Tests | Urgent Care Indy",
      description:
        "On-site diagnostics in Indianapolis including rapid strep/flu/COVID testing, digital X-ray, EKG monitoring, blood glucose, and mono screening.",
    },
  },
};

export function generateStaticParams() {
  return (Object.keys(SILOS) as SiloKey[]).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const key = slug as SiloKey;
  const silo = SILOS[key];
  if (!silo) return {};
  return silo.metadata;
}

export default async function UrgentCareSiloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const key = slug as SiloKey;
  const silo = SILOS[key];
  if (!silo) return notFound();

  const pagePath = `/services/urgent-care/${key}`;

  const pricingSnippets =
    key === "labs"
      ? [
          { name: "Self-Pay Visit", price: "110.00", description: "Provider evaluation" },
          { name: "Rapid Strep/Flu/COVID", price: "37.00", description: "Results in 15 minutes (typical)" },
          { name: "Sports Physicals", price: "30.00", description: "Fast school clearance" },
          { name: "X-Ray Imaging", price: "85.00", description: "Includes radiology read when applicable" },
          { name: "Abscess Drainage", price: "175.00", description: "Procedure + follow-up guidance" },
        ]
      : [];

  const businessJsonLd = buildMedicalBusinessJsonLd({
    pagePath,
    pageName: `Urgent Care — ${silo.title}`,
    services: [
      ...silo.conditions.map((name) => ({ name })),
      ...pricingSnippets,
    ],
  });

  const faqJsonLd = buildFaqPageJsonLd({
    pagePath,
    questions: silo.faq,
  });

  return (
    <>
      <JsonLdScript data={businessJsonLd} />
      <JsonLdScript data={faqJsonLd} />
      <ServiceSiloLayout
        title={silo.title}
        subtitle={silo.subtitle}
        description={silo.description}
        conditions={silo.conditions}
        imageSrc={silo.fallbackImage.src}
        imageAlt={silo.fallbackImage.alt}
        imageQueries={silo.imageQueries}
        pricingBlock={silo.includePricing ? <PricingModule /> : undefined}
      />
    </>
  );
}
