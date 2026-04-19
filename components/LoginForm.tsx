"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { safeInternalPath } from "@/lib/safe-internal-path";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const configError = searchParams.get("error") === "config";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Sign-in failed.");
        return;
      }
      const dest = safeInternalPath(searchParams.get("from"));
      router.push(dest);
      router.refresh();
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-6 rounded-3xl border border-slate-800/90 bg-slate-900/50 p-8 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] backdrop-blur"
    >
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-400/90">
          Executive OS
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50">
          Sign in
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          Private command centre. Sessions last seven days on this device.
        </p>
      </div>

      {configError ? (
        <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100/95">
          Sign-in is not configured. Set{" "}
          <span className="font-mono text-xs">AUTH_SECRET</span> (32+ characters),{" "}
          <span className="font-mono text-xs">AUTH_USERNAME</span>, and{" "}
          <span className="font-mono text-xs">AUTH_PASSWORD</span> in the host environment
          (for example Vercel project settings or a local{" "}
          <span className="font-mono text-xs">.env.local</span> file — never commit it).
        </p>
      ) : null}

      {error ? (
        <p className="rounded-xl border border-rose-500/25 bg-rose-500/10 px-4 py-3 text-sm text-rose-100/95">
          {error}
        </p>
      ) : null}

      <label className="block space-y-2 text-sm font-medium text-slate-200">
        Username
        <input
          name="username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-amber-500/40 transition focus:border-amber-500/50 focus:ring-2"
          required
        />
      </label>

      <label className="block space-y-2 text-sm font-medium text-slate-200">
        Password
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none ring-amber-500/40 transition focus:border-amber-500/50 focus:ring-2"
          required
        />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:from-amber-400 hover:to-amber-300 disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Enter command centre"}
      </button>
    </form>
  );
}
