"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExecutiveBrief, ActiveRecallQuiz, TermTooltip } from "@/components/learningComponents";

// Boardroom Terms Glossary definitions for inline hover tooltips
const dataProtectionGlossary = [
  { term: "GDPR", definition: "General Data Protection Regulation - the European Union's comprehensive data privacy and compliance framework." },
  { term: "KDPA", definition: "Kenya Data Protection Act - Kenyan national legislation establishing legal frameworks for personal data protection." },
  { term: "ISMS", definition: "Information Security Management System - a structured framework of policies, procedures, and controls under ISO 27001." },
  { term: "MFA", definition: "Multi-Factor Authentication - security protocol requiring multiple independent verification factors." },
  { term: "RBAC", definition: "Role-Based Access Control - restricting systems access authorization strictly to defined team job descriptions." },
  { term: "CIA", definition: "Confidentiality, Integrity, and Availability - the core security triad for information protection." },
  { term: "MTTR", definition: "Mean Time To Restore - average duration required to isolate and resolve operational systems failures." },
  { term: "RTO", definition: "Recovery Time Objective - target time limit to restore operations after a disaster." },
  { term: "SLA", definition: "Service Level Agreement - contractually committed response and availability parameters." },
  { term: "DIA", definition: "Dedicated Internet Access - isolated, uncontended high-speed corporate fiber circuits." },
  { term: "PAM", definition: "Privileged Access Management - advanced monitoring and lifecycle control of administrative credentials." },
];

