import type { KnowledgeSection } from "./types";

/** Multi-chapter / multi-route hubs (not single `content/knowledge/{id}.md` primers). */
export const KNOWLEDGE_HUB_IDS = new Set<KnowledgeSection>([
  "leadership",
  "operations",
  "cybersecurity",
  "people-culture",
  "financial-management",
  "behavioral-pressure",
  "infrastructure-architecture",
  "security-leadership",
  "executive-presence",
  "transformation-ai-future",
  "mock-case-studies",
  "executive-answer-vault",
  "full-mock-interview-panel",
]);

export type KnowledgeLibraryGroup = {
  title: string;
  purpose: string;
  panelsTest: string;
  sectionIds: readonly KnowledgeSection[];
};

/**
 * Executive-function order for /knowledge — not book order.
 * Every KnowledgeSection from navigation must appear exactly once.
 */
export const knowledgeLibraryGroups: KnowledgeLibraryGroup[] = [
  {
    title: "Executive foundation & boardroom presence",
    purpose:
      "Fit, narrative, pressure answers, and how you occupy the executive room before the technical depth starts.",
    panelsTest:
      "Do you sound like the safest judgment in the room when stakes and ambiguity are high?",
    sectionIds: ["leadership", "executive-presence", "behavioral-pressure"],
  },
  {
    title: "People, culture & stakeholder influence",
    purpose:
      "Clarity, accountability, performance, conflict, partnership, and change through people—not slides.",
    panelsTest:
      "Can you lead humans, politics, and adoption as confidently as you lead technology?",
    sectionIds: ["people-culture", "people-leadership"],
  },
  {
    title: "Operations, continuity & service excellence",
    purpose:
      "Availability, incidents, vendors, BCP/DR, and the discipline that keeps customer-facing trust intact.",
    panelsTest:
      "When something breaks, do you protect continuity and confidence—not just restore boxes?",
    sectionIds: ["operations"],
  },
  {
    title: "Infrastructure & technical excellence",
    purpose:
      "Scale, standardization, resilience, cloud and workplace fit, lifecycle, and architecture that survives growth.",
    panelsTest:
      "Will your platforms hold when the business doubles—without heroics every quarter?",
    sectionIds: ["infrastructure-architecture", "infrastructure"],
  },
  {
    title: "Cybersecurity & advanced security leadership",
    purpose:
      "Executive cyber framing, board-level strategy, Zero Trust, SOC/IR, IAM, and risk as business language.",
    panelsTest:
      "Do you treat security as enterprise risk and governance—not as a ticket queue?",
    sectionIds: ["cybersecurity", "security-leadership", "security"],
  },
  {
    title: "Financial leadership & value",
    purpose:
      "CapEx/OpEx, budgets, ROI, cost of inaction, optimization, and credible partnership with Finance.",
    panelsTest:
      "Can you defend investment and trade-offs the way a CFO respects—not as IT spend alone?",
    sectionIds: ["financial-management", "finance"],
  },
  {
    title: "Transformation, AI & future scale",
    purpose:
      "Operating-model change, governed AI, enterprise change, M&A and multi-country leadership.",
    panelsTest:
      "Can you build tomorrow—modernization, AI, regional complexity—without breaking trust today?",
    sectionIds: ["transformation-ai-future", "ai"],
  },
  {
    title: "Interview mastery & pressure simulation",
    purpose:
      "Case frameworks, full mock panel answers, openings/closings, and language that wins under fire.",
    panelsTest:
      "When the format shifts from Q&A to simulation, does your judgment still feel executive?",
    sectionIds: [
      "mock-case-studies",
      "full-mock-interview-panel",
      "executive-answer-vault",
    ],
  },
];
