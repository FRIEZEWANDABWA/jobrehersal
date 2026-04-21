import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  getLeadershipPage,
  isLeadershipSlug,
  leadershipPages,
} from "@/lib/leadershipPages";
import { readLeadershipChapter } from "@/lib/readLeadershipChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

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
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="leadership"
        slug={slug}
        eyebrow="Knowledge Hub · Leadership"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/leadership"
        backLabel="← Leadership overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
