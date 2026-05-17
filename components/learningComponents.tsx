"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExecutiveBriefProps {
  strategy: string;
  terms: string[];
  alert: string;
}

export function ExecutiveBrief({ strategy, terms, alert }: ExecutiveBriefProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-amber-500/15 bg-gradient-to-br from-amber-500/[0.03] to-slate-950/40 rounded-2xl overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 bg-amber-500/[0.02]"
      >
        <span className="flex items-center gap-2.5">
          <span className="text-amber-400 text-xs">✦</span>
          <span className="text-xs font-extrabold uppercase tracking-[0.15em] text-amber-200/90">
            Executive Boardroom Briefing
          </span>
        </span>
        <span className="text-xs text-slate-500 font-semibold">
          {isOpen ? "Collapse ▲" : "Expand ▼"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="p-5 border-t border-slate-900 space-y-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Core Strategy Outcome
                </span>
                <p className="text-slate-300 leading-relaxed font-medium">
                  {strategy}
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Gold-Standard Boardroom Terms (Speak These)
                </span>
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {terms.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px] font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-1 border-t border-slate-900/60 pt-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400/90 block">
                  ⚠️ Boardroom Communication Alert
                </span>
                <p className="text-slate-400 leading-relaxed italic">
                  {alert}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface TermTooltipProps {
  term: string;
  definition: string;
}

export function TermTooltip({ term, definition }: TermTooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="relative inline-block border-b border-dashed border-amber-500/60 cursor-help font-bold text-amber-300 hover:text-amber-100 transition duration-150"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(!visible)}
    >
      {term}
      <AnimatePresence>
        {visible && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-64 bg-slate-950 border border-slate-850 p-3.5 rounded-xl shadow-2xl text-left text-xs leading-relaxed font-normal text-slate-300 z-50 block backdrop-blur-md"
          >
            <span className="font-extrabold text-amber-400 block mb-1 text-[11px] tracking-wider uppercase">
              {term}
            </span>
            {definition}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-slate-950" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

interface ActiveRecallQuizProps {
  question: string;
  responseGuide: string;
}

export function ActiveRecallQuiz({ question, responseGuide }: ActiveRecallQuizProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="my-8 rounded-2xl border border-slate-800/80 bg-slate-900/10 p-6 space-y-4">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        <span>🧠 Active Recall Challenge</span>
      </div>
      <h4 className="text-sm font-bold text-amber-300 leading-snug">"{question}"</h4>
      
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 hover:bg-amber-500/20 hover:text-amber-100 text-xs font-bold transition shadow-sm"
        >
          Review Gold Standard Response Guide
        </button>
      ) : (
        <div className="space-y-3.5 animate-in fade-in duration-300">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400/90">
            Gold Standard Response Alignment Structure:
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-l-2 border-emerald-500/60 pl-4 italic bg-slate-950/20 py-2 pr-2 rounded-r-xl">
            "{responseGuide}"
          </p>
          <button
            onClick={() => setRevealed(false)}
            className="text-[10px] text-slate-500 hover:text-slate-400 font-semibold underline"
          >
            Hide Guide
          </button>
        </div>
      )}
    </div>
  );
}
