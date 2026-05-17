import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { CommandCentreProgress } from "@/components/CommandCentreProgress";
import { PerformanceRadar } from "@/components/PerformanceRadar";

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
    <div className="space-y-8 lg:space-y-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Layer 1 · Executive dashboard"
          title="Executive dashboard"
          description="At-a-glance progress and pressure angles—same data philosophy as the Command Centre, without replacing the home experience."
        />
        <Link
          href="/"
          className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200 transition-colors"
        >
          ← Command Centre
        </Link>
      </div>

      <CommandCentreProgress />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <section className="rounded-3xl border border-slate-800/90 bg-slate-950/40 p-6 sm:p-8 lg:col-span-2 flex flex-col justify-between backdrop-blur-sm">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Readiness Radar
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Visual map of coverage across critical executive dimensions.
            </p>
          </div>
          <div className="mt-6 flex-1 min-h-[300px]">
            <PerformanceRadar />
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800/90 bg-slate-950/40 p-6 sm:p-8 lg:col-span-3 backdrop-blur-sm">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Weak areas to pressure-test
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Focus rehearsal time on these high-friction topics.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {weakAreas.map((w) => (
              <li
                key={w}
                className="flex items-center rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] px-5 py-5 text-sm leading-relaxed text-amber-50/95 shadow-sm transition hover:border-amber-500/40 hover:bg-amber-500/[0.08]"
              >
                {w}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
