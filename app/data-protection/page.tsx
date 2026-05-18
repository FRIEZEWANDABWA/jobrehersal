"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExecutiveBrief, ActiveRecallQuiz, TermTooltip } from "@/components/learningComponents";
import { Shield, BookOpen, UserCheck, Activity, Award, FileText, CheckCircle, AlertTriangle, AlertCircle, ChevronDown, ChevronRight, Check } from "lucide-react";
import { gdprSyllabus, isoSyllabus, kdpaSyllabus, frameworksSyllabus, governanceSyllabus, leadershipSyllabus, caseStudies } from "./syllabusData";

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
  { term: "DIA", definition: "Dedicated Internet Access - isolated, uncontended high-speed corporate fiber circuits." },
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
  const [activeFramework, setActiveFramework] = useState<"gdpr" | "kdpa" | "iso" | "frameworks" | "governance_module" | "leadership_module" | "cases">("gdpr");
  const [activeQnaLevel, setActiveQnaLevel] = useState<"all" | "gdpr_kdpa" | "tier1" | "tier2" | "tier3" | "tier4" | "leadership" | "casestudy">("all");
  const [searchQuery, setSearchQuery] = useState("");
  // Learning Syllabus UI States
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [masteredSections, setMasteredSections] = useState<Record<string, boolean>>({});
  
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
      q: "What is data protection?",
      a: "Data protection is the strategic process of safeguarding critical business and personal information from unauthorized access, loss, corruption, or compromise, while ensuring its confidentiality, integrity, and availability. In modern enterprise operations, it spans three essential layers: technical safeguards (such as encryption and MFA), legal compliance (such as the KDPA and GDPR), and operational governance (such as access reviews and incident response blueprints)."
    },
    {
      id: 2,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "What is General Data Protection (GDPR)?",
      a: "GDPR is a global privacy and data protection framework that governs how organizations collect, process, store, share, and protect personal data. It emphasizes transparency, accountability, user privacy rights, and strong operational safeguards to protect sensitive information."
    },
    {
      id: 3,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "What is personal data?",
      a: "Personal data refers to any information that can identify an individual either directly or indirectly. Examples include names, emails, phone numbers, IP addresses, biometrics, access records, and CCTV footage."
    },
    {
      id: 4,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "What is Privacy by Design?",
      a: "Privacy by Design means security and privacy controls must be integrated into systems and operational processes from the beginning rather than added later. Examples include MFA, encryption, least privilege access, secure backups, audit logging, and network segmentation."
    },
    {
      id: 5,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "What is the difference between a Data Controller and Data Processor?",
      a: "A Data Controller determines why and how personal data is processed, while a Data Processor processes data on behalf of the controller. In enterprise environments, organizations may act as either or both depending on operational responsibilities and managed services."
    },
    {
      id: 6,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "How would you implement GDPR in a multi-site enterprise environment?",
      a: "I would begin with data discovery and operational risk assessment to understand where personal data exists, how it flows, who accesses it, and the associated operational risks. I would then implement governance controls including: MFA, encryption, access governance, vendor governance, audit logging, backup governance, retention policies, incident response, and continuous monitoring. I would also maintain stakeholder awareness, governance reporting, and regular compliance reviews to ensure operational alignment."
    },
    {
      id: 7,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "How does GDPR affect Frieze Wandabwa's day-to-day ICT operations?",
      a: "GDPR significantly impacts ICT operations because IT departments are responsible for the systems, infrastructure, access controls, and security safeguards that protect personal data. As Head of IT, I would ensure personal data is processed securely through encryption, access control, monitoring, backup governance, retention policies, vendor governance, and incident response procedures while ensuring operational systems align with privacy requirements."
    },
    {
      id: 8,
      level: "gdpr_kdpa",
      framework: "kdpa",
      q: "How would you ensure compliance with the Kenya Data Protection Act?",
      a: "I would ensure compliance through governance, operational controls, technical safeguards, staff awareness, vendor governance, and continuous monitoring. This includes: access governance, encryption, retention policies, audit logging, backup governance, vendor assessments, and incident response procedures."
    },
    {
      id: 9,
      level: "gdpr_kdpa",
      framework: "kdpa",
      q: "What is Data Protection by Design?",
      a: "Data Protection by Design (under Section 41 of the Kenya DPA) requires that data protection, privacy, and security controls are built into systems by default. This involves default MFA, encrypted devices (BitLocker), least-privilege role boundaries, separate network VLAN segments, secure VPN channels, centralized audit logging, and automated cloud backup encryption."
    },
    {
      id: 10,
      level: "gdpr_kdpa",
      framework: "iso",
      q: "What is the relationship between GDPR, KDPA, and ISO 27001?",
      a: "GDPR and KDPA are legal compliance frameworks defining privacy principles, rights, and regulatory mandates. ISO 27001 is a practical, structured information security governance system (ISMS) that provides the actual tech controls, risks, processes, and people structures required to enforce and prove compliance with both laws."
    },
    {
      id: 11,
      level: "gdpr_kdpa",
      framework: "iso",
      q: "How would you implement ISO 27001 in an enterprise environment?",
      a: "I would build it around a formal Information Security Management System (ISMS) scoping People, Processes, Technology, Risk, Compliance, and Continuity. This involves: creating asset inventories, enforcing strict access controls (MFA/RBAC), drafting incident containment playbooks, auditing physical security (Suprema door blocks, CCTV subnets), testing backup restoration schedules, and conducting regular risk assessments."
    },
    {
      id: 12,
      level: "gdpr_kdpa",
      framework: "iso",
      q: "Why is compliance important for a Head of IT?",
      a: "Compliance is not just a regulatory check; it is a critical driver of business resilience and commercial trust. As Head of IT, protecting client data, avoiding breaches, keeping systems compliant with ODPC laws, and holding documented audits is what secures enterprise vendor SLAs and protects the company from catastrophic downtime and fines."
    },
    {
      id: 13,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "How would you handle a data breach?",
      a: "I would initiate our 3-phase Incident Response playbook: 1. Detection and verification. 2. Immediate containment (isolating infected VLANs, locking credentials, protecting Veeam backups). 3. Legal and regulatory escalation, notifying executive stakeholders and filing formal ODPC notifications within the mandatory 72-hour legal breach window."
    },
    {
      id: 14,
      level: "gdpr_kdpa",
      framework: "gdpr",
      q: "How would you define the role of Head of IT during a major data breach?",
      a: "I would immediately activate our Incident Response containment protocols. This involves isolating affected VLAN segments, locking compromised SaaS admin consoles, preserving forensic server images for audit records, notifying legal and regulatory stakeholders within our 72-hour mandate, and preparing a transparent root-cause analysis for review by executive leadership."
    },
    {
      id: 15,
      level: "gdpr_kdpa",
      framework: "kdpa",
      q: "What is Frieze's exact boardroom justification for implementing Section 41 (Privacy-by-Design)?",
      a: "Section 41 shifts IT from a reactive mode to a proactive engineering posture. Emphasize that default MFA, segmented client networks, and automated offboarding prevent compliance failures before they can trigger legal action or catastrophic data theft."
    },
    {
      id: 16,
      level: "gdpr_kdpa",
      framework: "kdpa",
      q: "How would Frieze prepare our distributed multi-site centers to comply with the KDPA?",
      a: "Compliance requires combining rigorous controls with clean governance. I would register KOFISI/KEMRI as data controllers, configure automatic AES-256 backup encryption, restrict NVR CCTV recordings to a strict 30-day archival policy, enforce MFA by default across our Zoho and SaaS environments, and train staff to eliminate social engineering vulnerabilities."
    },
    {
      id: 17,
      level: "gdpr_kdpa",
      framework: "iso",
      q: "How does Frieze implement ISO 27001 risk management in an enterprise multi-site environment?",
      a: "I approach security as a core risk management exercise. I begin by identifying risks (e.g. ransomware, fiber cuts), evaluating their business SLA impact, deploying controls (immutable backups, active-active ISPs), and continuously auditing for improvement."
    },
    {
      id: 18,
      level: "gdpr_kdpa",
      framework: "iso",
      q: "Why is compliance with frameworks like ISO 27001 important for an IT Director?",
      a: "Compliance is the bedrock of commercial trust. At senior executive levels, I am no longer simply resolving system patches—I am actively protecting KOFISI/KEMRI from major reputational damage, operational downtime, client SLA defaults, and catastrophic financial and legal exposure."
    },

    // 🧠 TIER 1 — TECHNICAL & SECURITY GOVERNANCE QUESTIONS
    {
      id: 19,
      level: "tier1",
      framework: "iso",
      q: "What is the difference between hashing and encryption?",
      a: "Encryption is a reversible process used to protect data confidentiality, where information can be decrypted using authorized keys. Hashing, on the other hand, is a one-way cryptographic process primarily used for integrity verification and secure password storage. In enterprise environments, encryption protects sensitive operational data such as cloud storage, backups, VPN traffic, and finance systems, while hashing is commonly used for password protection, integrity validation, and digital verification."
    },
    {
      id: 20,
      level: "tier1",
      framework: "iso",
      q: "What is RBAC?",
      a: "Role-Based Access Control is a governance model where system access is assigned based on organizational roles and operational responsibilities rather than individual preference. RBAC improves governance by enforcing least privilege access, reducing insider risk, improving auditability, and simplifying operational access management across enterprise systems."
    },
    {
      id: 21,
      level: "tier1",
      framework: "iso",
      q: "What is Zero Trust?",
      a: "Zero Trust is a modern security architecture model based on the principle of ‘never trust, always verify.’ It assumes no user, device, network, or system should automatically be trusted, even inside the internal network. Access decisions are continuously validated using identity, device posture, location, behavior, and risk signals. In enterprise environments, Zero Trust improves operational resilience by reducing lateral movement, minimizing insider risk, and strengthening cloud and remote-access governance."
    },
    {
      id: 22,
      level: "tier1",
      framework: "iso",
      q: "What is a SIEM?",
      a: "A SIEM, or Security Information and Event Management platform, centralizes security logs, correlates events, detects suspicious activity, and improves incident visibility across enterprise environments. It enables security teams to identify threats faster, investigate incidents, maintain audit evidence, and improve operational monitoring and compliance governance."
    },

    // 🧠 TIER 2 — GOVERNANCE QUESTIONS
    {
      id: 23,
      level: "tier2",
      framework: "iso",
      q: "How do you implement an ISMS?",
      a: "I would begin with organizational risk assessment, asset identification, governance scoping, and executive stakeholder alignment. From there, I would establish: policies, operational standards, security controls, incident response procedures, access governance, vendor governance, monitoring frameworks, and audit processes. The ISMS must align with operational realities, business objectives, regulatory obligations, and organizational risk exposure. Continuous improvement through reviews, audits, KPI tracking, and governance meetings is also critical."
    },
    {
      id: 24,
      level: "tier2",
      framework: "iso",
      q: "How do you conduct information security audits?",
      a: "I approach audits through structured governance and evidence-based validation. The process includes: scope definition, control assessment, policy reviews, evidence collection, access reviews, vulnerability reviews, vendor assessments, and operational walkthroughs. I also validate whether operational practices align with documented governance controls and compliance requirements. Audit findings are then categorized by risk level, operational impact, remediation priority, and governance exposure."
    },
    {
      id: 25,
      level: "tier2",
      framework: "iso",
      q: "How do you manage third-party risk?",
      a: "Third-party governance is critical because vendors often have direct or indirect access to organizational systems, infrastructure, and sensitive data. I manage third-party risk through: security assessments, SLA governance, vendor onboarding reviews, access governance, contractual security obligations, compliance validation, and continuous performance monitoring. I also ensure vendors follow least privilege access principles and maintain proper audit visibility."
    },

    // 🧠 TIER 3 — EXECUTIVE QUESTIONS
    {
      id: 26,
      level: "tier3",
      framework: "iso",
      q: "How do you communicate cyber risk to executives?",
      a: "I avoid overly technical language and instead communicate cyber risk in terms of business impact, operational continuity, financial exposure, reputational impact, regulatory risk, and organizational resilience. For example, instead of discussing firewall vulnerabilities technically, I may explain how a control weakness could increase operational downtime, expose sensitive client data, or affect organizational continuity. Executives need visibility into business impact, risk exposure, mitigation status, and investment priorities rather than purely technical details."
    },
    {
      id: 27,
      level: "tier3",
      framework: "iso",
      q: "How do you justify security spending?",
      a: "I justify security investment by aligning it to: operational continuity, regulatory compliance, organizational resilience, risk reduction, and long-term business protection. Security investment should be viewed as risk management and operational enablement rather than simply technical expenditure. I also communicate measurable value such as: reduced downtime, improved recovery capability, compliance alignment, operational resilience, and reduced exposure to ransomware or operational disruption."
    },
    {
      id: 28,
      level: "tier3",
      framework: "iso",
      q: "How do you balance usability and security?",
      a: "Strong governance requires balancing operational productivity with appropriate security controls. Security should not unnecessarily block business operations, but operational convenience should also not compromise organizational protection. My approach focuses on layered security, risk-based controls, user awareness, automation, and intelligent access governance to maintain both usability and operational resilience."
    },

    // 🧠 TIER 4 — CRISIS & INCIDENT QUESTIONS
    {
      id: 29,
      level: "tier4",
      framework: "gdpr",
      q: "A ransomware attack happens during working hours. What do you do?",
      a: "I would immediately activate incident response governance procedures. The first priority would be containment, operational isolation, and protection of unaffected systems. This may include isolating VLANs, disabling compromised accounts, restricting lateral movement, and protecting backups. I would then preserve evidence, activate leadership escalation, coordinate communication, assess operational impact, validate recovery capability, and initiate recovery procedures. After stabilization, I would conduct root-cause analysis, governance review, remediation, and lessons learned assessment."
    },
    {
      id: 30,
      level: "tier4",
      framework: "gdpr",
      q: "An executive email account is compromised.",
      a: "I would immediately isolate the affected account, revoke active sessions, enforce password resets, review MFA status, and analyze audit logs for suspicious activity. Because executive accounts typically have elevated exposure and reputational impact, I would also assess email forwarding rules, sensitive communications, cloud application access, and potential lateral movement. I would escalate internally, preserve evidence, coordinate communication, and validate recovery and governance remediation procedures."
    },
    {
      id: 31,
      level: "tier4",
      framework: "kdpa",
      q: "Sensitive CCTV footage leaks online.",
      a: "I would immediately restrict access to CCTV infrastructure, preserve forensic evidence, assess the source of exposure, review access logs, and isolate affected systems or accounts. I would then coordinate legal review, executive escalation, regulatory assessment, and communication governance. The incident would also trigger access governance review, retention policy review, contractor assessment, and operational remediation activities."
    },
    {
      id: 32,
      level: "tier4",
      framework: "iso",
      q: "A disaster recovery test fails.",
      a: "I would treat a failed DR test as a critical governance issue because it directly impacts organizational resilience and recovery capability. I would immediately assess root cause, recovery gaps, operational exposure, backup integrity, and failover dependencies. Corrective actions may include infrastructure redesign, backup optimization, process improvements, additional testing, and governance escalation. DR governance must remain continuously validated rather than assumed."
    },

    // 🧠 LEADERSHIP COMMUNICATION QUESTIONS
    {
      id: 33,
      level: "leadership",
      framework: "iso",
      q: "How do you explain a cyber incident calmly to executives?",
      a: "I focus on clarity, facts, business impact, and recovery status rather than technical panic. I communicate what happened, what systems are affected, operational impact, containment status, mitigation actions, and next steps. The objective is maintaining executive confidence while ensuring transparency, accountability, and coordinated decision-making."
    },
    {
      id: 34,
      level: "leadership",
      framework: "iso",
      q: "How do you avoid overwhelming executives with technical details?",
      a: "I translate technical issues into operational and business language. Executives typically care about: operational continuity, client impact, financial exposure, legal exposure, recovery timelines, and organizational risk. My role is bridging technical complexity into strategic decision-making visibility."
    },

    // 🧠 CASE STUDY QUESTIONS & FINAL
    {
      id: 35,
      level: "casestudy",
      framework: "iso",
      q: "What lessons did you learn from major breaches like Equifax or Colonial Pipeline?",
      a: "Major breaches consistently demonstrate that governance failures, weak visibility, poor patch management, insufficient segmentation, weak identity governance, and delayed incident response can create catastrophic organizational impact. The key lesson is that cybersecurity is not only a technical function — it is an operational governance and organizational resilience function. Strong visibility, layered controls, continuous monitoring, incident preparedness, executive accountability, and operational discipline are critical."
    },
    {
      id: 36,
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
            Protected Sandbox Environment v1.6
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
          <div className="flex flex-wrap gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800/80 self-start">
            <button
              onClick={() => {
                setActiveFramework("gdpr");
                setExpandedModule(null);
                setExpandedSection(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeFramework === "gdpr" ? "bg-purple-500/10 text-purple-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              GDPR Master Module
            </button>
            <button
              onClick={() => {
                setActiveFramework("kdpa");
                setExpandedModule(null);
                setExpandedSection(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeFramework === "kdpa" ? "bg-purple-500/10 text-purple-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Kenya DPA Module
            </button>
            <button
              onClick={() => {
                setActiveFramework("iso");
                setExpandedModule(null);
                setExpandedSection(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeFramework === "iso" ? "bg-purple-500/10 text-purple-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              ISO 27001 ISMS Module
            </button>
            <button
              onClick={() => {
                setActiveFramework("frameworks");
                setExpandedModule(null);
                setExpandedSection(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeFramework === "frameworks" ? "bg-purple-500/10 text-purple-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Frameworks Master Module
            </button>
            <button
              onClick={() => {
                setActiveFramework("governance_module");
                setExpandedModule(null);
                setExpandedSection(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeFramework === "governance_module" ? "bg-purple-500/10 text-purple-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Governance Master Module
            </button>
            <button
              onClick={() => {
                setActiveFramework("leadership_module");
                setExpandedModule(null);
                setExpandedSection(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeFramework === "leadership_module" ? "bg-purple-500/10 text-purple-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Executive Leadership Master Module
            </button>
            <button
              onClick={() => {
                setActiveFramework("cases");
                setExpandedModule(null);
                setExpandedSection(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                activeFramework === "cases" ? "bg-purple-500/10 text-purple-300 shadow-sm" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Enterprise Case Studies
            </button>
          </div>

          {/* PROGRESS TRACKER */}
          {activeFramework !== "cases" && (
            <div className="p-4 rounded-2xl border border-slate-800/80 bg-slate-900/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block">Learning Status</span>
                <span className="text-xs text-slate-300 font-semibold mt-0.5">
                  {activeFramework === "gdpr" && "GDPR Master Syllabus Progress"}
                  {activeFramework === "kdpa" && "Kenya DPA Syllabus Progress"}
                  {activeFramework === "iso" && "ISO 27001 ISMS Syllabus Progress"}
                  {activeFramework === "frameworks" && "Frameworks Master Syllabus Progress"}
                  {activeFramework === "governance_module" && "Governance Master Syllabus Progress"}
                  {activeFramework === "leadership_module" && "Executive Leadership Master Syllabus Progress"}
                </span>
              </div>
              <div className="flex items-center gap-4 flex-1 max-w-md">
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-500"
                    style={{
                      width: `${
                        activeFramework === "gdpr"
                          ? gdprSyllabus.flatMap(m => m.sections).length > 0 ? (Object.keys(masteredSections).filter(k => k.startsWith("gdpr-")).length / gdprSyllabus.flatMap(m => m.sections).length) * 100 : 0
                          : activeFramework === "kdpa"
                          ? kdpaSyllabus.length > 0 ? (Object.keys(masteredSections).filter(k => k.startsWith("kdpa-")).length / kdpaSyllabus.length) * 100 : 0
                          : activeFramework === "iso"
                          ? isoSyllabus.length > 0 ? (Object.keys(masteredSections).filter(k => k.startsWith("iso-")).length / isoSyllabus.length) * 100 : 0
                          : activeFramework === "frameworks"
                          ? frameworksSyllabus.length > 0 ? (Object.keys(masteredSections).filter(k => k.startsWith("fw-")).length / frameworksSyllabus.length) * 100 : 0
                          : activeFramework === "governance_module"
                          ? governanceSyllabus.length > 0 ? (Object.keys(masteredSections).filter(k => k.startsWith("gov-")).length / governanceSyllabus.length) * 100 : 0
                          : activeFramework === "leadership_module"
                          ? leadershipSyllabus.length > 0 ? (Object.keys(masteredSections).filter(k => k.startsWith("ldr-")).length / leadershipSyllabus.length) * 100 : 0
                          : 0
                      }%`
                    }}
                  />
                </div>
                <span className="text-xs font-mono font-bold text-purple-400">
                  {activeFramework === "gdpr" && `${Object.keys(masteredSections).filter(k => k.startsWith("gdpr-")).length}/${gdprSyllabus.flatMap(m => m.sections).length}`}
                  {activeFramework === "kdpa" && `${Object.keys(masteredSections).filter(k => k.startsWith("kdpa-")).length}/${kdpaSyllabus.length}`}
                  {activeFramework === "iso" && `${Object.keys(masteredSections).filter(k => k.startsWith("iso-")).length}/${isoSyllabus.length}`}
                  {activeFramework === "frameworks" && `${Object.keys(masteredSections).filter(k => k.startsWith("fw-")).length}/${frameworksSyllabus.length}`}
                  {activeFramework === "governance_module" && `${Object.keys(masteredSections).filter(k => k.startsWith("gov-")).length}/${governanceSyllabus.length}`}
                  {activeFramework === "leadership_module" && `${Object.keys(masteredSections).filter(k => k.startsWith("ldr-")).length}/${leadershipSyllabus.length}`}
                </span>
              </div>
            </div>
          )}

          {/* GDPR SYLLABUS VIEWER */}
          {activeFramework === "gdpr" && (
            <div className="space-y-4">
              {gdprSyllabus.map((module) => {
                const isModExpanded = expandedModule === module.id;
                const masteredCount = module.sections.filter(s => masteredSections[s.id]).length;
                return (
                  <div
                    key={module.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/10 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setExpandedModule(isModExpanded ? null : module.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-slate-950/20 hover:bg-slate-950/40 transition"
                    >
                      <div>
                        <span className="text-xs sm:text-sm font-extrabold text-slate-100 block">{module.title}</span>
                        <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                          {masteredCount} / {module.sections.length} Sections Mastered
                        </span>
                      </div>
                      {isModExpanded ? <ChevronDown className="w-4 h-4 text-purple-400" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
                    </button>

                    <AnimatePresence initial={false}>
                      {isModExpanded && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden border-t border-slate-800/60 divide-y divide-slate-800/40 bg-slate-950/[0.05]"
                        >
                          {module.sections.map((section) => {
                            const isSecExpanded = expandedSection === section.id;
                            const isMastered = !!masteredSections[section.id];
                            return (
                              <div key={section.id} className="p-4 sm:p-5 space-y-3">
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
                                      <span className="text-xs sm:text-sm font-extrabold text-slate-200 group-hover:text-slate-100 transition">
                                        {section.title}
                                      </span>
                                      <p className="text-xs text-slate-400 leading-relaxed mt-1">{section.definition}</p>
                                    </div>
                                  </button>
                                  <button
                                    onClick={() => setMasteredSections(prev => ({ ...prev, [section.id]: !prev[section.id] }))}
                                    className={`px-3 py-1.5 rounded-xl border text-[10px] font-extrabold uppercase tracking-wider transition flex items-center gap-1.5 flex-shrink-0 ${
                                      isMastered
                                        ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                                        : "bg-slate-905 border-slate-800 text-slate-400 hover:text-slate-300"
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
                                      className="pt-2 pl-6 sm:pl-7 border-l-2 border-purple-500/20 space-y-2"
                                    >
                                      {section.bullets.map((bullet, idx) => (
                                        <div key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed py-1">
                                          {renderAnswerWithTooltips(bullet)}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* KENYA DPA SYLLABUS VIEWER */}
          {activeFramework === "kdpa" && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">📖 Section 2 — Kenya Data Protection Act</span>
                <h3 className="text-sm font-extrabold text-slate-100">Kenya DPA Legal Governance</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The Kenya Data Protection Act is the local implementation of data privacy governance in Kenya. Very important for you because you operate in Kenya, manage Kenyan user data, and support enterprise clients. The Act establishes rules for personal data handling, responsibilities of organizations, rights of users, and penalties for non-compliance.
                </p>
              </div>

              {kdpaSyllabus.map((section) => {
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
                          <p className="text-xs text-slate-400 leading-relaxed mt-1">{section.definition}</p>
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
                          className="pt-4 pl-6 sm:pl-7 border-l-2 border-purple-500/20 space-y-2 mt-3"
                        >
                          {section.bullets.map((bullet, idx) => (
                            <div key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed py-1">
                              {renderAnswerWithTooltips(bullet)}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* ISO 27001 SYLLABUS VIEWER */}
          {activeFramework === "iso" && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">📖 Section 3 — ISO 27001 Governance</span>
                <h3 className="text-sm font-extrabold text-slate-100">ISO 27001 — Information Security Management System (ISMS)</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  ISO 27001 is the biggest executive framework. It is NOT just cybersecurity. It is a governance framework for managing information security organization-wide, scoping People, Processes, Technology, Risk, Compliance, and Continuity.
                </p>
              </div>

              {/* Restored ISO Focus Area Table from initial implementation */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/10 p-5 space-y-4">
                <h4 className="font-extrabold text-amber-300 text-xs sm:text-sm uppercase tracking-wider">
                  ISMS Core Scoping Areas
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-500 uppercase tracking-wider font-extrabold">
                        <th className="py-2 pr-4">ISMS Scoping Area</th>
                        <th className="py-2">Operational Focus Under ISO 27001</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td className="py-2.5 pr-4 font-bold text-slate-200">People</td>
                        <td className="py-2.5 text-slate-400">Staff awareness, security drills, phishing simulations, and least-privilege administrative mindset training.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-bold text-slate-200">Processes</td>
                        <td className="py-2.5 text-slate-400">Documented security policies, onboarding/offboarding blueprints, access logs authorization, and incident escalation paths.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-bold text-slate-200">Technology</td>
                        <td className="py-2.5 text-slate-400">MFA enforcement, storage BitLocker/AES-256 encryption, isolated VLAN routers, secure local NVR cams subnets, and Veeam backups.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-bold text-slate-200">Risk</td>
                        <td className="py-2.5 text-slate-400">CIA risk registries, threat classification models, likelihood/severity metrics, and periodic boardroom risk reviews.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-bold text-slate-200">Compliance</td>
                        <td className="py-2.5 text-slate-400">Section 41 and 43 alignment under ODPC guidelines, GDPR contractual obligations, and internal audit evidence trails.</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 pr-4 font-bold text-slate-200">Continuity</td>
                        <td className="py-2.5 text-slate-400">Disaster recovery failover, Tested secondary ISP lines, redundant firewalls, and Veeam database restoration audits.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {isoSyllabus.map((section) => {
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
                          <p className="text-xs text-slate-400 leading-relaxed mt-1">{section.definition}</p>
                        </div>
                      </button>
                      <button
                        onClick={() => setMasteredSections(prev => ({ ...prev, [section.id]: !prev[section.id] }))}
                        className={`px-3 py-1.5 rounded-xl border text-[10px] font-extrabold uppercase tracking-wider transition flex items-center gap-1.5 flex-shrink-0 ${
                          isMastered
                            ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                            : "bg-slate-905 border-slate-800 text-slate-400 hover:text-slate-300"
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
                          className="pt-4 pl-6 sm:pl-7 border-l-2 border-purple-500/20 space-y-2 mt-3"
                        >
                          {section.bullets.map((bullet, idx) => (
                            <div key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed py-1">
                              {renderAnswerWithTooltips(bullet)}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* FRAMEWORKS MASTER MODULE VIEWER */}
          {activeFramework === "frameworks" && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">🏛️ Section 4 — Frameworks Master Module</span>
                <h3 className="text-sm font-extrabold text-slate-100">Executive Governance Framework Architecture</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  This module bridges compliance, cybersecurity, governance, operations, and executive leadership. Learn how governance frameworks work, how enterprise organizations structure governance, how security maturity is measured, and how executive technology governance aligns with business operations.
                </p>
              </div>

              {frameworksSyllabus.map((section) => {
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
                          <p className="text-xs text-slate-400 leading-relaxed mt-1">{section.definition}</p>
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
                          className="pt-4 pl-6 sm:pl-7 border-l-2 border-purple-500/20 space-y-2 mt-3"
                        >
                          {section.bullets.map((bullet, idx) => (
                            <div key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed py-1">
                              {renderAnswerWithTooltips(bullet)}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* GOVERNANCE MASTER MODULE VIEWER */}
          {activeFramework === "governance_module" && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">⚙️ Section 5 — Governance Master Module</span>
                <h3 className="text-sm font-extrabold text-slate-100">Enterprise Governance Operating System</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Establish a bulletproof corporate governance layer across your enterprise. Master governing committees, policy lifecycle systems, risk registries, high-impact C-suite metrics, vendor SLA scorecards, and regulatory audit cycles.
                </p>
              </div>

              {governanceSyllabus.map((section) => {
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
                          <p className="text-xs text-slate-400 leading-relaxed mt-1">{section.definition}</p>
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
                          className="pt-4 pl-6 sm:pl-7 border-l-2 border-purple-500/20 space-y-2 mt-3"
                        >
                          {section.bullets.map((bullet, idx) => (
                            <div key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed py-1">
                              {renderAnswerWithTooltips(bullet)}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* EXECUTIVE LEADERSHIP MASTER MODULE VIEWER */}
          {activeFramework === "leadership_module" && (
            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">👑 Section 6 — Executive Leadership Master Module</span>
                <h3 className="text-sm font-extrabold text-slate-100">Executive Leadership Operating System</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Bridge technology operations with executive commercial success. Learn how to think like a C-level technology strategist, present defensible risk dashboards in the boardroom, negotiate corporate-wide software contracts, manage capital budgets, and confidently command crisis responses.
                </p>
              </div>

              {leadershipSyllabus.map((section) => {
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
                          <p className="text-xs text-slate-400 leading-relaxed mt-1">{section.definition}</p>
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
                          className="pt-4 pl-6 sm:pl-7 border-l-2 border-purple-500/20 space-y-2 mt-3"
                        >
                          {section.bullets.map((bullet, idx) => (
                            <div key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed py-1">
                              {renderAnswerWithTooltips(bullet)}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* REAL ENTERPRISE CASE STUDIES */}
          {activeFramework === "cases" && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl border border-purple-500/10 bg-purple-500/[0.01] space-y-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 block">🚨 Case Study Hub</span>
                <h3 className="text-sm font-extrabold text-slate-100">Real-World Enterprise Security Compromises</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Analyze actual governance and technical breakdowns from global breaches. Understand what went wrong, regulatory impacts, and how you will architect systems differently to guarantee absolute protection.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {caseStudies.map((cs) => {
                  const isCsExpanded = expandedSection === cs.id;
                  return (
                    <div
                      key={cs.id}
                      className="rounded-2xl border border-slate-800 bg-slate-900/10 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setExpandedSection(isCsExpanded ? null : cs.id)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-slate-950/20 hover:bg-slate-950/40 transition"
                      >
                        <div>
                          <span className="text-xs sm:text-sm font-extrabold text-amber-300 block">
                            {cs.title}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono mt-0.5">
                            Click to expand full root-cause analysis and lessons learned
                          </span>
                        </div>
                        {isCsExpanded ? <ChevronDown className="w-4 h-4 text-amber-300" /> : <ChevronRight className="w-4 h-4 text-slate-500" />}
                      </button>

                      <AnimatePresence initial={false}>
                        {isCsExpanded && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden border-t border-slate-800/60 bg-slate-950/[0.05] p-5 space-y-4"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                              <div className="space-y-3">
                                <div>
                                  <span className="text-[10px] font-extrabold text-purple-400 uppercase tracking-wider block">1. What Happened</span>
                                  <p className="text-slate-300 leading-relaxed mt-1">{cs.whatHappened}</p>
                                </div>
                                <div>
                                  <span className="text-[10px] font-extrabold text-purple-400 uppercase tracking-wider block">2. Root Cause</span>
                                  <p className="text-slate-300 leading-relaxed mt-1">{cs.rootCause}</p>
                                </div>
                                <div>
                                  <span className="text-[10px] font-extrabold text-rose-400 uppercase tracking-wider block">3. Governance Failure</span>
                                  <p className="text-slate-300 leading-relaxed mt-1">{cs.governanceFailure}</p>
                                </div>
                              </div>

                              <div className="space-y-3">
                                <div>
                                  <span className="text-[10px] font-extrabold text-rose-400 uppercase tracking-wider block">4. Technical Failure</span>
                                  <p className="text-slate-300 leading-relaxed mt-1">{cs.technicalFailure}</p>
                                </div>
                                <div>
                                  <span className="text-[10px] font-extrabold text-amber-300 uppercase tracking-wider block">5. Regulatory Impact</span>
                                  <p className="text-slate-300 leading-relaxed mt-1">{cs.regulatoryImpact}</p>
                                </div>
                                <div>
                                  <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider block">6. Lessons Learned</span>
                                  <p className="text-slate-300 leading-relaxed mt-1">{cs.lessonsLearned}</p>
                                </div>
                              </div>
                            </div>

                            <div className="border-t border-slate-800/80 pt-4 mt-2">
                              <span className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-wider block">💡 What Frieze Would Do Differently</span>
                              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mt-1.5 border-l-2 border-emerald-400/40 pl-3">
                                {renderAnswerWithTooltips(cs.whatToDoDifferently)}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
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
          <div className="p-5 rounded-2xl border border-slate-855 bg-slate-950/40 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400">🛡️ Operational System Playbooks</span>
            <h3 className="text-sm font-extrabold text-slate-100">Frieze Wandabwa's Multi-Site Governance Blueprints</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Actionable operational strategies mapping exact technical configurations to satisfy legal mandates and regulatory ISMS standards.
            </p>
          </div>

          {/* Restored: Daily Operational Area / Responsibility quick-reference mapping table */}
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-extrabold text-purple-400 uppercase tracking-wider border-b border-slate-850 pb-2">
              Framework Operational Mapping Table
            </h4>
            <div className="overflow-x-auto rounded-2xl border border-slate-800">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/40 text-slate-400 font-bold">
                    <th className="p-3">Daily Operational Area</th>
                    <th className="p-3">Your Specific Responsibility (Boardroom Defensible)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Internet Infrastructure</td>
                    <td className="p-3">Secure segmentation, redundant firewalls, and active-active failover across 3-ISP routes.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Cloud Systems</td>
                    <td className="p-3">Identity management, strict MFA enforcement, conditional access, and secure cloud API keys.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Access Control</td>
                    <td className="p-3">Least privilege biometric rules (Suprema/Improv integration) and centralized audit logs.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">CCTV Surveillance</td>
                    <td className="p-3">Restricted NVR console logins and strict 30-day auto-recycling storage logs.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Google Workspace</td>
                    <td className="p-3">User admin rights auditing, email DKIM/SPF protection, and multi-tenant domain isolation.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Zoho / ERP</td>
                    <td className="p-3">Strict database credentials, geo-restricted logins, and customer personal data masking.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Finance Systems</td>
                    <td className="p-3">Enforce local partition encryption (BitLocker active) and highly restricted administrative accounts.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Backups</td>
                    <td className="p-3">Centralized AES-256 database protection, WORM backup vaults, and weekly restore tests.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Vendor Management</td>
                    <td className="p-3">Perform comprehensive security risk audits and enforce strict SLAs before contract approvals.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-slate-200">Staff Offboarding</td>
                    <td className="p-3">Immediate, automated access removal across all SaaS tools, biometrics, and active credentials.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Restored: What You Should Implement Day-to-Day Cards */}
          <div className="space-y-4 pt-4">
            <h4 className="text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-wider border-b border-slate-850 pb-2">
              Critical Control Enforcements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/10 space-y-2">
                <span className="font-extrabold text-slate-200 block text-xs sm:text-sm">1. Access Governance</span>
                <p className="text-slate-400 text-xs leading-relaxed">Implement mandatory MFA enforcements, strict RBAC layers, password complexities, Privileged Access Management (PAM), and formal quarterly administrative reviews.</p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/10 space-y-2">
                <span className="font-extrabold text-slate-200 block text-xs sm:text-sm">2. Data Classification</span>
                <p className="text-slate-400 text-xs leading-relaxed">Map and classify all organization-wide files into clear categories: Public, Internal, Confidential, and Restricted. Segment databases to align with access roles.</p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/10 space-y-2">
                <span className="font-extrabold text-slate-200 block text-xs sm:text-sm">3. Logging & Monitoring</span>
                <p className="text-slate-400 text-xs leading-relaxed">Collect and monitor logs for: VPN remote tunnels, administrative logins, failed authorization attempts, SaaS modifications, and firewall events.</p>
              </div>

              <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/10 space-y-2">
                <span className="font-extrabold text-slate-200 block text-xs sm:text-sm">4. Backup Governance</span>
                <p className="text-slate-400 text-xs leading-relaxed">Maintain fully encrypted local backups, immutable cloud backups, offsite database replication channels, and regular disaster restore validations.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-purple-500/20 bg-purple-500/[0.01] space-y-2">
              <span className="font-extrabold text-purple-300 block text-xs sm:text-sm">5. Staff Awareness Campaigns</span>
              <p className="text-slate-300 text-xs leading-relaxed">
                One of the biggest security risks is social engineering. Regularly run simulated phishing campaigns to train employees on passwords hygiene, safe link executions, and secure file sharing protocols.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Access Governance Playbook Card */}
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

            {/* Cloud Governance Playbook Card */}
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

            {/* CCTV Governance Playbook Card */}
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

            {/* Incident Response Playbook Card */}
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
Reported By: Frieze Wandabwa (Head of IT)
Severity Rating: [LOW / MEDIUM / HIGH / CRITICAL]

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
