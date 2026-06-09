"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { education, certifications } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          id="education"
          label="Education"
          title="Qualifications & Certifications"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
              Education
            </h3>
            {education.map((item) => (
              <div
                key={item.degree}
                className="rounded-lg border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-sm"
              >
                <p className="font-semibold text-white">{item.degree}</p>
                <p className="mt-1 text-sm text-slate-400">{item.institution}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-purple-400">
              Certifications
            </h3>
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-lg border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-sm"
              >
                <p className="text-sm text-slate-300">{cert}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
