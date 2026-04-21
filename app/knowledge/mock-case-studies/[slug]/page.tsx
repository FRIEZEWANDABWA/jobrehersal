import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  getMockCaseStudiesPage,
  isMockCaseStudiesSlug,
  mockCaseStudiesPages,
} from "@/lib/mockCaseStudiesPages";
import { readMockCaseStudiesChapter } from "@/lib/readMockCaseStudiesChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

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

  const meta = getMockCaseStudiesPage(slug);
  const markdown = await readMockCaseStudiesChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="mock-case-studies"
        slug={slug}
        eyebrow="Knowledge Hub · Mock panels & case studies"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/mock-case-studies"
        backLabel="← Mock panels overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
