"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { transformationAiFuturePages } from "@/lib/transformationAiFuturePages";

export function TransformationAiFutureNav() {
  return (
    <HubChapterNav
      ariaLabel="Transformation & AI book navigation"
      hubBasePath="/knowledge/transformation-ai-future"
      hubDisplayName="Transformation & AI"
      pages={transformationAiFuturePages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
