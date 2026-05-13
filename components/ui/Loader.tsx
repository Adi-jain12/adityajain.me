"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLoadingPercentage } from "@/lib/hooks/useLoadingPercentage";

const TICK_INTERVAL = 125;
const DRAW_STEP_MS = 18;
const GOL_DELAY_MS = 600;
const LOADER_DURATION_MS = 6500;
const PERCENTAGE_DURATION_MS = 4200;
const PERCENTAGE_START_DELAY_MS = 1000;

type Grid = number[][];

function getCellSize(width: number): number {
  if (width < 480) return 12;
  if (width < 768) return 16;
  return 20;
}

export function Loader() {
  const [visible, setVisible] = useState(true);
  const [grid, setGrid] = useState<Grid>([]);
  const [cellSize, setCellSize] = useState(20);
  const percent = useLoadingPercentage(
    PERCENTAGE_DURATION_MS,
    PERCENTAGE_START_DELAY_MS
  );
  const golIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const size = getCellSize(w);
    const cols = Math.floor(w / size);
    const rows = Math.floor(h / size);
    setCellSize(size);

    setGrid(makeEmptyGrid(rows, cols));

    const sequence = getNameSequence(w, rows, cols);
    let step = 0;
    let golTimeoutId: ReturnType<typeof setTimeout> | null = null;

    const drawInterval = setInterval(() => {
      if (step < sequence.length) {
        const [r, c] = sequence[step];
        setGrid((prev) => {
          if (!prev.length) return prev;
          const next = prev.map((row) => [...row]);
          if (next[r] && next[r][c] !== undefined) next[r][c] = 1;
          return next;
        });
        step++;
      } else {
        clearInterval(drawInterval);
        golTimeoutId = setTimeout(() => {
          golIntervalRef.current = setInterval(() => {
            setGrid((prev) => nextGen(prev));
          }, TICK_INTERVAL);
        }, GOL_DELAY_MS);
      }
    }, DRAW_STEP_MS);

    const exitId = setTimeout(() => setVisible(false), LOADER_DURATION_MS);

    return () => {
      clearInterval(drawInterval);
      if (golTimeoutId) clearTimeout(golTimeoutId);
      if (golIntervalRef.current) clearInterval(golIntervalRef.current);
      clearTimeout(exitId);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-100 bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div
            className="grid h-full w-full"
            style={{
              gridTemplateColumns: `repeat(${grid[0]?.length ?? 0}, ${cellSize}px)`,
              gridTemplateRows: `repeat(${grid.length}, ${cellSize}px)`,
            }}
          >
            {grid.flatMap((row, r) =>
              row.map((cell, c) => (
                <div
                  key={`${r}-${c}`}
                  style={{
                    backgroundColor: cell ? "var(--color-accent)" : "transparent",
                  }}
                />
              ))
            )}
          </div>
          <div
            className="pointer-events-none absolute right-4 bottom-4 text-xs tracking-widest text-text sm:right-8 sm:bottom-8 sm:text-sm"
            style={{
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {`[ ${String(percent).padStart(3, " ")} % ]`}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function makeEmptyGrid(rows: number, cols: number): Grid {
  return Array.from({ length: rows }, () => Array<number>(cols).fill(0));
}

function nextGen(grid: Grid): Grid {
  if (!grid.length) return grid;
  const rows = grid.length;
  const cols = grid[0].length;
  const next = makeEmptyGrid(rows, cols);

  const dirs: [number, number][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let live = 0;
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          live += grid[nr][nc];
        }
      }
      if (grid[r][c] === 1 && (live === 2 || live === 3)) next[r][c] = 1;
      else if (grid[r][c] === 0 && live === 3) next[r][c] = 1;
    }
  }
  return next;
}

const LETTERS: Record<string, number[][]> = {
  A: [
    [0, 1, 0],
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
  D: [
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 1, 0],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  T: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  Y: [
    [1, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  J: [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 1],
    [1, 0, 1],
    [0, 1, 0],
  ],
  N: [
    [1, 0, 1],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
};

function getNameSequence(
  width: number,
  rows: number,
  cols: number
): [number, number][] {
  const sequence: [number, number][] = [];

  const lines: string[][] = [
    ["A", "D", "I", "T", "Y", "A"],
    ["J", "A", "I", "N"],
  ];

  const letterHeight = 5;
  const letterWidth = 3;
  const letterGap = 1;
  const lineGap = 1;

  const baseRow = 5;
  const baseCol = width < 480 ? Math.max(2, Math.floor(width / 140)) : 5;

  lines.forEach((line, lineIndex) => {
    let colOffset = baseCol;
    for (const char of line) {
      const pattern = LETTERS[char];
      if (!pattern) {
        colOffset += letterWidth + letterGap;
        continue;
      }
      for (let r = 0; r < pattern.length; r++) {
        for (let c = 0; c < pattern[r].length; c++) {
          if (pattern[r][c] === 1) {
            const row = baseRow + lineIndex * (letterHeight + lineGap) + r;
            const col = colOffset + c;
            if (row < rows && col < cols) sequence.push([row, col]);
          }
        }
      }
      colOffset += letterWidth + letterGap;
    }
  });

  return sequence;
}
