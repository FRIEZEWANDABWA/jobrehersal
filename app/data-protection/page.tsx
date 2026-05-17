"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExecutiveBrief, ActiveRecallQuiz, TermTooltip } from "@/components/learningComponents";
import { Shield, BookOpen, UserCheck, Activity, Award, FileText, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";

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
  { term: "SIEM", definition: "Security Information and Event Management - platform centralizing security logs and correlations." },
  { term: "WAN", definition: "Wide Area Network - secure communications framework linking multi-site branch networks." },
  { term: "VPN", definition: "Virtual Private Network - encrypted connection channel for secure remote network access." },
  { term: "DR", definition: "Disaster Recovery - strategic playbooks to restore core systems operational continuity." },
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

// Sub-component for interactive compliance risk stress-testing
function ComplianceDashboard() {
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

  return (
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
  );
}

export default function DataProtectionMasterbook() {
  const [activeSystem, setActiveSystem] = useState<"learning" | "interview" | "operational" | "governance" | "executive">("learning");
  const [activeFramework, setActiveFramework] = useState<"gdpr" | "kdpa" | "iso">("gdpr");
  const [activeQnaLevel, setActiveQnaLevel] = useState<"all" | "gdpr_kdpa" | "tier1" | "tier2" | "tier3" | "tier4" | "leadership" | "casestudy">("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Interactive Simulator State (kept for simulation tab)
  const [simGdpr, setSimGdpr] = useState(false);
  const [simKdpa, setSimKdpa] = useState(false);
  const [simIso, setSimIso] = useState(false);
  const [simStaff, setSimStaff] = useState(false);

  let simScore = 30;
  if (simGdpr) simScore += 20;
  if (simKdpa) simScore += 20;
  if (simIso) simScore += 20;
  if (simStaff) simScore += 10;

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
    // 📖 GDPR & KENYA DPA ESSENTIAL FOUNDATIONAL QUESTIONS
    {
      id: 1,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "What is GDPR?",
      a: "GDPR is a global privacy and data protection framework that governs how organizations collect, process, store, share, and protect personal data. It emphasizes transparency, accountability, user privacy rights, and strong operational safeguards to protect sensitive information."
    },
    {
      id: 2,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "What is personal data?",
      a: "Personal data refers to any information that can identify an individual either directly or indirectly. Examples include names, emails, phone numbers, IP addresses, biometrics, access records, and CCTV footage."
    },
    {
      id: 3,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "What is Privacy by Design?",
      a: "Privacy by Design means security and privacy controls must be integrated into systems and operational processes from the beginning rather than added later. Examples include MFA, encryption, least privilege access, secure backups, audit logging, and network segmentation."
    },
    {
      id: 4,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "What is the difference between a Data Controller and Data Processor?",
      a: "A Data Controller determines why and how personal data is processed, while a Data Processor processes data on behalf of the controller. In enterprise environments, organizations may act as either or both depending on operational responsibilities and managed services."
    },
    {
      id: 5,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "How would you implement GDPR in a multi-site enterprise environment?",
      a: "I would begin with data discovery and operational risk assessment to understand where personal data exists, how it flows, who accesses it, and the associated operational risks. I would then implement governance controls including: MFA, encryption, access governance, vendor governance, audit logging, backup governance, retention policies, incident response, and continuous monitoring. I would also maintain stakeholder awareness, governance reporting, and regular compliance reviews to ensure operational alignment."
    },
    {
      id: 6,
      level: "gdpr_kdpa",
      framework: "kdpa",
      q: "How would you ensure compliance with the Kenya Data Protection Act?",
      a: "I would ensure compliance through governance, operational controls, technical safeguards, staff awareness, vendor governance, and continuous monitoring. This includes: access governance, encryption, retention policies, audit logging, backup governance, vendor assessments, and incident response procedures."
    },
    {
      id: 7,
      level: "gdpr_kdpa",
      framework: "kdpa",
      q: "What is Data Protection by Design?",
      a: "Data Protection by Design (under Section 41 of the Kenya DPA) requires that data protection, privacy, and security controls are built into systems by default. This involves default MFA, encrypted devices (BitLocker), least-privilege role boundaries, separate network VLAN segments, secure VPN channels, centralized audit logging, and automated cloud backup encryption."
    },
    {
      id: 8,
      level: "gdpr_kdpa",
      framework: "iso",
      q: "What is the relationship between GDPR, KDPA, and ISO 27001?",
      a: "GDPR and KDPA are legal compliance frameworks defining privacy principles, rights, and regulatory mandates. ISO 27001 is a practical, structured information security governance system (ISMS) that provides the actual tech controls, risks, processes, and people structures required to enforce and prove compliance with both laws."
    },
    {
      id: 9,
      level: "gdpr_kdpa",
      framework: "iso",
      q: "How would you implement ISO 27001 in an enterprise environment?",
      a: "I would build it around a formal Information Security Management System (ISMS) scoping People, Processes, Technology, Risk, Compliance, and Continuity. This involves: creating asset inventories, enforcing strict access controls (MFA/RBAC), drafting incident containment playbooks, auditing physical security (Suprema door blocks, CCTV subnets), testing backup restoration schedules, and conducting regular risk assessments."
    },
    {
      id: 10,
      level: "gdpr_kdpa",
      framework: "iso",
      q: "Why is compliance important for a Head of IT?",
      a: "Compliance is not just a regulatory check; it is a critical driver of business resilience and commercial trust. As Head of IT, protecting client data, avoiding breaches, keeping systems compliant with ODPC laws, and holding documented audits is what secures enterprise vendor SLAs and protects the company from catastrophic downtime and fines."
    },
    {
      id: 11,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "How would you handle a data breach?",
      a: "I would initiate our 3-phase Incident Response playbook: 1. Detection and verification. 2. Immediate containment (isolating infected VLANs, locking credentials, protecting Veeam backups). 3. Legal and regulatory escalation, notifying executive stakeholders and filing formal ODPC notifications within the mandatory 72-hour legal breach window."
    },

    // 🧠 TIER 1 — TECHNICAL & SECURITY GOVERNANCE QUESTIONS
    {
      id: 12,
      level: "tier1",
      framework: "iso",
      q: "What is the difference between hashing and encryption?",
      a: "Encryption is a reversible process used to protect data confidentiality, where information can be decrypted using authorized keys. Hashing, on the other hand, is a one-way cryptographic process primarily used for integrity verification and secure password storage. In enterprise environments, encryption protects sensitive operational data such as cloud storage, backups, VPN traffic, and finance systems, while hashing is commonly used for password protection, integrity validation, and digital verification."
    },
    {
      id: 13,
      level: "tier1",
      framework: "iso",
      q: "What is RBAC?",
      a: "Role-Based Access Control is a governance model where system access is assigned based on organizational roles and operational responsibilities rather than individual preference. RBAC improves governance by enforcing least privilege access, reducing insider risk, improving auditability, and simplifying operational access management across enterprise systems."
    },
    {
      id: 14,
      level: "tier1",
      framework: "iso",
      q: "What is Zero Trust?",
      a: "Zero Trust is a modern security architecture model based on the principle of ‘never trust, always verify.’ It assumes no user, device, network, or system should automatically be trusted, even inside the internal network. Access decisions are continuously validated using identity, device posture, location, behavior, and risk signals. In enterprise environments, Zero Trust improves operational resilience by reducing lateral movement, minimizing insider risk, and strengthening cloud and remote-access governance."
    },
    {
      id: 15,
      level: "tier1",
      framework: "iso",
      q: "What is a SIEM?",
      a: "A SIEM, or Security Information and Event Management platform, centralizes security logs, correlates events, detects suspicious activity, and improves incident visibility across enterprise environments. It enables security teams to identify threats faster, investigate incidents, maintain audit evidence, and improve operational monitoring and compliance governance."
    },

    // 🧠 TIER 2 — GOVERNANCE QUESTIONS
    {
      id: 16,
      level: "tier2",
      framework: "iso",
      q: "How do you implement an ISMS?",
      a: "I would begin with organizational risk assessment, asset identification, governance scoping, and executive stakeholder alignment. From there, I would establish: policies, operational standards, security controls, incident response procedures, access governance, vendor governance, monitoring frameworks, and audit processes. The ISMS must align with operational realities, business objectives, regulatory obligations, and organizational risk exposure. Continuous improvement through reviews, audits, KPI tracking, and governance meetings is also critical."
    },
    {
      id: 7,
      level: "tier2",
      framework: "iso",
      q: "How do you conduct information security audits?",
      a: "I approach audits through structured governance and evidence-based validation. The process includes: scope definition, control assessment, policy reviews, evidence collection, access reviews, vulnerability reviews, vendor assessments, and operational walkthroughs. I also validate whether operational practices align with documented governance controls and compliance requirements. Audit findings are then categorized by risk level, operational impact, remediation priority, and governance exposure."
    },
    {
      id: 18,
      level: "tier2",
      framework: "iso",
      q: "How do you manage third-party risk?",
      a: "Third-party governance is critical because vendors often have direct or indirect access to organizational systems, infrastructure, and sensitive data. I manage third-party risk through: security assessments, SLA governance, vendor onboarding reviews, access governance, contractual security obligations, compliance validation, and continuous performance monitoring. I also ensure vendors follow least privilege access principles and maintain proper audit visibility."
    },

    // 🧠 TIER 3 — EXECUTIVE QUESTIONS
    {
      id: 19,
      level: "tier3",
      framework: "iso",
      q: "How do you communicate cyber risk to executives?",
      a: "I avoid overly technical language and instead communicate cyber risk in terms of business impact, operational continuity, financial exposure, reputational impact, regulatory risk, and organizational resilience. For example, instead of discussing firewall vulnerabilities technically, I may explain how a control weakness could increase operational downtime, expose sensitive client data, or affect organizational continuity. Executives need visibility into business impact, risk exposure, mitigation status, and investment priorities rather than purely technical details."
    },
    {
      id: 20,
      level: "tier3",
      framework: "iso",
      q: "How do you justify security spending?",
      a: "I justify security investment by aligning it to: operational continuity, regulatory compliance, organizational resilience, risk reduction, and long-term business protection. Security investment should be viewed as risk management and operational enablement rather than simply technical expenditure. I also communicate measurable value such as: reduced downtime, improved recovery capability, compliance alignment, operational resilience, and reduced exposure to ransomware or operational disruption."
    },
    {
      id: 21,
      level: "tier3",
      framework: "iso",
      q: "How do you balance usability and security?",
      a: "Strong governance requires balancing operational productivity with appropriate security controls. Security should not unnecessarily block business operations, but operational convenience should also not compromise organizational protection. My approach focuses on layered security, risk-based controls, user awareness, automation, and intelligent access governance to maintain both usability and operational resilience."
    },

    // 🧠 TIER 4 — CRISIS & INCIDENT QUESTIONS
    {
      id: 22,
      level: "tier4",
      framework: "gdpr",
      q: "A ransomware attack happens during working hours. What do you do?",
      a: "I would immediately activate incident response governance procedures. The first priority would be containment, operational isolation, and protection of unaffected systems. This may include isolating VLANs, disabling compromised accounts, restricting lateral movement, and protecting backups. I would then preserve evidence, activate leadership escalation, coordinate communication, assess operational impact, validate recovery capability, and initiate recovery procedures. After stabilization, I would conduct root-cause analysis, governance review, remediation, and lessons learned assessment."
    },
    {
      id: 23,
      level: "tier4",
      framework: "gdpr",
      q: "An executive email account is compromised.",
      a: "I would immediately isolate the affected account, revoke active sessions, enforce password resets, review MFA status, and analyze audit logs for suspicious activity. Because executive accounts typically have elevated exposure and reputational impact, I would also assess email forwarding rules, sensitive communications, cloud application access, and potential lateral movement. I would escalate internally, preserve evidence, coordinate communication, and validate recovery and governance remediation procedures."
    },
    {
      id: 24,
      level: "tier4",
      framework: "kdpa",
      q: "Sensitive CCTV footage leaks online.",
      a: "I would immediately restrict access to CCTV infrastructure, preserve forensic evidence, assess the source of exposure, review access logs, and isolate affected systems or accounts. I would then coordinate legal review, executive escalation, regulatory assessment, and communication governance. The incident would also trigger access governance review, retention policy review, contractor assessment, and operational remediation activities."
    },
    {
      id: 25,
      level: "tier4",
      framework: "iso",
      q: "A disaster recovery test fails.",
      a: "I would treat a failed DR test as a critical governance issue because it directly impacts organizational resilience and recovery capability. I would immediately assess root cause, recovery gaps, operational exposure, backup integrity, and failover dependencies. Corrective actions may include infrastructure redesign, backup optimization, process improvements, additional testing, and governance escalation. DR governance must remain continuously validated rather than assumed."
    },

    // 🧠 LEADERSHIP COMMUNICATION QUESTIONS
    {
      id: 26,
      level: "leadership",
      framework: "iso",
      q: "How do you explain a cyber incident calmly to executives?",
      a: "I focus on clarity, facts, business impact, and recovery status rather than technical panic. I communicate what happened, what systems are affected, operational impact, containment status, mitigation actions, and next steps. The objective is maintaining executive confidence while ensuring transparency, accountability, and coordinated decision-making."
    },
    {
      id: 27,
      level: "leadership",
      framework: "iso",
      q: "How do you avoid overwhelming executives with technical details?",
      a: "I translate technical issues into operational and business language. Executives typically care about: operational continuity, client impact, financial exposure, legal exposure, recovery timelines, and organizational risk. My role is bridging technical complexity into strategic decision-making visibility."
    },

    // 🧠 CASE STUDY QUESTIONS & FINAL
    {
      id: 28,
      level: "casestudy",
      framework: "iso",
      q: "What lessons did you learn from major breaches like Equifax or Colonial Pipeline?",
      a: "Major breaches consistently demonstrate that governance failures, weak visibility, poor patch management, insufficient segmentation, weak identity governance, and delayed incident response can create catastrophic organizational impact. The key lesson is that cybersecurity is not only a technical function — it is an operational governance and organizational resilience function. Strong visibility, layered controls, continuous monitoring, incident preparedness, executive accountability, and operational discipline are critical."
    },
    {
      id: 29,
      level: "casestudy",
      framework: "iso",
      q: "What makes a strong Head of IT in modern enterprise environments?",
      a: "A strong Head of IT must combine: technical understanding, operational governance, cybersecurity leadership, financial accountability, vendor management, strategic thinking, compliance awareness, and organizational communication. Modern ICT leadership is no longer only about infrastructure management. It is about protecting organizational operations, enabling business continuity, governing risk, supporting growth, and ensuring technology aligns with long-term organizational objectives and resilience."
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
            Protected Sandbox Environment v1.5
          </span>
        </div>
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
                  GDPR is the European Union’s data privacy regulation. It governs how organizations <strong>collect, process, store, transfer, protect, and delete personal data</strong>. Even if a company is outside Europe, GDPR may still apply if it handles EU citizen data, works with international organizations, uses global cloud services, or supports multinational clients.
                </p>
                <p className="text-[10px] text-purple-300 font-semibold uppercase tracking-wider">
                  ⚠️ Critical Environment Scope: Gates Foundation, Amazon, international NGOs, cloud systems, and global clients.
                </p>
              </div>

              {/* GDPR Principles List */}
              <div className="space-y-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">📖 Module 2 — GDPR Principles</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-wider border-b border-slate-800 pb-2">
                  Core GDPR Principles You Must Know
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">1. Lawfulness, Fairness & Transparency</span>
                    <p className="text-slate-400">You must clearly explain why data is collected, how it is used, and who accesses it.</p>
                    <p className="text-amber-400/90 text-[11px] italic">Example in your environment: visitor management systems, access control, CCTV, HR systems, bookings systems, biometrics.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">2. Purpose Limitation</span>
                    <p className="text-slate-400">Only collect data for a highly specific and legitimate purpose.</p>
                    <p className="text-rose-400 text-[11px] font-semibold">❌ Bad example: Collecting ID/passport data for WiFi access when not necessary.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">3. Data Minimization</span>
                    <p className="text-slate-400">Only collect the minimum necessary data to perform operations.</p>
                    <p className="text-emerald-400/90 text-[11px] font-semibold">✅ Example: For guest WiFi: maybe only email and phone number, not passport, address, or biometrics.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">4. Accuracy</span>
                    <p className="text-slate-400">Data must remain updated and correct across operational networks.</p>
                    <p className="text-slate-400 text-[11px]">Example: Access control users, staff records, tenant systems, client databases.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">5. Storage Limitation</span>
                    <p className="text-slate-400">Do not keep data forever. You must define retention periods, deletion policies, and archival processes.</p>
                    <p className="text-slate-400 text-[11px] italic">Example: CCTV footage retention, former employee accounts, old visitor logs.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                    <span className="font-extrabold text-slate-200 block">6. Integrity & Confidentiality</span>
                    <p className="text-slate-400">You must protect: systems, access, backups, networks, endpoints, cloud environments, and databases.</p>
                    <p className="text-purple-400 text-[11px] font-bold">This is where cybersecurity becomes part of compliance.</p>
                  </div>
                </div>
              </div>

              {/* GDPR Rights Module */}
              <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950/40 space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">📖 Module 3 — Data Subject Rights</span>
                <h4 className="text-xs sm:text-sm font-extrabold text-blue-300 uppercase tracking-wider">
                  GDPR Rights of Users (Very Important)
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Users have the right to know what data you hold, request deletion, request correction, request export, and object to processing.
                </p>
                <p className="text-xs text-slate-400">
                  <strong>Example in practice:</strong> An employee requests deletion of old records, export of personal information, or removal from mailing systems.
                </p>
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
                    <span className="text-slate-400 block">Biometrics & access logs must remain locally encrypted.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">CCTV Networks</span>
                    <span className="text-slate-400 block">Surveillance privacy & NVR storage logs isolated.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">Google Workspace</span>
                    <span className="text-slate-400 block">Admin logs, file sharing, and emails governed with MFA.</span>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/10 space-y-1">
                    <span className="font-bold text-slate-200 block">WiFi / Internet</span>
                    <span className="text-slate-400 block">VLAN network isolation between clients & guest hubs.</span>
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
                  The Kenya Data Protection Act is the local implementation of data privacy governance in Kenya. Very important for you because you operate in Kenya, manage Kenyan user data, and support enterprise clients. The Act establishes rules for personal data handling, responsibilities of organizations, rights of users, and penalties for non-compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl border border-slate-850 bg-slate-900/10 space-y-3 text-xs sm:text-sm">
                  <h4 className="font-extrabold text-amber-300 uppercase tracking-wider">
                    Key Areas You MUST Know
                  </h4>
                  <ul className="space-y-2.5 pl-0 list-none text-slate-300">
                    <li>
                      <strong className="text-slate-200 block">A. Principles of Data Protection</strong>
                      Requires personal data to be: lawfully processed, collected for specific purposes, limited to what is necessary, accurate, protected, and retained only as long as necessary.
                    </li>
                    <li>
                      <strong className="text-slate-200 block">B. Rights of Data Subjects</strong>
                      Kenyan citizens maintain rights to access data, request corrections, request permanent deletion, and object to processing.
                    </li>
                    <li>
                      <strong className="text-slate-200 block">C. Data Controllers & Processors</strong>
                      Organizations handling personal data must register and comply with operational safeguards. In your environment, KOFISI may act as data controller, processor, or both, depending on the service.
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
                      <p className="text-slate-400">Security and privacy must be built INTO systems from the beginning. Examples include: MFA enabled by default, encrypted laptops, role-based access, limited permissions, secure WiFi segmentation, CCTV access restrictions, VPN enforcement, password policies, and backup encryption.</p>
                      <p className="text-purple-400/90 text-[11px] font-semibold mt-1">The Act specifically requires: risk identification, safeguards, encryption, ability to restore systems, and continuous improvement.</p>
                    </div>
                    <div className="space-y-1">
                      <span className="font-bold text-slate-200 block">Section 43 — Breach Notification</span>
                      <p className="text-slate-400">Very important. Breaches must be reported within <strong className="text-rose-400">72 hours</strong> to the Data Commissioner. As Head of IT, you must have incident response, logging, monitoring, forensic readiness, escalation workflows, and communication plans.</p>
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
                  ISO 27001 is the biggest executive framework. It is NOT just cybersecurity. It is a governance framework for managing information security organization-wide, scoping People, Processes, Technology, Risk, Compliance, and Continuity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                  <span className="font-extrabold text-slate-200 block">1. Security Triad (CIA)</span>
                  <ul className="space-y-1 pl-4 list-disc text-slate-300">
                    <li><strong>Confidentiality:</strong> Only authorized people access data.</li>
                    <li><strong>Integrity:</strong> Data remains accurate and unchanged.</li>
                    <li><strong>Availability:</strong> Systems remain accessible when needed.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                  <span className="font-extrabold text-slate-200 block">2. Risk Management</span>
                  <p className="text-slate-400">ISO 27001 is heavily risk-driven. Identify risks, assess likelihood, assess impact, implement controls, and continuously review.</p>
                  <p className="text-rose-400 text-[11px] font-semibold">Example risks: ISP outage, ransomware, insider threats, CCTV compromise, cloud exposure, vendor compromise, stolen laptops, phishing, weak passwords.</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-850 bg-slate-900/10 space-y-1.5">
                  <span className="font-extrabold text-slate-200 block">3. Asset & Access Control</span>
                  <p className="text-slate-400">Identify what assets exist, their owners, and lifecycle status. Implement access controls such as RBAC, PAM, MFA, access reviews, onboarding/offboarding, and least privilege.</p>
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
              All Q&As ({qnas.length})
            </button>
            <button
              onClick={() => setActiveQnaLevel("gdpr_kdpa")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "gdpr_kdpa" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              GDPR & KDPA Basics ({qnas.filter(q => q.level === "gdpr_kdpa").length})
            </button>
            <button
              onClick={() => setActiveQnaLevel("tier1")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "tier1" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Tier 1 (Technical)
            </button>
            <button
              onClick={() => setActiveQnaLevel("tier2")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "tier2" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Tier 2 (Governance)
            </button>
            <button
              onClick={() => setActiveQnaLevel("tier3")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "tier3" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Tier 3 (Executive)
            </button>
            <button
              onClick={() => setActiveQnaLevel("tier4")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "tier4" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Tier 4 (Crisis/Incidents)
            </button>
            <button
              onClick={() => setActiveQnaLevel("leadership")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "leadership" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Leadership Comm
            </button>
            <button
              onClick={() => setActiveQnaLevel("casestudy")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeQnaLevel === "casestudy" ? "bg-purple-500/10 text-purple-300" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Case Study & Final
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
                      {item.level.toUpperCase()} · {item.framework.toUpperCase()}
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
                    <div className="text-slate-300 text-xs sm:text-sm leading-relaxed border-l-2 border-purple-500/40 pl-4 italic space-y-2">
                      {renderAnswerWithTooltips(item.a)}
                    </div>
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
              <div className={`px-3 py-1.5 rounded-xl border text-[11px] font-extrabold tracking-wide ${
                simScore >= 90 ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/[0.02]" : simScore >= 60 ? "text-amber-400 border-amber-500/20 bg-amber-500/[0.02]" : "text-rose-500 border-rose-500/20 bg-rose-500/[0.02]"
              } self-start`}>
                {simScore >= 90 ? "BOARDROOM DEFENSIBLE COMPLIANCE POSTURE" : simScore >= 60 ? "MODERATE REGULATORY RISK (ACTION REQUIRED)" : "CRITICAL COMPLIANCE EXPOSURE"}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Checkbox Inputs */}
              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={simGdpr}
                    onChange={(e) => setSimGdpr(e.target.checked)}
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
                    checked={simKdpa}
                    onChange={(e) => setSimKdpa(e.target.checked)}
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
                    checked={simIso}
                    onChange={(e) => setSimIso(e.target.checked)}
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
                    checked={simStaff}
                    onChange={(e) => setSimStaff(e.target.checked)}
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
                  <span className={simScore > 80 ? "text-emerald-400 animate-bounce" : simScore > 50 ? "text-amber-400" : "text-rose-500"}>
                    {simScore}
                  </span>
                  <span className="text-slate-600">/100</span>
                </div>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed mt-2">
                  {simScore >= 90
                    ? "✅ Defensible posture. Your multi-site operations are insulated from catastrophic compliance liability and fines."
                    : simScore >= 60
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
