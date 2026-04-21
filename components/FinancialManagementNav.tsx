"use client";

import { HubChapterNav } from "@/components/HubChapterNav";
import { financialManagementPages } from "@/lib/financialManagementPages";

export function FinancialManagementNav() {
  return (
    <HubChapterNav
      ariaLabel="Financial management book navigation"
      hubBasePath="/knowledge/financial-management"
      hubDisplayName="Financial management"
      pages={financialManagementPages.map((p) => ({
        slug: p.slug,
        shortLabel: p.shortLabel,
      }))}
    />
  );
}
