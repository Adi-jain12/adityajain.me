"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const LINE_COUNT = 20;
const LOADER_DURATION_MS = 1600;

function lerpColor(a: string, b: string, t: number): string {
  const parse = (hex: string) => {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff];
  };
  const [ar, ag, ab] = parse(a);
  const [br, bg, bb] = parse(b);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `#${((r << 16) | (g << 8) | bl).toString(16).padStart(6, "0")}`;
}

function getBarColor(index: number, total: number): string {
  const t = index / (total - 1);
  if (t < 0.5) return lerpColor("#d45f3e", "#f58361", t * 2);
  return lerpColor("#f58361", "#f9a88e", (t - 0.5) * 2);
}

export function Loader() {
  const [visible, setVisible] = useState(true);

  const bars = useMemo(
    () =>
      Array.from({ length: LINE_COUNT }, (_, i) => ({
        delay: Math.random() * 1.2,
        color: getBarColor(i, LINE_COUNT),
      })),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-100 flex pointer-events-none">
          {bars.map((bar, i) => (
            <motion.div
              key={i}
              className="flex-1"
              style={{ backgroundColor: bar.color }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ delay: bar.delay, duration: 0.4 }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}
