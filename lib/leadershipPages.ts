export type LeadershipSlug =
  | "chapter-1-mindset"
  | "section-1-fit-questions"
  | "section-2-alignment"
  | "chapter-3-roadmaps-prioritization"
  | "chapter-3-executive-qa"
  | "chapter-4-innovation-risk-stability"
  | "chapter-4-executive-qa"
  | "chapter-5-emerging-tech-ai-leadership"
  | "chapter-5-executive-qa"
  | "section-2-executive-qa";

export type LeadershipPageMeta = {
  slug: LeadershipSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const leadershipPages: LeadershipPageMeta[] = [
  {
    slug: "chapter-1-mindset",
    shortLabel: "Chapter 1",
    title: "Chapter 1 — Executive IT leadership mindset",
    description:
      "Real job of Head of IT, IMPACT → RISK → COST → SPEED → SCALE, boardroom language, prioritization, and core principle.",
    badge: "Mindset",
  },
  {
    slug: "section-1-fit-questions",
    shortLabel: "Section 1 — Fit",
    title: "Section 1 — Introductory / fit questions",
    description:
      "Boardroom-level answers for tell-me-about-yourself, company knowledge, motivation, and role clarity — practise out loud.",
    badge: "Q&A",
  },
  {
    slug: "section-2-alignment",
    shortLabel: "Section 2 — Framework",
    title: "Section 2 — Alignment playbook (B → I → K → G)",
    description:
      "Concepts: B → I → K → G, six business drivers, roadmaps, 90-day framing, traps to avoid, and Chapter 2 core principle.",
    badge: "Framework",
  },
  {
    slug: "chapter-3-roadmaps-prioritization",
    shortLabel: "Chapter 3",
    title: "Chapter 3 — Roadmaps, prioritization & executive decisions",
    description:
      "Merged deep guide: A→P→S→E→M, five-lens assessment, prioritization matrix, sequencing ladder, budget defense, boardroom defense, saying no, and measurable storytelling.",
    badge: "Judgment",
  },
  {
    slug: "chapter-3-executive-qa",
    shortLabel: "Ch. 3 — Q&A",
    title: "Chapter 3 — Perfect executive Q&A (roadmaps & decisions)",
    description:
      "Seven judgment questions with full answers: roadmap story, competing demands, investment defense, saying no, execution, budget constraints, and influencing business decisions.",
    badge: "Q&A",
  },
  {
    slug: "chapter-4-innovation-risk-stability",
    shortLabel: "Chapter 4",
    title: "Chapter 4 — Innovation, cost, risk & operational stability",
    description:
      "VALUE→RISK→COST→STABILITY→SCALE, golden sequencing, pilot→validate→scale, change management, when not to innovate, and boardroom tests.",
    badge: "Discipline",
  },
  {
    slug: "chapter-4-executive-qa",
    shortLabel: "Ch. 4 — Q&A",
    title: "Chapter 4 — Perfect executive Q&A (innovation & stability)",
    description:
      "Seven maturity questions: cost vs innovation, technology evaluation, change without disruption, saying no, stability guardrails, emerging tech, and handling resistance.",
    badge: "Q&A",
  },
  {
    slug: "chapter-5-emerging-tech-ai-leadership",
    shortLabel: "Chapter 5",
    title: "Chapter 5 — Emerging tech, AI & future-ready leadership",
    description:
      "PROBLEM→DATA→CONTROL→VALUE→SCALE, where AI wins, automation maturity, interview language, responsible AI, when not to use AI, and future-ready mindset.",
    badge: "AI / Future",
  },
  {
    slug: "chapter-5-executive-qa",
    shortLabel: "Ch. 5 — Q&A",
    title: "Chapter 5 — Perfect executive Q&A (AI & future-ready IT)",
    description:
      "Seven high-frequency prompts: AI’s role in leadership, immature orgs, emerging tech, risk controls, automation story, what to automate first, and the future of IT leadership.",
    badge: "Q&A",
  },
  {
    slug: "section-2-executive-qa",
    shortLabel: "Section 2 — Q&A",
    title: "Section 2 — Strategic IT leadership: executive Q&A",
    description:
      "Six high-stakes questions with boardroom answers: alignment, global vs local, roadmaps, innovation vs stability, emerging tech, and first 90 days.",
    badge: "Interview",
  },
];

export function getLeadershipPage(slug: string): LeadershipPageMeta | undefined {
  return leadershipPages.find((p) => p.slug === slug);
}

export function isLeadershipSlug(slug: string): slug is LeadershipSlug {
  return leadershipPages.some((p) => p.slug === slug);
}
