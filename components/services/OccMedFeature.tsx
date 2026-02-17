import Image from "next/image";

export interface OccMedFeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export function OccMedFeature({
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
}: OccMedFeatureProps) {
  return (
    <div className="py-16 md:py-24 border-b border-slate-100 last:border-0">
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className={`flex flex-col gap-12 items-center ${
            reversed ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Text Side */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
              {title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              {description}
            </p>
            <ul className="inline-block text-left space-y-3">
              <li className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-primary-blue rounded-full mr-3 shrink-0" />
                Fast turnaround times
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <span className="w-2 h-2 bg-primary-blue rounded-full mr-3 shrink-0" />
                Compliance documentation included
              </li>
            </ul>
          </div>

          {/* Image Side */}
          <div className="flex-1 w-full relative group">
            <div
              className="absolute inset-0 bg-primary-blue/5 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"
              aria-hidden
            />
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-medical border border-slate-100">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
