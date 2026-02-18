import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type IconTileProps = {
  icon: LucideIcon;
  className?: string;
};

export function IconTile({ icon: Icon, className }: IconTileProps) {
  return (
    <span
      className={cn(
        "p-2 rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors shrink-0",
        className
      )}
    >
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  );
}

