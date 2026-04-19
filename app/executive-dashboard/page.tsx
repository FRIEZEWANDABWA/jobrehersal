import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { CommandCentreProgress } from "@/components/CommandCentreProgress";

export const metadata: Metadata = {
  title: "Executive dashboard",
  description:
    "Progress and weak-area map at a glance—Layer 1 focus without duplicating the Command Centre home.",
};

const weakAreas = [
  "Executive narrative under time pressure",
  "Security incidents with legal and comms alignment",
  "FinOps storytelling tied to architecture choices",
];

export default function ExecutiveDashboardPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Layer 1 · Executive dashboard"
          title="Executive dashboard"
          description="At-a-glance progress and pressure angles—same data philosophy as the Command Centre, without replacing the home experience."
        />
        <Link
          href="/"
          className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200"
        >
          ← Command Centre
        </Link>
      </div>

      <CommandCentreProgress />

      <section className="rounded-3xl border border-slate-800/90 bg-slate-950/40 p-8 sm:p-10">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Weak areas to pressure-test
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {weakAreas.map((w) => (
            <li
              key={w}
              className="rounded-2xl border border-amber-500/15 bg-amber-500/[0.06] px-4 py-4 text-sm leading-relaxed text-amber-50/90"
            >
              {w}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
