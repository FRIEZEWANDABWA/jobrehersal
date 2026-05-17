"use client";
import { useState } from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "connectivity", label: "Connectivity" },
  { id: "access-cctv", label: "Access & CCTV" },
  { id: "backup-dr", label: "Backup & DR" },
  { id: "projects", label: "Projects & BOQ" },
  { id: "scenarios", label: "Budget Scenarios" },
  { id: "interview", label: "Interview Q&A" },
  { id: "governance", label: "Governance" },
];

export function BudgetNav({ activeTab, onChange }: { activeTab: string; onChange: (id: string) => void }) {
  return (
    <nav className="sticky top-0 z-20 -mx-4 sm:-mx-8 lg:-mx-16 xl:-mx-24 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="flex gap-1 overflow-x-auto no-scrollbar py-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? "bg-amber-500/15 text-amber-300 border border-amber-500/40"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
