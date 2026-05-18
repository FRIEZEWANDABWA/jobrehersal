"use client";

import React, { useState, useRef, useEffect, MouseEvent, WheelEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, RotateCcw, X, Move } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
}

export function ZoomableImage({ src, alt }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset zoom settings when closed
  useEffect(() => {
    if (!isOpen) {
      setScale(1);
      setOffset({ x: 0, y: 0 });
    }
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) {
        setOffset({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleReset = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const delta = -e.deltaY * 0.005;
    setScale((prev) => {
      const next = Math.min(Math.max(prev + delta, 1), 5);
      if (next === 1) {
        setOffset({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleMouseDown = (e: MouseEvent<HTMLImageElement>) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    if (!isDragging || scale <= 1) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;

    // Bounds checking to keep image reasonably centered / in viewport
    const container = containerRef.current;
    const img = imgRef.current;
    if (container && img) {
      const maxW = (img.clientWidth * scale - container.clientWidth) / 2;
      const maxH = (img.clientHeight * scale - container.clientHeight) / 2;
      const boundedX = Math.max(Math.min(newX, Math.max(maxW, 0)), -Math.max(maxW, 0));
      const boundedY = Math.max(Math.min(newY, Math.max(maxH, 0)), -Math.max(maxH, 0));
      setOffset({ x: boundedX, y: boundedY });
    } else {
      setOffset({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      handleReset();
    } else {
      setScale(2);
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Inline Image Trigger */}
      <div 
        onClick={() => setIsOpen(true)}
        className="group relative my-8 cursor-zoom-in overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 p-2 transition-all hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
        />
        {/* Subtle magnifying glass overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-full border border-amber-500/40 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-amber-400 shadow-xl shadow-black/40">
            <ZoomIn className="h-4 w-4" />
            <span>Click to Expand & Zoom</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Overlay Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-slate-950/98 backdrop-blur-md select-none"
          >
            {/* Top Toolbar */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-850 px-6 bg-slate-900/80 backdrop-blur">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-100">{alt}</span>
                <span className="text-[10px] text-slate-400">
                  {scale > 1 ? "Drag to Pan • Double-click to Reset" : "Use mousewheel or controls to zoom • Double-click to zoom"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Control Panel Buttons */}
                <div className="flex items-center rounded-lg border border-slate-800 bg-slate-950/50 p-1">
                  <button
                    onClick={handleZoomOut}
                    disabled={scale <= 1}
                    className="rounded p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100 disabled:opacity-40"
                    title="Zoom Out"
                  >
                    <ZoomOut className="h-4 w-4" />
                  </button>
                  <span className="px-3 text-xs font-mono text-slate-300">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={handleZoomIn}
                    disabled={scale >= 5}
                    className="rounded p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100 disabled:opacity-40"
                    title="Zoom In"
                  >
                    <ZoomIn className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleReset}
                    className="ml-1 border-l border-slate-850 pl-2 rounded p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-slate-800 bg-slate-950/50 p-2 text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                  title="Close (Esc)"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Main Interactive Work Area */}
            <div
              ref={containerRef}
              onWheel={handleWheel}
              className="relative flex-1 overflow-hidden flex items-center justify-center p-4 cursor-grab active:cursor-grabbing"
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {scale > 1 && (
                <div className="absolute left-6 top-6 z-10 flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-[10px] font-medium text-slate-300 border border-slate-800">
                  <Move className="h-3 w-3" />
                  <span>Pan Mode Active</span>
                </div>
              )}

              <motion.div
                style={{
                  x: offset.x,
                  y: offset.y,
                  scale: scale,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="max-w-full max-h-full flex items-center justify-center"
              >
                <img
                  ref={imgRef}
                  src={src}
                  alt={alt}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onDoubleClick={handleDoubleClick}
                  className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain rounded shadow-2xl pointer-events-auto select-none"
                  style={{
                    willChange: "transform",
                    imageRendering: "auto"
                  }}
                  draggable={false}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
