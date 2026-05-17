"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExecutiveBrief, ActiveRecallQuiz, TermTooltip } from "@/components/learningComponents";
import { Shield, BookOpen, UserCheck, Activity, Award, FileText, CheckCircle, AlertTriangle, AlertCircle, RefreshCw } from "lucide-react";

// Boardroom Terms Glossary definitions for inline hover tooltips
const masterbookGlossary = [
  { term: "GDPR", definition: "General Data Protection Regulation - the European Union's comprehensive data privacy and compliance framework." },
  { term: "KDPA", definition: "Kenya Data Protection Act - Kenyan national legislation establishing legal frameworks for personal data protection." },
  { term: "ISMS", definition: "Information Security Management System - a structured framework of policies, procedures, and controls under ISO 27001." },
  { term: "MFA", definition: "Multi-Factor Authentication - security protocol requiring multiple independent verification factors." },
  { term: "RBAC", definition: "Role-Based Access Control - restricting systems access authorization strictly to defined team job descriptions." },
  { term: "CIA", definition: "Confidentiality, Integrity, and Availability - the core security triad for information protection." },
  { term: "MTTR", definition: "Mean Time To Restore - average duration required to isolate and resolve operational systems failures." },
  { term: "RTO", definition: "Recovery Time Objective - target time limit to restore operations after a disaster." },
  { term: "SLA", definition: "Service Level Agreement - contractually committed response and availability parameters." },
  { term: "PAM", definition: "Privileged Access Management - advanced monitoring and lifecycle control of administrative credentials." },
  { term: "NVR", definition: "Network Video Recorder - centralized storage system for security CCTV camera feeds." },
  { term: "DPIA", definition: "Data Protection Impact Assessment - formal process to identify and minimize systems data privacy risks." },
  { term: "DPO", definition: "Data Protection Officer - designated governance lead overseeing data privacy compliance." },
  { term: "ODPC", definition: "Office of the Data Protection Commissioner - the regulatory oversight authority in Kenya." },
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

export default function DataProtectionMasterbook() {
  const [activeSystem, setActiveSystem] = useState<"learning" | "interview" | "operational" | "governance" | "executive">("learning");
  const [activeFramework, setActiveFramework] = useState<"gdpr" | "kdpa" | "iso">("gdpr");
  const [activeQnaLevel, setActiveQnaLevel] = useState<"all" | "beginner" | "intermediate" | "executive" | "scenario">("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Interactive Simulator State
  const [gdprAudit, setGdprAudit] = useState(false);
  const [kdpaRegistered, setKdpaRegistered] = useState(false);
  const [isoControlActive, setIsoControlActive] = useState(false);
  const [staffAwareness, setStaffAwareness] = useState(false);

  // Score Calculator
  let complianceScore = 30; // failure baseline
  if (gdprAudit) complianceScore += 20;
  if (kdpaRegistered) complianceScore += 20;
  if (isoControlActive) complianceScore += 20;
  if (staffAwareness) complianceScore += 10;

  let scoreColor = "text-rose-500 border-rose-500/20 bg-rose-500/[0.02]";
  let scoreLabel = "CRITICAL COMPLIANCE EXPOSURE";
  if (complianceScore >= 90) {
    scoreColor = "text-emerald-400 border-emerald-500/20 bg-emerald-500/[0.02]";
    scoreLabel = "BOARDROOM DEFENSIBLE COMPLIANCE POSTURE";
  } else if (complianceScore >= 60) {
    scoreColor = "text-amber-400 border-amber-500/20 bg-amber-500/[0.02]";
    scoreLabel = "MODERATE REGULATORY RISK (ACTION REQUIRED)";
  }

  // Active Template State
  const [selectedTemplate, setSelectedTemplate] = useState<"incident" | "breach" | "access" | "dpia">("incident");

  // Systems Navigation Options
  const systems = [
    { id: "learning", label: "1. Learning System", desc: "What you must understand", icon: BookOpen },
    { id: "interview", label: "2. Interview System", desc: "How to answer professionally", icon: Award },
    { id: "operational", label: "3. Operational System", desc: "How to implement daily", icon: Shield },
    { id: "governance", label: "4. Governance System", desc: "How to manage enterprise environments", icon: Activity },
    { id: "executive", label: "5. Executive Leadership", desc: "How to think like Head of IT / Director", icon: UserCheck },
  ] as const;

  // Verbatim Interview Q&As list
  const qnas = [
    {
      id: 1,
      level: "beginner",
      framework: "gdpr",
      q: "What is GDPR?",
      a: "GDPR is a global privacy and data protection framework that governs how organizations collect, process, store, share, and protect personal data. It emphasizes transparency, accountability, user privacy rights, and strong operational safeguards to protect sensitive information."
    },
    {
      id: 2,
      level: "beginner",
      framework: "gdpr",
      q: "What is personal data?",
      a: "Personal data refers to any information that can identify an individual either directly or indirectly. Examples include names, emails, phone numbers, IP addresses, biometrics, access records, and CCTV footage."
    },
    {
      id: 3,
      level: "intermediate",
      framework: "gdpr",
      q: "What is Privacy by Design?",
      a: "Privacy by Design means security and privacy controls must be integrated into systems and operational processes from the beginning rather than added later. Examples include MFA, encryption, least privilege access, secure backups, audit logging, and network segmentation."
    },
    {
      id: 4,
      level: "intermediate",
      framework: "gdpr",
      q: "What is the difference between a Data Controller and Data Processor?",
      a: "A Data Controller determines why and how personal data is processed, while a Data Processor processes data on behalf of the controller. In enterprise environments, organizations may act as either or both depending on operational responsibilities and managed services."
    },
    {
      id: 5,
      level: "executive",
      framework: "gdpr",
      q: "How would you implement GDPR in a multi-site enterprise environment?",
      a: "I would begin with data discovery and operational risk assessment to understand where personal data exists, how it flows, who accesses it, and the associated operational risks. I would then implement governance controls including: MFA, encryption, access governance, vendor governance, audit logging, backup governance, retention policies, incident response, and continuous monitoring. I would also maintain stakeholder awareness, governance reporting, and regular compliance reviews to ensure operational alignment."
    },
    {
      id: 6,
      level: "executive",
      framework: "kdpa",
      q: "How would you ensure compliance with the Kenya Data Protection Act?",
      a: "I would ensure compliance through governance, operational controls, technical safeguards, staff awareness, vendor governance, and continuous monitoring. This includes: access governance, encryption, retention policies, audit logging, backup governance, vendor assessments, and incident response procedures."
    },
    {
      id: 7,
      level: "executive",
      framework: "iso",
      q: "What is ISO 27001?",
      a: "ISO 27001 is an internationally recognized framework for establishing and managing an Information Security Management System. It provides governance structures, operational controls, and risk management processes that help organizations protect information assets, strengthen operational resilience, and improve compliance."
    },
    {
      id: 8,
      level: "executive",
      framework: "iso",
      q: "How do you manage information security risks?",
      a: "I manage information security risks through continuous risk assessment, governance reviews, monitoring, layered security controls, staff awareness, and operational resilience planning."
    },
    {
      id: 9,
      level: "scenario",
      framework: "gdpr",
      q: "An employee loses a laptop containing sensitive data. What would you do?",
      a: "I would immediately initiate incident response procedures including: isolating access, disabling accounts, assessing encryption status, reviewing audit logs, evaluating exposure risk, and preserving evidence. I would then escalate internally, assess notification obligations, validate containment measures, and implement remediation and lessons learned activities."
    }
  ];

  // Filtering Q&As dynamically
  const filteredQnas = qnas.filter(item => {
    const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) || item.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = activeQnaLevel === "all" || item.level === activeQnaLevel;
    return matchesSearch && matchesLevel;
  });

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* ─── HEADER ─── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-slate-800/80 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
            Executive OS · Layer 1 · Compliance & Risk
          </span>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-100 sm:text-4xl">
            Governance & Compliance Masterbook
          </h1>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            The ultimate executive learning, interview, and operational system customized around GDPR, Kenya DPA, and ISO 27001 for Frieze Wandabwa.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <Link href="/" className="text-sm font-semibold text-amber-400/90 hover:text-amber-200">
            ← Command Centre
          </Link>
          <span className="text-[10px] text-slate-500 font-mono">
            Protected Sandbox Environment v1.2
          </span>
        </div>
      </div>

      {/* ─── SYSTEM NAVIGATION DECK ─── */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {systems.map((sys) => {
          const Icon = sys.icon;
          const isActive = activeSystem === sys.id;
          return (
            <button
              key={sys.id}
              onClick={() => setActiveSystem(sys.id)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-28 ${
                isActive
                  ? "bg-purple-500/10 border-purple-500/35 shadow-xl shadow-purple-500/[0.03]"
                  : "bg-slate-900/10 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/35"
              }`}
            >
              <div className="flex justify-between items-start w-full">
                <Icon className={`w-5 h-5 ${isActive ? "text-purple-400 animate-pulse" : "text-slate-500"}`} />
                {isActive && <span className="absolute right-3 top-3 w-1.5 h-1.5 rounded-full bg-purple-400" />}
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-100 block">{sys.label}</span>
                <span className="text-[9px] text-slate-500 block leading-tight mt-0.5">{sys.desc}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ─── SYSTEM 1: LEARNING SYSTEM ─── */}
      {activeSystem === "learning" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 animate-in fade-in"
        >
          {/* Section Framework Toggle */}
          <div className="flex gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800/80 self-start">
            <button
              onClick={() => setActiveFramework("gdpr")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeFramework === "gdpr" ? "bg-purple-500/10 text-purple-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              GDPR Master Module
            </button>
            <button
              onClick={() => setActiveFramework("kdpa")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeFramework === "kdpa" ? "bg-purple-500/10 text-purple-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Kenya DPA Module
            </button>
            <button
              onClick={() => setActiveFramework("iso")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeFramework === "iso" ? "bg-purple-500/10 text-purple-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              ISO 27001 ISMS Module
            </button>
          </div>

          {/* DYNAMIC FRAMEWORK READING TEXTS */}
          {activeFramework === "gdpr" && (
            <div className="space-y-8">
              {/* GDPR Overview Brief */}
              <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">📖 Module 1 — GDPR Fundamentals</span>
                <h3 className="text-sm font-extrabold text-slate-100">GDPR — General Data Protection Regulation</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  GDPR is the European Union’s flag-bearer data privacy regulation. It governs how organizations <strong>collect, process, store, transfer, protect, and delete personal data</strong>. Even if your physical branch operations sit entirely in East Africa, GDPR remains contractually and legally binding when managing international NGO circuits, multinational client data (Amazon events), or globally hosted cloud databases.
                </p>
                <p className="text-[10px] text-purple-300 font-semibold uppercase tracking-wider">
                  ⚠️ Critical Environment Fit: Gates Foundation, Amazon, international NGOs, cloud systems, and global multi-site operations.
                </p>
              </div>

              {/* GDPR Principles List */}
              <div className="space-y-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">📖 Module 2 — GDPR Principles</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-wider border-b border-slate-800 pb-2">
                  The Six Core Principles You Must Master
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">1. Lawfulness, Fairness & Transparency</span>
                    <p className="text-slate-400">Clearly explain why personal data is collected, how it is processed, and who holds active access.</p>
                    <p className="text-amber-400/90 text-[11px] italic">Example: Biometric visitor logs, Suprema access cards, CCTV cameras, HR booking databases.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">2. Purpose Limitation</span>
                    <p className="text-slate-400">Only collect data for a highly specific, explicit, and legitimate purpose.</p>
                    <p className="text-rose-400 text-[11px] font-semibold">❌ Bad example: Collecting national ID / passport digits just to grant local WiFi access.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">3. Data Minimization</span>
                    <p className="text-slate-400">Only collect the absolute minimum necessary information to provide the service.</p>
                    <p className="text-emerald-400/90 text-[11px] font-semibold">✅ Good example: Guest WiFi signup requiring only email and phone, skipping passports, physical biometrics, or addresses.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">4. Accuracy</span>
                    <p className="text-slate-400">Personal databases must remain continuously updated and verified.</p>
                    <p className="text-slate-400 text-[11px]">Controls: Regular checks of access databases, tenant portals, and client CRM records.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">5. Storage Limitation</span>
                    <p className="text-slate-400">Do not store personal logs indefinitely. Establish clear, hard deletion and archive schedules.</p>
                    <p className="text-slate-400 text-[11px] italic">Example: Deleting CCTV records, removing former staff credentials, purging outdated visitor registers.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">6. Integrity & Confidentiality</span>
                    <p className="text-slate-400">Protect systems, access rights, backups, WAN routes, endpoints, cloud hosts, and databases.</p>
                    <p className="text-purple-400 text-[11px] font-bold">This is where cybersecurity directly supports your compliance posture.</p>
                  </div>
                </div>
              </div>

              {/* GDPR Rights Module */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/40 space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">📖 Module 3 — Data Subject Rights</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-blue-300 uppercase tracking-wider">
                  Data Subject Rights in Enterprise Operations
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Under GDPR guidelines, all users, staff, and enterprise tenants maintain explicit rights that IT architectures must natively facilitate:
                </p>
                <ul className="space-y-2 pl-4 list-disc text-slate-400 text-xs sm:text-sm">
                  <li><strong>Right to Access:</strong> Know exactly what personal data is held in central databases.</li>
                  <li><strong>Right to Deletion (To Be Forgotten):</strong> Request permanent deletion of historical tenant profiles and CRM records.</li>
                  <li><strong>Right to Rectification:</strong> Request correction of misaligned records (e.g. Suprema biometric cards, email logs).</li>
                  <li><strong>Right to Portability (Export):</strong> Export a structured database of personal profiles for migration.</li>
                  <li><strong>Right to Object/Restriction:</strong> Object to automated data collection or background processing.</li>
                </ul>
              </div>

              {/* Environmental Mapping */}
              <div className="space-y-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">📖 Module 8 — Environment Mapping</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-purple-400 uppercase tracking-wider">
                  Mapping GDPR to Your Actual Multi-Site Environment
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">Access Control</span>
                    <span className="text-slate-400 block">Biometric fingerprints and check-in logs must remain locally encrypted.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">CCTV Networks</span>
                    <span className="text-slate-400 block">Surveillance footage restricted strictly to security NVR cabinets.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">Google Workspace</span>
                    <span className="text-slate-400 block">Admin logs, file sharing, and emails subjected to strict MFA permissions.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">WiFi / Internet</span>
                    <span className="text-slate-400 block">Separate VLANs isolating tenant circuits from internal server databases.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">Booking Systems</span>
                    <span className="text-slate-400 block">Tenant registries (Office RnD, Zoho) protected under secure credentials.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">Finance Platforms</span>
                    <span className="text-slate-400 block">Invoice details encrypted both in transit and at rest in local hosts.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">HR Systems</span>
                    <span className="text-slate-400 block">Staff profiles and sensitive contracts restricted to authorized personnel.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">Cloud Backups</span>
                    <span className="text-slate-400 block">Encrypted backup replication over secure AWS / offsite pipelines.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* KDPA READING TEXTS */}
          {activeFramework === "kdpa" && (
            <div className="space-y-8">
              <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">📖 Section 2 — Kenya Data Protection Act</span>
                <h3 className="text-sm font-extrabold text-slate-100">Kenya DPA Legal Governance</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The Kenya Data Protection Act governs how organizations operating in Kenya handle personal data. It aligns closely with GDPR, but mandates strict local accountability including registration with the <strong>Office of the Data Protection Commissioner (ODPC)</strong>.
                </p>
                <p className="text-[10px] text-purple-300 font-semibold uppercase tracking-wider">
                  🎯 Strategic Focus: Visitor management, biometric Suprema door access, local staff records, tenant invoicing, and local multi-site branch WAN hubs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3 text-xs sm:text-sm">
                  <h4 className="font-extrabold text-amber-300 uppercase tracking-wider">
                    Key Areas You MUST Master
                  </h4>
                  <ul className="space-y-2.5 pl-0 list-none text-slate-300">
                    <li>
                      <strong className="text-slate-200 block">A. Principles of Data Protection</strong>
                      Requires personal data to be: lawfully processed, collected for explicit purposes, limited to minimum required scope, accurate, highly protected, and retained only as long as necessary.
                    </li>
                    <li>
                      <strong className="text-slate-200 block">B. Rights of Data Subjects</strong>
                      Kenyan citizens maintain rights to access data, request corrections, request permanent deletion, and object to background processing.
                    </li>
                    <li>
                      <strong className="text-slate-200 block">C. Data Controllers & Processors</strong>
                      Kenyan controllers/processors must formally register and implement security safeguards. Depending on client setups, KOFISI / KEMRI may act as controller, processor, or both.
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-4 text-xs sm:text-sm">
                  <h4 className="font-extrabold text-blue-300 uppercase tracking-wider">
                    Most Important Legal Sections for Frieze
                  </h4>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <span className="font-bold text-slate-200 block">Section 41 — Data Protection by Design</span>
                      <p className="text-slate-400">Security and privacy controls must be built INTO systems from the beginning, not bolted on after. Enforce MFA, BitLocker, limited permissions, segmented guest WiFi, restricted CCTV access, and encrypted backups.</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-slate-200 block">Section 43 — Breach Notification Mandate</span>
                      <p className="text-slate-400">If a breach occurs, the Data Commissioner (ODPC) must be formally notified within <strong className="text-rose-400">72 hours</strong>. Requires active SIEM alerts, logging, forensic readiness, and response runbooks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ISO 27001 READING TEXTS */}
          {activeFramework === "iso" && (
            <div className="space-y-8">
              <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">📖 Section 3 — ISO 27001 Governance</span>
                <h3 className="text-sm font-extrabold text-slate-100">ISO 27001 — Information Security Management System (ISMS)</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  ISO 27001 is NOT just about cybersecurity firewalls. It is a comprehensive governance framework for managing information security organization-wide, linking <strong>People, Processes, Technology, Risks, Compliance, and Continuity</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                  <span className="font-extrabold text-slate-200 block">1. Security Triad (CIA)</span>
                  <ul className="space-y-1 pl-4 list-disc text-slate-300">
                    <li><strong>Confidentiality:</strong> Only validated identities access systems.</li>
                    <li><strong>Integrity:</strong> Data remains accurate and unmodified.</li>
                    <li><strong>Availability:</strong> Redundant infrastructure protects SLA access.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                  <span className="font-extrabold text-slate-200 block">2. Risk Management</span>
                  <p className="text-slate-400">Risk-driven controls. Identify threat likelihood, assess financial/downtime impact, treatment, and continuous reviews.</p>
                  <p className="text-rose-400 text-[11px] font-semibold">Risks: ransomware, insider threat, fiber cut, weak passwords, stolen laptop.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                  <span className="font-extrabold text-slate-200 block">3. Asset & Access Control</span>
                  <p className="text-slate-400">Formal asset logs mapping life cycle, owners, and risks. access governance, role-based access, PAM, and mandatory quarterly reviews.</p>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* ─── SYSTEM 2: INTERVIEW SYSTEM ─── */}
      {activeSystem === "interview" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 animate-in fade-in"
        >
          {/* Section Q&A Level Toggle */}
          <div className="flex flex-wrap gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800/80 self-start">
            <button
              onClick={() => setActiveQnaLevel("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "all" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              All Levels ({qnas.length})
            </button>
            <button
              onClick={() => setActiveQnaLevel("beginner")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "beginner" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Beginner-Level
            </button>
            <button
              onClick={() => setActiveQnaLevel("intermediate")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "intermediate" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Intermediate-Level
            </button>
            <button
              onClick={() => setActiveQnaLevel("executive")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "executive" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Executive-Level
            </button>
            <button
              onClick={() => setActiveQnaLevel("scenario")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "scenario" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Scenario-Based
            </button>
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search Q&As instantly..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500/40"
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

          {/* Active Recall Challenges Deck */}
          <div className="space-y-6">
            {filteredQnas.length > 0 ? (
              filteredQnas.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-800/80 bg-slate-900/10 p-6 sm:p-8 space-y-4 transition hover:border-slate-850"
                >
                  <div className="flex flex-wrap gap-1.5 items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                      {item.level} · {item.framework.toUpperCase()}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Q-ID: {item.id}</span>
                  </div>
                  
                  <h3 className="text-sm sm:text-base font-extrabold text-amber-300 leading-tight">
                    Q: "{item.q}"
                  </h3>
                  
                  <div className="space-y-3.5 pt-2">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400">
                      Strong Executive Answer:
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-l-2 border-purple-500/40 pl-4 italic">
                      "{renderAnswerWithTooltips(item.a)}"
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10 rounded-3xl border border-dashed border-slate-800/60 bg-slate-950/20">
                <p className="text-sm text-slate-500 italic">No questions found matching criteria.</p>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* ─── SYSTEM 3: OPERATIONAL SYSTEM ─── */}
      {activeSystem === "operational" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 animate-in fade-in"
        >
          <div className="p-5 rounded-2xl border border-slate-850 bg-slate-950/40 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">🛡️ Operational System Playbooks</span>
            <h3 className="text-sm font-extrabold text-slate-100">Frieze Wandabwa's Multi-Site Governance Blueprints</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Actionable operational strategies mapping exact technical configurations to satisfy legal mandates and regulatory ISMS standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Access Governance */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/10 space-y-4 text-xs sm:text-sm">
              <h4 className="font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                <span>🔐</span> Access Governance Playbook
              </h4>
              <div className="space-y-3 text-slate-300">
                <div>
                  <span className="font-bold text-slate-200 block">Core Controls:</span>
                  <p className="text-slate-400">Mandatory MFA enforcement on Google Workspace/Zoho, role-based access control (RBAC), PAM validation layers, least privilege access limits, offboarding governance pipelines, and biometric card lifecycle logs.</p>
                </div>
                <div>
                  <span className="font-bold text-slate-200 block">Audit & Monitoring Activities:</span>
                  <p className="text-slate-400">Admin privilege audits, failed auth log tracing, VPN session monitoring, and shared accounts elimination reviews.</p>
                </div>
              </div>
            </div>

            {/* Cloud Governance */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/10 space-y-4 text-xs sm:text-sm">
              <h4 className="font-extrabold text-blue-300 uppercase tracking-wider flex items-center gap-2">
                <span>☁️</span> Cloud Governance Playbook
              </h4>
              <div className="space-y-3 text-slate-300">
                <div>
                  <span className="font-bold text-slate-200 block">Security Policies:</span>
                  <p className="text-slate-400">Conditional access controls, geographical access restrictions, encrypted data sharing policies, immutable cloud backups, and SaaS application API auditing.</p>
                </div>
                <div>
                  <span className="font-bold text-slate-200 block">Monitored Platforms:</span>
                  <p className="text-slate-400">Google Workspace, Microsoft 365, Zoho CRM, AWS/Azure network paths, and corporate VPN gateways.</p>
                </div>
              </div>
            </div>

            {/* CCTV Governance */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/10 space-y-4 text-xs sm:text-sm">
              <h4 className="font-extrabold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                <span>📹</span> CCTV Governance Playbook
              </h4>
              <div className="space-y-3 text-slate-300">
                <div>
                  <span className="font-bold text-slate-200 block">Surveillance Security:</span>
                  <p className="text-slate-400">Restricted viewing access privileges, strict CCTV 30-day retention enforcement, secure logs for footage exports, NVR network isolation, and encryption on storage volumes.</p>
                </div>
                <div>
                  <span className="font-bold text-slate-200 block">Compliance Reviews:</span>
                  <p className="text-slate-400">Storage capacity tracking, export log reviews, physical cabinet audits, and third-party contractor liability alignments.</p>
                </div>
              </div>
            </div>

            {/* Incident Response */}
            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/10 space-y-4 text-xs sm:text-sm">
              <h4 className="font-extrabold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                <span>🚨</span> Incident Response Playbook
              </h4>
              <div className="space-y-3 text-slate-300">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-slate-950 font-bold text-slate-400 text-[10px]">Step 1</span>
                    <div>
                      <strong className="text-slate-200 block">Detection</strong>
                      <span className="text-slate-400 text-xs">Real-time alerts, admin monitoring logs, SIEM dashboards, user report routing.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-slate-950 font-bold text-slate-400 text-[10px]">Step 2</span>
                    <div>
                      <strong className="text-slate-200 block">Containment</strong>
                      <span className="text-slate-400 text-xs">VLAN isolation, credentials block, domain access freezing, rogue traffic termination.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-slate-950 font-bold text-slate-400 text-[10px]">Step 3</span>
                    <div>
                      <strong className="text-slate-200 block">Recovery</strong>
                      <span className="text-slate-400 text-xs">Restore isolated Veeam backups, validate network paths, re-verify security tools.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ─── SYSTEM 4: GOVERNANCE SYSTEM ─── */}
      {activeSystem === "governance" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 animate-in fade-in"
        >
          {/* Simulator & Score Card */}
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/30 to-slate-950 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-400">
                  Compliance Risk stress-tester
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-100 mt-1">
                  Data Protection & Compliance Risk Dashboard
                </h3>
              </div>
              <div className={`px-3 py-1.5 rounded-xl border text-[11px] font-extrabold tracking-wide ${scoreColor} self-start`}>
                {scoreLabel}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Checkbox Inputs */}
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={gdprAudit}
                    onChange={(e) => setGdprAudit(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-800 text-purple-500 focus:ring-purple-500/40 accent-purple-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-200 group-hover:text-slate-100 block">GDPR Risk Audit & Mapping</span>
                    <span className="text-slate-400">EU personal data lifecycle mapped, third-party vendor risks resolved.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={kdpaRegistered}
                    onChange={(e) => setKdpaRegistered(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-800 text-purple-500 focus:ring-purple-500/40 accent-purple-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-200 group-hover:text-slate-100 block">Kenya Data Commissioner Registration</span>
                    <span className="text-slate-400">Section 41 Privacy-by-design active, 72h breach procedures set.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={isoControlActive}
                    onChange={(e) => setIsoControlActive(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-800 text-purple-500 focus:ring-purple-500/40 accent-purple-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-200 group-hover:text-slate-100 block">ISO 27001 Information Security Controls</span>
                    <span className="text-slate-400">Asset logs mapped, CIA risk registries established, MFA enforced.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={staffAwareness}
                    onChange={(e) => setStaffAwareness(e.target.checked)}
                    className="w-4 h-4 rounded bg-slate-900 border-slate-800 text-purple-500 focus:ring-purple-500/40 accent-purple-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-200 group-hover:text-slate-100 block">Quarterly Staff Awareness Campaigns</span>
                    <span className="text-slate-400">Simulated phishing active, least-privilege security culture trained.</span>
                  </div>
                </label>
              </div>

              {/* Live score display */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/40 p-6 text-center space-y-2">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Total Compliance Score
                </span>
                <div className="text-4xl sm:text-5xl font-mono font-black tracking-tight text-slate-100">
                  <span className={complianceScore > 80 ? "text-emerald-400 animate-bounce" : complianceScore > 50 ? "text-amber-400" : "text-rose-500"}>
                    {complianceScore}
                  </span>
                  <span className="text-slate-600">/100</span>
                </div>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed mt-2">
                  {complianceScore >= 90
                    ? "✅ Defensible posture. Your multi-site operations are insulated from catastrophic compliance liability and fines."
                    : complianceScore >= 60
                    ? "⚠️ Warning: Legal vulnerabilities exist. File KDPA certificates and activate least-privilege controls instantly."
                    : "🚨 Critical Risk: Unprepared status. You are heavily exposed to heavy fines, data theft, and brand damage."}
                </p>
              </div>
            </div>
          </div>

          {/* Simulation Labs */}
          <div className="space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">⚠️ GDPR Enterprise Simulation Labs</span>
            <h4 className="text-xs sm:text-sm font-extrabold text-purple-400 uppercase tracking-wider">
              High-Risk Boardroom Incident Simulations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/10 space-y-2">
                <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-bold">LAB 1: RANSOMWARE</span>
                <h5 className="font-extrabold text-slate-200 text-xs sm:text-sm">Ransomware Isolation</h5>
                <p className="text-slate-400 leading-relaxed">
                  Distributed laboratory endpoints infected with zero-day payloads. Learn containment steps, segmented VLAN shutdowns, recovery testing via offline Veeam pools, and regulatory compliance disclosures.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/10 space-y-2">
                <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 font-bold">LAB 2: CLOUD BREACH</span>
                <h5 className="font-extrabold text-slate-200 text-xs sm:text-sm">SaaS Credentials Compromise</h5>
                <p className="text-slate-400 leading-relaxed">
                  Administrator console breached with session hijacking bypass. Practice immediate tenant locks, administrative access logs audits, tenant-wide password resets, and SaaS vendor integrations risk containment.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/10 space-y-2">
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold">LAB 3: CCTV LEAK</span>
                <h5 className="font-extrabold text-slate-200 text-xs sm:text-sm">Unauthorized CCTV Access</h5>
                <p className="text-slate-400 leading-relaxed">
                  Tenant CCTV surveillance feeds leaked to external networks. Audit Suprema door logs, verify security NVR subnets isolation, asses legal liabilities under KDPA Section 41, and handle ODPC breach escalations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ─── SYSTEM 5: EXECUTIVE LEADERSHIP ─── */}
      {activeSystem === "executive" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 animate-in fade-in"
        >
          {/* Mindset Card */}
          <div className="p-6 sm:p-8 rounded-3xl border border-purple-500/20 bg-purple-500/[0.02] space-y-3 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.03),transparent_40%)]" />
            <div className="flex items-center gap-2">
              <span className="text-sm">🎙️</span>
              <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider">
                The Biggest Executive Mindset Shift
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold italic">
              “At senior ICT leadership level: you are no longer only managing systems. You are managing: organizational risk, trust, governance, resilience, compliance, operational continuity, and information protection. That is the real mindset of Head of IT, ICT Director, and CIO-level leadership.”
            </p>
          </div>

          {/* Downloadable / Viewable Documentation Templates Section */}
          <div className="space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">📑 GDPR Templates & Policies</span>
            <h4 className="text-xs sm:text-sm font-extrabold text-slate-100 uppercase tracking-wider border-b border-slate-800 pb-2">
              Operational Governance Document Blueprints
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Template Buttons */}
              <div className="flex flex-col gap-2">
                {[
                  { id: "incident", label: "Incident Report" },
                  { id: "breach", label: "Data Breach ODPC Log" },
                  { id: "access", label: "Access Review Form" },
                  { id: "dpia", label: "DPIA Risk Registry" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTemplate(t.id as any)}
                    className={`text-left px-4 py-2.5 rounded-xl text-xs font-bold transition border ${
                      selectedTemplate === t.id
                        ? "bg-purple-500/10 text-purple-300 border-purple-500/30"
                        : "bg-slate-900/40 text-slate-400 border-slate-850 hover:text-slate-200"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Template Output Box */}
              <div className="md:col-span-3 rounded-2xl border border-slate-800 bg-slate-950/45 p-6 font-mono text-[11px] text-slate-300 overflow-x-auto space-y-4">
                {selectedTemplate === "incident" && (
                  <pre className="whitespace-pre-wrap leading-normal">
{`[INCIDENT REPORT TEMPLATE - CONFIDENTIAL]
ID: INC-2026-05-17
Severity Rating: [LOW / MEDIUM / HIGH / CRITICAL]
Reported By: Frieze Wandabwa (Head of IT)

1. Incident Description:
   [Provide details of systems compromise, compromised VLAN segments, or client environments]

2. Affected Systems:
   - Hostname/IPs: [e.g. suprema-db-01, guest-wifi-firewall]
   - Managed Services: [e.g. Office RnD, Zoho, NVR storage]

3. Containment & Remediation Actions Taken:
   - Isolation date/time: [YYYY-MM-DD HH:MM]
   - Action Details: [e.g. VLAN interface blocked, admin credentials reset]

4. Forensic Evidence Preserved:
   - Centralized syslogs hash validation completed: [YES / NO]
   - VM disk images stored in isolated storage: [YES / NO]`}
                  </pre>
                )}

                {selectedTemplate === "breach" && (
                  <pre className="whitespace-pre-wrap leading-normal">
{`[ODPC DATA BREACH NOTIFICATION LOG - KENYA DPA SECTION 43]
Mandate: Must submit notification to Data Commissioner within 72 hours.

1. Description of the Breach:
   - Nature of breach: [e.g. Unauthorized CCTV exports, staff laptop theft]
   - Categories of personal records exposed: [e.g. Biometrics, ID copies, guest phone numbers]

2. Approximate Volume of Impacted Data Subjects:
   - Tenants: [Volume]
   - Enterprise Staff: [Volume]

3. Measures Adopted to Contain & Mitigate Exposure:
   - BitLocker remote wipe executed: [YES / NO]
   - Target database password rotation executed: [YES / NO]

4. Proposed Notification to Impacted Citizens:
   - Formal email draft completed: [YES / NO]`}
                  </pre>
                )}

                {selectedTemplate === "access" && (
                  <pre className="whitespace-pre-wrap leading-normal">
{`[QUARTERLY ACCESS CONTROL REVIEW FORM]
Auditor: Frieze Wandabwa
Audit Period: Q2 - 2026

1. Administrator / Privileged Accounts Audited:
   - Google Workspace Admins: [Verified / Flags identified]
   - Office RnD Portal Privileged Accounts: [Verified / Deleted]
   - Suprema CCTV NVR Logins: [Verified / Access Restrained]

2. Orphaned Accounts Terminated (Former staff offboarding check):
   - User Accounts Purged: [Total Volume]
   - BioCard Terminals Revoked: [Yes / No]

3. Security Compliance Checks:
   - Admin MFA Enforcement: [100% active validation]
   - Least privilege password policies compliant: [YES]`}
                  </pre>
                )}

                {selectedTemplate === "dpia" && (
                  <pre className="whitespace-pre-wrap leading-normal">
{`[DATA PROTECTION IMPACT ASSESSMENT (DPIA) MATRIX - SECTION 41]
System Under Review: Biometric Access & CCTV Integration

1. Identified Data Flow Vulnerability:
   - Biometric door logs mapped over multi-site branch WAN links.
   - High risk: interception during transit or CCTV console compromise.

2. Deployed Security Safeguards (Privacy-by-Design):
   - Complete local partition encryption on Suprema host machines (BitLocker active).
   - Strict 30-day recycling storage limits set on NVR terminals.
   - Enforce dedicated secure VLAN routing between Suprema endpoints.

3. Remaining Risk Level: [LOW RISK / MODERATE RISK]
4. Review Schedule: Bi-annual audit checks.`}
                  </pre>
                )}
              </div>
            </div>
          </div>

          {/* Final Rehearsal Killer Question Card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/10 p-6 sm:p-8 space-y-6">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
              FINAL EXECUTIVE INTERVIEW QUESTION
            </span>
            <h4 className="text-base sm:text-lg font-black text-slate-100">
              “Why should we hire you for a Head of IT / Director role?”
            </h4>
            
            <div className="space-y-4">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400">
                Strong Executive Answer (Speak This Verbatim to Win the Room):
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-l-2 border-purple-500/40 pl-4 italic">
                "{renderAnswerWithTooltips("My experience combines enterprise infrastructure operations, governance, security, financial leadership, vendor management, and operational resilience. I have worked in multi-site enterprise environments managing connectivity, cloud systems, access control, operational governance, client-support environments, and transformation initiatives. My focus is always aligning technology with operational continuity, organizational objectives, security governance, scalability, and long-term business value.")}"
              </p>
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
}
