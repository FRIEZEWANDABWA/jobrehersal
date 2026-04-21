import Link from "next/link";
import {
  conversationTopics,
  essentialScripts,
  lightJokes,
  scenarioPlaybook,
  transitionPhrases,
  type PlaybookEntry,
  type PlaybookGroup,
  type ScriptEntry,
} from "@/lib/networkingPlaybookData";
import { PageIntro } from "@/components/PageIntro";

function Chevron() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-180"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function BodyText({ text }: { text: string }) {
  const chunks = text.trim().split(/\n\n+/);
  return (
    <div className="space-y-3 text-sm leading-relaxed text-slate-300">
      {chunks.map((para, i) => (
        <p key={i} className="whitespace-pre-wrap">
          {para}
        </p>
      ))}
    </div>
  );
}

function PlaybookDetails({ entry }: { entry: PlaybookEntry }) {
  return (
    <details
      id={entry.id}
      className="group scroll-mt-24 rounded-2xl border border-slate-800/90 bg-slate-950/35 transition-[border-color,box-shadow] open:border-amber-500/25 open:bg-slate-900/45 open:shadow-[0_0_0_1px_rgba(245,158,11,0.06)]"
    >
      <summary className="flex cursor-pointer list-none items-start gap-3 rounded-2xl px-4 py-4 marker:hidden sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold tracking-tight text-slate-100">
            {entry.title}
          </p>
          {entry.subtitle ? (
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              {entry.subtitle}
            </p>
          ) : null}
        </div>
        <Chevron />
      </summary>
      <div className="border-t border-slate-800/80 px-4 pb-5 pt-4 sm:px-5">
        <BodyText text={entry.body} />
        {entry.callout ? (
          <p className="mt-4 rounded-xl border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-xs font-medium text-amber-200/90">
            {entry.callout}
          </p>
        ) : null}
      </div>
    </details>
  );
}

function ScriptDetails({ script }: { script: ScriptEntry }) {
  return (
    <details
      id={script.id}
      className="group scroll-mt-24 rounded-2xl border border-slate-800/90 bg-slate-950/35 transition-[border-color,box-shadow] open:border-emerald-500/20 open:bg-slate-900/45"
    >
      <summary className="flex cursor-pointer list-none items-start gap-3 rounded-2xl px-4 py-4 marker:hidden sm:px-5 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold tracking-tight text-slate-100">
            {script.title}
          </p>
          {script.subtitle ? (
            <p className="mt-1 text-xs text-slate-500">{script.subtitle}</p>
          ) : null}
        </div>
        <Chevron />
      </summary>
      <div className="border-t border-slate-800/80 px-4 pb-5 pt-4 sm:px-5">
        <BodyText text={script.body} />
      </div>
    </details>
  );
}

function PersonaSection({ group }: { group: PlaybookGroup }) {
  return (
    <section
      id={group.id}
      className="scroll-mt-24 rounded-3xl border border-slate-800/80 bg-slate-950/25 p-5 sm:p-7"
    >
      <header className="max-w-3xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-500/85">
          Scenario playbook
        </p>
        <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          {group.label}
        </h2>
        {group.description ? (
          <p className="mt-2 text-sm text-slate-500">{group.description}</p>
        ) : null}
      </header>
      <div className="mt-6 space-y-3">
        {group.entries.map((e) => (
          <PlaybookDetails key={e.id} entry={e} />
        ))}
      </div>
    </section>
  );
}

const jumpLinks = [
  { href: "#playbooks", label: "Scenario playbooks" },
  { href: "#scripts", label: "Essential scripts" },
  { href: "#toolkit", label: "Conversation toolkit" },
] as const;

export function NetworkingPlaybookView() {
  return (
    <div className="space-y-12 sm:space-y-14">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <PageIntro
          eyebrow="Layer 3 · Presence"
          title="Networking playbook"
          description="Two libraries in one place: full scenario scripts by persona, then tight ready-to-say scripts. Expand any row to read—keep the surface clean, the depth one click away."
        />
        <nav
          aria-label="On this page"
          className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end"
        >
          {jumpLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-slate-700/90 bg-slate-900/40 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-amber-500/40 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      <section id="playbooks" className="scroll-mt-24 space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Part 1 · Scenario script system
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Long-form answers tuned to the room—executive events, recruiter
            calls, LinkedIn, and client conversations. Default is collapsed so
            you scan titles fast, then open only what you need.
          </p>
        </div>
        <div className="space-y-8">
          {scenarioPlaybook.map((g) => (
            <PersonaSection key={g.id} group={g} />
          ))}
        </div>
      </section>

      <section id="scripts" className="scroll-mt-24 space-y-6">
        <div className="max-w-3xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Part 2 · Essential scripts
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Shorter versions you can memorize—same credibility, less airtime.
            Green accent distinguishes this band from the scenario library
            above.
          </p>
        </div>
        <div className="space-y-3">
          {essentialScripts.map((s) => (
            <ScriptDetails key={s.id} script={s} />
          ))}
        </div>
      </section>

      <section id="toolkit" className="scroll-mt-24 space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Part 3 · Conversation toolkit
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Questions to keep dialogue moving, transitions into your value, and
            light professional humour when the room needs oxygen.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/25 p-5 sm:p-7">
          <h3 className="text-lg font-semibold text-slate-50">
            Conversation topics
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Open a topic to reveal prompts you can drop naturally.
          </p>
          <div className="mt-5 space-y-3">
            {conversationTopics.map((t) => (
              <details
                key={t.id}
                id={t.id}
                className="group scroll-mt-24 rounded-2xl border border-slate-800/90 bg-slate-950/35 open:border-slate-600/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-4 py-3.5 marker:hidden sm:px-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-sm font-semibold text-slate-100">
                    {t.title}
                  </span>
                  <Chevron />
                </summary>
                <ul className="space-y-2 border-t border-slate-800/80 px-4 py-4 text-sm text-slate-300 sm:px-5">
                  {t.questions.map((q, i) => (
                    <li
                      key={i}
                      className="flex gap-2 rounded-lg bg-slate-900/40 px-3 py-2 leading-relaxed"
                    >
                      <span className="mt-0.5 font-mono text-[11px] text-amber-500/80">
                        {i + 1}.
                      </span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/25 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-slate-50">
              Transitions — keep talking
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {transitionPhrases.keepTalking.map((line, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-slate-800/60 bg-slate-900/30 px-3 py-2 leading-relaxed"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/25 p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-slate-50">
              Transitions — into your value
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {transitionPhrases.shiftToValue.map((line, i) => (
                <li
                  key={i}
                  className="rounded-xl border border-slate-800/60 bg-slate-900/30 px-3 py-2 leading-relaxed"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/25 p-5 sm:p-7">
          <h3 className="text-lg font-semibold text-slate-50">
            Light professional jokes
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Use sparingly—after rapport exists, not as an opener.
          </p>
          <div className="mt-5 space-y-3">
            {lightJokes.map((j) => (
              <details
                key={j.id}
                className="group rounded-2xl border border-slate-800/90 bg-slate-950/35 open:border-slate-600/80"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-4 py-3 marker:hidden sm:px-5 [&::-webkit-details-marker]:hidden">
                  <span className="text-sm font-semibold text-slate-100">
                    {j.title}
                  </span>
                  <Chevron />
                </summary>
                <p className="border-t border-slate-800/80 px-4 py-3 text-sm italic leading-relaxed text-slate-300 sm:px-5">
                  {j.line}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
