"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { packages, siteConfig } from "@/data/portfolio";

export default function Packages() {
  return (
    <section className="relative px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06)_0%,transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          id="packages"
          label="Packages"
          title="Website Building Packages"
          subtitle="Transparent pricing tiers — pick the plan that fits your business."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col rounded-lg border p-6 backdrop-blur-sm ${
                pkg.popular
                  ? "border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-slate-900/60 shadow-[0_0_40px_rgba(34,211,238,0.12)]"
                  : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-4 py-0.5 font-mono text-[10px] uppercase tracking-widest text-cyan-200">
                  Recommended
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white">{pkg.name}</h3>
                <p className="mt-1 font-mono text-2xl text-cyan-300">{pkg.price}</p>
                <p className="mt-3 text-sm text-slate-400">{pkg.description}</p>
              </div>

              <ul className="mb-6 flex-1 space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-slate-300">
                    <span className="text-cyan-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {pkg.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-purple-500/20 bg-purple-500/5 px-2 py-0.5 font-mono text-[9px] uppercase text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`${pkg.name} Package Inquiry`)}`}
                className={`block rounded py-3 text-center font-mono text-xs uppercase tracking-[0.2em] transition-all ${
                  pkg.popular
                    ? "border border-cyan-400/50 bg-cyan-500/15 text-cyan-200 hover:bg-cyan-500/25"
                    : "border border-slate-700 text-slate-300 hover:border-cyan-500/30 hover:text-cyan-200"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
