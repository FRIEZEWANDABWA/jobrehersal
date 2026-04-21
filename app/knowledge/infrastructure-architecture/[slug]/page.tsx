import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import {
  getInfrastructureArchitecturePage,
  infrastructureArchitecturePages,
  isInfrastructureArchitectureSlug,
} from "@/lib/infrastructureArchitecturePages";
import { readInfrastructureArchitectureChapter } from "@/lib/readInfrastructureArchitectureChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";
import { buildSimpleDoc } from "@/lib/simpleDoc";

export function generateStaticParams() {
  return infrastructureArchitecturePages.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return metadataForKnowledgeSlug(params, {
    isSlug: isInfrastructureArchitectureSlug,
    getPage: getInfrastructureArchitecturePage,
    hubTitle: "Infrastructure & architecture",
    fallbackTitle: "Infrastructure & architecture",
  });
}

export default async function InfrastructureArchitectureChapterPage({
  params,
}: PageProps) {
  const { slug } = await params;
  if (!isInfrastructureArchitectureSlug(slug)) notFound();

  const meta = getInfrastructureArchitecturePage(slug);
  const markdown = await readInfrastructureArchitectureChapter(slug);
  const doc = buildSimpleDoc(markdown, { layout: "chapter" });

  return (
    <article>
      <KnowledgeChapterShell
        hub="infrastructure-architecture"
        slug={slug}
        eyebrow="Knowledge Hub · Infrastructure & architecture"
        title={meta?.title ?? slug}
        description={meta?.description ?? ""}
        backHref="/knowledge/infrastructure-architecture"
        backLabel="← Infrastructure & architecture overview"
        documentBody={doc.body}
        tocHeadings={doc.headings}
      />
    </article>
  );
}
