"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { fullMockInterviewPanelPages } from "@/lib/fullMockInterviewPanelPages";

export function FullMockInterviewPanelNav() {
  return (
    <HubChapterNav
      ariaLabel="Full mock interview panel navigation"
      hubBasePath="/knowledge/full-mock-interview-panel"
      hubDisplayName="Full mock interview panel"
      pages={fullMockInterviewPanelPages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
      stacked
    />
  );
}
