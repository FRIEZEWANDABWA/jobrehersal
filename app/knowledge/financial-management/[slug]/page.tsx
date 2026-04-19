import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import {
  financialManagementPages,
  getFinancialManagementPage,
  isFinancialManagementSlug,
} from "@/lib/financialManagementPages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { readFinancialManagementChapter } from "@/lib/readFinancialManagementChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

export function generateStaticParams() {
  return financialManagementPages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isFinancialManagementSlug,
    getPage: getFinancialManagementPage,
    hubTitle: "Financial management",
    fallbackTitle: "Financial management",
  });
}

export default async function FinancialManagementChapterPage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!isFinancialManagementSlug(slug)) notFound();

  const pageMeta = getFinancialManagementPage(slug);
  const markdown = await readFinancialManagementChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="financial-management" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Financial management"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/financial-management"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Financial management overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
