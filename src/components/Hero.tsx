"use client";

import { motion } from "framer-motion";
import { siteConfig, techStack } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          System Online — Portfolio v2.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-4 bg-gradient-to-r from-cyan-200 via-white to-purple-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-8 max-w-2xl font-mono text-sm uppercase tracking-[0.15em] text-cyan-400/90 sm:text-base"
        >
          {siteConfig.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-400"
        >
          Architecting cloud-native systems, automating deployments, and building
          data-driven applications for enterprise-scale infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded border border-cyan-400/50 bg-cyan-500/10 px-8 py-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-200 transition-all hover:bg-cyan-500/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          >
            Initialize Contact
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-purple-500/40 bg-purple-500/5 px-8 py-3 font-mono text-xs uppercase tracking-[0.2em] text-purple-200 transition-all hover:bg-purple-500/15 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-2"
        >
          {techStack.slice(0, 8).map((tech) => (
            <span
              key={tech}
              className="rounded border border-slate-700/80 bg-slate-900/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-400"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-8 w-5 rounded-full border border-cyan-500/40 p-1"
          >
            <div className="mx-auto h-2 w-1 rounded-full bg-cyan-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
