import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  getPeopleCulturePage,
  isPeopleCultureSlug,
  peopleCulturePages,
} from "@/lib/peopleCulturePages";
import { readPeopleCultureChapter } from "@/lib/readPeopleCultureChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

export function generateStaticParams() {
  return peopleCulturePages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isPeopleCultureSlug,
    getPage: getPeopleCulturePage,
    hubTitle: "People & culture",
    fallbackTitle: "People & culture",
  });
}

export default async function PeopleCultureChapterPage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!isPeopleCultureSlug(slug)) notFound();

  const meta = getPeopleCulturePage(slug);
  const markdown = await readPeopleCultureChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="people-culture"
        slug={slug}
        eyebrow="Knowledge Hub · People & culture"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/people-culture"
        backLabel="← People & culture overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
