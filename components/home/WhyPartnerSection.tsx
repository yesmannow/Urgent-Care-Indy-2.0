import Image from "next/image";
import { Clock, DollarSign, MessageSquare } from "lucide-react";
import { getPexelsImageUrl } from "@/lib/pexels";

const FALLBACK = "/images/clinic/interior/Screenshot of UrgentCare Indy - Google Maps (6).jpg";

const pillars = [
  {
    title: "Fast Turnaround",
    desc: "Average door-to-door time is under 60 minutes. Less downtime for your team.",
    icon: Clock,
  },
  {
    title: "Cost Savings vs. ER",
    desc: "We cost significantly less than an Emergency Room visit for non-life-threatening injuries.",
    icon: DollarSign,
  },
  {
    title: "Dedicated Account Management",
    desc: "Status updates to employers immediately after the visit. Direct communication with HR and adjusters.",
    icon: MessageSquare,
  },
];

export async function WhyPartnerSection() {
  const imgUrl =
    (await getPexelsImageUrl("corporate handshake", { orientation: "landscape" })) ??
    FALLBACK;

  return (
    <section
      className="py-16 md:py-20 bg-white border-t border-slate-200"
      aria-labelledby="why-partner-heading"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <Image
              src={imgUrl}
              alt="Professional business partnership"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2
              id="why-partner-heading"
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-8"
            >
              Why Partner With Us
            </h2>
            <div className="space-y-6">
              {pillars.map(({ title, desc, icon: Icon }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-teal-500" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
                    <p className="text-slate-600 mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
