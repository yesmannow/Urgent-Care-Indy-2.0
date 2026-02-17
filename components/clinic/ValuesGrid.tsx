import { Heart, HandHeart, Users, type LucideIcon } from "lucide-react";

export const coreValues = [
  {
    title: "Compassion",
    description:
      "Moved by the suffering of others to give of ourselves and our time.",
    icon: Heart,
  },
  {
    title: "Devotion",
    description:
      "Doing all things wholeheartedly, with great care and attention to detail.",
    icon: HandHeart,
  },
  {
    title: "Respect",
    description:
      "Treating all people with dignity as unique, valuable individuals.",
    icon: Users,
  },
] as const satisfies readonly { title: string; description: string; icon: LucideIcon }[];

export function ValuesGrid() {
  return (
    <section
      className="py-12 md:py-16"
      aria-labelledby="values-heading"
    >
      <h2
        id="values-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
      >
        Our Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {coreValues.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 transition-shadow duration-200 hover:shadow-medical"
          >
            <div
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-primary-blue mb-5"
              aria-hidden
            >
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
