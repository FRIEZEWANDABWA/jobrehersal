import type { ReactNode } from "react";
import { ChapterReadingExperience } from "@/components/ChapterReadingExperience";
import type { SimpleDocHeading } from "@/lib/simpleDoc";

export type KnowledgeChapterShellProps = {
  hub: string;
  slug: string;
  practiceHref?: string;
  readAnchor?: string;
  refineAnchor?: string;
  eyebrow: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
  documentBody: ReactNode;
  tocHeadings: SimpleDocHeading[];
};

/**
 * Chapter reading layout: sticky chrome, wide reading column with optional
 * section cards, outline + personal notes rail (desktop), focus mode.
 */
export function KnowledgeChapterShell(props: KnowledgeChapterShellProps) {
  return <ChapterReadingExperience {...props} />;
}
