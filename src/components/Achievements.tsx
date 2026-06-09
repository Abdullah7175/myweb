"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          id="achievements"
          label="Achievements"
          title="Proven Track Record"
          subtitle="Measurable results from enterprise deployments and automation projects."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-lg border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm transition-colors hover:border-cyan-500/25"
            >
              <p className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text font-mono text-4xl font-bold text-transparent">
                {item.metric}
              </p>
              <h3 className="mt-2 font-semibold text-white">{item.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
