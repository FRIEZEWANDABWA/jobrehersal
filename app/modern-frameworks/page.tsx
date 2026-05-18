"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExecutiveBrief, TermTooltip } from "@/components/learningComponents";
import { 
  Shield, BookOpen, Activity, ChevronDown, ChevronRight, Check, 
  HelpCircle, ExternalLink, RefreshCw, Cpu, Award, Settings, Terminal
} from "lucide-react";
import { modernFrameworksData, masterFrameworkInterviewQuestion } from "./frameworksData";

const masterbookGlossary = [
  { term: "NIST", definition: "National Institute of Standards and Technology - cybersecurity maturity and risk management framework." },
  { term: "CSF", definition: "Cybersecurity Framework - standardizing cyber defense across core operational lifecycle functions." },
  { term: "CIS", definition: "Center for Internet Security - technical security controls catalog focused on automated cyber threat mitigation." },
  { term: "ITIL", definition: "Information Technology Infrastructure Library - global operational governance framework for stable IT services." },
  { term: "COBIT", definition: "Control Objectives for Information and Related Technology - C-Suite IT governance alignment and value framework." },
  { term: "Zero Trust", definition: "Identity-centric security paradigm operating under the baseline: 'Never trust, always verify.'" },
  { term: "SIEM", definition: "Security Information and Event Management - log aggregation platform identifying anomalous server activities." },
  { term: "SOC", definition: "Security Operations Center - centralized threat monitoring command post utilizing SIEM pipelines." },
  { term: "MTTD", definition: "Mean Time to Detect - operational metric tracking duration from initial attack to discovery." },
  { term: "MTTR", definition: "Mean Time to Respond - operational metric tracking time taken from threat discovery to complete isolation." },
  { term: "SOAR", definition: "Security Orchestration, Automation, and Response - automated playbook tools containing cyber attacks." },
  { term: "MFA", definition: "Multi-Factor Authentication - mandatory security confirmation requiring multiple independent verification factors." },
  { term: "RBAC", definition: "Role-Based Access Control - restricting directory access privileges strictly to active job responsibilities." },
  { term: "PAM", definition: "Privileged Access Management - administrative access monitoring and credential session recording." },
  { term: "SLA", definition: "Service Level Agreement - contractually committed service response and availability metrics." },
  { term: "OLA", definition: "Operational Level Agreement - internal support commitment between technical teams." },
  { term: "CMDB", definition: "Configuration Management Database - tracks assets, application dependencies, and relationships." },
  { term: "EDR", definition: "Endpoint Detection and Response - continuous endpoint monitoring and behavioral threat containment." },
  { term: "XDR", definition: "Extended Detection and Response - cross-platform security telemetry and threat containment." },
  { term: "CAB", definition: "Change Advisory Board - reviews business risks and approvals for system changes." },
  { term: "RCA", definition: "Root Cause Analysis - systematic process determining why systems failures occurred." },
  { term: "RTO", definition: "Recovery Time Objective - target time limit to restore systems after a failure." },
  { term: "RPO", definition: "Recovery Point Objective - maximum acceptable data loss duration during an outage." },
  { term: "BIA", definition: "Business Impact Analysis - identifying critical services and financial impact of downtime." }
];

function renderAnswerWithTooltips(text: string) {
  let parts: (string | React.ReactNode)[] = [text];
  
  masterbookGlossary.forEach(({ term, definition }) => {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return part;
      
      const regex = new RegExp(`\\b(${term})\\b`, "g");
      const subparts = part.split(regex);
      
      return subparts.map((sub, i) => {
        if (i % 2 === 1) {
          return <TermTooltip key={`${term}-${i}`} term={sub} definition={definition} />;
        }
        return sub;
      });
    });
  });
  
  return <>{parts}</>;
}

