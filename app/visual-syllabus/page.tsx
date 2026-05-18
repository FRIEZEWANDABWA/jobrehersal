"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ZoomableImage } from "@/components/ZoomableImage";
import { Shield, BookOpen, Compass, ChevronRight, Award, Flame, Target } from "lucide-react";

const visualChapters = [
  {
    chapterNumber: "CHAPTER 1",
    title: "Executive IT Leadership Mindset",
    eyebrow: "Book 1 · Section A · Core Foundations",
    imageSrc: "/executive-decision-framework.jpg",
    imageAlt: "Executive Decision Framework (Impact, Risk, Cost, Speed, Scale)",
    readHref: "/knowledge/leadership/chapter-1-mindset",
    description:
      "Transition from senior technician to strategic technology leader. True leadership is not about managing systems or outages—it is about protecting business continuity, revenue, and enabling strategic growth.",
    principles: [
      {
        label: "The Real Job",
        value: "Protecting business continuity, revenue, and strategic growth through technology leadership."
      },
      {
        label: "Decision Framework",
        value: "Every IT decision must pass through a strict: IMPACT → RISK → COST → SPEED → SCALE filter."
      },
      {
        label: "Boardroom Thinking",
        value: "Executives silence technical detail. They prioritize decision defense: Why now? What if we delay? ROI? Why this option?"
      }
    ],
    traps: [
      "Talking about tools or switches too early in interviews",
      "Describing incident management as merely fixing outages rather than reputation management",
      "Failing to quantify operational risk in terms of revenue and compliance exposure"
    ],
    metrics: ["Business Criticality Score", "Outage Revenue Cost / Hour", "SLA Compliance %", "Risk Mitigation ROI"]
  },
  {
    chapterNumber: "CHAPTER 2",
    title: "Aligning IT Strategy with Business Objectives",
    eyebrow: "Book 1 · Section A · Core Foundations",
    imageSrc: "/executive-alignment-playbook.jpg",
    imageAlt: "IT Strategy & Business Alignment Playbook (B -> I -> K -> G)",
    readHref: "/knowledge/leadership/section-2-alignment",
    description:
      "Move beyond 'supporting the business' to directly generating and protecting business outcomes. This section implements the elite B → I → K → G strategic alignment playbook to build trust and defend technology investment.",
    principles: [
      {
        label: "True Alignment",
        value: "IT decisions directly influence business outcomes. If the business wins, IT contributed; if the business fails, IT is part of the problem."
      },
      {
        label: "The B-I-K-G Cycle",
        value: "Business Objectives mapped directly to IT Translation, verified by Key Performance Metrics (KPIs), and sustained by rigorous Governance."
      },
      {
        label: "The 6 Strategic Drivers",
        value: "Every strong technology initiative must defend one of six drivers: Revenue, Risk, Efficiency, Experience, Cost, or Scalability."
      }
    ],
    traps: [
      "Vague descriptions of 'aligning with business strategy' without showing the translation mechanics",
      "Secret prioritization of IT projects without a transparent scoring model or steering committee",
      "No governance cycle to keep the strategy alive and hold vendors/partners accountable"
    ],
    metrics: ["B-I-K-G Alignment Index", "TCO (Total Cost of Ownership)", "Vendor SLA Compliance %", "Operational Efficiency Delta"]
  },
  {
    chapterNumber: "CHAPTER 3",
    title: "IT Roadmaps, Prioritization & C-Suite Defense",
    eyebrow: "Book 1 · Section A · Core Foundations",
    imageSrc: "/executive-roadmaps-prioritization.jpg",
    imageAlt: "IT Roadmaps & C-Suite Decision Prioritization (A -> P -> S -> E -> M)",
    readHref: "/knowledge/leadership/chapter-3-roadmaps-prioritization",
    description:
      "A roadmap is not a checklist of projects—it is a controlled business transformation strategy. Deciding what gets done first, what gets delayed, and how to defend technology investments in the boardroom.",
    principles: [
      {
        label: "Roadmap Spine",
        value: "Flows sequentially through A → P → S → E → M: Assess deeply, Prioritize wisely, Sequence intelligently, Execute disciplined, and Measure relentlessly."
      },
      {
        label: "Prioritization Matrix",
        value: "Prioritize transparently using an objective formula: IMPACT × URGENCY × RISK × ROI × DEPENDENCY, not loudest voice."
      },
      {
        label: "Sequencing Ladder",
        value: "Reliability before innovation: STABILIZE (stop bleeding) → STANDARDIZE (remove chaos) → AUTOMATE → OPTIMIZE → INNOVATE."
      }
    ],
    traps: [
      "Attempting big-bang 'all-at-once' roadmaps that disrupt business continuity",
      "Leading budget defense pitches with technical needs ('new switches') instead of business exposure ('outage risk')",
      "Failing to protect roadmap focus by saying yes to every flashy executive vanity project"
    ],
    metrics: ["Roadmap Velocity", "Outage MTTR / MTTD", "Project Scored Priority Backlog", "Security Posture Score Delta"]
  }
];

