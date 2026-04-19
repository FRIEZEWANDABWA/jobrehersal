import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { questions } from "@/lib/contentData";

const InterviewPacksSection = dynamic(
  () => import("@/components/InterviewPacksSection"),
  {
    loading: () => (
      <div className="mt-16 rounded-2xl border border-slate-800/80 bg-slate-900/30 px-6 py-10 text-center text-sm text-slate-500">
        Loading model answer packs…
      </div>
    ),
  },
);
import type { QuestionDifficulty } from "@/lib/types";

export const metadata: Metadata = {
  title: "Interview bank",
  description:
    "Filter prompts by role, difficulty, and department. Speak first; expand elite framing after.",
};

type Search = {
  role?: string;
  difficulty?: string;
  department?: string;
};

const difficulties: QuestionDifficulty[] = ["foundation", "mid", "executive"];

function normalizeDifficulty(value?: string): QuestionDifficulty | "all" {
  if (!value || value === "all") return "all";
  if (difficulties.includes(value as QuestionDifficulty)) {
    return value as QuestionDifficulty;
  }
  return "all";
}

function uniq(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export default async function InterviewBankPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const sp = await searchParams;
  const roleFilter = sp.role ?? "all";
  const diffFilter = normalizeDifficulty(sp.difficulty);
  const deptFilter = sp.department ?? "all";

  const roles = uniq(questions.map((q) => q.role));
  const departments = uniq(questions.map((q) => q.department));

  const filtered = questions.filter((q) => {
    if (roleFilter !== "all" && q.role !== roleFilter) return false;
    if (diffFilter !== "all" && q.difficulty !== diffFilter) return false;
    if (deptFilter !== "all" && q.department !== deptFilter) return false;
    return true;
  });

  return (
    <div className="space-y-10 sm:space-y-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Interview Bank"
          title="Categorized prompts you can filter fast"
          description="Use filters to mimic a panel: depth by difficulty, domain by department, and altitude by role. Answer out loud first; expand Elite framing only after you have spoken—the same reference voice as Mock Interview and Rapid revision. Below, curated model-answer packs stay collapsed until you open them—clean rehearsal, premium layout."
        />
        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
          <Link
            href="/"
            className="text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← Command Centre
          </Link>
          <Link
            href="/mock-interview"
            className="text-sm font-medium text-slate-400 hover:text-slate-200"
          >
            Random mock interview →
          </Link>
          <Link
            href="#model-packs"
            className="text-sm font-medium text-emerald-400/90 hover:text-emerald-200"
          >
            Model answer packs ↓
          </Link>
        </div>
      </div>

      <form
        className="flex flex-col gap-4 rounded-2xl border border-slate-800/90 bg-slate-900/40 p-4 sm:flex-row sm:flex-wrap sm:items-end sm:gap-6"
        action="/interview-bank"
        method="get"
      >
        <label className="flex min-w-[160px] flex-1 flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Role
          <select
            name="role"
            defaultValue={roleFilter}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-medium text-slate-100"
          >
            <option value="all">All roles</option>
            {roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <label className="flex min-w-[160px] flex-1 flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Difficulty
          <select
            name="difficulty"
            defaultValue={diffFilter}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-medium text-slate-100"
          >
            <option value="all">All levels</option>
            <option value="foundation">Foundation</option>
            <option value="mid">Mid</option>
            <option value="executive">Executive</option>
          </select>
        </label>
        <label className="flex min-w-[180px] flex-1 flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Department
          <select
            name="department"
            defaultValue={deptFilter}
            className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-medium text-slate-100"
          >
            <option value="all">All departments</option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <div className="flex gap-2">
          <button
            type="submit"
            className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-white"
          >
            Apply
          </button>
          <Link
            href="/interview-bank"
            className="rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-amber-500/60 hover:text-white"
          >
            Reset
          </Link>
        </div>
      </form>

      <p className="text-sm text-slate-400">
        Showing{" "}
        <span className="font-semibold text-slate-200">{filtered.length}</span> of{" "}
        <span className="font-semibold text-slate-200">{questions.length}</span>{" "}
        questions.
      </p>

      <ul className="space-y-4">
        {filtered.map((q) => (
          <li
            key={q.id}
            className="rounded-2xl border border-slate-800/90 bg-slate-900/40 p-5 sm:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {q.role} · {q.department} · {q.difficulty}
            </p>
            <p className="mt-2 text-base font-medium leading-relaxed text-slate-100">
              {q.prompt}
            </p>
            {q.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {q.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-700/70 px-2 py-0.5 text-[11px] text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
            {q.eliteAnswer || q.hint ? (
              <details className="mt-4 rounded-2xl border border-slate-800/80 bg-slate-950/50">
                <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-amber-200/90">
                  Elite framing (after you have spoken)
                </summary>
                <div className="space-y-4 border-t border-slate-800/80 px-4 py-4 text-sm">
                  {q.eliteAnswer ? (
                    <p className="leading-relaxed text-slate-200">{q.eliteAnswer}</p>
                  ) : null}
                  {q.hint ? (
                    <p className="text-xs leading-relaxed text-slate-500">
                      <span className="font-semibold text-slate-400">Hint: </span>
                      {q.hint}
                    </p>
                  ) : null}
                </div>
              </details>
            ) : null}
          </li>
        ))}
      </ul>

      <InterviewPacksSection />
    </div>
  );
}
