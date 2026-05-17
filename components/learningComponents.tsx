"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { StarStory } from "@/lib/types";


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

// ─── 📊 DYNAMIC BUDGET SIMULATOR component ───
export function BudgetSimulator() {
  const [capexCut, setCapexCut] = useState(0); // 0 to 50%
  const [opexOutsource, setOpexOutsource] = useState(0); // 0 to 30%

  const baseCapex = 68000000;
  const baseOpex = 132000000;

  const currentCapex = baseCapex * (1 - capexCut / 100);
  const currentOpex = baseOpex * (1 - opexOutsource / 100);
  const totalBudget = currentCapex + currentOpex;

  // Derived Performance Metrics
  const securityScore = Math.max(40, Math.round(98 - capexCut * 1.1 - opexOutsource * 0.4));
  const operationalSLA = Math.max(50, Math.round(99 - opexOutsource * 1.4 - capexCut * 0.3));

  // Determine Overall Risk Level
  let riskLevel = "LOW RISK";
  let riskColor = "text-emerald-400 border-emerald-500/20 bg-emerald-500/[0.03]";
  if (capexCut >= 25 || opexOutsource >= 20) {
    riskLevel = "HIGH RISK (CRITICAL VULNERABILITIES)";
    riskColor = "text-rose-400 border-rose-500/20 bg-rose-500/[0.03]";
  } else if (capexCut >= 10 || opexOutsource >= 10) {
    riskLevel = "MEDIUM RISK (OPERATIONAL CAUTION)";
    riskColor = "text-amber-400 border-amber-500/20 bg-amber-500/[0.03]";
  }

  // Get CapEx Impacted Items
  const getCapexImpact = () => {
    if (capexCut >= 40) {
      return "🚨 Structured Cabling branch rollouts suspended entirely. Local user traffic bottlenecks expected at multi-site branches.";
    }
    if (capexCut >= 25) {
      return "⚠️ Access Control Unified Upgrade delayed. Physical security locks and legacy Impro/Suprema server databases remain unpatched.";
    }
    if (capexCut >= 15) {
      return "⚠️ Network Core Switch replacements postponed. Remote sites with no resident IT face higher hardware-failure downtime risk.";
    }
    if (capexCut >= 5) {
      return "⚠️ End-user hardware replenishment cycles delayed from standard 3 years to 4.5 years.";
    }
    return "✅ All scheduled CapEx modernization projects fully funded.";
  };

  // Get OpEx Impacted Items
  const getOpexImpact = () => {
    if (opexOutsource >= 25) {
      return "🚨 Multi-site SD-WAN failover ISP contracts downgraded from dual-redundancy to single circuits (High outage risk).";
    }
    if (opexOutsource >= 15) {
      return "⚠️ Compliance, identity auditing, and security log centralized monitoring frequencies reduced by 50%.";
    }
    if (opexOutsource >= 5) {
      return "⚠️ Support staff shifts reduced. Night-shift MTTR response time SLA degraded from 15 minutes to 2.5 hours.";
    }
    return "✅ Tier-1 service level agreements and 3-ISP multi-site active routing fully operational.";
  };

  // Generate dynamic executive courtroom defense script
  const getDefenseScript = () => {
    if (capexCut === 0 && opexOutsource === 0) {
      return "Presenting a baseline strategic model: funding CapEx upgrades secures our multi-site physical borders and network core switches, while operational OpEx DIA connectivity contracts safeguard active-active uptime guarantees.";
    }
    return `CFO Defense Pitch: "If the board mandates a ${capexCut}% CapEx cut and a ${opexOutsource}% OpEx reduction, my professional warning is that our security score drops to ${securityScore}% and SLA uptime degrades to ${operationalSLA}%. Restricting CapEx directly delays our unified access control standardization, exposing our physical sites to biometric database vulnerabilities. To offset this, I will consolidate overlapping GIZ/KFW client ISP circuits rather than compromising our central core switches, ensuring operational resilience remains intact."`;
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/30 to-slate-950 p-6 sm:p-8 space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-500">
            C-Level Simulation Engine
          </span>
          <h3 className="text-base sm:text-lg font-black text-slate-100 mt-1">
            Boardroom Budget Stress-Test Simulator
          </h3>
        </div>
        <div className={`px-3 py-1.5 rounded-xl border text-[11px] font-extrabold tracking-wide ${riskColor} self-start`}>
          {riskLevel}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sliders Container */}
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-400 uppercase tracking-wider">CapEx Modernization Cut</span>
              <span className="text-amber-400 font-mono">{capexCut}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              value={capexCut}
              onChange={(e) => setCapexCut(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>0% (Fully Funded)</span>
              <span>25% (Delayed Roadmap)</span>
              <span>50% (Emergency Frozen)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-slate-400 uppercase tracking-wider">OpEx Outsource Reduction</span>
              <span className="text-blue-400 font-mono">{opexOutsource}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              value={opexOutsource}
              onChange={(e) => setOpexOutsource(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-medium">
              <span>0% (Full Support)</span>
              <span>15% (Standard)</span>
              <span>30% (SLA Downgrades)</span>
            </div>
          </div>
        </div>

        {/* Live Metrics Display */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4 flex flex-col justify-between">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              Security Maturity
            </span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className={`text-2xl sm:text-3xl font-mono font-black ${securityScore > 75 ? "text-emerald-400" : securityScore > 60 ? "text-amber-400" : "text-rose-500"}`}>
                {securityScore}%
              </span>
            </div>
            <span className="text-[9px] text-slate-400 mt-1">
              Central integrity metrics
            </span>
          </div>

          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4 flex flex-col justify-between">
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              Uptime SLA Status
            </span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className={`text-2xl sm:text-3xl font-mono font-black ${operationalSLA > 75 ? "text-emerald-400" : operationalSLA > 60 ? "text-amber-400" : "text-rose-500"}`}>
                {operationalSLA}%
              </span>
            </div>
            <span className="text-[9px] text-slate-400 mt-1">
              MTTR and bandwidth failover
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Impact Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800/50">
        <div className="p-4 rounded-2xl border border-slate-800/40 bg-slate-900/10 space-y-1">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
            CapEx Projects Impact
          </span>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            {getCapexImpact()}
          </p>
        </div>
        <div className="p-4 rounded-2xl border border-slate-800/40 bg-slate-900/10 space-y-1">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">
            IT Service SLA Impact
          </span>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            {getOpexImpact()}
          </p>
        </div>
      </div>

      {/* Dynamic Boardroom Defense Script */}
      <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs">🎙️</span>
          <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
            Courtroom Defense Alignment Speech
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold italic">
          {getDefenseScript()}
        </p>
      </div>

      {/* Financial Rolldown Summary */}
      <div className="flex flex-wrap gap-4 items-center justify-between bg-slate-950/60 p-4 rounded-2xl border border-slate-850">
        <div className="text-xs">
          <span className="text-slate-500 font-semibold block">REMAINING CAPEX</span>
          <span className="font-mono text-sm font-bold text-amber-400">
            KES {(currentCapex / 1000000).toFixed(1)}M
          </span>
        </div>
        <div className="text-xs">
          <span className="text-slate-500 font-semibold block">REMAINING OPEX</span>
          <span className="font-mono text-sm font-bold text-blue-400">
            KES {(currentOpex / 1000000).toFixed(1)}M
          </span>
        </div>
        <div className="text-xs">
          <span className="text-slate-500 font-semibold block">NEW GRAND TOTAL</span>
          <span className="font-mono text-base font-black text-emerald-400">
            KES {(totalBudget / 1000000).toFixed(1)}M
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── 🔗 STAR VAULT DRAWER OVERLAY component ───
interface StarStoryDrawerProps {
  story: StarStory | null;
  onClose: () => void;
}

export function StarStoryDrawer({ story, onClose }: StarStoryDrawerProps) {
  // Listen for Escape key to close the drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {story && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950 z-50 cursor-pointer"
          />

          {/* Sliding sidebar container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-lg sm:max-w-xl bg-slate-950 border-l border-slate-850 shadow-2xl p-6 sm:p-8 overflow-y-auto z-50 backdrop-blur-md flex flex-col justify-between space-y-6"
          >
            {/* Header info */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-500">
                  ✨ STAR story connector
                </span>
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-900/60 text-xs font-semibold text-slate-400 hover:text-slate-100 hover:border-slate-700 transition"
                >
                  ✕ Close (ESC)
                </button>
              </div>

              <h3 className="text-base sm:text-lg font-black text-slate-50 leading-tight pr-4">
                {story.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800/80 text-slate-400 text-[9px] font-mono uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* STAR Details Layout */}
            <div className="flex-1 space-y-6 py-4 overflow-y-auto pr-1">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">
                  Situation
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-3 border-l-2 border-slate-800">
                  {story.situation}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">
                  Task
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-3 border-l-2 border-slate-800">
                  {story.task}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">
                  Action Taken
                </span>
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-3 border-l-2 border-slate-800 whitespace-pre-wrap">
                  {story.action}
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">
                  Quantifiable Result
                </span>
                <p className="text-xs sm:text-sm text-emerald-300 leading-relaxed pl-3 border-l-2 border-emerald-500/50">
                  {story.result}
                </p>
              </div>
            </div>

            {/* Boardroom Lesson Summary */}
            <div className="p-4 rounded-2xl border border-amber-500/20 bg-amber-500/[0.02] space-y-1 pt-3.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
                Executive Lesson Summary
              </span>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed font-semibold">
                "{story.executiveLesson}"
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
