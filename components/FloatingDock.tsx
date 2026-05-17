"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, Home } from "lucide-react";

export function FloatingDock({
  onOpenMenu,
  onOpenPalette,
}: {
  onOpenMenu: () => void;
  onOpenPalette: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // We attach scroll listener to the main content div, not window, 
    // because AppShell overflow is handled internally.
    const scrollContainer = document.getElementById("main-scroll-container");
    
    if (!scrollContainer) return;

    const handleScroll = () => {
      const currentScrollY = scrollContainer.scrollTop;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2"
        >
          <div className="flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/60 px-4 py-3 shadow-2xl backdrop-blur-xl">
            <button
              onClick={onOpenMenu}
              className="flex items-center justify-center rounded-full bg-slate-800/80 p-3 text-slate-300 transition-colors hover:bg-amber-500/20 hover:text-amber-400"
              title="Menu"
            >
              <Menu size={20} />
            </button>
            
            <button
              onClick={onOpenPalette}
              className="flex items-center gap-2 rounded-full bg-slate-800/80 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
              title="Search"
            >
              <Search size={18} />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden rounded bg-slate-950 px-2 py-0.5 font-mono text-[10px] text-slate-400 sm:inline">
                ⌘K
              </kbd>
            </button>

            <Link
              href="/"
              className="flex items-center justify-center rounded-full bg-slate-800/80 p-3 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
              title="Home"
            >
              <Home size={20} />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
