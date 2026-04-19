import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import { readExecutiveAnswerVaultChapter } from "@/lib/readExecutiveAnswerVaultChapter";
import {
  executiveAnswerVaultPages,
  getExecutiveAnswerVaultPage,
  isExecutiveAnswerVaultSlug,
} from "@/lib/executiveAnswerVaultPages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

export function generateStaticParams() {
  return executiveAnswerVaultPages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isExecutiveAnswerVaultSlug,
    getPage: getExecutiveAnswerVaultPage,
    hubTitle: "Executive answer vault",
    fallbackTitle: "Executive answer vault",
  });
}

export default async function ExecutiveAnswerVaultChapterPage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!isExecutiveAnswerVaultSlug(slug)) notFound();

  const pageMeta = getExecutiveAnswerVaultPage(slug);
  const markdown = await readExecutiveAnswerVaultChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="executive-answer-vault" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Executive answer vault"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/executive-answer-vault"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Executive answer vault overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
