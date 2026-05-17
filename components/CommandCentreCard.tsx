"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type CommandCentreCardProps = {
  title: string;
  description: string;
  href: string;
  layer: string;
};

export function CommandCentreCard({
  title,
  description,
  href,
  layer,
}: CommandCentreCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="h-full"
    >
      <Link
        href={href}
        className="group relative flex h-full min-h-[200px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-700/40 bg-slate-900/40 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md transition-colors hover:border-amber-500/50 hover:bg-slate-900/60"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        <div className="relative z-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-400/90">
            {layer}
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-50 group-hover:text-amber-50 transition-colors">
            {title}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
            {description}
          </p>
        </div>
        <span className="relative z-10 mt-8 block text-xs font-semibold uppercase tracking-wider text-amber-400/90 transition-transform duration-300 group-hover:translate-x-1">
          Enter →
        </span>
      </Link>
    </motion.div>
  );
}
