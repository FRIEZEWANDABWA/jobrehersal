"use client";

import { useState } from "react";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { kemriSection1, kemriSection2 } from "@/lib/kemriData";
import { ExecutiveBrief, ActiveRecallQuiz, TermTooltip } from "@/components/learningComponents";

// Boardroom Terms Glossary definitions for inline hover tooltips
const termsGlossary = [
  { term: "RTO", definition: "Recovery Time Objective - the target duration of time to restore service after an outage." },
  { term: "RPO", definition: "Recovery Point Objective - the maximum age of data that must be recovered from backup storage." },
  { term: "SLA", definition: "Service Level Agreement - contractually committed uptime or response metrics with third-party vendors." },
  { term: "MTTR", definition: "Mean Time To Repair/Restore - key operations metric measuring average duration of downtime resolution." },
  { term: "WAN", definition: "Wide Area Network - network infrastructure connecting multiple geographically separate offices." },
  { term: "CCTV", definition: "Closed-Circuit Television - centralized video surveillance infrastructure managed by IT operations." },
  { term: "ISP", definition: "Internet Service Provider - third-party circuit carriers delivering DIA (Dedicated Internet Access)." },
  { term: "ITIL", definition: "Information Technology Infrastructure Library - standard gold framework for IT Service Management." },
  { term: "CapEx", definition: "Capital Expenditures - one-time major infrastructure procurement costs amortized over years." },
  { term: "OpEx", definition: "Operational Expenditures - ongoing operational software, cloud, and team support subscriptions." },
];

