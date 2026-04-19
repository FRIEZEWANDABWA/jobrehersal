import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import { readMockCaseStudiesChapter } from "@/lib/readMockCaseStudiesChapter";
import {
  getMockCaseStudiesPage,
  isMockCaseStudiesSlug,
  mockCaseStudiesPages,
} from "@/lib/mockCaseStudiesPages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

export function generateStaticParams() {
  return mockCaseStudiesPages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isMockCaseStudiesSlug,
    getPage: getMockCaseStudiesPage,
    hubTitle: "Mock panels & case studies",
    fallbackTitle: "Mock panels & case studies",
  });
}

export default async function MockCaseStudiesChapterPage({ params }: PageProps) {
  const { slug } = await params;
  if (!isMockCaseStudiesSlug(slug)) notFound();

  const pageMeta = getMockCaseStudiesPage(slug);
  const markdown = await readMockCaseStudiesChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="mock-case-studies" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Mock panels & case studies"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/mock-case-studies"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Mock panels &amp; case studies overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
