import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { companyProfiles } from "@/lib/contentData";
import {
  companyInterviewStyle,
  companySuggestedKnowledge,
} from "@/lib/companyPrep";

export function generateStaticParams() {
  return companyProfiles
    .filter((c) => c.slug !== "kemri")
    .map((c) => ({ slug: c.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const company = companyProfiles.find((c) => c.slug === slug);
  if (!company) {
    return { title: "Company" };
  }
  return {
    title: `${company.name} · Company prep`,
    description: `${company.tagline} Context, themes, pressure angles, and rehearsal links.`,
  };
}

export default async function CompanyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const company = companyProfiles.find((c) => c.slug === slug);
  if (!company) notFound();

  const style = companyInterviewStyle[slug] ?? "";
  const suggested = companySuggestedKnowledge[slug] ?? [];

  return (
    <div className="space-y-12 sm:space-y-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Layer 3 · Company mode"
          title={company.name}
          description={company.tagline}
        />
        <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
          <Link
            href="/company"
            className="text-sm font-medium text-amber-400/90 hover:text-amber-200"
          >
            ← All companies
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-slate-400 hover:text-slate-200"
          >
            Command Centre
          </Link>
        </div>
      </div>

      {style ? (
        <section className="rounded-3xl border border-slate-800/90 bg-slate-900/35 p-6 sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/90">
            Interview style for this lens
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
            {style}
          </p>
        </section>
      ) : null}

      <section className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/70 to-slate-950 p-8 sm:p-10">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.07),transparent_50%)]"
          aria-hidden
        />
        <h2 className="relative text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Context
        </h2>
        <p className="relative mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {company.context}
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800/90 bg-slate-950/40 p-6 sm:p-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Rehearsal strip
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/star-vault"
            className="rounded-full border border-slate-700/90 bg-slate-900/50 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-amber-500/40 hover:text-amber-50"
          >
            STAR vault
          </Link>
          <Link
            href="/mock-interview"
            className="rounded-full border border-slate-700/90 bg-slate-900/50 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-amber-500/40 hover:text-amber-50"
          >
            Mock interview
          </Link>
          <Link
            href="/rapid-revision"
            className="rounded-full border border-slate-700/90 bg-slate-900/50 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-amber-500/40 hover:text-amber-50"
          >
            Rapid revision
          </Link>
          <Link
            href="/final-prep"
            className="rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-500/50"
          >
            Final prep
          </Link>
        </div>
      </section>

      {suggested.length ? (
        <section className="rounded-3xl border border-slate-800/90 bg-slate-900/30 p-6 sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Suggested library depth
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Read by function—not cover to cover. One hub tonight, another tomorrow.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {suggested.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-amber-500/40 hover:text-amber-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/35 p-6 sm:p-7">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Themes to study
          </h2>
          <ul className="mt-5 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-slate-300">
            {company.themes.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-amber-500/15 bg-amber-500/[0.05] p-6 sm:p-7">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/90">
            Pressure angles
          </h2>
          <ul className="mt-5 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-amber-50/90">
            {company.pressureAngles.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/35 p-6 sm:p-7">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Questions to expect
          </h2>
          <ul className="mt-5 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-slate-300">
            {company.questionsToExpect.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
