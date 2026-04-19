"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { securityLeadershipPages } from "@/lib/securityLeadershipPages";

function linkClass(active: boolean) {
  return active
    ? "border-amber-500/60 bg-amber-500/10 text-amber-50"
    : "border-slate-700/80 bg-slate-900/30 text-slate-300 hover:border-slate-500 hover:text-white";
}

export function SecurityLeadershipNav() {
  const pathname = usePathname();
  const onOverview = pathname === "/knowledge/security-leadership";

  return (
    <nav
      className="rounded-2xl border border-slate-800/90 bg-slate-900/35 p-4"
      aria-label="Security leadership navigation"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link
            href="/knowledge"
            className="font-medium text-amber-400/90 hover:text-amber-200"
          >
            Knowledge Hub
          </Link>
          <span aria-hidden>→</span>
          <span className="text-slate-400">Security leadership</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/knowledge/security-leadership"
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${linkClass(onOverview)}`}
          >
            Overview
          </Link>
          {securityLeadershipPages.map((p) => {
            const href = `/knowledge/security-leadership/${p.slug}`;
            const active = pathname === href;
            return (
              <Link
                key={p.slug}
                href={href}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${linkClass(active)}`}
              >
                {p.shortLabel}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
