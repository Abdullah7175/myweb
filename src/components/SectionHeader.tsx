"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ id, label, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <p
        id={id}
        className="mb-2 font-mono text-xs uppercase tracking-[0.35em] text-cyan-500"
      >
        // {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />
    </motion.div>
  );
}
