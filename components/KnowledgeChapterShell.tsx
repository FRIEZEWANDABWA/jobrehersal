import type { ReactNode } from "react";
import { PersonalRefinementLayer } from "@/components/PersonalRefinementLayer";
import { ReadRefinePracticeRail } from "@/components/ReadRefinePracticeRail";

type KnowledgeChapterShellProps = {
  hub: string;
  slug: string;
  practiceHref?: string;
  readAnchor?: string;
  refineAnchor?: string;
  children: ReactNode;
};

/**
 * Wraps chapter body with Read anchor, Refinement layer, and Read→Refine→Practice rail.
 * `hub` + `slug` form a stable localStorage key (unique across the library).
 */
export function KnowledgeChapterShell({
  hub,
  slug,
  practiceHref,
  readAnchor = "ecc-read",
  refineAnchor = "ecc-refine",
  children,
}: KnowledgeChapterShellProps) {
  const storageKey = `knowledge:${hub}:${slug}`;
  return (
    <div className="space-y-8">
      <ReadRefinePracticeRail
        practiceHref={practiceHref}
        readAnchor={readAnchor}
        refineAnchor={refineAnchor}
      />
      <div id={readAnchor} className="space-y-10 scroll-mt-24">
        {children}
      </div>
      <PersonalRefinementLayer
        variant="knowledge"
        storageKey={storageKey}
        refineAnchorId={refineAnchor}
      />
    </div>
  );
}
