export type OperationsSlug =
  | "chapter-1-availability-reliability"
  | "chapter-1-executive-qa"
  | "chapter-2-executive-qa"
  | "chapter-3-vendor-sla-governance"
  | "chapter-3-executive-qa"
  | "chapter-4-bcp-dr-crisis-leadership"
  | "chapter-4-executive-qa";

export type OperationsPageMeta = {
  slug: OperationsSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const operationsPages: OperationsPageMeta[] = [
  {
    slug: "chapter-1-availability-reliability",
    shortLabel: "Chapter 1",
    title:
      "Chapter 1 — High availability, service reliability & operational excellence",
    description:
      "PREVENT→DETECT→RESPOND→RECOVER→IMPROVE, core KPIs, war-room incidents, BCP vs DR, vendor SLAs, and how to turn real outages into executive stories.",
    badge: "Reliability",
  },
  {
    slug: "chapter-1-executive-qa",
    shortLabel: "Ch. 1 — Q&A",
    title: "Chapter 1 — Perfect executive Q&A (availability & operations)",
    description:
      "Seven operations prompts with full answers: HA/performance, repeat incidents, ITIL processes, major incident story, executive reporting, KPIs, and vendor SLAs.",
    badge: "Q&A",
  },
  {
    slug: "chapter-2-executive-qa",
    shortLabel: "Ch. 2 — Q&A",
    title: "Chapter 2 — Perfect executive Q&A (ITIL, ITSM & governance)",
    description:
      "Seven prompts: incident/problem/change, major incidents, RCA, low-disruption change, multi-site quality, resistance, and what good governance looks like.",
    badge: "Q&A",
  },
  {
    slug: "chapter-3-vendor-sla-governance",
    shortLabel: "Chapter 3",
    title: "Chapter 3 — Vendor management, SLA control & third-party governance",
    description:
      "SELECT→DEFINE→MONITOR→ESCALATE→OPTIMIZE→EXIT, dependency risk, difficult vendors, negotiation, executive reporting, and accountability language.",
    badge: "Vendors",
  },
  {
    slug: "chapter-3-executive-qa",
    shortLabel: "Ch. 3 — Q&A",
    title: "Chapter 3 — Perfect executive Q&A (vendors & SLAs)",
    description:
      "Seven prompts: SLA compliance, tough negotiations, poor performance, single-vendor risk, retain vs replace, exec reporting, and cost vs quality.",
    badge: "Q&A",
  },
  {
    slug: "chapter-4-bcp-dr-crisis-leadership",
    shortLabel: "Chapter 4",
    title: "Chapter 4 — BCP/DR & crisis leadership",
    description:
      "BCP vs DR, PREPARE→PROTECT→RESPOND→RECOVER→LEARN, RTO/RPO, 3-2-1 backups, crisis presence, resilience ROI, and story anchors.",
    badge: "Resilience",
  },
  {
    slug: "chapter-4-executive-qa",
    shortLabel: "Ch. 4 — Q&A",
    title: "Chapter 4 — Perfect executive Q&A (BCP/DR & crisis)",
    description:
      "Seven prompts: BCP/DR readiness, BCP vs DR, RTO/RPO, crisis story, resilience ROI, leading teams in crisis, and DR testing cadence.",
    badge: "Q&A",
  },
];

export function getOperationsPage(slug: string): OperationsPageMeta | undefined {
  return operationsPages.find((p) => p.slug === slug);
}

export function isOperationsSlug(slug: string): slug is OperationsSlug {
  return operationsPages.some((p) => p.slug === slug);
}
