import { SectionCard } from "@/components/SectionCard";
import { PageIntro } from "@/components/PageIntro";
import { questions, starStories, companyProfiles } from "@/lib/contentData";
import { knowledgeSections } from "@/lib/navigation";

export default function DashboardPage() {
  const weakAreas = [
    "Executive narrative under time pressure",
    "Security incidents with legal and comms alignment",
    "FinOps storytelling tied to architecture choices",
  ];

  const focusToday = [
    "Run one mock block: three questions, ninety seconds each, no notes.",
    "Review one STAR story aloud and tighten the result metric.",
    "Skim Rapid Revision for your target company themes.",
  ];

  return (
    <div className="space-y-14">
      <PageIntro
        eyebrow="Dashboard"
        title="Your Executive IT Interview Command Center"
        description="A private, static-first practice environment: deep reading, structured stories, categorized questions, and pressure-ready drills. Ship to Vercel when you are ready—no database required for Version 0."
      />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800/90 bg-slate-900/40 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Progress (manual for now)
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="flex justify-between gap-3">
              <span>Interview bank</span>
              <span className="text-amber-300/90">{questions.length} prompts</span>
            </li>
            <li className="flex justify-between gap-3">
              <span>STAR vault</span>
              <span className="text-amber-300/90">{starStories.length} stories</span>
            </li>
            <li className="flex justify-between gap-3">
              <span>Company modes</span>
              <span className="text-amber-300/90">{companyProfiles.length} profiles</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-800/90 bg-slate-900/40 p-6 lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Today’s focus
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            {focusToday.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          Weak areas to pressure-test
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {weakAreas.map((w) => (
            <li
              key={w}
              className="rounded-xl border border-amber-500/15 bg-amber-500/5 px-4 py-3 text-sm text-amber-50/90"
            >
              {w}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-400">
          Quick access
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <SectionCard
            title="Knowledge Hub"
            description="Leadership, security, infrastructure, finance, AI, and people leadership—deep notes you can extend."
            href="/knowledge"
            meta="Study"
          />
          <SectionCard
            title="STAR Vault"
            description="Structured stories you can adapt, not memorize."
            href="/star-vault"
            meta="Stories"
          />
          <SectionCard
            title="Interview Bank"
            description="Filter by role, difficulty, and department."
            href="/interview-bank"
            meta="Practice"
          />
          <SectionCard
            title="Rapid Revision"
            description="Night-before mode: compressed prompts and rhythms."
            href="/rapid-revision"
            meta="Speed"
          />
          <SectionCard
            title="Mock Interview"
            description="Randomized pressure blocks from the bank."
            href="/mock-interview"
            meta="Pressure"
          />
          <SectionCard
            title="Company Mode"
            description="DHL, World Bank, Safaricom, AWS—same fundamentals, tailored lenses."
            href="/company"
            meta="Context"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-6 sm:p-8">
        <h2 className="text-base font-semibold text-slate-50">Knowledge sections</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">
          Each hub page is markdown on disk under{" "}
          <code className="rounded bg-slate-800/80 px-1.5 py-0.5 text-xs text-amber-100/90">
            /content/knowledge
          </code>
          . Edit files, redeploy, stay in control of your canon.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {knowledgeSections.map((s) => (
            <a
              key={s.id}
              href={`/knowledge/${s.id}`}
              className="rounded-full border border-slate-700/80 px-3 py-1 text-xs font-medium text-slate-200 hover:border-amber-500/50 hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
