import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  behavioralPressurePages,
  getBehavioralPressurePage,
  isBehavioralPressureSlug,
} from "@/lib/behavioralPressurePages";
import { readBehavioralPressureChapter } from "@/lib/readBehavioralPressureChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

export function generateStaticParams() {
  return behavioralPressurePages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isBehavioralPressureSlug,
    getPage: getBehavioralPressurePage,
    hubTitle: "Behavioural & pressure",
    fallbackTitle: "Behavioural & pressure",
  });
}

export default async function BehavioralPressureChapterPage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!isBehavioralPressureSlug(slug)) notFound();

  const meta = getBehavioralPressurePage(slug);
  const markdown = await readBehavioralPressureChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="behavioral-pressure"
        slug={slug}
        eyebrow="Knowledge Hub · Behavioural & pressure"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/behavioral-pressure"
        backLabel="← Behavioural & pressure overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
