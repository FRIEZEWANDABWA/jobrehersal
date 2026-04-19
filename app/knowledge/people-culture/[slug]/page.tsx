import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import {
  getPeopleCulturePage,
  isPeopleCultureSlug,
  peopleCulturePages,
} from "@/lib/peopleCulturePages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { readPeopleCultureChapter } from "@/lib/readPeopleCultureChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

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

export default async function PeopleCultureChapterPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isPeopleCultureSlug(slug)) notFound();

  const pageMeta = getPeopleCulturePage(slug);
  const markdown = await readPeopleCultureChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="people-culture" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · People & culture"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/people-culture"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← People & culture overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
