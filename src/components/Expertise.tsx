"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { expertise } from "@/data/portfolio";

const icons: Record<string, string> = {
  server: "⬡",
  cloud: "☁",
  code: "⟨/⟩",
  shield: "◈",
  chart: "▲",
  team: "◎",
};

export default function Expertise() {
  return (
    <section className="relative px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.06)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          id="expertise"
          label="Expertise"
          title="Areas of Specialization"
          subtitle="Core competencies across infrastructure, development, and automation."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-shadow hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            >
              <div className="absolute -right-4 -top-4 text-6xl opacity-[0.04] transition-opacity group-hover:opacity-[0.08]">
                {icons[item.icon]}
              </div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded border border-cyan-500/30 bg-cyan-500/10 font-mono text-lg text-cyan-300">
                {icons[item.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
