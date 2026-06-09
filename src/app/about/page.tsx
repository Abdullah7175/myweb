import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";
import { siteConfig } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: `About ${siteConfig.name} | Portfolio & Professional Background`,
  description:
    "Professional portfolio of Syed Abdull — 7+ years in DevOps, full-stack development, cloud infrastructure, and enterprise IT. View experience, qualifications, and certifications.",
  keywords: siteConfig.aboutKeywords,
  path: "/about",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: "DevOps Engineer & Full-Stack Developer",
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  url: `${siteConfig.url}/about`,
  sameAs: [siteConfig.linkedin],
  knowsAbout: siteConfig.aboutKeywords,
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "NED University of Engineering & Technology",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Charles Sturt University",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <AboutClient />
    </>
  );
}
