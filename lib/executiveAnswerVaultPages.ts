export type ExecutiveAnswerVaultSlug =
  "chapter-1-killer-openings-closings-vocabulary-boardroom-language";

export type ExecutiveAnswerVaultPageMeta = {
  slug: ExecutiveAnswerVaultSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const executiveAnswerVaultPages: ExecutiveAnswerVaultPageMeta[] = [
  {
    slug: "chapter-1-killer-openings-closings-vocabulary-boardroom-language",
    shortLabel: "Chapter 1",
    title:
      "Chapter 1 — Killer openings, closings, executive vocabulary & boardroom language",
    description:
      "10 opening lines, 10 closing lines, vocabulary upgrade table, 10 boardroom phrases, phrases to avoid, 30-second power intro (WHO→SCALE→VALUE→WHY YOU), final executive principle.",
    badge: "Book 7",
  },
];

export function getExecutiveAnswerVaultPage(
  slug: string,
): ExecutiveAnswerVaultPageMeta | undefined {
  return executiveAnswerVaultPages.find((p) => p.slug === slug);
}

export function isExecutiveAnswerVaultSlug(
  slug: string,
): slug is ExecutiveAnswerVaultSlug {
  return executiveAnswerVaultPages.some((p) => p.slug === slug);
}
