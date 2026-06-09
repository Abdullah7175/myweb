"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          id="experience"
          label="Experience"
          title="Professional Timeline"
          subtitle="A track record of delivering enterprise IT and DevOps solutions."
        />

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent md:left-8 md:block" />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                <div className="absolute left-2.5 top-6 hidden h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_12px_#22d3ee] md:left-6.5 md:block" />

                <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm transition-colors hover:border-cyan-500/25">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                      <p className="font-mono text-sm text-cyan-400">{job.company}</p>
                    </div>
                    <span className="rounded border border-purple-500/30 bg-purple-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-purple-200">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-slate-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
