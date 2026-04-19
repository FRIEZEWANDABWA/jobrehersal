import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import {
  getLeadershipPage,
  isLeadershipSlug,
  leadershipPages,
} from "@/lib/leadershipPages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { readLeadershipChapter } from "@/lib/readLeadershipChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

export function generateStaticParams() {
  return leadershipPages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isLeadershipSlug,
    getPage: getLeadershipPage,
    hubTitle: "Leadership",
    fallbackTitle: "Leadership",
  });
}

export default async function LeadershipChapterPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isLeadershipSlug(slug)) notFound();

  const meta = getLeadershipPage(slug);
  const markdown = await readLeadershipChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="leadership" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Leadership"
            title={meta?.title ?? slug}
            description={meta?.description ?? ""}
          />
          <Link
            href="/knowledge/leadership"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Leadership overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
