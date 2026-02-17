import { Check } from "lucide-react";

const categories = [
  {
    title: "Illness",
    items: ["Strep", "Flu", "Bronchitis", "Sinus Infections"],
  },
  {
    title: "Injury",
    items: ["Sprains", "Strains", "Lacerations (Stitches)", "Minor Burns"],
  },
  {
    title: "Wellness",
    items: ["TB Skin Tests", "Tetanus Shots", "Pregnancy Testing"],
  },
] as const;

export function AilmentGrid() {
  return (
    <section
      className="py-12 md:py-16"
      aria-labelledby="ailment-heading"
    >
      <h2
        id="ailment-heading"
        className="text-2xl md:text-3xl font-bold text-slate-900 mb-8"
      >
        What We Treat
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {categories.map(({ title, items }) => (
          <div
            key={title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-sm text-slate-600"
                >
                  <Check
                    className="h-5 w-5 text-green-500 mr-2 shrink-0"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
