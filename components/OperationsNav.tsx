"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { operationsPages } from "@/lib/operationsPages";

export function OperationsNav() {
  return (
    <HubChapterNav
      ariaLabel="Operations book navigation"
      hubBasePath="/knowledge/operations"
      hubDisplayName="Operations"
      pages={operationsPages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
