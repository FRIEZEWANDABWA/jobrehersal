export type ExecutivePresenceSlug =
  | "chapter-1-cio-communication-boardroom-authority"
  | "chapter-1-executive-qa"
  | "chapter-2-board-reporting-executive-dashboards-decision-framing"
  | "chapter-2-executive-qa"
  | "chapter-3-executive-conflict-political-navigation-high-stakes-conversations"
  | "chapter-3-executive-qa";

export type ExecutivePresencePageMeta = {
  slug: ExecutivePresenceSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const executivePresencePages: ExecutivePresencePageMeta[] = [
  {
    slug: "chapter-1-cio-communication-boardroom-authority",
    shortLabel: "Chapter 1",
    title:
      "Chapter 1 — CIO-level communication, CEO/CFO conversations & boardroom authority",
    description:
      "CLARITY→CALM→OWNERSHIP→DECISION→TRUST, CEO/CFO/board language, boardroom reporting, executive disagreement, silence as a tool, story anchors, executive language.",
    badge: "Book 4",
  },
  {
    slug: "chapter-1-executive-qa",
    shortLabel: "Ch. 1 — Q&A",
    title:
      "Chapter 1 — Perfect executive Q&A (CEO/CFO, boardroom & executive presence)",
    description:
      "Seven prompts with full answers: executive presence, IT risk to CEOs, CFO investment defense, influencing leadership, executive disagreement, board during incidents, trust with non-technical executives.",
    badge: "Q&A",
  },
  {
    slug: "chapter-2-board-reporting-executive-dashboards-decision-framing",
    shortLabel: "Chapter 2",
    title:
      "Chapter 2 — Board reporting, executive dashboards & high-level decision framing",
    description:
      "SIGNAL→IMPACT→OPTIONS→RECOMMENDATION→FOLLOW-UP, executive dashboards, what not to report, RAG, storytelling, crisis framing, story anchors, executive language.",
    badge: "Book 4",
  },
  {
    slug: "chapter-2-executive-qa",
    shortLabel: "Ch. 2 — Q&A",
    title:
      "Chapter 2 — Perfect executive Q&A (board reporting, dashboards & decision framing)",
    description:
      "Seven prompts with full answers: IT performance to execs, executive KPIs, bad news, dashboards leadership uses, RAG, board framing in incidents, strong board-level reporting.",
    badge: "Q&A",
  },
  {
    slug: "chapter-3-executive-conflict-political-navigation-high-stakes-conversations",
    shortLabel: "Chapter 3",
    title:
      "Chapter 3 — Executive conflict, political navigation & high-stakes leadership conversations",
    description:
      "UNDERSTAND→REFRAME→ALIGN→DECIDE→PROTECT TRUST, political navigation, saying no to power, upward conflict, high-stakes talks, IT vs business, when you lose, story anchors, executive language.",
    badge: "Book 4",
  },
  {
    slug: "chapter-3-executive-qa",
    shortLabel: "Ch. 3 — Q&A",
    title:
      "Chapter 3 — Perfect executive Q&A (conflict, politics & high-stakes conversations)",
    description:
      "Seven prompts with full answers: executive conflict, saying no to leadership, CEO/CFO disagreement, IT vs business, politics without gamesmanship, when leadership overrides you, failed projects & compliance gaps.",
    badge: "Q&A",
  },
];

export function getExecutivePresencePage(
  slug: string,
): ExecutivePresencePageMeta | undefined {
  return executivePresencePages.find((p) => p.slug === slug);
}

export function isExecutivePresenceSlug(
  slug: string,
): slug is ExecutivePresenceSlug {
  return executivePresencePages.some((p) => p.slug === slug);
}
