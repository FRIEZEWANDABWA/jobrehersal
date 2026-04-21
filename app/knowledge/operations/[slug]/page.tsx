import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  getOperationsPage,
  isOperationsSlug,
  operationsPages,
} from "@/lib/operationsPages";
import { readOperationsChapter } from "@/lib/readOperationsChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

export function generateStaticParams() {
  return operationsPages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isOperationsSlug,
    getPage: getOperationsPage,
    hubTitle: "Operations",
    fallbackTitle: "Operations",
  });
}

export default async function OperationsChapterPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isOperationsSlug(slug)) notFound();

  const meta = getOperationsPage(slug);
  const markdown = await readOperationsChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="operations"
        slug={slug}
        eyebrow="Knowledge Hub · Operations"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/operations"
        backLabel="← Operations overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
