"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { siteConfig } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          id="contact"
          label="Contact"
          title="Establish Connection"
          subtitle="Available for DevOps, cloud infrastructure, and full-stack development opportunities."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-3"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="group rounded-lg border border-cyan-500/20 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
          >
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-500">
              Email
            </p>
            <p className="text-sm text-slate-200 transition-colors group-hover:text-cyan-200">
              {siteConfig.email}
            </p>
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="group rounded-lg border border-purple-500/20 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-purple-400/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
          >
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-purple-500">
              Phone
            </p>
            <p className="text-sm text-slate-200 transition-colors group-hover:text-purple-200">
              {siteConfig.phone}
            </p>
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-slate-700 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-slate-500 hover:shadow-[0_0_30px_rgba(148,163,184,0.1)]"
          >
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
              LinkedIn
            </p>
            <p className="text-sm text-slate-200 transition-colors group-hover:text-white">
              abdullahanis-it
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
