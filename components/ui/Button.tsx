"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-primary-blue text-white hover:bg-blue-700 shadow-medical",
  secondary: "bg-slate-900 text-white hover:bg-slate-800",
  outline: "bg-white text-slate-800 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300",
  ghost: "bg-transparent text-slate-700 hover:bg-slate-100",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-[40px] px-4 py-2 text-sm rounded-[var(--radius-md)]",
  md: "min-h-[44px] px-5 py-2.5 text-sm rounded-[var(--radius-md)]",
  lg: "min-h-[48px] px-6 py-3 text-base rounded-[var(--radius-lg)]",
};

export type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

export type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}

