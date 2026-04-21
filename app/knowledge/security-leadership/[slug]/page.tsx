import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  getSecurityLeadershipPage,
  isSecurityLeadershipSlug,
  securityLeadershipPages,
} from "@/lib/securityLeadershipPages";
import { readSecurityLeadershipChapter } from "@/lib/readSecurityLeadershipChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

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

  const meta = getSecurityLeadershipPage(slug);
  const markdown = await readSecurityLeadershipChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="security-leadership"
        slug={slug}
        eyebrow="Knowledge Hub · Security leadership"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/security-leadership"
        backLabel="← Security leadership overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
