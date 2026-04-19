import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import { knowledgeSections } from "@/lib/navigation";
import { readKnowledgeSection } from "@/lib/readKnowledge";
import type { KnowledgeSection } from "@/lib/types";

/** Hubs with their own routes (multi-page), not single markdown files here. */
const markdownSections = knowledgeSections.filter(
  (s) =>
    s.id !== "leadership" &&
    s.id !== "operations" &&
    s.id !== "cybersecurity" &&
    s.id !== "people-culture" &&
    s.id !== "financial-management" &&
    s.id !== "behavioral-pressure" &&
    s.id !== "infrastructure-architecture" &&
    s.id !== "security-leadership" &&
    s.id !== "executive-presence" &&
    s.id !== "transformation-ai-future" &&
    s.id !== "mock-case-studies" &&
    s.id !== "executive-answer-vault" &&
    s.id !== "full-mock-interview-panel",
);

function isMarkdownKnowledgeSection(s: string): s is KnowledgeSection {
  return markdownSections.some((x) => x.id === s);
}

export function generateStaticParams() {
  return markdownSections.map((s) => ({ section: s.id }));
}

type PageProps = { params: Promise<{ section: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { section } = await params;
  const ok = markdownSections.some((s) => s.id === section);
  if (!ok) {
    return { title: "Knowledge" };
  }
  const meta = knowledgeSections.find((s) => s.id === section);
  return {
    title: meta?.label ?? section,
    description:
      meta?.description ??
      "Executive-grade notes you can extend with your own evidence.",
  };
}

export default async function KnowledgeSectionPage({ params }: PageProps) {
  const { section } = await params;
  if (!isMarkdownKnowledgeSection(section)) notFound();

  const meta = knowledgeSections.find((s) => s.id === section);
  const markdown = await readKnowledgeSection(section);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="overview" slug={section}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub"
            title={meta?.label ?? section}
            description={
              meta?.description ??
              "Executive-grade notes you can extend with your own evidence."
            }
          />
          <Link
            href="/knowledge"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← All sections
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
