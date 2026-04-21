import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  executivePresencePages,
  getExecutivePresencePage,
  isExecutivePresenceSlug,
} from "@/lib/executivePresencePages";
import { readExecutivePresenceChapter } from "@/lib/readExecutivePresenceChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

export function generateStaticParams() {
  return executivePresencePages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isExecutivePresenceSlug,
    getPage: getExecutivePresencePage,
    hubTitle: "Executive presence",
    fallbackTitle: "Executive presence",
  });
}

export default async function ExecutivePresenceChapterPage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!isExecutivePresenceSlug(slug)) notFound();

  const meta = getExecutivePresencePage(slug);
  const markdown = await readExecutivePresenceChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="executive-presence"
        slug={slug}
        eyebrow="Knowledge Hub · Executive presence"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/executive-presence"
        backLabel="← Executive presence overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
