"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import Expertise from "./Expertise";
import Experience from "./Experience";
import Education from "./Education";
import PageShell from "./PageShell";
import { summary, siteConfig, techStack } from "@/data/portfolio";

export default function AboutClient() {
  return (
    <PageShell>
      <section className="relative flex min-h-[60vh] items-center px-6 pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.08)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 bg-gradient-to-r from-cyan-200 via-white to-purple-300 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl"
          >
            About {siteConfig.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mx-auto max-w-2xl text-slate-400"
          >
            Professional background, qualifications, and career history — the details
            behind the services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <Link
              href="/#packages"
              className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 hover:text-cyan-300"
            >
              ← Back to Services
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            id="profile"
            label="Profile"
            title="Executive Summary"
            subtitle="7+ years engineering reliable systems at enterprise scale."
          />

          <div className="grid gap-8 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
              transition={{ delay: 0.15 }}
              className="rounded-lg border border-purple-500/20 bg-slate-900/40 p-8 backdrop-blur-sm lg:col-span-2"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-purple-300">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-slate-700 bg-slate-950/80 px-3 py-1.5 font-mono text-[11px] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Expertise />
      <Experience />
      <Education />
    </PageShell>
  );
}
