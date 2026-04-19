import Link from "next/link";

type CommandCentreCardProps = {
  title: string;
  description: string;
  href: string;
  layer: string;
};

export function CommandCentreCard({
  title,
  description,
  href,
  layer,
}: CommandCentreCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-br from-slate-900/70 via-slate-950/80 to-slate-950 p-8 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] transition hover:border-amber-500/35 hover:from-slate-900/85 hover:shadow-lg hover:shadow-amber-950/20"
    >
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-500/85">
          {layer}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-50 group-hover:text-amber-50">
          {title}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400 group-hover:text-slate-300">
          {description}
        </p>
      </div>
      <span className="mt-8 text-xs font-semibold uppercase tracking-wider text-amber-400/90">
        Enter →
      </span>
    </Link>
  );
}
