import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import {
  executivePresencePages,
  getExecutivePresencePage,
  isExecutivePresenceSlug,
} from "@/lib/executivePresencePages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { readExecutivePresenceChapter } from "@/lib/readExecutivePresenceChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

export function generateStaticParams() {
  return executivePresencePages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isExecutivePresenceSlug,
    getPage: getExecutivePresencePage,
    hubTitle: "Executive presence",
    fallbackTitle: "Executive presence",
  });
}

export default async function ExecutivePresenceChapterPage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!isExecutivePresenceSlug(slug)) notFound();

  const pageMeta = getExecutivePresencePage(slug);
  const markdown = await readExecutivePresenceChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="executive-presence" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Executive presence"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/executive-presence"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Executive presence overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
