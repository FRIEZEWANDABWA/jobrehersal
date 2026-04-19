export type InfrastructureArchitectureSlug =
  | "chapter-1-executive-infrastructure-thinking-scale-reliability"
  | "chapter-1-executive-qa"
  | "chapter-2-cloud-strategy-modern-workplace-digital-transformation"
  | "chapter-2-executive-qa"
  | "chapter-3-data-center-network-architecture-enterprise-reliability"
  | "chapter-3-executive-qa"
  | "chapter-4-infrastructure-transformation-migration-modernization"
  | "chapter-4-executive-qa";

export type InfrastructureArchitecturePageMeta = {
  slug: InfrastructureArchitectureSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const infrastructureArchitecturePages: InfrastructureArchitecturePageMeta[] =
  [
    {
      slug: "chapter-1-executive-infrastructure-thinking-scale-reliability",
      shortLabel: "Chapter 1",
      title:
        "Chapter 1 — Executive infrastructure thinking, scale & reliability",
      description:
        "STABILITY→STANDARDIZATION→SCALABILITY→VISIBILITY→RESILIENCE, EA thinking, cloud/on-prem/hybrid, lifecycle PLAN→REFRESH→RETIRE, network & endpoints, capacity, story anchors.",
      badge: "Book 2",
    },
    {
      slug: "chapter-1-executive-qa",
      shortLabel: "Ch. 1 — Q&A",
      title:
        "Chapter 1 — Perfect executive Q&A (infrastructure, cloud & EA)",
      description:
        "Seven prompts with full answers: HA/performance, multi-site standardization, cloud/on-prem/hybrid, lifecycle risk, modernization justification, enterprise architecture, and growth enablement.",
      badge: "Q&A",
    },
    {
      slug: "chapter-2-cloud-strategy-modern-workplace-digital-transformation",
      shortLabel: "Chapter 2",
      title:
        "Chapter 2 — Cloud strategy, modern workplace & digital transformation",
      description:
        "VALUE→RISK→CONTROL→COST→ADOPTION, modern workplace, M365 executive view, transformation as redesign, change resistance, lock-in, cost optimization, story anchors.",
      badge: "Book 2",
    },
    {
      slug: "chapter-2-executive-qa",
      shortLabel: "Ch. 2 — Q&A",
      title:
        "Chapter 2 — Perfect executive Q&A (cloud, workplace & transformation)",
      description:
        "Seven prompts with full answers: cloud vs on-prem, governance & cost chaos, transformation story, change resistance, M365 governance, modernization ROI, and vendor lock-in.",
      badge: "Q&A",
    },
    {
      slug: "chapter-3-data-center-network-architecture-enterprise-reliability",
      shortLabel: "Chapter 3",
      title:
        "Chapter 3 — Data center strategy, network architecture & enterprise reliability",
      description:
        "DESIGN→PROTECT→MONITOR→RECOVER→EVOLVE, network as continuity engineering, A–E design principles, DC/cloud/edge fit, physical risk, capacity engineering, story anchors.",
      badge: "Book 2",
    },
    {
      slug: "chapter-3-executive-qa",
      shortLabel: "Ch. 3 — Q&A",
      title:
        "Chapter 3 — Perfect executive Q&A (data center, network & reliability)",
      description:
        "Seven prompts with full answers: multi-site network design, data center strategy, redundancy ROI, capacity planning, aging infrastructure, enterprise reliability, and DC/cloud/edge balance.",
      badge: "Q&A",
    },
    {
      slug: "chapter-4-infrastructure-transformation-migration-modernization",
      shortLabel: "Chapter 4",
      title:
        "Chapter 4 — Infrastructure transformation, large-scale migration & modernization",
      description:
        "ASSESS→SIMPLIFY→MODERNIZE→ADOPT→GOVERN, migration PLAN→PILOT→PHASE→PROTECT→REVIEW, debt as risk, selling change, fatigue management, metrics, story anchors, executive language.",
      badge: "Book 2",
    },
    {
      slug: "chapter-4-executive-qa",
      shortLabel: "Ch. 4 — Q&A",
      title:
        "Chapter 4 — Perfect executive Q&A (transformation, migration & modernization)",
      description:
        "Seven prompts with full answers: major transformation story, low-disruption migration, technical debt, executive approval, resistance, success metrics, and modernization leadership.",
      badge: "Q&A",
    },
  ];

export function getInfrastructureArchitecturePage(
  slug: string,
): InfrastructureArchitecturePageMeta | undefined {
  return infrastructureArchitecturePages.find((p) => p.slug === slug);
}

export function isInfrastructureArchitectureSlug(
  slug: string,
): slug is InfrastructureArchitectureSlug {
  return infrastructureArchitecturePages.some((p) => p.slug === slug);
}
