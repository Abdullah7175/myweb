import Link from "next/link";
import { siteConfig } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
          © {year} {siteConfig.name}. All systems operational.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500 transition-colors hover:text-cyan-400"
          >
            About
          </Link>
          <p className="font-mono text-[10px] text-slate-600">
            Next.js · Three.js · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
