import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import { readFullMockInterviewPanelChapter } from "@/lib/readFullMockInterviewPanelChapter";
import {
  fullMockInterviewPanelPages,
  getFullMockInterviewPanelPage,
  isFullMockInterviewPanelSlug,
} from "@/lib/fullMockInterviewPanelPages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

export function generateStaticParams() {
  return fullMockInterviewPanelPages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isFullMockInterviewPanelSlug,
    getPage: getFullMockInterviewPanelPage,
    hubTitle: "Full mock interview panel",
    fallbackTitle: "Full mock interview panel",
  });
}

export default async function FullMockInterviewPanelChapterPage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!isFullMockInterviewPanelSlug(slug)) notFound();

  const pageMeta = getFullMockInterviewPanelPage(slug);
  const markdown = await readFullMockInterviewPanelChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="full-mock-interview-panel" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Full mock interview panel"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/full-mock-interview-panel"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Panel overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