function renderAnswerWithTooltips(text: string) {
  let parts: (string | React.ReactNode)[] = [text];
  
  dataProtectionGlossary.forEach(({ term, definition }) => {
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

// 🛡️ Compliance Risk Stress-test Panel Widget
function ComplianceDashboard() {
  const [gdprAudit, setGdprAudit] = useState(false);
  const [kdpaRegistered, setKdpaRegistered] = useState(false);
  const [isoControlActive, setIsoControlActive] = useState(false);
  const [staffAwareness, setStaffAwareness] = useState(false);

  // Calculations
  let score = 30; // base score (critical failure baseline)
  if (gdprAudit) score += 20;
  if (kdpaRegistered) score += 20;
  if (isoControlActive) score += 20;
  if (staffAwareness) score += 10;

  let scoreColor = "text-rose-500 border-rose-500/20 bg-rose-500/[0.02]";
  let scoreLabel = "CRITICAL LEGAL & CYBER EXPOSURE";
  
  if (score >= 90) {
    scoreColor = "text-emerald-400 border-emerald-500/20 bg-emerald-500/[0.02]";
    scoreLabel = "BOARDROOM DEFENSIBLE COMPLIANCE POSTURE";
  } else if (score >= 60) {
    scoreColor = "text-amber-400 border-amber-500/20 bg-amber-500/[0.02]";
    scoreLabel = "MODERATE REGULATORY EXPOSURE (ACTION REQUIRED)";
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/40 to-slate-950 p-6 sm:p-8 space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-purple-400">
            Governance Stress Tester
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
              <span className="text-slate-400">Asset logs updated, CIA risk registries established, MFA enforced.</span>
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
            <span className={score > 80 ? "text-emerald-400" : score > 50 ? "text-amber-400" : "text-rose-500"}>
              {score}
            </span>
            <span className="text-slate-600">/100</span>
          </div>
          <p className="text-xs text-slate-400 max-w-xs leading-relaxed mt-2">
            {score >= 90
              ? "✅ Excellent posture. You have built a highly resilient, legally defensible security framework aligned with both international and national regulations."
              : score >= 60
              ? "⚠️ Warning: Regulatory gaps remain. Ensure data commissioner filing is up to date and least-privilege MFA controls are hardened across multi-site branch hubs."
              : "🚨 Immediate action required: Failing posture. Systems remain highly vulnerable to ransomware, data leakage, and heavy fines for regulatory non-compliance."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DataProtectionPage() {
  const [activeTab, setActiveTab] = useState<"gdpr" | "kdpa" | "iso">("gdpr");
  const [activeSection, setActiveSection] = useState<"education" | "questions" | "protection">("education");

  // Tab definitions
  const tabs = [
    { id: "gdpr", label: "1. GDPR (EU Privacy)" },
    { id: "kdpa", label: "2. Kenya Data Protection Act" },
    { id: "iso", label: "3. ISO 27001 (ISMS)" },
  ] as const;

  const sections = [
    { id: "education", label: "📖 Category Education" },
    { id: "questions", label: "🧠 Rehearsal Q&As" },
    { id: "protection", label: "🛡️ How to Protect (Playbooks)" },
  ] as const;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Header section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Layer 1 · Compliance & Risk
          </span>
          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-100 sm:text-4xl">
            Data Protection & Information Security
          </h1>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Sovereign data integrity, multi-site compliance frameworks, and organizational security playbooks for senior IT directors.
          </p>
        </div>
        <Link
          href="/"
          className="text-sm font-medium text-amber-400/90 hover:text-amber-200 shrink-0 self-start sm:self-auto"
        >
          ← Command Centre
        </Link>
      </div>

      {/* Compliance dashboard widget */}
      <ComplianceDashboard />

      {/* Executivebrief */}
      <ExecutiveBrief
        strategy="Establish absolute administrative maturity in front of a boardroom. Demonstrate that IT compliance is a vital operational enabler, translating international frameworks like GDPR and national laws like the KDPA into bulletproof systems architectures under ISO 27001 governance."
        terms={["Privacy-by-Design", "Section 41 Controls", "Breach forensics readiness", "Least-privilege perimeter", "ISMS risk registry"]}
        alert="Do not treat compliance as a boring checklist activity. Frame it as the absolute bedrock of commercial trust. Prove how your secure visitor portals, encrypted backups, and vendor risk management keep the organization out of court and secure client DIA contracts."
      />

      {/* Main Tab Controls */}
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800/80 self-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold tracking-wide transition ${
                activeTab === tab.id
                  ? "bg-purple-500/15 text-purple-300 border border-purple-500/20 shadow-sm"
                  : "text-slate-400 border border-transparent hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sub-Section Controls */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800/80 pb-3">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeSection === sec.id
                  ? "bg-slate-850 text-slate-100 border border-slate-700/80"
                  : "text-slate-400 border border-transparent hover:text-slate-200"
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* ─── DYNAMIC FRAMEWORK CONTENT CONTAINER ─── */}
        <div className="space-y-8 min-h-[400px]">

          {/* 1. GDPR TAB */}
          {activeTab === "gdpr" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-8">
              
              {/* GDPR: Education Section */}
              {activeSection === "education" && (
                <div className="space-y-6 prose prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-300">
                  <div className="rounded-2xl border border-purple-500/10 bg-purple-500/[0.02] p-5">
                    <h3 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-2">
                      1. GDPR — General Data Protection Regulation Focus
                    </h3>
                    <p className="text-slate-300">
                      GDPR is the European Union’s flagship data privacy regulation. It governs how organizations collect, process, store, share, secure, and delete personal data globally.
                    </p>
                    <p className="text-slate-400 font-medium">
                      ⚠️ **Head of IT Strategic Context:** Even if our physical multi-site branch is located in East Africa, GDPR remains contractually and legally binding when managing international NGO circuits (Gates Foundation, GIZ), multinational client data (Amazon events), or globally distributed cloud hosting frameworks.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="rounded-2xl border border-slate-850 bg-slate-900/10 p-5 space-y-3">
                      <h4 className="font-extrabold text-amber-300 text-xs sm:text-sm uppercase tracking-wider">
                        Core GDPR Principles
                      </h4>
                      <ul className="space-y-3 pl-0 list-none text-slate-300">
                        <li>
                          <strong className="text-slate-200 block">1. Lawfulness, Fairness & Transparency</strong>
                          Clearly explain why personal data is collected and who retains access (e.g. biometric visitor systems, guest registration details, and CCTV logs).
                        </li>
                        <li>
                          <strong className="text-slate-200 block">2. Purpose Limitation & Minimization</strong>
                          Only collect data necessary for a specific immediate service. For guest WiFi access, require an email/phone number, never ID numbers or physical biometrics.
                        </li>
                        <li>
                          <strong className="text-slate-200 block">3. Accuracy & Storage Limitation</strong>
                          Audit and update former employee records and tenant databases. Restrict long-term data archival—never store active CCTV recordings or old logs forever.
                        </li>
                        <li>
                          <strong className="text-slate-200 block">4. Integrity & Confidentiality (Security)</strong>
                          Your primary operational responsibility. Hardening endpoints, central logs, cloud resources, backups, and network segmentation are direct compliance imperatives.
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-850 bg-slate-900/10 p-5 space-y-4">
                      <h4 className="font-extrabold text-blue-300 text-xs sm:text-sm uppercase tracking-wider">
                        Rights of Data Subjects
                      </h4>
                      <p className="text-slate-400">
                        Under GDPR guidelines, users, staff, and enterprise tenants maintain highly explicit rights that IT systems must support natively:
                      </p>
                      <ul className="space-y-3 pl-4 list-disc text-slate-300">
                        <li><strong>Right of Access:</strong> Instantly check what personal records are held in central servers.</li>
                        <li><strong>Right to Deletion (To Be Forgotten):</strong> Request permanent deletion of legacy system profiles and user credentials.</li>
                        <li><strong>Right to Export (Data Portability):</strong> Instantly export structured personal databases for migration.</li>
                        <li><strong>Right to Object:</strong> Block the processing or automated collection of background information.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* GDPR: Questions Section */}
              {activeSection === "questions" && (
                <div className="space-y-6">
                  <ActiveRecallQuiz
                    question="How does GDPR affect Frieze Wandabwa's day-to-day ICT operations?"
                    responseGuide="Explain that IT is the direct custodian of data platforms and network firewalls. Emphasize that GDPR compliance shifts your engineering priorities to include robust logging, encrypted SAN storage, least-privilege network rules, and rigid vendor governance protocols."
                  />

                  <div className="rounded-2xl border border-slate-850 bg-slate-900/10 p-6 space-y-4">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                      Boardroom Rehearsal Q&A 1
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-100">
                      "Frieze, how would you define the role of Head of IT during a major data breach?"
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-slate-700 pl-4">
                      "{renderAnswerWithTooltips("I would immediately activate our Incident Response containment protocols. This involves isolating affected VLAN segments, locking compromised SaaS admin consoles, preserving forensic server images for audit records, notifying legal and regulatory stakeholders within our 72-hour mandate, and preparing a transparent root-cause analysis for review by executive leadership.")}"
                    </p>
                  </div>
                </div>
              )}

              {/* GDPR: Protection Section */}
              {activeSection === "protection" && (
                <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-400">
                    GDPR Protection Blueprint & Playbook
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">
                        Identity & Access Governance
                      </span>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>Enforced MFA:</strong> Enforce multi-factor verification across Zoho CRM, Office RnD, and administrator credentials.</li>
                        <li><strong>Quarterly Privilege Audits:</strong> Formally review all active tenant, guest, and administrator access records.</li>
                        <li><strong>Zero-Trust Offboarding:</strong> Set automated scripts to immediately revoke AD, Google Workspace, and biometric locks during staff exits.</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">
                        Backup & Storage Protections
                      </span>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>AES-256 Storage:</strong> Encrypt all active VM databases, NAS archives, and offsite AWS S3 backup repositories.</li>
                        <li><strong>Immutable Archives:</strong> Maintain write-once-read-many (WORM) configurations on backup pools to prevent malicious modifications.</li>
                        <li><strong>7-Year Lifecycle:</strong> Auto-prune and shred transactional logs, former client databases, and outdated guest registers.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* 2. KDPA TAB */}
          {activeTab === "kdpa" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-8">
              
              {/* KDPA: Education Section */}
              {activeSection === "education" && (
                <div className="space-y-6 prose prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-300">
                  <div className="rounded-2xl border border-purple-500/10 bg-purple-500/[0.02] p-5">
                    <h3 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-2">
                      2. Kenya Data Protection Act (KDPA) Context
                    </h3>
                    <p className="text-slate-300">
                      The KDPA is the local legal privacy mandate in Kenya. It establishes rigid frameworks for processing, storing, and utilizing local citizen databases, overseen by the Office of the Data Protection Commissioner (ODPC).
                    </p>
                    <p className="text-slate-400 font-medium">
                      ⚠️ **Head of IT Strategic Context:** Every single local operation—such as visitor logs, biometric door access, employee payroll databases, local CRM profiles, and CCTV surveillance networks—must align directly with the ODPC guidelines to insulate KOFISI and KEMRI from devastating corporate liability and regulatory fines.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="rounded-2xl border border-slate-850 bg-slate-900/10 p-5 space-y-3">
                      <h4 className="font-extrabold text-amber-300 text-xs sm:text-sm uppercase tracking-wider">
                        Section 41: Privacy-by-Design
                      </h4>
                      <p className="text-slate-400">
                        A core component of the KDPA that mandates security and privacy safeguards to be engineered *into* IT solutions from day one, not bolted on after:
                      </p>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>Default MFA:</strong> Enable mandatory dual-factor validation on all SaaS and VPN pathways.</li>
                        <li><strong>Network Segmentation:</strong> Isolate guest WiFi channels completely from internal corporate AD databases.</li>
                        <li><strong>Laptop Hardening:</strong> Enforce complete local BitLocker encryption on all staff endpoints.</li>
                        <li><strong>Secure Backups:</strong> Safeguard replication routes and isolate DR site storage nodes.</li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-850 bg-slate-900/10 p-5 space-y-4">
                      <h4 className="font-extrabold text-blue-300 text-xs sm:text-sm uppercase tracking-wider">
                        Section 43: The 72-Hour Mandate
                      </h4>
                      <p className="text-slate-400">
                        If a breach compromises personal information:
                      </p>
                      <ul className="space-y-3 pl-4 list-disc text-slate-300">
                        <li><strong>Strict Notification:</strong> The Data Commissioner must be formally notified within <strong>72 hours</strong>.</li>
                        <li><strong>IT Readiness:</strong> Requires Frieze to maintain active SIEM logging, incident runbooks, and clear diagnostic forensics.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* KDPA: Questions Section */}
              {activeSection === "questions" && (
                <div className="space-y-6">
                  <ActiveRecallQuiz
                    question="What is Frieze's exact boardroom justification for implementing Section 41 (Privacy-by-Design)?"
                    responseGuide="State that Section 41 shifts IT from a reactive mode to a proactive engineering posture. Emphasize that default MFA, segmented client networks, and automated offboarding prevent compliance failures before they can trigger legal action."
                  />

                  <div className="rounded-2xl border border-slate-850 bg-slate-900/10 p-6 space-y-4">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                      Boardroom Rehearsal Q&A 2
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-100">
                      "How would Frieze prepare our distributed multi-site centers to comply with the KDPA?"
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-slate-700 pl-4">
                      "{renderAnswerWithTooltips("Compliance requires combining rigorous controls with clean governance. I would register KOFISI/KEMRI as data controllers, configure automatic AES-256 backup encryption, restrict NVR CCTV recordings to a strict 30-day archival policy, enforce MFA by default across our Zoho and SaaS environments, and train staff to eliminate social engineering vulnerabilities.")}"
                    </p>
                  </div>
                </div>
              )}

              {/* KDPA: Protection Section */}
              {activeSection === "protection" && (
                <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-400">
                    KDPA Local Protection Blueprint
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <span className="text-[10px] font-extrabold text-slate-500 tracking-widest uppercase block">
                        Physical & CCTV Control
                      </span>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>Restricted NVR Uptime:</strong> Secure surveillance network consoles behind isolated IT firewall subnets; prevent general staff views.</li>
                        <li><strong>30-Day Archival Policy:</strong> Configure automated cron scripts on NVR systems to recycle storage and purge CCTV footage beyond 30 days.</li>
                        <li><strong>Biometric Standardization:</strong> Consolidate door access terminals to Improv/Suprema centralized directories under least-privilege active control.</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <span className="text-[10px] font-extrabold text-slate-500 tracking-widest uppercase block">
                        Network Isolation & Guest Access
                      </span>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>Isolated VLANs:</strong> Run multi-site guest WiFi networks on completely distinct subnets; block routing to internal servers.</li>
                        <li><strong>Encrypted Client Terminals:</strong> Isolate dedicated client workspaces (e.g. Gates Foundation / Amazon lanes) on dedicated, Contended firewalls.</li>
                        <li><strong>Strict Log Rotation:</strong> Setup central firewall syslog collection to monitor VPN attempts and block suspicious rogue actions.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* 3. ISO 27001 TAB */}
          {activeTab === "iso" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-8">
              
              {/* ISO 27001: Education Section */}
              {activeSection === "education" && (
                <div className="space-y-6 prose prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-300">
                  <div className="rounded-2xl border border-purple-500/10 bg-purple-500/[0.02] p-5">
                    <h3 className="text-sm font-bold text-purple-300 uppercase tracking-wider mb-2">
                      3. ISO 27001 — Information Security Management System (ISMS)
                    </h3>
                    <p className="text-slate-300">
                      ISO 27001 is the global gold standard for information security governance. It defines how an organization-wide program manages risk across People, Processes, and Technology.
                    </p>
                    <p className="text-slate-400 font-medium">
                      ⚠️ **Head of IT Strategic Context:** ISO 27001 is a highly comprehensive framework. Implementing it requires Frieze to transition from treating security as an isolated "cables and firewalls" operation to a dynamic board-level posture matching commercial SLA objectives.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="rounded-2xl border border-slate-850 bg-slate-900/10 p-5 space-y-3">
                      <h4 className="font-extrabold text-amber-300 text-xs sm:text-sm uppercase tracking-wider">
                        Information Security Triad (CIA)
                      </h4>
                      <ul className="space-y-3 pl-0 list-none text-slate-300">
                        <li>
                          <strong className="text-slate-200 block">Confidentiality</strong>
                          Only validated, authorized personas access critical organizational or client databases (e.g. RBAC and PAM enforcements).
                        </li>
                        <li>
                          <strong className="text-slate-200 block">Integrity</strong>
                          Systems and databases remain accurate, unmodified, and uncompromised (e.g. code checksums and immutable SAN configurations).
                        </li>
                        <li>
                          <strong className="text-slate-200 block">Availability</strong>
                          Infrastructure remains resilient and accessible to clients during fiber outages (e.g. 3-ISP failover and disaster recovery backups).
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-850 bg-slate-900/10 p-5 space-y-4">
                      <h4 className="font-extrabold text-blue-300 text-xs sm:text-sm uppercase tracking-wider">
                        ISMS Risk Architecture
                      </h4>
                      <p className="text-slate-400">
                        ISO 27001 shifts IT organizations into a highly structured, risk-driven framework:
                      </p>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>Asset Logging:</strong> Formally track hardware lifecycle, OS patches, and security configurations.</li>
                        <li><strong>Incident Playbooks:</strong> Clear detection, isolation, escalation, and lessons-learned cycles.</li>
                        <li><strong>Vendor Governance:</strong> Conduct comprehensive risk audits on cloud, ISP, and SaaS providers.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ISO 27001: Questions Section */}
              {activeSection === "questions" && (
                <div className="space-y-6">
                  <ActiveRecallQuiz
                    question="How does Frieze implement ISO 27001 risk management in an enterprise multi-site environment?"
                    responseGuide="Frame security as a core risk management exercise. Highlight how you identify risks (e.g. ransomware, fiber cuts), evaluate their business SLA impact, deploy controls (immutable backups, active-active ISPs), and continuously audit for improvements."
                  />

                  <div className="rounded-2xl border border-slate-850 bg-slate-900/10 p-6 space-y-4">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                      Boardroom Rehearsal Q&A 3
                    </span>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-100">
                      "Why is compliance with frameworks like ISO 27001 important for an IT Director?"
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-slate-700 pl-4">
                      "{renderAnswerWithTooltips("Compliance is the bedrock of commercial trust. At senior executive levels, I am no longer simply resolving system patches—I am actively protecting KOFISI/KEMRI from major reputational damage, operational downtime, client SLA defaults, and catastrophic financial and legal exposure.")}"
                    </p>
                  </div>
                </div>
              )}

              {/* ISO 27001: Protection Section */}
              {activeSection === "protection" && (
                <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-400">
                    ISO 27001 Core Protection Safeguards
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <span className="text-[10px] font-extrabold text-slate-500 tracking-widest uppercase block">
                        ITIL Incident & Crisis Playbooks
                      </span>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>SIEM Integration:</strong> Set centralized cloud alert relays to capture login violations and port scans in real-time.</li>
                        <li><strong>Tested DR Failover:</strong> Perform bi-annual business continuity exercises simulating total primary server room failure.</li>
                        <li><strong>Immutable Veeam Backups:</strong> Isolate offsite storage nodes from Active Directory paths to deny access to ransomware scripts.</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <span className="text-[10px] font-extrabold text-slate-500 tracking-widest uppercase block">
                        Vendor & Asset Lifecycle Audits
                      </span>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>Contractual SLAs:</strong> Secure mandatory 99.9% uptime and 2-hour MTTR restoration commitments from Liquid/Safaricom.</li>
                        <li><strong>Hardware Patch cycles:</strong> Track firmware revisions across all multi-site branch firewall terminals.</li>
                        <li><strong>Staff Awareness Drills:</strong> Coordinate monthly simulated phishing tests to target and train weak operational links.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
