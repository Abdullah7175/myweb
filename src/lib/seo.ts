import type { Metadata } from "next";
import { siteConfig } from "@/data/portfolio";

export function createPageMetadata({
  title,
  description,
  keywords,
  path = "",
}: {
  title: string;
  description: string;
  keywords: string[];
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
