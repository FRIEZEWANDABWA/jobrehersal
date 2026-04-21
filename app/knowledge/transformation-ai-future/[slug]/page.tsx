import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  getTransformationAiFuturePage,
  isTransformationAiFutureSlug,
  transformationAiFuturePages,
} from "@/lib/transformationAiFuturePages";
import { readTransformationAiFutureChapter } from "@/lib/readTransformationAiFutureChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

export function generateStaticParams() {
  return transformationAiFuturePages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isTransformationAiFutureSlug,
    getPage: getTransformationAiFuturePage,
    hubTitle: "Transformation & AI",
    fallbackTitle: "Transformation & AI",
  });
}

export default async function TransformationAiFutureChapterPage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!isTransformationAiFutureSlug(slug)) notFound();

  const meta = getTransformationAiFuturePage(slug);
  const markdown = await readTransformationAiFutureChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="transformation-ai-future"
        slug={slug}
        eyebrow="Knowledge Hub · Transformation & AI"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/transformation-ai-future"
        backLabel="← Transformation & AI overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
