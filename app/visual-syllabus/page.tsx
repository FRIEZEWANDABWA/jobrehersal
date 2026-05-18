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
  },
  {
    chapterNumber: "CHAPTER 4",
    title: "Balancing Innovation, Cost, Risk & Stability",
    eyebrow: "Book 1 · Section A · Core Foundations",
    imageSrc: "/executive-innovation-risk-stability.jpg",
    imageAlt: "Balancing Innovation, Cost, Risk & Operational Stability (Value, Risk, Cost, Stability, Scale)",
    readHref: "/knowledge/leadership/chapter-4-innovation-risk-stability",
    description:
      "Deliver innovation without creating operational chaos. Discover how to transition from flashy technology chasing to strategic, business-driven outcomes safely, using the golden sequencing model and C-suite boardroom defense.",
    principles: [
      {
        label: "The Innovation Paradox",
        value: "True innovation is not about adopting flashy new trends—it is about delivering better business outcomes safely, without causing operational downtime or budget spikes."
      },
      {
        label: "The Golden Sequencing Ladder",
        value: "Stabilize operations first, standardize processes next, automate manual tasks third, optimize licensing and vendor spending fourth, and only then innovate."
      },
      {
        label: "C-Suite Boardroom Tests",
        value: "Every emerging tech proposal must satisfy 5 absolute tests: Strategic Fit, Risk & Resilience, Financial Justification (TCO/ROI/COI), Operational Impact, and Measurable Outcomes."
      }
    ],
    traps: [
      "Chasing trending technology (expensive enthusiasm) without mapping it to a real business pain point",
      "Failing to account for the hidden change management and user adoption costs in the TCO calculation",
      "Attempting to automate or optimize an unstable, chaotic IT infrastructure setup"
    ],
    metrics: ["Innovation ROI", "TCO (Total Cost of Ownership)", "Change Adoption Rate %", "Security Posture Drift"]
  },
  {
    chapterNumber: "CHAPTER 5",
    title: "Emerging Tech, AI & Future-Ready Leadership",
    eyebrow: "Book 1 · Section A · Core Foundations",
    imageSrc: "/executive-emerging-tech-ai.jpg",
    imageAlt: "Emerging Technologies, AI & Future-Ready IT Leadership (Problem, Data, Control, Value, Scale)",
    readHref: "/knowledge/leadership/chapter-5-emerging-tech-ai-leadership",
    description:
      "Become an unforgettable tech leader by understanding how to deploy AI, advanced automation, and emerging technologies responsibly for strategic business advantage. Focus on operational intelligence, not trend-chasing.",
    principles: [
      {
        label: "AI as Operational Intelligence",
        value: "AI is not the goal—it is a strategic enabler for better decisions, faster operations, and reduced operational/reputational risk."
      },
      {
        label: "The AI Adoption Framework",
        value: "Every AI proposal must follow: PROBLEM (real business pain) → DATA (clean, reliable, owned) → CONTROL (governance/oversight) → VALUE (measurable KPI) → SCALE (sustainability)."
      },
      {
        label: "Responsible AI Governance",
        value: "Mitigate emerging tech risks through human oversight, audit trails, model explainability, strict security/data boundaries, and compliance with local/global frameworks (e.g. GDPR, DPA)."
      }
    ],
    traps: [
      "Acting like a 'hype merchant' promising AI will solve all problems, or an outdated manager afraid of change",
      "Deploying AI models on top of poor, unstandardized, or dirty data (creates expensive guessing)",
      "Adopting 'black box' AI tools where the recommendation pathway cannot be audited or explained to the board"
    ],
    metrics: ["AI Model Accuracy %", "Incident MTTR Reduction", "Support Ticket Self-Service %", "Compliance Audit Score"]
  },
  {
    chapterNumber: "CHAPTER 6",
    title: "High-Pressure Leadership & Decision-Making Under Fire",
    eyebrow: "Book 1 · Section B · Behavioral & Pressure Foundations",
    imageSrc: "/executive-behavioral-pressure.jpg",
    imageAlt: "High-Pressure Leadership, Executive Trust & Decision-Making Under Fire (Context, Decision, Leadership, Result, Lesson)",
    readHref: "/knowledge/behavioral-pressure/chapter-1-high-pressure-leadership-executive-trust-decisions",
    description:
      "Senior interviews do not test what you know—they predict who you are when pressure arrives. Transition from simple storytelling to demonstrating predictable executive-level ownership, structured calm, and courtroom decision-making under uncertainty.",
    principles: [
      {
        label: "The Ownership Principle",
        value: "Executives hire full ownership, not explanations. Never use blame language (e.g. 'the vendor failed')—instead, focus on how you identified the exposure, took custody, and protected the business."
      },
      {
        label: "Decision-Making Under Uncertainty",
        value: "When information is incomplete, lead using a structured validation spine: FACTS (what is certain) → RISK (exposures) → PRIORITY (urgencies) → ACTION → REVIEW. Remember: delay is also a decision."
      },
      {
        label: "Failure & Incident Leadership",
        value: "Defend high-severity outages or personal failure events cleanly using: OWN (take 100% custody) → CORRECT (immediate mitigation) → IMPROVE (long-term structural solution)."
      }
    ],
    traps: [
      "Getting lost in long, technical STAR narratives ('drama') instead of highlighting clear executive decisions",
      "Using weak language (e.g., 'we were hoping' or 'I tried') that damages your perceived authority",
      "Criticizing previous employers or presenting your professional history as a list of job titles instead of strategic outcomes"
    ],
    metrics: ["Incident Outage MTTR", "SLA Incident Containment %", "Business Ownership Index", "Change Leadership NPS Score"]
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
