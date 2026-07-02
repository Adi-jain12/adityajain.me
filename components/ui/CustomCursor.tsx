"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type TrailSquare = {
  key: number;
  x: number;
  y: number;
};

const FADE_DURATION_MS = 700;
const MAX_SQUARES = 30;

function getSquareSize(width: number) {
  if (width < 480) return 10;
  if (width < 768) return 12;
  return 14;
}

function snapToGrid(value: number, size: number) {
  return Math.floor(value / size) * size;
}

export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [squareSize, setSquareSize] = useState(12);
  const [squares, setSquares] = useState<TrailSquare[]>([]);

  const keyRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const expiryRef = useRef<Map<number, number>>(new Map());

  useEffect(() => {
    if (prefersReducedMotion) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    setEnabled(true);
    setSquareSize(getSquareSize(window.innerWidth));

    const onResize = () => {
      setSquareSize(getSquareSize(window.innerWidth));
    };

    const onMove = (event: MouseEvent) => {
      const size = getSquareSize(window.innerWidth);
      const x = snapToGrid(event.clientX, size);
      const y = snapToGrid(event.clientY, size);

      setSquares((prev) => {
        if (prev.length > 0) {
          const last = prev[prev.length - 1];
          if (last.x === x && last.y === y) return prev;
        }

        const key = keyRef.current++;
        expiryRef.current.set(key, Date.now() + FADE_DURATION_MS);

        const next = [...prev, { key, x, y }];
        return next.slice(-MAX_SQUARES);
      });
    };

    const clean = () => {
      const now = Date.now();
      let changed = false;

      for (const [key, expiresAt] of expiryRef.current) {
        if (now >= expiresAt) {
          expiryRef.current.delete(key);
          changed = true;
        }
      }

      if (changed) {
        setSquares((prev) => {
          const next = prev.filter((square) => expiryRef.current.has(square.key));
          return next.length === prev.length ? prev : next;
        });
      }

      rafRef.current = requestAnimationFrame(clean);
    };

    rafRef.current = requestAnimationFrame(clean);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    const onPointerChange = () => {
      if (!finePointer.matches) setEnabled(false);
    };

    finePointer.addEventListener("change", onPointerChange);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      finePointer.removeEventListener("change", onPointerChange);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      expiryRef.current.clear();
    };
  }, [prefersReducedMotion]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-9999 overflow-hidden"
    >
      <AnimatePresence>
        {squares.map((square) => (
          <motion.div
            key={square.key}
            className="absolute bg-accent [image-rendering:pixelated]"
            style={{
              left: square.x,
              top: square.y,
              width: squareSize,
              height: squareSize,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: FADE_DURATION_MS / 1000,
              ease: "linear",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
