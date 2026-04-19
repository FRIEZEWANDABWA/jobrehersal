export type MockCaseStudiesSlug =
  | "chapter-1-real-executive-scenarios-that-win-interviews"
  | "chapter-1-executive-case-study-answers";

export type MockCaseStudiesPageMeta = {
  slug: MockCaseStudiesSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const mockCaseStudiesPages: MockCaseStudiesPageMeta[] = [
  {
    slug: "chapter-1-real-executive-scenarios-that-win-interviews",
    shortLabel: "Ch. 1 — Framework",
    title: "Chapter 1 — Real executive scenarios that win interviews",
    description:
      "STABILIZE→ASSESS→PRIORITIZE→COMMUNICATE→DECIDE→IMPROVE; five pressure case studies (ransomware, 30% cut, failing IT, DR budget, global vs local); response style; executive language.",
    badge: "Book 6",
  },
  {
    slug: "chapter-1-executive-case-study-answers",
    shortLabel: "Ch. 1 — Full answers",
    title:
      "Chapter 1 — Perfect executive case study answers (full high-scoring sample responses)",
    description:
      "Six scripted case studies: ransomware, 30% cost cut, failing IT first 30 days, DR budget defense, global vs local, vendor failure at peak; executive rule; final truth.",
    badge: "Book 6",
  },
];

export function getMockCaseStudiesPage(
  slug: string,
): MockCaseStudiesPageMeta | undefined {
  return mockCaseStudiesPages.find((p) => p.slug === slug);
}

export function isMockCaseStudiesSlug(
  slug: string,
): slug is MockCaseStudiesSlug {
  return mockCaseStudiesPages.some((p) => p.slug === slug);
}