// High-fidelity keyword replacement engine to insert TermTooltips on word boundaries
function renderAnswerWithTooltips(text: string) {
  let parts: (string | React.ReactNode)[] = [text];
  
  termsGlossary.forEach(({ term, definition }) => {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") return part;
      
      // Use exact word boundary \b to prevent matching strings inside other words
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

function Pill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition border ${
        active
          ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
          : "bg-slate-900/40 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
      }`}
    >
      {label}
    </button>
  );
}

export default function KemriPrepPage() {
  const [activeMainTab, setActiveMainTab] = useState<"section1" | "section2">("section1");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSection2Index, setExpandedSection2Index] = useState<number | null>(null);

  // Filter Section 1 items by category AND search query
  const currentCategory = kemriSection1[selectedCategoryIndex];
  
  // If search query is active, search across ALL categories in Section 1
  const filteredSection1Items = searchQuery
    ? kemriSection1.flatMap((sec) =>
        sec.items.filter(
          (item) =>
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      )
    : currentCategory.items;

  // Filter Section 2 items by search query
  const filteredSection2Items = kemriSection2.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* ─── HEADER ─── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Layer 3 · Company mode"
          title="KEMRI-Wellcome Trust"
          description="Global health research enabling operations with secure, reliable infrastructure."
        />
        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
          <Link
            href="/company"
            className="text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← All companies
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-400 hover:text-slate-200"
          >
            Command Centre
          </Link>
        </div>
      </div>

      {/* ─── LENS CONTEXT ─── */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/40 to-slate-950 p-6 sm:p-8 lg:col-span-2">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.05),transparent_50%)]"
            aria-hidden
          />
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Operational Environment & Context
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            A world-class medical research partnership requiring rigorous cybersecurity, absolute data integrity, international collaboration, and operational resilience across distributed labs and campuses. The panel seeks deep cybersecurity maturity, respect for data sovereignty, and service-oriented frameworks that empower complex research rather than policing it.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/10 p-6 sm:p-8 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Rehearsal strip
          </h2>
          <div className="flex flex-col gap-2.5">
            <Link
              href="/star-vault"
              className="w-full text-center rounded-xl border border-slate-800 bg-slate-900/45 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-amber-500/40 hover:text-amber-50"
            >
              STAR vault
            </Link>
            <Link
              href="/mock-interview"
              className="w-full text-center rounded-xl border border-slate-800 bg-slate-900/45 py-2.5 text-xs font-semibold text-slate-200 transition hover:border-amber-500/40 hover:text-amber-50"
            >
              Mock interview
            </Link>
            <Link
              href="/final-prep"
              className="w-full text-center rounded-xl border border-amber-500/20 bg-amber-500/10 py-2.5 text-xs font-semibold text-amber-200 transition hover:border-amber-500/45 hover:text-amber-100"
            >
              Final prep
            </Link>
          </div>
        </div>
      </div>

      {/* ─── PEDAGOGICAL EXECUTIVE BRIEFING ─── */}
      <ExecutiveBrief
        strategy="Establish Frieze Wandabwa as a world-class IT leader ready to modernize KEMRI's multi-site health research networks, bolster national data protection compliance, and lead massive-scale operational resilience."
        terms={["MTTR reduction", "Sovereign data integrity", "Access standardization", "ITIL service delivery", "CapEx optimization"]}
        alert="Do not speak in purely local terms. Emphasize that medical research is collaborative and international; your infrastructure policies must reflect global standards (Wellcome Trust, WHO guidelines) while respecting the Kenya Data Protection Act."
      />

      {/* ─── TABS & CONTROLS ─── */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between border-b border-slate-800/60 pb-4">
          {/* Main Section Selector */}
          <div className="flex gap-2 bg-slate-950 p-1 rounded-2xl border border-slate-800/80 self-start">
            <button
              onClick={() => {
                setActiveMainTab("section1");
                setExpandedSection2Index(null);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeMainTab === "section1"
                  ? "bg-amber-500/10 text-amber-300 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Section 1: General & Behavioral
            </button>
            <button
              onClick={() => {
                setActiveMainTab("section2");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeMainTab === "section2"
                  ? "bg-amber-500/10 text-amber-300 shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Section 2: Executive & Strategic
            </button>
          </div>

          {/* Real-time Keyword Search */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search Q&As instantly..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/40"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5 text-xs text-slate-500 hover:text-slate-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ─── TAB CONTENT: SECTION 1 ─── */}
        {activeMainTab === "section1" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
            
            {/* Active Recall Challenge */}
            <ActiveRecallQuiz
              question="When the KEMRI panel asks you to introduce yourself, how do you immediately establish your experience with multi-site operations?"
              responseGuide="State your 10+ years of East African enterprise leadership first, immediately connect your current role at KOFISI to multi-site branch networks, and reference your major centralized network transformation project as proof of your execution capability."
            />

            {/* Category Pills (Only visible when NOT searching) */}
            {!searchQuery ? (
              <div className="flex flex-wrap gap-2 pb-2">
                {kemriSection1.map((sec, idx) => {
                  const cleanedTitle = sec.title.replace("SECTION ", "Sec ").split(" — ")[1];
                  return (
                    <Pill
                      key={idx}
                      label={cleanedTitle}
                      active={selectedCategoryIndex === idx}
                      onClick={() => setSelectedCategoryIndex(idx)}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="text-xs text-slate-400 font-mono">
                Showing search results for "{searchQuery}" across all Section 1 categories:
              </div>
            )}

            {/* Q&A Cards List */}
            <div className="space-y-6">
              {filteredSection1Items.length > 0 ? (
                filteredSection1Items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl border border-slate-800/80 bg-slate-900/10 p-6 sm:p-8 space-y-4 transition hover:border-slate-850"
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-semibold tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-amber-300 leading-tight">
                      Q: "{item.q}"
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-l border-slate-800 pl-4 italic">
                      "{renderAnswerWithTooltips(item.a)}"
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 rounded-3xl border border-dashed border-slate-800/60 bg-slate-950/20">
                  <p className="text-sm text-slate-500 italic">No questions found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ─── TAB CONTENT: SECTION 2 ─── */}
        {activeMainTab === "section2" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            
            {/* Active Recall Challenge */}
            <ActiveRecallQuiz
              question="If KEMRI's distributed laboratory endpoints are hit with a zero-day ransomware strain, how do you lead the recovery under pressure?"
              responseGuide="Lead with Containment and Isolation first to protect the core research databases. Communicate immediately with the COO and Director in high-level business risk terms, delegate isolation tasks to the Security Operations team, and restore services using isolated offline 3-2-1 backups rather than paying the ransom."
            />

            <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-6 sm:p-8 space-y-4">
              <h4 className="text-sm sm:text-base font-bold text-amber-400">Boardroom Readiness & Executive Stance</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Strategic answers demonstrating high preparedness for senior administrative governance, resource constraints, ransomware response, and succession management in sensitive medical-research environments.
              </p>
            </div>

            <div className="space-y-4">
              {filteredSection2Items.length > 0 ? (
                filteredSection2Items.map((item, index) => {
                  const isExpanded = expandedSection2Index === index;
                  return (
                    <div
                      key={item.id}
                      className={`rounded-2xl border transition-all duration-350 ${
                        isExpanded
                          ? "border-slate-700 bg-slate-900/20 shadow-xl shadow-slate-950/20"
                          : "border-slate-850 bg-slate-950/10 hover:border-slate-800 hover:bg-slate-900/10"
                      }`}
                    >
                      <button
                        onClick={() => setExpandedSection2Index(isExpanded ? null : index)}
                        className="w-full text-left p-5 flex items-center justify-between gap-4"
                      >
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-500 text-[9px] font-mono tracking-wider uppercase"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-amber-200 hover:text-amber-100 block">
                            Q{index + 1}. {item.q}
                          </span>
                        </div>
                        <span className="text-slate-500 text-lg transition-transform duration-200">
                          {isExpanded ? "▲" : "▼"}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-6 pt-2 border-t border-slate-800/60 animate-in fade-in duration-200">
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic pl-4 border-l border-slate-800">
                            "{renderAnswerWithTooltips(item.a)}"
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-10 rounded-3xl border border-dashed border-slate-800/60 bg-slate-950/20">
                  <p className="text-sm text-slate-500 italic">No strategic questions found matching your search.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
