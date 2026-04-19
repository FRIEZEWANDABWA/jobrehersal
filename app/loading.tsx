export default function Loading() {
  return (
    <div className="mx-auto max-w-2xl space-y-6 py-12">
      <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-800/70" />
      <div className="h-24 animate-pulse rounded-2xl bg-slate-800/50" />
      <div className="h-40 animate-pulse rounded-2xl bg-slate-800/40" />
    </div>
  );
}