export default function VisualSyllabusPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Immersive C-Suite Header */}
      <header className="relative z-10 -mx-4 mb-8 border-b border-slate-800/80 bg-slate-950/92 px-4 py-8 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        <div className="max-w-4xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-500 border border-amber-500/20">
              Visual Learning Lab
            </span>
            <span className="text-xs text-slate-500">Executive Edition</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Executive Visual Syllabus
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-400">
            Audit the entire strategic IT leadership syllabus through premium, high-resolution visual playbooks. 
            Click any graphic to enter high-fidelity zoom, pan, and examination mode—designed for boardroom-ready preparation.
          </p>
        </div>
      </header>

      {/* Main Timeline Content */}
      <div className="mx-auto max-w-6xl space-y-16">
        {visualChapters.map((ch, index) => (
          <motion.section
            key={ch.chapterNumber}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start rounded-2xl border border-slate-800/60 bg-slate-950/30 p-6 shadow-xl shadow-black/25 sm:p-8"
          >
            {/* Left Column: Interactive Thumbnail Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-500/90">
                  {ch.chapterNumber} · INFOGRAPHIC
                </span>
                <span className="text-xs font-semibold text-slate-500">Click to expand & zoom</span>
              </div>
              
              <ZoomableImage src={ch.imageSrc} alt={ch.imageAlt} />

              <div className="rounded-xl border border-slate-850 bg-slate-950/50 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Key Executive Metrics</h4>
                <div className="flex flex-wrap gap-2">
                  {ch.metrics.map((m) => (
                    <span 
                      key={m}
                      className="inline-flex items-center rounded-md bg-slate-900 px-2 py-1 text-xs font-medium text-slate-300 border border-slate-800"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: C-Suite Syllabus Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">{ch.eyebrow}</p>
                <h2 className="text-2xl font-bold tracking-tight text-slate-100">{ch.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{ch.description}</p>
              </div>

              {/* Core Principles */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Compass className="h-4 w-4 text-amber-500" />
                  <span>Strategic Concepts & Frameworks</span>
                </h3>
                <div className="space-y-3">
                  {ch.principles.map((pr) => (
                    <div key={pr.label} className="rounded-lg border border-slate-850/80 bg-slate-950/20 p-3">
                      <p className="text-xs font-bold text-slate-300">{pr.label}</p>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">{pr.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Executive Traps to Avoid */}
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Flame className="h-4 w-4 text-red-400" />
                  <span>Critical Traps to Avoid</span>
                </h3>
                <ul className="list-outside list-disc space-y-1.5 pl-5 text-xs text-slate-400 leading-relaxed">
                  {ch.traps.map((tr) => (
                    <li key={tr}>{tr}</li>
                  ))}
                </ul>
              </div>

              {/* Study Action CTA */}
              <div className="pt-4 border-t border-slate-850 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Award className="h-4 w-4 text-amber-500/80" />
                  <span>C-Level Competency Required</span>
                </div>
                <Link
                  href={ch.readHref}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-amber-400 transition shadow-lg shadow-amber-500/10"
                >
                  <span>Study Full Chapter</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
