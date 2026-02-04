'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, PenTool, Gauge } from 'lucide-react';

const interests = [
  {
    title: "Formula 1",
    subtitle: "Precision at 300 km/h",
    icon: <Gauge className="w-6 h-6 text-red-500" />,
    description:
      "I’m drawn to Formula 1 for the same reasons I enjoy systems engineering — marginal gains, reliability under pressure, and relentless optimization. Strategy, aerodynamics, and racecraft all operating at the edge.",
    accent: "from-red-500/10 via-red-500/5 to-transparent",
    border: "group-hover:border-red-500/50",
  },
  {
    title: "Sketching Cars",
    subtitle: "Form before function",
    icon: <PenTool className="w-6 h-6 text-blue-500" />,
    description:
      "I sketch cars to understand proportion, flow, and design intent. It’s a slow, deliberate process that sharpens how I observe structure — something that carries over into how I design software systems.",
    accent: "from-blue-500/10 via-blue-500/5 to-transparent",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Systems & Internals",
    subtitle: "How things actually work",
    icon: <Cpu className="w-6 h-6 text-emerald-500" />,
    description:
      "I enjoy going beneath abstractions — operating systems, databases, networks — understanding why a system behaves the way it does instead of just how to use it.",
    accent: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    border: "group-hover:border-emerald-500/50",
  },
];

export default function Interests() {
  return (
    <section className="relative px-6 py-32 overflow-hidden select-none">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
            Interests<span className="text-primary">.</span>
          </h1>
          <p className="mt-4 text-neutral-500 font-mono text-sm uppercase tracking-[0.3em]">
            Obsessions beyond the terminal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {interests.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-neutral-900/40 p-8 md:p-12 backdrop-blur-md transition-all duration-500 ${item.border}`}
            >
              {/* Animated Accent Gradient */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-shrink-0 p-4 rounded-2xl bg-neutral-800/50 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>

                <div className="max-w-3xl">
                  <h2 className="text-3xl font-bold tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                    {item.title}
                  </h2>

                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-neutral-500">
                    {item.subtitle}
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
