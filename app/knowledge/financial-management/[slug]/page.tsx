import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  financialManagementPages,
  getFinancialManagementPage,
  isFinancialManagementSlug,
} from "@/lib/financialManagementPages";
import { readFinancialManagementChapter } from "@/lib/readFinancialManagementChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

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

  const meta = getFinancialManagementPage(slug);
  const markdown = await readFinancialManagementChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="financial-management"
        slug={slug}
        eyebrow="Knowledge Hub · Financial management"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/financial-management"
        backLabel="← Financial management overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
