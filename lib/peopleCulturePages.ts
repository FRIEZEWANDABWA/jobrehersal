export type PeopleCultureSlug =
  | "chapter-1-executive-people-leadership-culture"
  | "chapter-1-executive-qa"
  | "chapter-2-stakeholder-management-conflict-executive-influence"
  | "chapter-2-executive-qa";

export type PeopleCulturePageMeta = {
  slug: PeopleCultureSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const peopleCulturePages: PeopleCulturePageMeta[] = [
  {
    slug: "chapter-1-executive-people-leadership-culture",
    shortLabel: "Chapter 1",
    title:
      "Chapter 1 — Executive people leadership, team performance & culture",
    description:
      "CLARITY→OWNERSHIP→SUPPORT→ACCOUNTABILITY→GROWTH, poor performance, pressure, conflict, IT–business partnership, change leadership, and story anchors.",
    badge: "People",
  },
  {
    slug: "chapter-1-executive-qa",
    shortLabel: "Ch. 1 — Q&A",
    title:
      "Chapter 1 — Perfect executive Q&A (people leadership & culture)",
    description:
      "Seven prompts with full answers: leadership style, motivation under pressure, crisis leadership, data-driven influence, poor performance, difficult change, and continuous learning.",
    badge: "Q&A",
  },
  {
    slug: "chapter-2-stakeholder-management-conflict-executive-influence",
    shortLabel: "Chapter 2",
    title:
      "Chapter 2 — Stakeholder management, conflict resolution & executive influence",
    description:
      "UNDERSTAND→ALIGN→COMMUNICATE→NEGOTIATE→SUSTAIN, difficult stakeholders, competing priorities, defending strategy to leadership, IT–business conflict, executive presence, and story anchors.",
    badge: "Influence",
  },
  {
    slug: "chapter-2-executive-qa",
    shortLabel: "Ch. 2 — Q&A",
    title:
      "Chapter 2 — Perfect executive Q&A (stakeholders, conflict & influence)",
    description:
      "Seven prompts with full answers: difficult stakeholders, defending strategy to leadership, competing priorities, data-driven influence, IT–business conflict, vendor negotiation, and executive presence.",
    badge: "Q&A",
  },
];

export function getPeopleCulturePage(
  slug: string,
): PeopleCulturePageMeta | undefined {
  return peopleCulturePages.find((p) => p.slug === slug);
}

export function isPeopleCultureSlug(slug: string): slug is PeopleCultureSlug {
  return peopleCulturePages.some((p) => p.slug === slug);
}
