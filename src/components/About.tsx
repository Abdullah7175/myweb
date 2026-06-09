"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { summary, techStack } from "@/data/portfolio";

export default function About() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          id="about"
          label="About"
          title="Executive Summary"
          subtitle="7+ years engineering reliable systems at enterprise scale."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-lg border border-cyan-500/20 bg-slate-900/40 p-8 backdrop-blur-sm lg:col-span-3"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-purple-500" />
            <p className="leading-relaxed text-slate-300">{summary}</p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Proficient in security, network administration, backup/recovery, and
              performance monitoring using Prometheus, Grafana, and ELK. Adept at
              leading projects, streamlining operations, and integrating emerging
              technologies to improve efficiency and reliability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-lg border border-purple-500/20 bg-slate-900/40 p-8 backdrop-blur-sm lg:col-span-2"
          >
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-purple-300">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded border border-slate-700 bg-slate-950/80 px-3 py-1.5 font-mono text-[11px] text-slate-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
