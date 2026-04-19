export type BehavioralPressureSlug =
  | "chapter-1-high-pressure-leadership-executive-trust-decisions"
  | "chapter-1-executive-qa"
  | "master-tell-us-about-yourself"
  | "master-why-should-we-hire-you";

export type BehavioralPressurePageMeta = {
  slug: BehavioralPressureSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const behavioralPressurePages: BehavioralPressurePageMeta[] = [
  {
    slug: "chapter-1-high-pressure-leadership-executive-trust-decisions",
    shortLabel: "Chapter 1",
    title:
      "Chapter 1 — High-pressure leadership, executive trust & decisions under fire",
    description:
      "CONTEXT→DECISION→LEADERSHIP→RESULT→LESSON, ownership, uncertainty, failure, leaving/positioning, pressure language, and story anchors.",
    badge: "Pressure",
  },
  {
    slug: "chapter-1-executive-qa",
    shortLabel: "Ch. 1 — Q&A",
    title:
      "Chapter 1 — Perfect executive Q&A (behavioural & pressure)",
    description:
      "Seven prompts with full answers: service failure, inherited weak system, limited resources, crisis leadership, poor performer, leaving your role, and why choose you.",
    badge: "Q&A",
  },
  {
    slug: "master-tell-us-about-yourself",
    shortLabel: "Master opener",
    title: "Master question — Tell us about yourself (executive)",
    description:
      "WHO→SOLVE→DIFFERENT→WHY ROLE, full and short scripted answers, and five executive rules (identity first, no CV read, metrics, strategy, senior close).",
    badge: "Master",
  },
  {
    slug: "master-why-should-we-hire-you",
    shortLabel: "Master close",
    title: "Master question — Why should we hire you? (executive)",
    description:
      "PROVEN RESULTS→STYLE→FIT→VALUE, full and short scripts, role-specific one-liners, five rules, and closing principle (leadership as business case).",
    badge: "Master",
  },
];

export function getBehavioralPressurePage(
  slug: string,
): BehavioralPressurePageMeta | undefined {
  return behavioralPressurePages.find((p) => p.slug === slug);
}

export function isBehavioralPressureSlug(
  slug: string,
): slug is BehavioralPressureSlug {
  return behavioralPressurePages.some((p) => p.slug === slug);
}
