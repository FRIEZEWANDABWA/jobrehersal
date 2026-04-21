import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  cybersecurityPages,
  getCybersecurityPage,
  isCybersecuritySlug,
} from "@/lib/cybersecurityPages";
import { readCybersecurityChapter } from "@/lib/readCybersecurityChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

export function generateStaticParams() {
  return cybersecurityPages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isCybersecuritySlug,
    getPage: getCybersecurityPage,
    hubTitle: "Cybersecurity",
    fallbackTitle: "Cybersecurity",
  });
}

export default async function CybersecurityChapterPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isCybersecuritySlug(slug)) notFound();

  const meta = getCybersecurityPage(slug);
  const markdown = await readCybersecurityChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="cybersecurity"
        slug={slug}
        eyebrow="Knowledge Hub · Cybersecurity"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/cybersecurity"
        backLabel="← Cybersecurity overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
