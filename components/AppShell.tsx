"use client";

import Link from "next/link";
import { useCallback, useEffect, useReducer, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { CommandPalette } from "@/components/CommandPalette";
import { NavigationDrawer } from "@/components/NavigationDrawer";
import { FloatingDock } from "@/components/FloatingDock";
import { mainNav } from "@/lib/navigation";

type PaletteState = { open: boolean; instanceKey: number };

function paletteReducer(
  state: PaletteState,
  action: { type: "open" | "close" | "toggle" },
): PaletteState {
  switch (action.type) {
    case "open":
      return { open: true, instanceKey: state.instanceKey + 1 };
    case "close":
      return { ...state, open: false };
    case "toggle":
      if (state.open) return { ...state, open: false };
      return { open: true, instanceKey: state.instanceKey + 1 };
    default:
      return state;
  }
}

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (username.trim() === "Frieze" && password === "Hakuna123") {
        localStorage.setItem("executive_os_session", "authorized_frieze_v1");
        onLogin();
      } else {
        setError("Invalid authorization credentials.");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="relative flex min-h-dvh items-center justify-center bg-slate-950 px-4 py-12 overflow-hidden">
      {/* Background radial ambient light */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06),transparent_65%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-10 w-full max-w-md space-y-8 rounded-3xl border border-slate-800/80 bg-slate-900/30 p-8 backdrop-blur-xl shadow-2xl"
      >
        <div className="text-center space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500/90">
            Secure Portal Verification
          </p>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-100">
            Executive Command Centre
          </h2>
          <p className="text-xs text-slate-400">
            Frieze Wandabwa · Private IT Leadership Portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-rose-500/20 bg-rose-500/10 p-3.5 text-center text-xs font-semibold text-rose-400"
            >
              ⚠️ {error}
            </motion.div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/40 transition"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Secure Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500/40 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-4 rounded-xl transition text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center gap-1.5">
                <svg className="animate-spin h-3 w-3 text-slate-950" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Verifying Credentials...
              </span>
            ) : (
              "Authorize Portal Access"
            )}
          </button>
        </form>

        <div className="pt-2 text-center">
          <p className="text-[10px] text-slate-500 font-mono">
            Protected by static AES validation layer v1.0
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [palette, dispatchPalette] = useReducer(paletteReducer, {
    open: false,
    instanceKey: 0,
  });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [qnaFolderOpen, setQnaFolderOpen] = useState(() => {
    return (
      pathname === "/company" ||
      pathname === "/interview-bank" ||
      pathname === "/mock-interview" ||
      pathname === "/rapid-revision" ||
      pathname === "/final-prep" ||
      pathname === "/interview-reflection"
    );
  });

  // Scroll Progress Hooks
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const openPalette = useCallback(() => dispatchPalette({ type: "open" }), []);
  const togglePalette = useCallback(() => dispatchPalette({ type: "toggle" }), []);
  const closePalette = useCallback(() => dispatchPalette({ type: "close" }), []);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    // Validate session in localStorage
    const savedSession = localStorage.getItem("executive_os_session");
    if (savedSession === "authorized_frieze_v1") {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        togglePalette();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [togglePalette]);

  // Context-aware logic: Hide sidebar and show immersive dock when reading documents.
  const isReadingMode =
    pathname === "/budget" ||
    pathname === "/data-protection" ||
    pathname === "/modern-frameworks" ||
    pathname === "/visual-syllabus" ||
    pathname === "/star-vault" ||
    pathname === "/rapid-revision" ||
    (pathname.startsWith("/knowledge/") && pathname.split("/").length > 3);
  // If authorization status is still being fetched from localStorage, show a blank loader to prevent flashes
  if (isAuthorized === null) {
    return (
      <div className="min-h-dvh w-full bg-slate-950 flex items-center justify-center">
        <svg className="animate-spin h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    );
  }

  // If the user is not authorized, prompt them to login
  if (!isAuthorized) {
    return <LoginScreen onLogin={() => setIsAuthorized(true)} />;
  }

  return (
    <>
      <CommandPalette
        open={palette.open}
        onClose={closePalette}
        instanceKey={palette.instanceKey}
      />
      {isReadingMode && <NavigationDrawer isOpen={drawerOpen} onClose={closeDrawer} />}

      {/* Dynamic Scroll Progress Bar */}
      {isReadingMode && (
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 origin-left z-50"
        />
      )}

      <div className={`flex h-dvh max-h-dvh min-h-0 w-full overflow-hidden bg-slate-950 text-slate-100 relative ${isReadingMode ? 'flex-col' : 'flex-1'}`}>
        
        {/* Permanent Sidebar (Only visible when NOT in reading mode) */}
        {!isReadingMode && (
          <aside className="hidden h-full min-h-0 w-64 shrink-0 flex-col overflow-y-auto overscroll-y-contain border-r border-slate-800/80 bg-slate-950/95 px-4 py-8 lg:flex">
            <div className="px-2">
              <Link href="/" className="block">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400/90">
                  Executive OS
                </p>
                <p className="mt-1 text-lg font-semibold leading-snug text-slate-50">
                  Command Centre
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  Frieze Wandabwa · IT leadership
                </p>
              </Link>
            </div>
            <nav className="mt-10 flex-1 space-y-1" aria-label="Primary">
              {mainNav.map((item) => {
                if ("isFolder" in item && item.isFolder) {
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        onClick={() => setQnaFolderOpen(!qnaFolderOpen)}
                        className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/80 hover:text-white"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-amber-500/90 font-mono text-xs">📁</span>
                          {item.label}
                        </span>
                        <span className="text-[10px] text-slate-500 font-semibold">{qnaFolderOpen ? "▲" : "▼"}</span>
                      </button>
                      <AnimatePresence initial={false}>
                        {qnaFolderOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-4 border-l border-slate-800/60 space-y-1 ml-3"
                          >
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`block rounded-lg px-3 py-1.5 text-xs transition ${
                                  pathname === sub.href
                                    ? "bg-amber-500/10 text-amber-400 font-bold border-l-2 border-amber-500 pl-2"
                                    : "text-slate-400 hover:bg-slate-850 hover:text-white"
                                }`}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if ("href" in item && item.href) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-lg px-3 py-2 text-sm transition ${
                        pathname === item.href
                          ? "bg-slate-800/80 text-white font-semibold"
                          : "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return null;
              })}
            </nav>
            <div className="mt-8 space-y-3 border-t border-slate-800/80 pt-6">
              <button
                type="button"
                onClick={openPalette}
                className="w-full rounded-lg border border-slate-700/90 px-3 py-2 text-left text-xs font-semibold text-slate-300 transition hover:border-amber-500/45 hover:text-white"
              >
                Quick jump <span className="text-slate-500">⌘K</span>
              </button>

              {/* Sign out link */}
              <button
                onClick={() => {
                  localStorage.removeItem("executive_os_session");
                  setIsAuthorized(false);
                }}
                className="w-full text-left px-3 py-1.5 text-rose-400/85 hover:text-rose-300 text-xs font-medium tracking-wide transition"
              >
                🔒 Lock Portal
              </button>
            </div>
          </aside>
        )}

        <div className={`flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden relative`}>
          {/* Mobile Header (Only visible when NOT in reading mode) */}
          {!isReadingMode && (
            <header className="shrink-0 border-b border-slate-800/80 bg-slate-950/95 px-4 py-4 backdrop-blur lg:hidden z-20 relative">
              <div className="flex items-start justify-between gap-3">
                <Link href="/" className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-50">
                    Command Centre
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    Executive IT leadership OS
                  </p>
                </Link>
                <div className="flex shrink-0 items-center gap-3">
                  <button
                    type="button"
                    onClick={openPalette}
                    className="rounded-lg border border-slate-700/90 px-2.5 py-1.5 text-[11px] font-semibold text-slate-300 hover:border-amber-500/45 hover:text-white"
                  >
                    ⌘K
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("executive_os_session");
                      setIsAuthorized(false);
                    }}
                    className="text-xs text-rose-400 border border-rose-500/20 bg-rose-500/5 px-2.5 py-1.5 rounded-lg font-bold"
                  >
                    Lock
                  </button>
                </div>
              </div>
              <nav
                className="mt-3 flex gap-2 overflow-x-auto pb-1 text-xs no-scrollbar"
                aria-label="Primary mobile"
              >
                 {mainNav.map((item) => {
                   if ("href" in item && item.href) {
                     return (
                       <Link
                         key={item.href}
                         href={item.href}
                         className="shrink-0 rounded-full border border-slate-700/80 px-3 py-1 text-slate-200 hover:border-amber-500/50 hover:text-white"
                       >
                         {item.label}
                       </Link>
                     );
                   }
                   return null;
                 })}
              </nav>
            </header>
          )}

          <main 
            id="main-scroll-container"
            className={`min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-8 sm:px-8 lg:px-12 relative no-scrollbar ${isReadingMode ? 'max-w-7xl mx-auto w-full xl:px-24' : ''}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`h-full ${isReadingMode ? 'pb-32' : ''}`}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Floating Dock (Only visible in reading mode) */}
          {isReadingMode && (
            <FloatingDock onOpenMenu={openDrawer} onOpenPalette={openPalette} />
          )}

          {/* Standard Footer (Only visible when NOT in reading mode) */}
          {!isReadingMode && (
            <footer className="shrink-0 border-t border-slate-800/80 bg-slate-950/95 px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-12 z-20 relative flex items-center justify-between">
              <span>Static-first content · use <span className="font-mono text-slate-400">⌘K</span> to jump anywhere fast.</span>
              <button
                onClick={() => {
                  localStorage.removeItem("executive_os_session");
                  setIsAuthorized(false);
                }}
                className="text-rose-400 hover:text-rose-300 font-semibold tracking-wide transition text-[10px]"
              >
                🔒 LOCK PORTAL
              </button>
            </footer>
          )}
        </div>
      </div>
    </>
  );
}
