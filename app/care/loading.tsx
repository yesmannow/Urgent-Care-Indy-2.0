import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <section className="bg-white border-b border-slate-200">
        <div className="container py-12 md:py-16">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-5 w-[min(680px,100%)] mt-4" />
          <Skeleton className="h-5 w-[min(520px,100%)] mt-2" />
        </div>
      </section>

      <div className="container py-10 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-[var(--radius-xl)] p-6">
            <Skeleton className="h-12 w-12 rounded-[var(--radius-lg)]" />
            <Skeleton className="h-6 w-40 mt-4" />
            <Skeleton className="h-4 w-full mt-3" />
            <Skeleton className="h-4 w-5/6 mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}

