import type { KnowledgeSection } from "./types";

export const knowledgeSections: {
  id: KnowledgeSection;
  label: string;
  description: string;
}[] = [
  {
    id: "leadership",
    label: "Leadership",
    description:
      "Book 1: mindset, fit Q&A, alignment, Ch.3–5 playbooks + Ch.3–5 Q&A, Section 2 strategic Q&A.",
  },
  {
    id: "operations",
    label: "Operations",
    description:
      "Book 1 Section 3: availability, Ch.1–4 Q&A, vendors, BCP/DR Ch.4 playbook + Q&A.",
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    description:
      "Book 1 Section 4: executive cyber leadership, NIST-style framing, IAM, metrics, compliance, vendor risk, and culture.",
  },
  {
    id: "people-culture",
    label: "People & culture",
    description:
      "Book 1 Section 5: clarity, ownership, accountability, performance, pressure, conflict, partnership, and change leadership.",
  },
  {
    id: "financial-management",
    label: "Financial management",
    description:
      "Book 1 Section 6: CapEx/OpEx, budget ownership, ROI, cost of inaction, optimization, boardroom defense, and Finance partnership.",
  },
  {
    id: "behavioral-pressure",
    label: "Behavioural & pressure",
    description:
      "Book 1 Section 7: judgment under fire, ownership, uncertainty, failure answers, leaving/why-you, positioning, and pressure language.",
  },
  {
    id: "infrastructure-architecture",
    label: "Infrastructure & architecture",
    description:
      "Book 2: executive infrastructure thinking—stability, standardization, scale, visibility, resilience, EA, cloud fit, lifecycle, network & endpoint strategy.",
  },
  {
    id: "security-leadership",
    label: "Security leadership",
    description:
      "Book 3: board-level cyber strategy, PREVENT→DETECT→CONTAIN→RECOVER→GOVERN, Zero Trust, identity as perimeter, SOC/SIEM exec view, vendor risk, investment prioritization.",
  },
  {
    id: "executive-presence",
    label: "Executive presence",
    description:
      "Book 4: CIO-level communication—CLARITY→CALM→OWNERSHIP→DECISION→TRUST, CEO/CFO/board language, reporting, disagreement, silence as a tool, and boardroom authority.",
  },
  {
    id: "transformation-ai-future",
    label: "Transformation & AI",
    description:
      "Book 5: digital transformation as operating-model redesign—SIMPLIFY→DIGITIZE→AUTOMATE→GOVERN→SCALE, executive AI, governance (VALUE→RISK→CONTROL→OWNERSHIP), future-readiness, and board AI conversations.",
  },
  {
    id: "mock-case-studies",
    label: "Mock panels & case studies",
    description:
      "Book 6: case study frameworks plus full high-scoring sample answers—STABILIZE→ASSESS→PRIORITIZE→COMMUNICATE→DECIDE→IMPROVE, ransomware, cost cuts, inherited IT, DR, global vs local, vendor failure, response style.",
  },
  {
    id: "executive-answer-vault",
    label: "Executive answer vault",
    description:
      "Book 7: rapid revision—10 killer openings, 10 closings, vocabulary upgrades, boardroom phrases, phrases to avoid, 30-second power intro, and executive positioning language.",
  },
  {
    id: "full-mock-interview-panel",
    label: "Full mock interview panel",
    description:
      "50 real executive Q&As under pressure—split into Intro plus six bands (Q1–5 fit, Q6–8 strategy, Q9 ops, Q10–20 cyber/finance/conflict, Q21–35 board/AI/regional, Q36–50 closing & trust).",
  },
  {
    id: "security",
    label: "Security",
    description: "Risk, resilience, and defensible architectures.",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    description: "Scale, reliability, and modernization.",
  },
  {
    id: "finance",
    label: "Finance",
    description: "TCO, business cases, and portfolio economics.",
  },
  {
    id: "ai",
    label: "AI",
    description: "Governance, adoption, and safe acceleration.",
  },
  {
    id: "people-leadership",
    label: "People leadership",
    description: "Teams, talent, and operating cadence.",
  },
];

export const mainNav = [
  { href: "/", label: "Command Centre" },
  { href: "/search", label: "Search" },
  { href: "/knowledge", label: "Knowledge Hub" },
  { href: "/data-protection", label: "Data Protection" },
  { href: "/modern-frameworks", label: "Modern Frameworks" },
  { href: "/budget", label: "Budget" },
  { href: "/star-vault", label: "STAR Vault" },
  { href: "/executive-dashboard", label: "Executive dashboard" },
  {
    label: "Questions & Answers",
    isFolder: true,
    subItems: [
      { href: "/company", label: "Company Mode" },
      { href: "/interview-bank", label: "Interview Bank" },
      { href: "/mock-interview", label: "Mock Interview" },
      { href: "/rapid-revision", label: "Rapid Revision" },
      { href: "/final-prep", label: "Final 24-Hour Prep" },
      { href: "/interview-reflection", label: "Reflection" }
    ]
  },
  { href: "/networking-playbook", label: "Networking playbook" }
] as const;
