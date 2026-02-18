import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

export function Skeleton({ className }: Props) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-[var(--radius-md)] bg-slate-200/70",
        className
      )}
      aria-hidden
    />
  );
}

