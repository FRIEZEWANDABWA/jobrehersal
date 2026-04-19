import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import { readTransformationAiFutureChapter } from "@/lib/readTransformationAiFutureChapter";
import {
  getTransformationAiFuturePage,
  isTransformationAiFutureSlug,
  transformationAiFuturePages,
} from "@/lib/transformationAiFuturePages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

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

  const pageMeta = getTransformationAiFuturePage(slug);
  const markdown = await readTransformationAiFutureChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="transformation-ai-future" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Transformation & AI"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/transformation-ai-future"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Transformation &amp; AI overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
