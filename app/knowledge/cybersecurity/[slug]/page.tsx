import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import {
  cybersecurityPages,
  getCybersecurityPage,
  isCybersecuritySlug,
} from "@/lib/cybersecurityPages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { readCybersecurityChapter } from "@/lib/readCybersecurityChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

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

  const pageMeta = getCybersecurityPage(slug);
  const markdown = await readCybersecurityChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="cybersecurity" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Cybersecurity"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/cybersecurity"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Cybersecurity overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
