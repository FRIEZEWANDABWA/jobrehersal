import type { Metadata } from "next";
import Link from "next/link";
import { CommandCentreCard } from "@/components/CommandCentreCard";
import { CommandCentreProgress } from "@/components/CommandCentreProgress";

export const metadata: Metadata = {
  title: "Command Centre",
  description:
    "Home for executive IT interview prep—knowledge library, practice, STAR stories, company lenses, and final prep in one operating system.",
};

const weekFocus = [
  {
    label: "Cybersecurity leadership",
    href: "/knowledge/security-leadership",
  },
  {
    label: "Boardroom communication",
    href: "/knowledge/executive-presence",
  },
  {
    label: "Mock panel · high-stakes band (Q21–35)",
    href: "/knowledge/full-mock-interview-panel/mock-panel-section-5-boardroom-transformation-regional-judgment",
  },
];

const quickAccess = [
  {
    title: "Search",
    description:
      "One field across hubs, chapters, interview prompts, STAR stories, and company lenses—static index, no noise.",
    href: "/search",
    layer: "Find",
  },
  {
    title: "Knowledge Hub",
    description:
      "The library—deep reading across leadership, operations, security, finance, transformation, and interview mastery.",
    href: "/knowledge",
    layer: "Layer 2 · Read",
  },
  {
    title: "Mock interview",
    description:
      "Pressure blocks from the bank—rehearse out loud, not in your head.",
    href: "/mock-interview",
    layer: "Layer 3 · Practice",
  },
  {
    title: "STAR vault",
    description:
      "Your real stories—structured so they land as executive proof, not anecdotes.",
    href: "/star-vault",
    layer: "Layer 3 · Stories",
  },
  {
    title: "Rapid revision",
    description:
      "Compressed rhythm for the night before—speed without losing judgment.",
    href: "/rapid-revision",
    layer: "Layer 3 · Speed",
  },
  {
    title: "Company mode",
    description:
      "Same fundamentals, tailored lenses—walk in knowing how the panel thinks.",
    href: "/company",
    layer: "Layer 3 · Context",
  },
  {
    title: "Executive dashboard",
    description:
      "Progress metrics and weak-area pressure map—at a glance, no noise.",
    href: "/executive-dashboard",
    layer: "Layer 1 · Focus",
  },
  {
    title: "Final 24-hour prep",
    description:
      "War mode: openings, closings, last-round trust questions—only what wins the room.",
    href: "/final-prep",
    layer: "Layer 4 · War",
  },
  {
    title: "Post-interview reflection",
    description:
      "Capture the room while it is vivid—what was asked, what broke, what you will fix next time. Saved locally.",
    href: "/interview-reflection",
    layer: "Personal Layer",
  },
] as const;

export default function CommandCentrePage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <header className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950 px-8 py-12 sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.07),transparent_55%)]"
          aria-hidden
        />
        <div className="relative max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-500/90">
            Executive Command Centre
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Frieze Wandabwa
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-300 sm:text-xl">
            Executive IT leadership operating system
          </p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Enterprise infrastructure · Cybersecurity · Strategy · Boardroom
            leadership
          </p>
          <p className="mt-8 text-xl font-light tracking-wide text-amber-100/95 sm:text-2xl">
            Protect today.{" "}
            <span className="text-slate-400">·</span> Build tomorrow.
          </p>
        </div>
      </header>

      <section>
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Quick access
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          A single surface for reading, rehearsal, and context. Everything else is
          organized behind these doors.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {quickAccess.map((item) => (
            <CommandCentreCard key={item.href} {...item} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Interview bank lives in the sidebar for filtered drill-down →{" "}
          <Link
            href="/interview-bank"
            className="font-medium text-amber-400/90 hover:text-amber-200"
          >
            Open interview bank
          </Link>
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800/90 bg-slate-950/40 px-8 py-10 sm:px-10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          This week&apos;s focus
        </h2>
        <ul className="mt-8 space-y-4">
          {weekFocus.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/30 px-5 py-4 transition hover:border-amber-500/30 hover:bg-slate-900/50"
              >
                <span className="text-base font-medium text-slate-100 group-hover:text-amber-50">
                  {item.label}
                </span>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-amber-500/80 group-hover:text-amber-400">
                  Go →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-slate-600">
          Edit the three focus links in{" "}
          <code className="rounded bg-slate-900 px-1.5 py-0.5 text-[11px] text-slate-400">
            app/page.tsx
          </code>{" "}
          as your priorities shift.
        </p>
      </section>

      <CommandCentreProgress />
    </div>
  );
}
