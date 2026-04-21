import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  fullMockInterviewPanelPages,
  getFullMockInterviewPanelPage,
  isFullMockInterviewPanelSlug,
} from "@/lib/fullMockInterviewPanelPages";
import { readFullMockInterviewPanelChapter } from "@/lib/readFullMockInterviewPanelChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

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
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="full-mock-interview-panel"
        slug={slug}
        eyebrow="Knowledge Hub · Full mock interview panel"
        title={pageMeta?.title ?? slug}
        description={pageMeta?.description ?? ""}
        backHref="/knowledge/full-mock-interview-panel"
        backLabel="← Panel overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
