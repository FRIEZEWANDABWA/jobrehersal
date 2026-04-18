import Link from "next/link";

type SectionCardProps = {
  title: string;
  description?: string;
  href: string;
  meta?: string;
};

export function SectionCard({
  title,
  description,
  href,
  meta,
}: SectionCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-slate-800/90 bg-slate-900/40 p-5 shadow-sm transition hover:border-amber-500/40 hover:bg-slate-900/70"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-slate-50 group-hover:text-amber-100">
          {title}
        </h3>
        {meta ? (
          <span className="shrink-0 rounded-full border border-slate-700/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-400">
            {meta}
          </span>
        ) : null}
      </div>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
      ) : null}
      <span className="mt-4 text-xs font-medium text-amber-400/90">
        Open →
      </span>
    </Link>
  );
}
