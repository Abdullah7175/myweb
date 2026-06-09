"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import PageShell from "@/components/PageShell";

export default function HomeClient() {
  return (
    <PageShell>
      <Hero />
      <Services />
      <Packages />
      <Projects />
      <Achievements />
      <Contact />
    </PageShell>
  );
}
