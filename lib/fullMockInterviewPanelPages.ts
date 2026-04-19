export type FullMockInterviewPanelSlug =
  | "mock-panel-introduction"
  | "mock-panel-section-1-introductory-executive-fit"
  | "mock-panel-section-2-strategic-it-leadership"
  | "mock-panel-section-3-operations-service-delivery"
  | "mock-panel-section-4-cybersecurity-leadership-finance-conflict"
  | "mock-panel-section-5-boardroom-transformation-regional-judgment"
  | "mock-panel-section-6-final-pressure-closing-offers";

export type FullMockInterviewPanelPageMeta = {
  slug: FullMockInterviewPanelSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const fullMockInterviewPanelPages: FullMockInterviewPanelPageMeta[] = [
  {
    slug: "mock-panel-introduction",
    shortLabel: "Intro",
    title: "Full mock interview panel — introduction",
    description:
      "Why this panel exists, what senior interviews really test, and how to use the 50-question walkthrough.",
    badge: "Mock panel",
  },
  {
    slug: "mock-panel-section-1-introductory-executive-fit",
    shortLabel: "Q1–5",
    title: "Section 1 — Introductory / executive fit",
    description:
      "Tell us about yourself, why hire you, why leaving, what you know about the business, what makes you different.",
    badge: "Q1–5",
  },
  {
    slug: "mock-panel-section-2-strategic-it-leadership",
    shortLabel: "Q6–8",
    title: "Section 2 — Strategic IT leadership",
    description:
      "Aligning IT with business objectives, balancing innovation with stability, first 90 days.",
    badge: "Q6–8",
  },
  {
    slug: "mock-panel-section-3-operations-service-delivery",
    shortLabel: "Q9",
    title: "Section 3 — Operations & service delivery",
    description: "High availability and designing for failure across the enterprise.",
    badge: "Q9",
  },
  {
    slug: "mock-panel-section-4-cybersecurity-leadership-finance-conflict",
    shortLabel: "Q10–20",
    title:
      "Questions 10–20 — Cybersecurity, leadership under pressure, finance & executive conflict",
    description:
      "Multi-site cyber resilience, major incidents, motivation, poor performers, budgeting, CapEx/OpEx, cost optimization, stakeholders, strategy defense, customer-centric IT, differentiation.",
    badge: "Q10–20",
  },
  {
    slug: "mock-panel-section-5-boardroom-transformation-regional-judgment",
    shortLabel: "Q21–35",
    title:
      "Questions 21–35 — Boardroom, transformation, AI, regional leadership & judgment",
    description:
      "Board reporting, CFO investment, competing priorities, AI strategy & governance, transformation stories, resistance, multi-country leadership, regional crisis, leadership style, data influence, failure, strengths/weaknesses.",
    badge: "Q21–35",
  },
  {
    slug: "mock-panel-section-6-final-pressure-closing-offers",
    shortLabel: "Q36–50",
    title:
      "Questions 36–50 — Final pressure, behavioral traps & closing answers",
    description:
      "Service failures, weak teams, limited resources, crisis pressure, vendors, manager reference, IT vs Finance, continuity, expectations, failed strategy, staying current, motivation, why this role, your questions, why trust you — plus final truth.",
    badge: "Q36–50",
  },
];

export function getFullMockInterviewPanelPage(
  slug: string,
): FullMockInterviewPanelPageMeta | undefined {
  return fullMockInterviewPanelPages.find((p) => p.slug === slug);
}

export function isFullMockInterviewPanelSlug(
  slug: string,
): slug is FullMockInterviewPanelSlug {
  return fullMockInterviewPanelPages.some((p) => p.slug === slug);
}
