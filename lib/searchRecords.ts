import { companyProfiles, questions, starStories } from "@/lib/contentData";
import { behavioralPressurePages } from "@/lib/behavioralPressurePages";
import { cybersecurityPages } from "@/lib/cybersecurityPages";
import { executiveAnswerVaultPages } from "@/lib/executiveAnswerVaultPages";
import { executivePresencePages } from "@/lib/executivePresencePages";
import { financialManagementPages } from "@/lib/financialManagementPages";
import { fullMockInterviewPanelPages } from "@/lib/fullMockInterviewPanelPages";
import { infrastructureArchitecturePages } from "@/lib/infrastructureArchitecturePages";
import { leadershipPages } from "@/lib/leadershipPages";
import { mockCaseStudiesPages } from "@/lib/mockCaseStudiesPages";
import { operationsPages } from "@/lib/operationsPages";
import { peopleCulturePages } from "@/lib/peopleCulturePages";
import { securityLeadershipPages } from "@/lib/securityLeadershipPages";
import { transformationAiFuturePages } from "@/lib/transformationAiFuturePages";
import { mainNav, knowledgeSections } from "@/lib/navigation";

export type SearchRecord = {
  title: string;
  href: string;
  snippet: string;
  category: string;
};

type PageLike = { slug: string; title: string; description: string };

function chapterRecords(
  pages: PageLike[],
  pathSegment: string,
  category: string,
): SearchRecord[] {
  return pages.map((p) => ({
    title: p.title,
    href: `/knowledge/${pathSegment}/${p.slug}`,
    snippet: p.description,
    category,
  }));
}

/** Static index for client-side filtering—covers nav, hubs, chapters, bank, STAR, companies. */
export function getSearchRecords(): SearchRecord[] {
  const out: SearchRecord[] = [];

  for (const item of mainNav) {
    out.push({
      title: item.label,
      href: item.href,
      snippet: "Primary navigation",
      category: "Navigation",
    });
  }

  for (const s of knowledgeSections) {
    out.push({
      title: s.label,
      href: `/knowledge/${s.id}`,
      snippet: s.description,
      category: "Knowledge hub",
    });
  }

  out.push(...chapterRecords(leadershipPages, "leadership", "Leadership · chapter"));
  out.push(...chapterRecords(operationsPages, "operations", "Operations · chapter"));
  out.push(
    ...chapterRecords(cybersecurityPages, "cybersecurity", "Cybersecurity · chapter"),
  );
  out.push(
    ...chapterRecords(peopleCulturePages, "people-culture", "People & culture · chapter"),
  );
  out.push(
    ...chapterRecords(
      financialManagementPages,
      "financial-management",
      "Financial management · chapter",
    ),
  );
  out.push(
    ...chapterRecords(
      behavioralPressurePages,
      "behavioral-pressure",
      "Behavioural & pressure · chapter",
    ),
  );
  out.push(
    ...chapterRecords(
      infrastructureArchitecturePages,
      "infrastructure-architecture",
      "Infrastructure & architecture · chapter",
    ),
  );
  out.push(
    ...chapterRecords(
      securityLeadershipPages,
      "security-leadership",
      "Security leadership · chapter",
    ),
  );
  out.push(
    ...chapterRecords(
      executivePresencePages,
      "executive-presence",
      "Executive presence · chapter",
    ),
  );
  out.push(
    ...chapterRecords(
      transformationAiFuturePages,
      "transformation-ai-future",
      "Transformation & AI · chapter",
    ),
  );
  out.push(
    ...chapterRecords(mockCaseStudiesPages, "mock-case-studies", "Case studies · chapter"),
  );
  out.push(
    ...chapterRecords(
      executiveAnswerVaultPages,
      "executive-answer-vault",
      "Executive answer vault · chapter",
    ),
  );
  out.push(
    ...chapterRecords(
      fullMockInterviewPanelPages,
      "full-mock-interview-panel",
      "Mock interview panel · section",
    ),
  );

  for (const q of questions) {
    const hint = q.hint ? ` ${q.hint}` : "";
    out.push({
      title: q.prompt.length > 96 ? `${q.prompt.slice(0, 94)}…` : q.prompt,
      href: "/interview-bank",
      snippet: `${q.role} · ${q.department} · ${q.difficulty}.${hint}`.trim(),
      category: "Interview question",
    });
  }

  for (const s of starStories) {
    const lesson = s.executiveLesson ?? s.tags.join(", ");
    out.push({
      title: s.title,
      href: `/star-vault#${s.id}`,
      snippet: lesson,
      category: "STAR vault",
    });
  }

  for (const c of companyProfiles) {
    out.push({
      title: c.name,
      href: `/company/${c.slug}`,
      snippet: `${c.tagline} ${c.context}`,
      category: "Company mode",
    });
  }

  return out;
}
