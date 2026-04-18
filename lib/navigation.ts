import type { KnowledgeSection } from "./types";

export const knowledgeSections: {
  id: KnowledgeSection;
  label: string;
  description: string;
}[] = [
  {
    id: "leadership",
    label: "Leadership",
    description: "Strategy, stakeholders, and executive presence.",
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
  { href: "/", label: "Dashboard" },
  { href: "/knowledge", label: "Knowledge Hub" },
  { href: "/star-vault", label: "STAR Vault" },
  { href: "/interview-bank", label: "Interview Bank" },
  { href: "/rapid-revision", label: "Rapid Revision" },
  { href: "/mock-interview", label: "Mock Interview" },
  { href: "/company", label: "Company Mode" },
] as const;
