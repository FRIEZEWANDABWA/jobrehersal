export type TransformationAiFutureSlug =
  | "chapter-1-digital-transformation-ai-governance-executive-future-readiness"
  | "chapter-1-executive-qa"
  | "chapter-2-enterprise-change-leadership-large-scale-transformation-organizational-redesign"
  | "chapter-2-executive-qa"
  | "chapter-3-mergers-acquisitions-regional-expansion-multi-country-it-leadership"
  | "chapter-3-executive-qa";

export type TransformationAiFuturePageMeta = {
  slug: TransformationAiFutureSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const transformationAiFuturePages: TransformationAiFuturePageMeta[] = [
  {
    slug: "chapter-1-digital-transformation-ai-governance-executive-future-readiness",
    shortLabel: "Chapter 1",
    title:
      "Chapter 1 — Digital transformation, AI governance & executive future-readiness",
    description:
      "SIMPLIFY→DIGITIZE→AUTOMATE→GOVERN→SCALE, executive AI, VALUE→RISK→CONTROL→OWNERSHIP, responsible AI, future-readiness, board AI conversations, story anchors, executive language.",
    badge: "Book 5",
  },
  {
    slug: "chapter-1-executive-qa",
    shortLabel: "Ch. 1 — Q&A",
    title:
      "Chapter 1 — Perfect executive Q&A (digital transformation, AI governance & future-readiness)",
    description:
      "Seven prompts with full answers: what transformation means, prioritization, executive AI strategy, safe AI adoption, cloud printing initiative, future readiness, AI investment to leadership.",
    badge: "Q&A",
  },
  {
    slug: "chapter-2-enterprise-change-leadership-large-scale-transformation-organizational-redesign",
    shortLabel: "Chapter 2",
    title:
      "Chapter 2 — Enterprise change leadership, large-scale transformation & organizational redesign",
    description:
      "WHY→ALIGN→ENABLE→REINFORCE→EMBED, large-scale redesign, resistance framework, sponsorship, measuring behavior change, change fatigue (prioritize→sequence→stabilize), story anchors, executive language.",
    badge: "Book 5",
  },
  {
    slug: "chapter-2-executive-qa",
    shortLabel: "Ch. 2 — Q&A",
    title:
      "Chapter 2 — Perfect executive Q&A (change leadership, redesign & large-scale transformation)",
    description:
      "Seven prompts with full answers: large-scale change, major initiative story, resistance, permanence, change fatigue, executive sponsorship, what good transformation leadership looks like.",
    badge: "Q&A",
  },
  {
    slug: "chapter-3-mergers-acquisitions-regional-expansion-multi-country-it-leadership",
    shortLabel: "Chapter 3",
    title:
      "Chapter 3 — Mergers, acquisitions, regional expansion & multi-country IT leadership",
    description:
      "STANDARDIZE→LOCALIZE→GOVERN→SCALE→PROTECT TRUST, M&A as continuity + trust, post-merger STABILIZE→VISIBILITY→PRIORITIZE→INTEGRATE→OPTIMIZE, global vs local, vendors, culture, story anchors, executive language.",
    badge: "Book 5",
  },
  {
    slug: "chapter-3-executive-qa",
    shortLabel: "Ch. 3 — Q&A",
    title:
      "Chapter 3 — Perfect executive Q&A (M&A, regional expansion & multi-country IT)",
    description:
      "Seven prompts with full answers: global vs local alignment, M&A IT, standards that fail locally, cross-cultural leadership, regional vendors, Tanzania crisis story, strong regional IT leadership.",
    badge: "Q&A",
  },
];

export function getTransformationAiFuturePage(
  slug: string,
): TransformationAiFuturePageMeta | undefined {
  return transformationAiFuturePages.find((p) => p.slug === slug);
}

export function isTransformationAiFutureSlug(
  slug: string,
): slug is TransformationAiFutureSlug {
  return transformationAiFuturePages.some((p) => p.slug === slug);
}
