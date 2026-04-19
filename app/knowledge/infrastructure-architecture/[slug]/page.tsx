import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { renderSimpleDoc } from "@/lib/simpleDoc";
import {
  getInfrastructureArchitecturePage,
  infrastructureArchitecturePages,
  isInfrastructureArchitectureSlug,
} from "@/lib/infrastructureArchitecturePages";
import { KnowledgeChapterShell } from "@/components/KnowledgeChapterShell";
import { readInfrastructureArchitectureChapter } from "@/lib/readInfrastructureArchitectureChapter";
import { metadataForKnowledgeSlug } from "@/lib/chapterPageMetadata";

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

  const pageMeta = getInfrastructureArchitecturePage(slug);
  const markdown = await readInfrastructureArchitectureChapter(slug);

  return (
    <article className="space-y-10">
      <KnowledgeChapterShell hub="infrastructure-architecture" slug={slug}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <PageIntro
            eyebrow="Knowledge Hub · Infrastructure & architecture"
            title={pageMeta?.title ?? slug}
            description={pageMeta?.description ?? ""}
          />
          <Link
            href="/knowledge/infrastructure-architecture"
            className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Infrastructure & architecture overview
          </Link>
        </div>
        {renderSimpleDoc(markdown)}
      </KnowledgeChapterShell>
    </article>
  );
}
