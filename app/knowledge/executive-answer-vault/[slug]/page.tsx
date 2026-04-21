import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  executiveAnswerVaultPages,
  getExecutiveAnswerVaultPage,
  isExecutiveAnswerVaultSlug,
} from "@/lib/executiveAnswerVaultPages";
import { readExecutiveAnswerVaultChapter } from "@/lib/readExecutiveAnswerVaultChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

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

  const meta = getExecutiveAnswerVaultPage(slug);
  const markdown = await readExecutiveAnswerVaultChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="executive-answer-vault"
        slug={slug}
        eyebrow="Knowledge Hub · Executive answer vault"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/executive-answer-vault"
        backLabel="← Answer vault overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
