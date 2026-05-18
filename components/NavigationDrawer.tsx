"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav } from "@/lib/navigation";
import { X } from "lucide-react";

export function NavigationDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col overflow-y-auto no-scrollbar border-r border-slate-800/80 bg-slate-950/95 shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-slate-800/60">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400/90">
                  Executive OS
                </p>
                <p className="mt-1 text-base font-semibold leading-snug text-slate-50">
                  Command Centre
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-1">
              {mainNav.map((item) => {
                if ("isFolder" in item && item.isFolder) {
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        onClick={() => setQnaFolderOpen(!qnaFolderOpen)}
                        className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/50 hover:text-white"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-amber-500/90 font-mono text-xs">📁</span>
                          {item.label}
                        </span>
                        <span className="text-xs text-slate-500">{qnaFolderOpen ? "▲" : "▼"}</span>
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
                                onClick={onClose}
                                className={`block rounded-lg px-3 py-1.5 text-xs transition-colors ${
                                  pathname === sub.href
                                    ? "bg-amber-500/10 text-amber-400 font-bold border-l-2 border-amber-500 pl-2"
                                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
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
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-amber-500/10 text-amber-400"
                          : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return null;
              })}
            </nav>
            
            <div className="p-6 border-t border-slate-800/60 text-xs text-slate-500">
              <p>Frieze Wandabwa</p>
              <p className="mt-1">IT Leadership</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
