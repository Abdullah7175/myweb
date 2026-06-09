import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { siteConfig } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: `${siteConfig.name} | Web Development & DevOps Services`,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  path: "",
});

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  areaServed: "Worldwide",
  serviceType: [
    "Web Development",
    "DevOps",
    "Cloud Infrastructure",
    "Power BI Dashboards",
    "Enterprise Portal Development",
  ],
  sameAs: [siteConfig.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
