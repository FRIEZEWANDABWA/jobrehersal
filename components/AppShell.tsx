"use client";

import { useCallback, useEffect, useReducer, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { CommandPalette } from "@/components/CommandPalette";
import { NavigationDrawer } from "@/components/NavigationDrawer";
import { FloatingDock } from "@/components/FloatingDock";

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

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [palette, dispatchPalette] = useReducer(paletteReducer, {
    open: false,
    instanceKey: 0,
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openPalette = useCallback(() => dispatchPalette({ type: "open" }), []);
  const togglePalette = useCallback(() => dispatchPalette({ type: "toggle" }), []);
  const closePalette = useCallback(() => dispatchPalette({ type: "close" }), []);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

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

  return (
    <>
      <CommandPalette
        open={palette.open}
        onClose={closePalette}
        instanceKey={palette.instanceKey}
      />
      <NavigationDrawer isOpen={drawerOpen} onClose={closeDrawer} />

      <div className="flex h-dvh max-h-dvh min-h-0 w-full flex-col overflow-hidden bg-slate-950 text-slate-100 relative">
        <main 
          id="main-scroll-container"
          className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 py-12 sm:px-8 lg:px-16 xl:px-24 mx-auto w-full max-w-7xl relative no-scrollbar"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full pb-32" // Padding bottom to avoid content hiding behind the dock
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <FloatingDock onOpenMenu={openDrawer} onOpenPalette={openPalette} />
      </div>
    </>
  );
}
