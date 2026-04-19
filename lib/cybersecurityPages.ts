export type CybersecuritySlug = "chapter-1-executive-cybersecurity-leadership";

export type CybersecurityPageMeta = {
  slug: CybersecuritySlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const cybersecurityPages: CybersecurityPageMeta[] = [
  {
    slug: "chapter-1-executive-cybersecurity-leadership",
    shortLabel: "Chapter 1",
    title: "Chapter 1 — Executive cybersecurity leadership & risk thinking",
    description:
      "IDENTIFY→PROTECT→DETECT→RESPOND→RECOVER, IAM as perimeter, exec metrics, GDPR/Kenya DPA, vendor & culture risk, and story anchors.",
    badge: "Leadership",
  },
];

export function getCybersecurityPage(
  slug: string,
): CybersecurityPageMeta | undefined {
  return cybersecurityPages.find((p) => p.slug === slug);
}

export function isCybersecuritySlug(slug: string): slug is CybersecuritySlug {
  return cybersecurityPages.some((p) => p.slug === slug);
}
