import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CarePathPage } from "@/components/care/CarePathPage";
import { getCarePath } from "@/lib/carePaths";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params;
  const path = getCarePath(slug);
  if (!path) return {};
  return {
    title: path.seo.title,
    description: path.seo.description,
  };
}

export default function CarePathRoutePage({ params }: Props) {
  const { slug } = params;
  const path = getCarePath(slug);
  if (!path) notFound();
  return <CarePathPage path={path} />;
}

export function generateStaticParams() {
  return [
    { slug: "strep-throat" },
    { slug: "flu" },
    { slug: "uti" },
    { slug: "sprains-strains" },
    { slug: "cuts-stitches" },
    { slug: "vaccines-shots" },
  ];
}
