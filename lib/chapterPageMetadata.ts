import type { Metadata } from "next";

type ChapterMeta = { shortLabel: string; description: string };

/** Shared generateMetadata helper for knowledge hub chapter routes. */
export async function metadataForKnowledgeSlug(
  params: Promise<{ slug: string }>,
  opts: {
    isSlug: (slug: string) => boolean;
    getPage: (slug: string) => ChapterMeta | undefined;
    hubTitle: string;
    fallbackTitle: string;
  },
): Promise<Metadata> {
  const { slug } = await params;
  if (!opts.isSlug(slug)) {
    return { title: opts.fallbackTitle };
  }
  const meta = opts.getPage(slug);
  return {
    title: meta ? `${meta.shortLabel} · ${opts.hubTitle}` : slug,
    description: meta?.description ?? "",
  };
}
