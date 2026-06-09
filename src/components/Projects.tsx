"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section className="relative px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.05)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          id="projects"
          label="Projects"
          title="Featured Deployments"
          subtitle="Enterprise systems delivered for government and business clients."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.05)_0%,transparent_50%)] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-purple-400">
                    {project.client}
                  </span>
                  <span className="font-mono text-[10px] text-slate-600">PRJ-0{index + 1}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{project.name}</h3>
                <p className="mb-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
                <p className="mb-4 border-l-2 border-cyan-500/40 pl-3 text-sm text-cyan-200/80">
                  {project.outcome}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-cyan-500/20 bg-cyan-500/5 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
