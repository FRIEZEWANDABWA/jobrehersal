import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import {
  behavioralPressurePages,
  getBehavioralPressurePage,
  isBehavioralPressureSlug,
} from "@/lib/behavioralPressurePages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { readBehavioralPressureChapter } from "@/lib/readBehavioralPressureChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

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

  const pageMeta = getBehavioralPressurePage(slug);
  const markdown = await readBehavioralPressureChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="behavioral-pressure" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Behavioural & pressure"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/behavioral-pressure"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Behavioural & pressure overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
