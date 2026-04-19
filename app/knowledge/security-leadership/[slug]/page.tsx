import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import {
  getSecurityLeadershipPage,
  isSecurityLeadershipSlug,
  securityLeadershipPages,
} from "@/lib/securityLeadershipPages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { readSecurityLeadershipChapter } from "@/lib/readSecurityLeadershipChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

export function generateStaticParams() {
  return securityLeadershipPages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isSecurityLeadershipSlug,
    getPage: getSecurityLeadershipPage,
    hubTitle: "Security leadership",
    fallbackTitle: "Security leadership",
  });
}

export default async function SecurityLeadershipChapterPage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!isSecurityLeadershipSlug(slug)) notFound();

  const pageMeta = getSecurityLeadershipPage(slug);
  const markdown = await readSecurityLeadershipChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="security-leadership" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Security leadership"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/security-leadership"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Security leadership overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
