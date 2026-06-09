"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScanLines from "@/components/ScanLines";

const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-[#020617]" />
  ),
});

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Scene3D />
      <ScanLines />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
