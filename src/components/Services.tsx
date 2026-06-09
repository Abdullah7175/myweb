"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { services, serviceIcons } from "@/data/portfolio";

export default function Services() {
  return (
    <section className="relative px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          id="services"
          label="Services"
          title="What I Build & Manage"
          subtitle="End-to-end technology services — from websites to cloud infrastructure."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-shadow hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded border border-cyan-500/30 bg-cyan-500/10 font-mono text-lg text-cyan-300">
                {serviceIcons[service.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-slate-700 bg-slate-950/80 px-2 py-0.5 font-mono text-[10px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
