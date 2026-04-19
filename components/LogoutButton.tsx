"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function logout() {
    setBusy(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={() => void logout()}
      disabled={busy}
      className={`rounded-lg border border-slate-700/90 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400 transition hover:border-rose-500/40 hover:text-rose-100 disabled:opacity-50 ${className}`}
    >
      {busy ? "Signing out…" : "Sign out"}
    </button>
  );
}
