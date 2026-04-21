"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { mockCaseStudiesPages } from "@/lib/mockCaseStudiesPages";

export function MockCaseStudiesNav() {
  return (
    <HubChapterNav
      ariaLabel="Mock panels & case studies navigation"
      hubBasePath="/knowledge/mock-case-studies"
      hubDisplayName="Mock panels & case studies"
      pages={mockCaseStudiesPages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
