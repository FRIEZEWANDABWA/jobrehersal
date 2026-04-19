/** How panels in this lens typically sound — use to tune tone, not to memorize. */
export const companyInterviewStyle: Record<string, string> = {
  dhl:
    "Operational and physical-world storytelling: hubs, SLAs, peak season, cost of downtime, and partner ecosystems. Numbers beat adjectives.",
  "world-bank":
    "Governance, procurement, inclusion, and public trust. Trade-offs must be explicit; process is a feature, not an obstacle to dismiss.",
  safaricom:
    "Telco + fintech scale: availability, fraud, regulators, and consumer trust. Move fast without sounding careless about money movement.",
  aws:
    "Customer obsession, ownership, and mechanisms—behavioral depth as much as architecture. Use specifics; avoid brochure language.",
  microsoft:
    "Outcome-led platform storytelling: trust, compliance, and ecosystem co-innovation. Tie every claim to customer impact and governance you can defend.",
  barclays:
    "Regulated finance: resilience, conduct, and legacy pragmatism. Calm under scrutiny—regulators and boards reward transparency and funded controls, not heroics.",
};

export type CompanyPrepLink = { href: string; label: string };

/** After reading the profile, deepen in the library by function (not book order). */
export const companySuggestedKnowledge: Record<string, CompanyPrepLink[]> = {
  dhl: [
    { href: "/knowledge/operations", label: "Operations & continuity" },
    { href: "/knowledge/infrastructure-architecture", label: "Infrastructure & scale" },
    { href: "/knowledge/executive-presence", label: "Executive presence & boards" },
  ],
  "world-bank": [
    { href: "/knowledge/financial-management", label: "Financial leadership" },
    { href: "/knowledge/people-culture", label: "People & stakeholder influence" },
    { href: "/knowledge/security-leadership", label: "Security leadership" },
  ],
  safaricom: [
    { href: "/knowledge/operations", label: "Operations & service" },
    { href: "/knowledge/cybersecurity", label: "Cybersecurity" },
    { href: "/knowledge/transformation-ai-future", label: "Transformation & AI" },
  ],
  aws: [
    { href: "/knowledge/leadership", label: "Leadership & strategy" },
    { href: "/knowledge/behavioral-pressure", label: "Behavioural & pressure" },
    { href: "/knowledge/infrastructure-architecture", label: "Infrastructure thinking" },
  ],
  microsoft: [
    { href: "/knowledge/security-leadership", label: "Security & identity leadership" },
    { href: "/knowledge/transformation-ai-future", label: "Transformation & AI governance" },
    { href: "/knowledge/executive-presence", label: "Executive presence & boards" },
  ],
  barclays: [
    { href: "/knowledge/financial-management", label: "Financial management" },
    { href: "/knowledge/operations", label: "Operations & resilience" },
    { href: "/knowledge/security-leadership", label: "Security leadership" },
  ],
};
