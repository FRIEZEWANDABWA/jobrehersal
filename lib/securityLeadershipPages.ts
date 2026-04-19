export type SecurityLeadershipSlug =
  | "chapter-1-advanced-security-zero-trust-board-cyber-strategy"
  | "chapter-1-executive-qa"
  | "chapter-2-security-operations-soc-incident-response-crisis"
  | "chapter-2-executive-qa"
  | "chapter-3-governance-compliance-audit-regulatory-cyber"
  | "chapter-3-executive-qa"
  | "chapter-4-iam-privileged-access-security-culture"
  | "chapter-4-executive-qa";

export type SecurityLeadershipPageMeta = {
  slug: SecurityLeadershipSlug;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
};

export const securityLeadershipPages: SecurityLeadershipPageMeta[] = [
  {
    slug: "chapter-1-advanced-security-zero-trust-board-cyber-strategy",
    shortLabel: "Chapter 1",
    title:
      "Chapter 1 — Advanced security leadership, Zero Trust & board-level cyber strategy",
    description:
      "PREVENT→DETECT→CONTAIN→RECOVER→GOVERN, Zero Trust, identity as perimeter, SOC/SIEM exec framing, board reporting, third-party risk, investment prioritization, story anchors.",
    badge: "Book 3",
  },
  {
    slug: "chapter-1-executive-qa",
    shortLabel: "Ch. 1 — Q&A",
    title:
      "Chapter 1 — Perfect executive Q&A (Zero Trust, advanced security & board cyber)",
    description:
      "Seven prompts with full answers: multi-site resilience, Zero Trust in exec terms, board reporting, top enterprise risk, budget prioritization, major incident with exposure, third-party risk.",
    badge: "Q&A",
  },
  {
    slug: "chapter-2-security-operations-soc-incident-response-crisis",
    shortLabel: "Chapter 2",
    title:
      "Chapter 2 — Security operations, SOC maturity, incident response & crisis handling",
    description:
      "DETECT→CONTAIN→COMMUNICATE→RECOVER→STRENGTHEN, SOC maturity levels, ransomware readiness, war-room command, forensics vs continuity, legal/regulatory, story anchors, executive language.",
    badge: "Book 3",
  },
  {
    slug: "chapter-2-executive-qa",
    shortLabel: "Ch. 2 — Q&A",
    title:
      "Chapter 2 — Perfect executive Q&A (SOC, IR & cyber crisis leadership)",
    description:
      "Seven prompts with full answers: major incident / breach, SOC maturity, ransomware readiness, forensics vs recovery speed, exec/board comms, IR plan effectiveness, common crisis mistakes.",
    badge: "Q&A",
  },
  {
    slug: "chapter-3-governance-compliance-audit-regulatory-cyber",
    shortLabel: "Chapter 3",
    title:
      "Chapter 3 — Governance, compliance, audit readiness & regulatory cyber leadership",
    description:
      "DEFINE→CONTROL→VERIFY→REPORT→IMPROVE, audit-ready operations, GDPR + Kenya DPA, internal controls, procurement/vendor governance, regulators, policy vs culture, story anchors, executive language.",
    badge: "Book 3",
  },
  {
    slug: "chapter-3-executive-qa",
    shortLabel: "Ch. 3 — Q&A",
    title:
      "Chapter 3 — Perfect executive Q&A (governance, compliance & regulatory cyber)",
    description:
      "Seven prompts with full answers: audit readiness, GDPR + Kenya DPA, internal controls, vendor/procurement governance, presenting gaps to leadership, regulator engagement, governance culture.",
    badge: "Q&A",
  },
  {
    slug: "chapter-4-iam-privileged-access-security-culture",
    shortLabel: "Chapter 4",
    title:
      "Chapter 4 — Identity & access management, privileged access & security culture",
    description:
      "IDENTIFY→LIMIT→VERIFY→REVIEW→REMOVE, PAM, JML, executive account protection, culture vs tools, third-party access, IAM metrics for the board, story anchors, executive language.",
    badge: "Book 3",
  },
  {
    slug: "chapter-4-executive-qa",
    shortLabel: "Ch. 4 — Q&A",
    title:
      "Chapter 4 — Perfect executive Q&A (IAM, PAM & security culture)",
    description:
      "Seven prompts with full answers: enterprise IAM, PAM, JML, executive accounts, third-party access, security culture, IAM metrics for leadership.",
    badge: "Q&A",
  },
];

export function getSecurityLeadershipPage(
  slug: string,
): SecurityLeadershipPageMeta | undefined {
  return securityLeadershipPages.find((p) => p.slug === slug);
}

export function isSecurityLeadershipSlug(
  slug: string,
): slug is SecurityLeadershipSlug {
  return securityLeadershipPages.some((p) => p.slug === slug);
}
