type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="max-w-3xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/90">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
    </header>
  );
}
