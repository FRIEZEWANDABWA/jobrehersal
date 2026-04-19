import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import {
  getOperationsPage,
  isOperationsSlug,
  operationsPages,
} from "@/lib/operationsPages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { readOperationsChapter } from "@/lib/readOperationsChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

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

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="operations" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Operations"
            title={meta?.title ?? slug}
            description={meta?.description ?? ""}
          />
          <Link
            href="/knowledge/operations"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Operations overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
