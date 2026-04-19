import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Access the Executive Command Centre.",
};

function LoginFallback() {
  return (
    <div className="h-12 w-full max-w-md animate-pulse rounded-2xl bg-slate-800/60" />
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-4 py-16">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.08),transparent_55%)]" />
      <div className="relative z-10 w-full max-w-md">
        <Suspense fallback={<LoginFallback />}>
          <LoginForm />
        </Suspense>
        <p className="mt-8 text-center text-xs text-slate-500">
          On shared devices, use a private window. The session cookie is HttpOnly and
          SameSite=Lax.
        </p>
      </div>
    </div>
  );
}
