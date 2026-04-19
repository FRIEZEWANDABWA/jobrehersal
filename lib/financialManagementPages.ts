export type FinancialManagementSlug =
  | "chapter-1-executive-it-financial-management-budgets"
  | "chapter-1-executive-qa";

export type FinancialManagementPageMeta = {
  slug: FinancialManagementSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const financialManagementPages: FinancialManagementPageMeta[] = [
  {
    slug: "chapter-1-executive-it-financial-management-budgets",
    shortLabel: "Chapter 1",
    title:
      "Chapter 1 — Executive IT financial management, budgets & investment decisions",
    description:
      "PROTECT→OPTIMIZE→INVEST→MEASURE, CapEx/OpEx, justification, cost of inaction, optimization, boardroom defense, Finance partnership, and story anchors.",
    badge: "Budgets",
  },
  {
    slug: "chapter-1-executive-qa",
    shortLabel: "Ch. 1 — Q&A",
    title:
      "Chapter 1 — Perfect executive Q&A (IT financial management & budgets)",
    description:
      "Seven prompts with full answers: budgeting process, CapEx/OpEx, cost optimization story, investment justification, constraints, working with Finance, and financial leadership.",
    badge: "Q&A",
  },
];

export function getFinancialManagementPage(
  slug: string,
): FinancialManagementPageMeta | undefined {
  return financialManagementPages.find((p) => p.slug === slug);
}

export function isFinancialManagementSlug(
  slug: string,
): slug is FinancialManagementSlug {
  return financialManagementPages.some((p) => p.slug === slug);
}