export default function ModernFrameworksMasterbook() {
  const [activeTab, setActiveTab] = useState<"theory" | "qna" | "simulation">("theory");
  const [selectedFrameworkId, setSelectedFrameworkId] = useState("nist-advanced");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [masteredSections, setMasteredSections] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [revealedQnas, setRevealedQnas] = useState<Record<string, boolean>>({});
  const [revealedSimulation, setRevealedSimulation] = useState(false);

  const selectedFramework = modernFrameworksData.find(f => f.id === selectedFrameworkId) || modernFrameworksData[0];

  // Calculate overall mastery metrics
  const totalSections = modernFrameworksData.reduce((acc, f) => acc + f.sections.length, 0);
  const masteredCount = Object.keys(masteredSections).filter(k => masteredSections[k]).length;
  const overallProgress = totalSections > 0 ? Math.round((masteredCount / totalSections) * 100) : 0;

  // Toggle reveal for Q&As
  const toggleQnaReveal = (id: string) => {
    setRevealedQnas(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Check if current framework is fully mastered
  const currentFrameworkSections = selectedFramework.sections.map(s => s.id);
  const currentFrameworkMasteredCount = currentFrameworkSections.filter(id => masteredSections[id]).length;
  const currentFrameworkProgress = currentFrameworkSections.length > 0
    ? Math.round((currentFrameworkMasteredCount / currentFrameworkSections.length) * 100)
    : 0;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* ─── HEADER ─── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-slate-800/80 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
            Executive OS · Layer 2 · Advanced Enterprise Governance
          </span>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-100 sm:text-4xl">
            Enterprise Governance & Cyber Leadership
          </h1>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            The elite strategic space where CIOs, CISOs, and Heads of IT operate. Govern enterprise risks, lead crisis responses, justify cybersecurity budgets, and ensure operational resilience.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <Link href="/" className="text-sm font-semibold text-amber-400/90 hover:text-amber-200">
            ← Command Centre
          </Link>
          <span className="text-[10px] text-slate-500 font-mono">
            Strategic Leadership Sandbox v2.5
          </span>
        </div>
      </div>

      {/* ─── C-LEVEL EXECUTIVE INTRO PERSPECTIVE ─── */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/40 via-slate-950 to-slate-950 p-6 sm:p-8 space-y-6">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.05),transparent_50%)]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">
          Enterprise Governance & Cyber Leadership
        </span>
        <h2 className="text-base sm:text-lg font-black text-slate-100">
          Strategic Executive OS Layer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="space-y-4">
            <p>
              This represents the layer of corporate technology management where CIOs think, boards are briefed, regulators are satisfied, and organizational resilience is guaranteed.
            </p>
            <div className="border-l-2 border-purple-500/40 pl-3 italic text-slate-400">
              "An IT engineer focuses on resolving technology issues. An enterprise technology leader focuses on managing corporate risk, securing compliance, guiding budgets, and safeguarding business continuity."
            </div>
            <p>
              By mastering these 10 core technology governance modules, you gain the strategic posture to direct large-scale transformations, steer steering committees, and command executive trust.
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/40 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">Governance Mastery Index</span>
              <div className="flex items-end gap-3 mt-2">
                <span className="text-3xl font-black text-slate-100 font-mono leading-none">{overallProgress}%</span>
                <span className="text-[10px] font-mono text-purple-400 mb-1">{masteredCount} of {totalSections} Sections Mastered</span>
              </div>
              <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800 mt-3">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
            <p className="text-[10px] text-slate-500 leading-relaxed mt-4">
              ✅ Marking sections as mastered saves your progress locally, tracking your strategic boardroom preparedness index.
            </p>
          </div>
        </div>
      </div>

      {/* ─── SYSTEM TAB SELECTOR ─── */}
      <div className="border-b border-slate-800/60 pb-px flex gap-6">
        <button
          onClick={() => setActiveTab("theory")}
          className={`pb-4 text-sm font-bold uppercase tracking-wider transition border-b-2 px-1 ${
            activeTab === "theory"
              ? "border-purple-500 text-purple-400 font-extrabold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          📖 Leadership Academy (10 Modules)
        </button>
        <button
          onClick={() => setActiveTab("qna")}
          className={`pb-4 text-sm font-bold uppercase tracking-wider transition border-b-2 px-1 ${
            activeTab === "qna"
              ? "border-purple-500 text-purple-400 font-extrabold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          💬 Boardroom Q&A Simulator
        </button>
        <button
          onClick={() => setActiveTab("simulation")}
          className={`pb-4 text-sm font-bold uppercase tracking-wider transition border-b-2 px-1 ${
            activeTab === "simulation"
              ? "border-purple-500 text-purple-400 font-extrabold"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          👑 C-Level Boardroom Simulation
        </button>
      </div>

      {/* ─── TAB CONTENT: THEORY ACADEMY ─── */}
      {activeTab === "theory" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Framework Left Selector Deck */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block px-1">Academy Syllabus Tracks</span>
            <div className="space-y-2 bg-slate-950 p-2 rounded-2xl border border-slate-800/80 max-h-[600px] overflow-y-auto no-scrollbar">
              {modernFrameworksData.map((fw) => {
                const isSelected = selectedFrameworkId === fw.id;
                // Calculate individual framework progress
                const fwSections = fw.sections.map(s => s.id);
                const fwMastered = fwSections.filter(id => masteredSections[id]).length;
                const fwProg = fwSections.length > 0 ? Math.round((fwMastered / fwSections.length) * 100) : 0;

                return (
                  <button
                    key={fw.id}
                    onClick={() => {
                      setSelectedFrameworkId(fw.id);
                      setExpandedSection(null);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between gap-2 ${
                      isSelected
                        ? "bg-purple-500/10 border-purple-500/30 text-purple-300 shadow-md"
                        : "bg-transparent border-transparent hover:bg-slate-900/60 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs font-black uppercase tracking-wider text-slate-200 block line-clamp-1">
                          {fw.name.replace("MODULE ", "M")}
                        </span>
                        <span className="text-[9px] text-slate-500 block mt-0.5 font-mono">
                          {fw.focusArea}
                        </span>
                      </div>
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full border ${
                        fwProg === 100 
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
                          : "bg-slate-900 border-slate-800 text-slate-400"
                      }`}>
                        {fwProg}%
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-normal line-clamp-1">
                      {fw.shortDesc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Framework Main Academy Reader */}
          <div className="lg:col-span-8 space-y-6">
            {/* Framework Header Panel */}
            <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/10 space-y-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">
                Module Category · {selectedFramework.focusArea}
              </span>
              <h3 className="text-xl font-black text-slate-100">{selectedFramework.name}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedFramework.longDesc}
              </p>
              
              <div className="border-t border-slate-800/80 pt-4 mt-2">
                <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-wider block">🎯 Core Governance Objective</span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mt-1.5 pl-3 border-l-2 border-amber-500/40">
                  {selectedFramework.corePurpose}
                </p>
              </div>

              {/* Display framework custom tables if present */}
              {selectedFramework.tables && selectedFramework.tables.map((table, tIdx) => (
                <div key={tIdx} className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/40 p-4 space-y-2 mt-4">
                  {table.caption && <span className="text-[10px] font-extrabold text-purple-400 uppercase tracking-widest block">{table.caption}</span>}
                  <table className="w-full text-xs text-left text-slate-300 border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-[10px] uppercase font-bold text-slate-500">
                        {table.headers.map((h, hIdx) => <th key={hIdx} className="py-2.5 px-3">{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-b border-slate-900 last:border-transparent hover:bg-slate-900/20">
                          {row.map((cell, cIdx) => <td key={cIdx} className="py-3 px-3">{renderAnswerWithTooltips(cell)}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}

              {/* Progress metric bar for current framework */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
                <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Mastery Status</span>
                <div className="flex items-center gap-3 flex-1 max-w-xs">
                  <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                    <div 
                      className="h-full bg-purple-500 rounded-full transition-all duration-300"
                      style={{ width: `${currentFrameworkProgress}%` }}
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-400">{currentFrameworkProgress}%</span>
                </div>
              </div>
            </div>

            {/* Accordion list */}
            <div className="space-y-4">
              {selectedFramework.sections.map((section) => {
                const isSecExpanded = expandedSection === section.id;
                const isMastered = !!masteredSections[section.id];
                return (
                  <div
                    key={section.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/10 overflow-hidden transition-all duration-300 p-4 sm:p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <button
                        onClick={() => setExpandedSection(isSecExpanded ? null : section.id)}
                        className="flex-1 flex items-start gap-2.5 text-left group"
                      >
                        {isSecExpanded ? (
                          <ChevronDown className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <span className="text-xs sm:text-sm font-extrabold text-slate-200 group-hover:text-slate-100 transition block">
                            {section.title}
                          </span>
                          <span className="text-[10px] text-slate-400 block mt-1 font-semibold">
                            Focus: {section.focus}
                          </span>
                        </div>
                      </button>
                      <button
                        onClick={() => setMasteredSections(prev => ({ ...prev, [section.id]: !prev[section.id] }))}
                        className={`px-3 py-1.5 rounded-xl border text-[10px] font-extrabold uppercase tracking-wider transition flex items-center gap-1.5 flex-shrink-0 ${
                          isMastered
                            ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                            : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-300"
                        }`}
                      >
                        {isMastered ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Mastered</span>
                          </>
                        ) : (
                          <span>Mark Mastered</span>
                        )}
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isSecExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 pl-6 sm:pl-7 border-l-2 border-purple-500/20 space-y-4 mt-3"
                        >
                          <div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Executive Guidance</span>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1">
                              {renderAnswerWithTooltips(section.definition)}
                            </p>
                          </div>

                          <div className="space-y-2.5">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Strategic Checklist Coordinates</span>
                            {section.bullets.map((bullet, idx) => (
                              <div key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2 py-0.5">
                                <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                                <div>{renderAnswerWithTooltips(bullet)}</div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ─── TAB CONTENT: Q&A SIMULATOR ─── */}
      {activeTab === "qna" && (
        <div className="space-y-6">
          <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">Practice Deck</span>
              <h3 className="text-sm font-extrabold text-slate-100">Boardroom Q&A Simulator</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-0.5">
                Practice elite response scripts to command interview trust. Formulate answers that translate technical framework concepts into commercial value, risk reduction, and operational stability.
              </p>
            </div>
            <div className="relative max-w-xs w-full flex-shrink-0">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search practice Q&As..."
                className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modernFrameworksData.flatMap(fw => fw.qnas.map(qna => ({ ...qna, fwName: fw.name }))).filter(item => 
              item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
              item.answer.toLowerCase().includes(searchQuery.toLowerCase())
            ).map((qna) => {
              const isRevealed = !!revealedQnas[qna.id];
              return (
                <div 
                  key={qna.id}
                  className="rounded-3xl border border-slate-800 bg-slate-950/20 overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono uppercase tracking-wider line-clamp-1 max-w-[200px]">
                        {qna.fwName}
                      </span>
                      <span className="text-[10px] text-slate-500 flex items-center gap-1 font-semibold flex-shrink-0">
                        <HelpCircle className="w-3.5 h-3.5" />
                        Active Recall
                      </span>
                    </div>

                    <h4 className="text-sm font-extrabold text-slate-100 leading-snug">
                      Question: "{qna.question}"
                    </h4>

                    <AnimatePresence initial={false}>
                      {isRevealed && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 border-t border-slate-800/80 space-y-2 mt-2"
                        >
                          <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">
                            Strong C-Suite Answer
                          </span>
                          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-900 border-l-2 border-l-emerald-400 italic">
                            {renderAnswerWithTooltips(qna.answer)}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => toggleQnaReveal(qna.id)}
                    className={`w-full py-3 text-xs font-bold uppercase tracking-wider border-t transition duration-200 flex items-center justify-center gap-2 ${
                      isRevealed 
                        ? "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-300"
                        : "bg-purple-500/10 border-purple-500/20 text-purple-300 hover:bg-purple-500/20"
                    }`}
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRevealed ? "rotate-180" : ""} transition-transform duration-300`} />
                    <span>{isRevealed ? "Hide Answer" : "Reveal Strong Answer"}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ─── TAB CONTENT: C-LEVEL BOARDROOM SIMULATION ─── */}
      {activeTab === "simulation" && (
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Main Simulation Panel */}
          <div className="p-6 rounded-3xl border border-amber-500/15 bg-gradient-to-br from-amber-500/[0.02] to-slate-950 p-6 sm:p-8 space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400">
              👑 ELITE SIMULATION LAB
            </span>
            <h3 className="text-xl font-black text-slate-100">IT Modernization & Cyber Alignment Strategy</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
              This represents the peak of boardroom tech management questions. A prospective CEO, CFO, or Board panel asks you to detail how you would completely modernize, govern, secure, and deliver stable IT operations to a fragmented, regional enterprise.
            </p>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Boardroom Inquiry Scenario</span>
              <p className="text-xs sm:text-sm font-extrabold text-slate-200 leading-normal italic">
                "Our business operations are expanding rapidly across multiple local and regional branches. However, we suffer from frequent local network outages, poor tracking of software assets, audit worries, vendor vulnerabilities, and growing concerns about potential ransomware attacks. As our Head of IT, how would you modernize, secure, and stabilize our technology environment?"
              </p>
            </div>

            <AnimatePresence initial={false}>
              {revealedSimulation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4 mt-2"
                >
                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest block">
                    Elite C-Level Executive Response
                  </span>
                  
                  <div className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950 p-5 sm:p-6 rounded-2xl border border-slate-800/80 border-l-4 border-l-emerald-400 italic space-y-4 shadow-xl">
                    <p>
                      {renderAnswerWithTooltips(masterFrameworkInterviewQuestion.answer)}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/40 space-y-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Strategic Breakdown & Why This Works</span>
                    <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 font-bold">•</span>
                        <div><strong>COBIT & NIST CSF</strong> are invoked immediately to show that you govern risk first, creating visibility and board-level metrics before buying tools.</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 font-bold">•</span>
                        <div><strong>CIS Controls</strong> prove that you understand high-yield, step-by-step technical execution (inventory, vulnerability scans, access limits).</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 font-bold">•</span>
                        <div><strong>Zero Trust</strong> shows modern architectural thinking (identities verification, network microsegmentation) isolating lateral threats.</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 font-bold">•</span>
                        <div><strong>ITIL practices</strong> showcase operational stability—confirming you evaluate risk before system changes to minimize customer outages.</div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 font-bold">•</span>
                        <div><strong>SOC/SIEM</strong> metrics verify that you monitor threats actively, using automation to reduce Mean Time to Respond (MTTR).</div>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setRevealedSimulation(!revealedSimulation)}
              className="w-full py-4 text-xs font-bold uppercase tracking-wider rounded-2xl transition duration-200 flex items-center justify-center gap-2 border bg-amber-500/10 border-amber-500/20 text-amber-300 hover:bg-amber-500/20"
            >
              <RefreshCw className={`w-4 h-4 ${revealedSimulation ? "rotate-180" : ""} transition-transform duration-300`} />
              <span>{revealedSimulation ? "Hide Elite Response" : "Reveal Elite Executive Answer"}</span>
            </button>
          </div>

          {/* Interactive Translation Matrix Card */}
          <div className="p-6 rounded-3xl border border-slate-800 bg-slate-900/10 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
              💬 Boardroom Conversational Exercises
            </span>
            <h4 className="text-base font-extrabold text-slate-100">Practice Boardroom Translations</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Below are three typical technological situations. Practice converting the engineering description into executive leadership language to command boardroom authority.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950/40 space-y-2">
                <span className="text-[9px] font-bold text-rose-400 uppercase tracking-widest">Situation 1: Infrastructure Loss</span>
                <p className="text-xs text-slate-400"><strong>Engineering description:</strong> "The hypervisor cluster lost heartbeat connectivity."</p>
                <p className="text-xs text-emerald-400 italic"><strong>Boardroom translation:</strong> "We experienced infrastructure instability affecting service availability, and recovery procedures were initiated immediately to minimize operational disruption."</p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950/40 space-y-2">
                <span className="text-[9px] font-bold text-rose-400 uppercase tracking-widest">Situation 2: Network Outage</span>
                <p className="text-xs text-slate-400"><strong>Engineering description:</strong> "The core switch had spanning-tree loop issues and packets were dropping."</p>
                <p className="text-xs text-emerald-400 italic"><strong>Boardroom translation:</strong> "We experienced network instability affecting operational availability, but containment procedures minimized broader business disruption."</p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-800 bg-slate-950/40 space-y-2">
                <span className="text-[9px] font-bold text-rose-400 uppercase tracking-widest">Situation 3: Systems Update Outage</span>
                <p className="text-xs text-slate-400"><strong>Engineering description:</strong> "I patched the database schema with Nessus scripts."</p>
                <p className="text-xs text-emerald-400 italic"><strong>Boardroom translation:</strong> "We executed risk-prioritized vulnerability remediation across core application pools to protect compliance and transactional integrity."</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
