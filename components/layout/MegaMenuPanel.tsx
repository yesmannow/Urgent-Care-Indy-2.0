"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MegaMenuConfig } from "./megaMenus";
import BrandImage from "@/components/ui/BrandImage";
import { IconTile } from "@/components/ui/IconTile";

type MegaMenuPanelProps = {
  menu: MegaMenuConfig;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  id?: string;
  autoFocus?: boolean;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function MegaMenuPanel({
  menu,
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
  id,
  autoFocus = false,
}: MegaMenuPanelProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen || !autoFocus) return;
    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a[href]");
    firstLink?.focus();
  }, [autoFocus, isOpen]);

  if (!isOpen) return null;

  const FeatureLink = isExternalHref(menu.feature.href) ? "a" : Link;
  const featureLinkProps = isExternalHref(menu.feature.href)
    ? { href: menu.feature.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: menu.feature.href };

  return (
    <div
      ref={menuRef}
      id={id}
      className="absolute left-1/2 -translate-x-1/2 top-full mt-0 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave ?? onClose}
      aria-label={menu.title}
    >
      <div className="grid grid-cols-12 gap-0 w-[800px] max-w-[96vw] overflow-hidden rounded-xl shadow-2xl ring-1 ring-slate-900/5">
        <div className="col-span-8 bg-white p-6 grid grid-cols-2 gap-6">
          {menu.items.map((item) => {
            const Icon = item.icon;
            const ItemLink = isExternalHref(item.href) ? "a" : Link;
            const itemLinkProps = isExternalHref(item.href)
              ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
              : { href: item.href };

            return (
              <ItemLink
                key={item.href}
                {...itemLinkProps}
                onClick={onClose}
                className="group flex gap-4 rounded-xl p-3 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <IconTile icon={Icon} />
                <span className="min-w-0">
                  <span className="block font-bold text-slate-900 leading-tight">
                    {item.name}
                  </span>
                  <span className="block text-sm text-slate-500 mt-0.5 leading-snug">
                    {item.desc}
                  </span>
                </span>
              </ItemLink>
            );
          })}
        </div>

        <div className={`col-span-4 relative flex flex-col justify-end p-6 ${menu.feature.color}`}>
          <div className="absolute inset-0" aria-hidden>
            <BrandImage
              src={menu.feature.image}
              alt={`${menu.title} feature background`}
              fill
              className="object-cover object-center opacity-25"
              sizes="320px"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
          </div>

          <div className="relative z-10 text-white">
            <div className="text-xs font-bold uppercase tracking-widest text-white/80">
              Featured
            </div>
            <div className="mt-2 text-xl font-extrabold leading-tight">
              {menu.feature.title}
            </div>
            <p className="mt-2 text-sm text-white/90 leading-relaxed">
              {menu.feature.desc}
            </p>
            <FeatureLink
              {...featureLinkProps}
              onClick={onClose}
              className="mt-5 inline-flex items-center justify-center w-full min-h-[44px] rounded-lg bg-white/15 hover:bg-white/25 border border-white/25 text-white font-bold transition-colors"
            >
              {menu.feature.cta} <ArrowRight className="h-4 w-4 ml-2" aria-hidden />
            </FeatureLink>
          </div>
        </div>
      </div>
    </div>
  );
}
