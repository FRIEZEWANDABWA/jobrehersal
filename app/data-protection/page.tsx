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
  { term: "NVR", definition: "Network Video Recorder - centralized storage system for security CCTV camera feeds." },
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
    { id: "gdpr", label: "1. GDPR — General Data Protection Regulation" },
    { id: "kdpa", label: "2. Kenya Data Protection Act (KDPA)" },
    { id: "iso", label: "3. ISO 27001 — ISMS Governance" },
  ] as const;

  const sections = [
    { id: "education", label: "📖 Executive Education" },
    { id: "questions", label: "🧠 Rehearsal Q&As" },
    { id: "protection", label: "🛡️ Systems Protection Playbook" },
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
            GDPR, Kenya DPA & ISO 27001 Hub
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

      {/* ─── C-LEVEL EXECUTIVE INTRO PERSPECTIVE ─── */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/40 via-slate-950 to-slate-950 p-6 sm:p-8 space-y-6">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.05),transparent_50%)]" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">
          Executive Mindset Perspective
        </span>
        <h2 className="text-base sm:text-lg font-black text-slate-100">
          Head of IT / ICT Manager / ICT Director Position
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
          At Head of IT level, organizations no longer expect you to only manage infrastructure, fix systems, or manage users. They expect you to understand: <strong className="text-purple-300">governance, compliance, cyber risk, data protection, privacy, information security, operational accountability, and legal exposure</strong>.
        </p>
        <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
          This is especially critical in highly complex multi-site operations like yours, handling highly sensitive data daily across:
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {["Enterprise Clients", "Global Organizations", "Cloud Systems", "Access Control", "CCTV", "Internet Infrastructure", "Finance Systems", "Bookings", "Office RnD", "Zoho", "Google Workspace", "Client-Managed Infrastructure", "Multi-Site Operations"].map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-semibold border border-slate-800/80">
              {tag}
            </span>
          ))}
        </div>

        {/* The 3 Critical Frameworks Overview Table */}
        <div className="pt-4 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-500 uppercase tracking-wider font-extrabold">
                <th className="py-2.5 pr-4">Framework</th>
                <th className="py-2.5">Core Focus Area</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-200">1. GDPR</td>
                <td className="py-3">Privacy & Personal Data Protection (EU Citizen / Global Client Standard)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-200">2. Kenya Data Protection Act</td>
                <td className="py-3">Kenyan legal compliance for personal data handling in local operations</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-200">3. ISO 27001</td>
                <td className="py-3">Information Security Management System (ISMS) Governance & Controls</td>
              </tr>
            </tbody>
          </table>
        </div>
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
                <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300">
                  <div className="rounded-2xl border border-purple-500/10 bg-purple-500/[0.02] p-5 space-y-3">
                    <h3 className="text-sm font-bold text-purple-300 uppercase tracking-wider">
                      GDPR — General Data Protection Regulation
                    </h3>
                    <h4 className="font-semibold text-slate-200">What Is GDPR?</h4>
                    <p className="text-slate-300">
                      GDPR is the European Union’s data privacy regulation. It governs how organizations collect, process, store, share, secure, and delete personal data.
                    </p>
                    <p className="text-slate-400">
                      Even if a company is outside Europe, GDPR may still apply if it handles EU citizen data, works with international organizations, uses global cloud services, or supports multinational clients.
                    </p>
                    <p className="text-purple-300 font-semibold italic">
                      🎯 Extremely relevant to your environment: Gates Foundation, Amazon, international NGOs, cloud systems, and global clients.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-extrabold text-amber-300 text-xs sm:text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
                      Core GDPR Principles You Must Know
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                        <strong className="text-slate-200 block text-xs sm:text-sm">1. Lawfulness, Fairness & Transparency</strong>
                        <p className="text-slate-400">You must clearly explain why data is collected, how it is used, and who accesses it.</p>
                        <p className="text-amber-400/90 text-xs">Example in your environment: Visitor management systems, access control, CCTV, HR systems, bookings systems, biometrics.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                        <strong className="text-slate-200 block text-xs sm:text-sm">2. Purpose Limitation</strong>
                        <p className="text-slate-400">Only collect data for a specific purpose.</p>
                        <p className="text-rose-400 text-xs font-semibold">❌ Bad example: Collecting ID/passport data for guest WiFi access when not necessary.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                        <strong className="text-slate-200 block text-xs sm:text-sm">3. Data Minimization</strong>
                        <p className="text-slate-400">Only collect the minimum necessary data.</p>
                        <p className="text-emerald-400/90 text-xs">✅ Good example: For guest WiFi: maybe only email and phone number, not passport, address, or biometrics.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                        <strong className="text-slate-200 block text-xs sm:text-sm">4. Accuracy</strong>
                        <p className="text-slate-400">Data must remain updated and correct.</p>
                        <p className="text-slate-400 text-xs">Example in your environment: Access control users, staff records, tenant systems, client databases.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                        <strong className="text-slate-200 block text-xs sm:text-sm">5. Storage Limitation</strong>
                        <p className="text-slate-400">Do not keep data forever. You must define retention periods, deletion policies, and archival processes.</p>
                        <p className="text-slate-400 text-xs">Example in your environment: CCTV footage retention, former employee accounts, old visitor logs.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                        <strong className="text-slate-200 block text-xs sm:text-sm">6. Integrity & Confidentiality</strong>
                        <p className="text-slate-400">This is your biggest Head of IT responsibility. You must protect: systems, access, backups, networks, endpoints, cloud environments, and databases.</p>
                        <p className="text-purple-400 text-xs font-bold">This is where cybersecurity becomes part of compliance.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/40 space-y-3 mt-6">
                    <h4 className="font-extrabold text-blue-300 text-xs sm:text-sm uppercase tracking-wider">
                      GDPR Rights of Users (Very Important)
                    </h4>
                    <p className="text-slate-300">
                      Users have the right to: know what data you hold, request deletion, request correction, request export, and object to processing.
                    </p>
                    <p className="text-slate-400">
                      <strong>Example in practice:</strong> An employee requests deletion of old records, export of personal information, or removal from mailing systems.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/10 space-y-3">
                    <h4 className="font-extrabold text-purple-300 text-xs sm:text-sm uppercase tracking-wider">
                      GDPR — How It Applies to Your Role
                    </h4>
                    <p className="text-slate-300">
                      As Head of IT, you become responsible for: technical safeguards, security controls, access management, vendor governance, backup security, breach response, and operational compliance.
                    </p>
                    <p className="text-slate-400 font-semibold">
                      This means: MFA, encryption, audit logs, access reviews, network segmentation, VPN governance, backup protection, and cloud security all become compliance responsibilities.
                    </p>
                  </div>
                </div>
              )}

              {/* GDPR: Questions Section */}
              {activeSection === "questions" && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-300">
                      GDPR Boardroom Rehearsal Questions
                    </h3>
                    <p className="text-xs text-slate-400">
                      Rehearse these Q&As to demonstrate your legal posture and technical compliance safeguards under pressure.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <ActiveRecallQuiz
                      question="How does GDPR affect ICT operations?"
                      responseGuide="Explain that IT departments are custodians of data systems, networks, and backups. Focus on secure processing, access control, audit logging, backup encryption, and vendor compliance governance."
                    />

                    <div className="rounded-2xl border border-slate-855 bg-slate-950/20 p-5 space-y-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                        Question 1 (GDPR Operations)
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                        “How does GDPR affect ICT operations?”
                      </h4>
                      <div className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-slate-800 pl-4 space-y-2">
                        <p className="font-bold text-purple-300">Strong Answer:</p>
                        <p>
                          "{renderAnswerWithTooltips("GDPR significantly impacts ICT operations because IT departments are responsible for the systems, infrastructure, access controls, and security safeguards that protect personal data. As Head of IT, I would ensure personal data is processed securely through encryption, access control, monitoring, backup governance, retention policies, vendor governance, and incident response procedures while ensuring operational systems align with privacy requirements.")}"
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-855 bg-slate-950/20 p-5 space-y-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                        Question 2 (Breach Incidents)
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                        “How would you handle a data breach?”
                      </h4>
                      <div className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-slate-800 pl-4 space-y-2">
                        <p className="font-bold text-purple-300">Strong Answer:</p>
                        <p>
                          "{renderAnswerWithTooltips("I would immediately activate incident response procedures, isolate affected systems, assess the scope and impact, preserve evidence, notify leadership and compliance stakeholders, and begin remediation. I would also ensure proper communication, root-cause analysis, recovery validation, and regulatory reporting where required.")}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* GDPR: Protection Section */}
              {activeSection === "protection" && (
                <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-400">
                    GDPR Practical Safeguards & Implementation
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">
                        Access Control & Network Rules
                      </span>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>MFA Enforcement:</strong> Enforce multi-factor verification across Google Workspace, Zoho CRM, and Office RnD dashboards.</li>
                        <li><strong>VLAN Segmentation:</strong> Isolate external corporate clients and guest WiFi segments away from local database networks.</li>
                        <li><strong>Audit Logging:</strong> Centralize admin log collection to detect unauthorized credentials access instantly.</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest block">
                        Data Lifecycle & Encryption
                      </span>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>AES-256 Storage:</strong> Encrypt local endpoints, laptops, cloud databases, and offsite backups.</li>
                        <li><strong>Retention Cron-Purges:</strong> Automatically recycle visitor databases, former staff logs, and transactional databases to satisfy storage limitations.</li>
                        <li><strong>Vendor Governance:</strong> Perform comprehensive risk assessment audits on all third-party contract agreements.</li>
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
                <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300">
                  <div className="rounded-2xl border border-purple-500/10 bg-purple-500/[0.02] p-5 space-y-3">
                    <h3 className="text-sm font-bold text-purple-300 uppercase tracking-wider">
                      2. Kenya Data Protection Act (KDPA)
                    </h3>
                    <p className="text-slate-300">
                      This is Kenya’s local implementation of data privacy governance. Very important for you because you operate in Kenya, manage Kenyan user data, and support enterprise clients.
                    </p>
                    <p className="text-slate-400">
                      The Act establishes: rules for personal data handling, responsibilities of organizations, rights of users, and penalties for non-compliance.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <h4 className="font-extrabold text-amber-300 text-xs sm:text-sm uppercase tracking-wider">
                        A. Principles of Data Protection
                      </h4>
                      <p className="text-slate-400">The Act requires personal data to be:</p>
                      <ul className="space-y-1.5 pl-4 list-disc text-slate-300">
                        <li>Lawfully processed.</li>
                        <li>Collected for specific, explicit, and legitimate purposes.</li>
                        <li>Limited to what is necessary (data minimization).</li>
                        <li>Accurate and kept up to date.</li>
                        <li>Protected through technical and organizational safeguards.</li>
                        <li>Retained only as long as necessary.</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <h4 className="font-extrabold text-blue-300 text-xs sm:text-sm uppercase tracking-wider">
                        B. Rights of Data Subjects & Roles
                      </h4>
                      <p className="text-slate-400"><strong>Rights of Kenyan Citizens:</strong> access data, request corrections, request permanent deletion, and object to processing.</p>
                      <p className="text-slate-400"><strong>Data Controllers & Processors:</strong> Organizations handling personal data must register and comply with operational safeguards.</p>
                      <p className="text-purple-300 font-semibold italic text-xs">
                        In your environment: KOFISI may act as data controller, processor, or both, depending on the service.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-extrabold text-purple-300 text-xs sm:text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
                      Most Important Sections for You
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                        <h5 className="font-bold text-slate-200">Section 41 — Data Protection by Design</h5>
                        <p className="text-slate-400">
                          This is extremely important for Head of IT roles. It means security and privacy must be built INTO systems from the beginning. Not added later.
                        </p>
                        <p className="text-slate-300">
                          Examples in your architecture:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {["MFA enabled by default", "encrypted laptops", "role-based access", "limited permissions", "secure WiFi segmentation", "CCTV access restrictions", "VPN enforcement", "password policies", "backup encryption"].map((item) => (
                            <span key={item} className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] font-semibold">{item}</span>
                          ))}
                        </div>
                        <p className="text-purple-400/90 text-xs">
                          The Act specifically requires: risk identification, safeguards, encryption, ability to restore systems, and continuous improvement.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                        <h5 className="font-bold text-slate-200">Section 43 — Breach Notification</h5>
                        <p className="text-slate-400">
                          Very important. Breaches must be reported within <strong className="text-rose-400">72 hours</strong> to the Data Commissioner.
                        </p>
                        <p className="text-slate-300 font-semibold">
                          As Head of IT, you must have:
                        </p>
                        <ul className="space-y-1 pl-4 list-disc text-slate-400">
                          <li>Incident response plans.</li>
                          <li>Centralized logging & active monitoring.</li>
                          <li>Forensic readiness.</li>
                          <li>Escalation workflows.</li>
                          <li>Communication plans.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* KDPA: Questions Section */}
              {activeSection === "questions" && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-300">
                      Kenya Data Protection Act Boardroom Rehearsal Questions
                    </h3>
                    <p className="text-xs text-slate-400">
                      Rehearse these Q&As to demonstrate your alignment with local Kenyan privacy compliance to the panel.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <ActiveRecallQuiz
                      question="How would you ensure compliance with the Kenya Data Protection Act?"
                      responseGuide="Highlight governance, operational controls, technical safeguards, and continuous monitoring. Specifically list access control, backup encryption, data classification, and staff training."
                    />

                    <div className="rounded-2xl border border-slate-855 bg-slate-950/20 p-5 space-y-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                        Question 1 (KDPA Compliance Strategy)
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                        “How would you ensure compliance with the Kenya Data Protection Act?”
                      </h4>
                      <div className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-slate-800 pl-4 space-y-2">
                        <p className="font-bold text-purple-300">Strong Answer:</p>
                        <p>
                          "{renderAnswerWithTooltips("I would ensure compliance through a combination of governance, operational controls, technical safeguards, staff awareness, vendor governance, and continuous monitoring. This includes: access controls, encryption, retention policies, incident response, audit logging, staff training, data classification, vendor assessments, and regular compliance reviews.")}"
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-855 bg-slate-950/20 p-5 space-y-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                        Question 2 (Privacy-by-Design Definition)
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                        “What is Data Protection by Design?”
                      </h4>
                      <div className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-slate-800 pl-4 space-y-2">
                        <p className="font-bold text-purple-300">Strong Answer:</p>
                        <p>
                          "{renderAnswerWithTooltips("It means security and privacy controls must be integrated into systems and operational processes from the beginning rather than added later. For example: least privilege access, encrypted systems, MFA, network segmentation, secure backups, and retention policies should all be built into the architecture itself.")}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* KDPA: Protection Section */}
              {activeSection === "protection" && (
                <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-400">
                    KDPA Tactical Protection & Design Implementations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <span className="text-[10px] font-extrabold text-slate-500 tracking-widest uppercase block">
                        Section 41 Systems Hardening
                      </span>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>Biometric Lock Standardization:</strong> Integrate all multi-site branch door access controls into an isolated Suprema AD sync database.</li>
                        <li><strong>Secure Laptops:</strong> Enforce local endpoint protection via centralized BitLocker/FileVault encryption.</li>
                        <li><strong>WiFi Network Segmentation:</strong> Separate operational bookings systems and client networks (GIZ/Amazon lanes) onto distinct firewall interfaces.</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3">
                      <span className="text-[10px] font-extrabold text-slate-500 tracking-widest uppercase block">
                        Section 43 Incident & Logging
                      </span>
                      <ul className="space-y-2 pl-4 list-disc text-slate-300">
                        <li><strong>72-Hour Breach Escalation:</strong> Maintain a documented step-by-step containment runbook to alert executive teams and the Data Commissioner.</li>
                        <li><strong>Restricted CCTV Archiving:</strong> Limit CCTV and visitor log storage to a strict 30-day auto-purge duration.</li>
                        <li><strong>MFA Mandates:</strong> Block login paths to Office RnD, ERP, and administration panels unless dual-factor validation is cleared.</li>
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
                <div className="space-y-6 text-xs sm:text-sm leading-relaxed text-slate-300">
                  <div className="rounded-2xl border border-purple-500/10 bg-purple-500/[0.02] p-5 space-y-3">
                    <h3 className="text-sm font-bold text-purple-300 uppercase tracking-wider">
                      3. ISO 27001 — Information Security Management System (ISMS)
                    </h3>
                    <p className="text-slate-300">
                      ISO 27001 is the biggest executive framework. It is NOT just cybersecurity—it is a governance framework for managing information security organization-wide.
                    </p>
                    
                    {/* Focus Area Table */}
                    <div className="pt-2 overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-500 uppercase tracking-wider font-extrabold">
                            <th className="py-2 pr-4">Area</th>
                            <th className="py-2">ISMS Focus</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300">
                          <tr>
                            <td className="py-2 pr-4 font-bold text-slate-200">People</td>
                            <td className="py-2">Staff awareness & security training culture</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4 font-bold text-slate-200">Processes</td>
                            <td className="py-2">Governance, procedures, and documented guidelines</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4 font-bold text-slate-200">Technology</td>
                            <td className="py-2">Operational security controls & systems hardening</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4 font-bold text-slate-200">Risk</td>
                            <td className="py-2">Continuous risk management & threat registries</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4 font-bold text-slate-200">Compliance</td>
                            <td className="py-2">Regulatory alignment & contract audit compliance</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4 font-bold text-slate-200">Continuity</td>
                            <td className="py-2">Operational resilience, BCP/DR testing</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-extrabold text-amber-300 text-xs sm:text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
                      ISO 27001 Core Concepts
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-2">
                        <strong className="text-slate-200 block text-xs sm:text-sm">1. Information Security Triad (CIA)</strong>
                        <ul className="space-y-1 pl-4 list-disc text-slate-300">
                          <li><strong>Confidentiality:</strong> Only authorized people access data.</li>
                          <li><strong>Integrity:</strong> Data remains accurate and unchanged.</li>
                          <li><strong>Availability:</strong> Systems remain accessible when needed.</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-2">
                        <strong className="text-slate-200 block text-xs sm:text-sm">2. Risk Management</strong>
                        <p className="text-slate-400">ISO 27001 is heavily risk-driven. You must identify risks, assess likelihood, assess impact, implement controls, and continuously review.</p>
                        <p className="text-rose-400 text-xs font-semibold">Example risks in your environment: ISP outages, ransomware, insider threats, CCTV compromise, cloud exposure, vendor compromise, stolen laptops, phishing, weak passwords.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-2">
                        <strong className="text-slate-200 block text-xs sm:text-sm">3. Asset Management</strong>
                        <p className="text-slate-400">You MUST know what assets exist, where they are, who owns them, lifecycle status, and risk exposure.</p>
                        <p className="text-purple-300 text-xs font-bold">This directly aligns with your budgeting work.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-2">
                        <strong className="text-slate-200 block text-xs sm:text-sm">4. Access Control</strong>
                        <p className="text-slate-400">Very important parameters: role-based access, privileged account management (PAM), MFA, access reviews, onboarding/offboarding workflows, and least privilege.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-2">
                        <strong className="text-slate-200 block text-xs sm:text-sm">5. Incident Management</strong>
                        <p className="text-slate-400">You must have clear: detection, escalation, response, documentation, recovery, and lessons-learned procedures.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-2">
                        <strong className="text-slate-200 block text-xs sm:text-sm">6. Business Continuity & Disaster Recovery (BCP/DR)</strong>
                        <p className="text-slate-400">This strongly aligns with your DR budgeting work. ISO 27001 expects: tested backups, recovery plans, continuity planning, and failover governance.</p>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/40 space-y-3">
                      <strong className="text-slate-200 block text-xs sm:text-sm">7. Vendor & Third-Party Management</strong>
                      <p className="text-slate-400">
                        Huge area for Frieze because you manage ISPs, cloud vendors, security providers, contractors, SaaS platforms, and support providers.
                      </p>
                      <p className="text-slate-300">
                        You must actively assess: risk, compliance, SLA, and security posture.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ISO 27001: Questions Section */}
              {activeSection === "questions" && (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-300">
                      ISO 27001 Boardroom Rehearsal Questions
                    </h3>
                    <p className="text-xs text-slate-400">
                      Rehearse these Q&As to demonstrate your global ISMS framework governance maturity under pressure.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <ActiveRecallQuiz
                      question="What is the relationship between GDPR, KDPA, and ISO 27001?"
                      responseGuide="Focus on how GDPR and KDPA define privacy laws, while ISO 27001 provides the absolute governance framework to execute controls."
                    />

                    <div className="rounded-2xl border border-slate-855 bg-slate-950/20 p-5 space-y-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                        Question 1 (Framework Relations)
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                        “What is the relationship between GDPR, KDPA, and ISO 27001?”
                      </h4>
                      <div className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-slate-800 pl-4 space-y-2">
                        <p className="font-bold text-purple-300">Strong Answer:</p>
                        <p>
                          "{renderAnswerWithTooltips("GDPR and the Kenya Data Protection Act primarily define legal and privacy obligations around personal data handling, while ISO 27001 provides the governance and operational framework for implementing information security controls that support compliance. Together, they create a structured approach to protecting organizational information, operational systems, and personal data.")}"
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-855 bg-slate-950/20 p-5 space-y-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                        Question 2 (Enterprise Implementation)
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                        “How would you implement ISO 27001 in an enterprise environment?”
                      </h4>
                      <div className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-slate-800 pl-4 space-y-2">
                        <p className="font-bold text-purple-300">Strong Answer:</p>
                        <p>
                          "{renderAnswerWithTooltips("I would begin with risk assessment, asset identification, governance structure development, policy creation, security control implementation, staff awareness, incident response planning, vendor governance, backup governance, and continuous monitoring. Implementation must align with operational realities, business priorities, and organizational risk exposure.")}"
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-855 bg-slate-950/20 p-5 space-y-3">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">
                        Question 3 (Why Compliance Matters)
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-100">
                        “Why is compliance important for a Head of IT?”
                      </h4>
                      <div className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-slate-800 pl-4 space-y-2">
                        <p className="font-bold text-purple-300">Strong Answer:</p>
                        <p>
                          "{renderAnswerWithTooltips("Compliance is important because ICT leadership is responsible for protecting organizational information, operational continuity, regulatory alignment, and stakeholder trust. Failure in governance or data protection can result in financial loss, reputational damage, operational disruption, legal exposure, and loss of client confidence.")}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ISO 27001: Protection Section */}
              {activeSection === "protection" && (
                <div className="space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  
                  {/* How Frameworks Apply to Daily Work Table */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-purple-400 border-b border-slate-800 pb-2">
                      How These Frameworks Apply to Your Daily Work
                    </h3>
                    <div className="overflow-x-auto rounded-xl border border-slate-800">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 bg-slate-950/40 text-slate-400 font-bold">
                            <th className="p-3">Daily Operational Area</th>
                            <th className="p-3">Your Specific Responsibility</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300">
                          <tr>
                            <td className="p-3 font-semibold text-slate-200">Internet Infrastructure</td>
                            <td className="p-3">Secure segmentation, redundant dia firewalls, and active-active failover.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-200">Cloud Systems</td>
                            <td className="p-3">Identity management, strict MFA enforcement, and secure cloud API keys.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-200">Access Control</td>
                            <td className="p-3">Least privilege biometric rules and complete biometric transaction logs.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-200">CCTV</td>
                            <td className="p-3">Restricted console logins and strict NVR auto-recycling retention schedules.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-200">Google Workspace</td>
                            <td className="p-3">User admin rights auditing, email security, and multi-tenant isolation.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-200">Zoho / ERP</td>
                            <td className="p-3">Strict database credentials and sensitive client-data access policies.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-200">Finance Systems</td>
                            <td className="p-3">Enforce local partition encryption and highly restricted user accounts.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-200">Backups</td>
                            <td className="p-3">Centralized AES-256 database protection and regular offsite replication testing.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-200">Vendor Management</td>
                            <td className="p-3">Perform comprehensive security and compliance assessments before signing contracts.</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-slate-200">Staff Offboarding</td>
                            <td className="p-3">Immediate, automated access removal across all SaaS and physical terminals.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* What You Should Implement Day-to-Day */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2">
                      What You Should Implement Day-to-Day
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-2">
                        <strong className="text-slate-200 block text-xs sm:text-sm">1. Access Governance</strong>
                        <p className="text-slate-400">Implement: MFA, RBAC, strict password policies, privileged access management (PAM), and formal quarterly access reviews.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-2">
                        <strong className="text-slate-200 block text-xs sm:text-sm">2. Data Classification</strong>
                        <p className="text-slate-400">Map and classify all organization-wide files: Public, Internal, Confidential, and Restricted.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-2">
                        <strong className="text-slate-200 block text-xs sm:text-sm">3. Logging & Monitoring</strong>
                        <p className="text-slate-400">Collect and monitor logs for: VPN access, admin logins, failed logins, suspicious activity, cloud access, and firewall events.</p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-2">
                        <strong className="text-slate-200 block text-xs sm:text-sm">4. Backup Governance</strong>
                        <p className="text-slate-400">Maintain: fully encrypted backups, immutable storage backups, offsite database replication, and regular recovery testing.</p>
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/40 space-y-2">
                      <strong className="text-slate-200 block text-xs sm:text-sm">5. Staff Awareness Campaign</strong>
                      <p className="text-slate-400 font-semibold text-xs">
                        ⚠️ One of the biggest risks is people.
                      </p>
                      <p className="text-slate-300">
                        Regularly train all employees on: phishing, passwords hygiene, secure data handling, social engineering, and secure file sharing.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </div>

      {/* ─── THE BIGGEST EXECUTIVE MINDSET SHIFT ─── */}
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

    </div>
  );
}
